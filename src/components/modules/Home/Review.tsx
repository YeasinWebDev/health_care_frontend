"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import docImg from "../../../assets/images/docImg.png";

function Review() {
  const swiperRef = useRef<any>(null);
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Heart Surgery Patient",
      text: "The AI system helped me find Dr. Johnson who was perfect for my condition. The entire process was seamless, and the care I received was exceptional.",
      image: docImg,
      rating: 4.7,
      treatment: "Cardiac Surgery",
      verified: true,
    },
    {
      name: "Robert Thompson",
      role: "Chronic Back Pain Patient",
      text: "I was struggling to find the right specialist for years. CareBridge's AI matched me with Dr. Wilson in minutes. Life-changing experience!",
      image: docImg,
      rating: 4.5,
      treatment: "Spinal Treatment",
      verified: true,
    },
    {
      name: "Lisa Anderson",
      role: "Pediatric Care Parent",
      text: "Dr. Rodriguez has been amazing with my children. The platform made it so easy to find a pediatrician who truly understands our family's needs.",
      image: docImg,
      rating: 4.3,
      treatment: "Pediatric Care",
      verified: true,
    },
    {
      name: "David Johnson",
      role: "Dental Patient",
      text: "The service was excellent, and I found an amazing dentist who made me feel comfortable. Highly recommended!",
      image: docImg,
      rating: 5,
      treatment: "Dental Implants",
      verified: true,
    },
    {
      name: "Sarah Williams",
      role: "Cancer Survivor",
      text: "CareBridge connected me with an oncologist who understood my journey. The support system was incredible throughout my treatment.",
      image: docImg,
      rating: 4.8,
      treatment: "Oncology",
      verified: true,
    },
    {
      name: "Michael Chen",
      role: "Orthopedic Patient",
      text: "After my knee surgery, finding the right physiotherapist was crucial. CareBridge's recommendation was spot on!",
      image: docImg,
      rating: 4.6,
      treatment: "Orthopedics",
      verified: true,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => {
          const full = index + 1 <= Math.floor(rating);
          const half = !full && index < rating && rating % 1 !== 0;
          const empty = index >= Math.ceil(rating);

          return (
            <div key={index} className="relative w-5 h-5">
              <Star className={`w-5 h-5 ${empty ? "text-gray-200" : "text-yellow-400 fill-yellow-400"}`} />
              {half && (
                <div className="absolute top-0 left-0 w-2.5 h-5 overflow-hidden">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
              )}
            </div>
          );
        })}
        <span className="ml-2 text-sm font-semibold text-gray-700">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <section id="patient-reviews" className="relative py-14 bg-gradient-to-b from-white via-blue-50/20 to-white cursor-pointer" aria-labelledby="reviews-heading">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Patient Stories
          </div>

          <h1 id="reviews-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">10,000+</span>
            Patients
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-xl font-medium text-center">
            Real stories from patients who found exceptional care through our platform. Their experiences speak volumes about the quality of healthcare we connect you with.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Patient Satisfaction" },
            { value: "10K+", label: "Successful Matches" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-gray-300",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600",
            }}
            navigation={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={32}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            loop={true}
            className="pb-10 h-[32rem]"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <article itemScope itemType="https://schema.org/Review" className="h-[28rem]">
                  <Card className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-3xl"></div>

                    {/* Favorite button */}
                    <button
                      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Save testimonial"
                    >
                      <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
                    </button>

                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Quote icon */}
                      <div className="mb-6">
                        <Quote className="w-10 h-10 text-blue-100 fill-blue-50" />
                      </div>

                      {/* Rating and Treatment */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-3">
                          {renderStars(t.rating)}
                          {t.verified && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">✓ Verified</span>}
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-600 mb-8  text-lg leading-relaxed italic !h-40" itemProp="reviewBody">
                        "{t.text}"
                      </p>

                      {/* Reviewer Info */}
                      <footer className="flex items-center gap-4 pt-6 border-t border-gray-100 absolute bottom-5">
                        <div className="relative">
                          <Image
                            src={t.image}
                            alt={`Photo of ${t.name}`}
                            width={56}
                            height={56}
                            className="rounded-full object-cover border-2 border-white shadow-sm"
                            itemProp="image"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                            <Star className="w-2.5 h-2.5 text-white fill-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">{t.name}</span>
                          </p>
                          <p className="text-gray-500 text-sm mt-1">{t.role}</p>
                        </div>
                      </footer>
                    </CardContent>
                  </Card>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Review;
