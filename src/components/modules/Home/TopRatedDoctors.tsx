import Image from "next/image";
import docimg from "../../../assets/images/docImg.png";
import { Award, Calendar1, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDoctors } from "@/services/admin/doctorManagement";
import DoctorGrid from "../Consultation/DoctorGrid";

async function TopRatedDoctors() {
  const allDoctors = await getDoctors();
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
      <div>
        <DoctorGrid doctors={allDoctors?.data?.data} />
      </div>
    </div>
  );
}

export default TopRatedDoctors;
