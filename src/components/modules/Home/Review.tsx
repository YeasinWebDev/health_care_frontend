"use client"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ReviewImg from "../../../assets/images/review.png";
import docImg from "../../../assets/images/docImg.png";

function Review() {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Heart Surgery Patient",
      text: "The AI system helped me find Dr. Johnson who was perfect for my condition. The entire process was seamless, and the care I received was exceptional.",
      image: docImg,
      rating: 4.7,
    },
    {
      name: "Robert Thompson",
      role: "Chronic Back Pain Patient",
      text: "I was struggling to find the right specialist for years. PH Health Care's AI matched me with Dr. Wilson in minutes. Life-changing experience!",
      image: docImg,
      rating: 4.5,
    },
    {
      name: "Lisa Anderson",
      role: "Pediatric Care Parent",
      text: "Dr. Rodriguez has been amazing with my children. The platform made it so easy to find a pediatrician who truly understands our family's needs.",
      image: docImg,
      rating: 4.3,
    },
    {
      name: "David Johnson",
      role: "Dental Patient",
      text: "The service was excellent, and I found an amazing dentist who made me feel comfortable. Highly recommended!",
      image: docImg,
      rating: 5,
    },
  ];

  return (
    <section
      id="patient-reviews"
      className="py-20 bg-background"
      aria-labelledby="reviews-heading"
    >

      <div className="text-center flex flex-col items-center justify-center mb-12">
        <h2
          id="reviews-heading"
          className="text-4xl font-bold text-gray-900 leading-snug"
        >
          What Our Patients Say About PH Health Care
        </h2>
        <p className="text-gray-600 max-w-2xl mt-3 text-base">
          Read genuine patient reviews and testimonials about their experience
          finding trusted doctors through our healthcare platform.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <article
                itemScope
                itemType="https://schema.org/Review"
                className="h-full"
              >
                <Card className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6 flex flex-col justify-between h-full min-h-[320px]">
                    <Image
                      src={ReviewImg}
                      alt="quotation mark icon"
                      width={28}
                      height={28}
                      className="mb-5"
                    />

                    {/* Rating */}
                    <div
                      className="flex gap-1 mb-4"
                      itemProp="reviewRating"
                      itemScope
                      itemType="https://schema.org/Rating"
                    >
                      {Array.from({ length: 5 }).map((_, index) => {
                        const full = index + 1 <= Math.floor(t.rating);
                        const half =
                          !full && index < t.rating && t.rating % 1 !== 0;

                        return (
                          <div key={index} className="relative w-4 h-4">
                            <Star className="w-4 h-4 text-gray-300" />
                            {full && (
                              <Star className="absolute top-0 left-0 w-4 h-4 fill-yellow-400 text-yellow-400" />
                            )}
                            {half && (
                              <div className="absolute top-0 left-0 w-2 h-4 overflow-hidden">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                      <meta itemProp="ratingValue" content={t.rating + ""} />
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 mb-6 flex-1" itemProp="reviewBody">
                      {t.text}
                    </p>

                    {/* Reviewer Info */}
                    <footer className="flex items-center gap-3 mt-auto">
                      <Image
                        src={t.image}
                        alt={`Photo of ${t.name}`}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                        itemProp="image"
                      />
                      <div>
                        <p
                          className="font-semibold text-sm"
                          itemProp="author"
                          itemScope
                          itemType="https://schema.org/Person"
                        >
                          <span itemProp="name">{t.name}</span>
                        </p>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </footer>
                  </CardContent>
                </Card>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Review;
