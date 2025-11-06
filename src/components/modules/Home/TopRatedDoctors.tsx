import Image from "next/image";
import docimg from "../../../assets/images/docImg.png";
import { Award, Calendar1, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

function TopRatedDoctors() {
  const doctors = [
    {
      name: "Dr. Cameron Williamson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 23,
      image: docimg,
    },
    {
      name: "Dr. Leslie Alexander",
      specialty: "Neurologist",
      rating: 4.8,
      reviews: 45,
      image: docimg,
    },
    {
      name: "Dr. Robert Fox",
      specialty: "Orthopedic",
      rating: 4.9,
      reviews: 32,
      image: docimg,
    },
    {
      name: "Dr. Robert Fox",
      specialty: "Orthopedic",
      rating: 4.9,
      reviews: 32,
      image: docimg,
    },
  ];
  return (
    <div className="flex items-center flex-col justify-center gap-4 my-10">
      <div className="flex flex-col justify-between items-center mb-12">
        <h2 id="specialists-heading" className="text-4xl font-bold text-gray-900 text-center">
          Meet Our Top<span className="text-blue-600"> Doctors</span>
        </h2>
        <p className="text-gray-500 max-w-md mt-2 text-base text-center">Leading specialists committed to your health and wellbeing</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {doctors.map((doctor, i) => (
          <div key={i} className="border rounded-md relative hover:-translate-y-1 hover:shadow-xl duration-300 transition-all cursor-pointer">
            <Image src={doctor.image} alt={doctor.name} width={100} height={100} className="w-full md:w-[320px] h-[255px] object-cover rounded-t-md shadow" />
            <p className="text-sm flex items-center gap-1 bg-white absolute top-5 right-5 px-3 py-2 rounded-full font-semibold">
              <Star size={18} color="#EAB308" />
              {doctor.rating}
            </p>
            <div className="space-y-3 p-3">
              <h3 className="font-bold text-xl">{doctor.name}</h3>
              <p className="font-medium text-sm text-primary">{doctor.specialty}</p>
              <p className="flex items-center gap-1 font-medium">
                <Award /> 15 years of experience
              </p>
              <p className="flex items-center gap-1 font-medium">
                <Star /> {doctor.reviews} patient reviews
              </p>
              <Button className="rounded-md px-6 py-5 w-full mt-4" aria-label="Book appointment with a doctor">
                <Calendar1 aria-hidden="true" /> Book Appointment
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRatedDoctors;
