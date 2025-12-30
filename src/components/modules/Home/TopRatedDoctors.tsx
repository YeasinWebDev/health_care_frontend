import { getDoctors } from "@/services/admin/doctorManagement";
import DoctorGrid from "../Consultation/DoctorGrid";
import { Award, Star, ChevronRight } from "lucide-react";

async function TopRatedDoctors() {
  const allDoctors = await getDoctors();
  const topRatedDoctors = allDoctors?.data?.data?.slice(0, 8) || []; // Limit to top 8

  return (
    <section className="py-14 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 ">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Excellence in Healthcare
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Top-Rated</span>{" "}
            Doctors
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-xl font-medium text-center">
            Board-certified specialists recognized for clinical excellence, exceptional patient care, and outstanding patient satisfaction ratings across all medical specialties.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">99%</div>
              <div className="text-gray-500 text-sm mt-1">Patient Satisfaction</div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">15+</div>
              <div className="text-gray-500 text-sm mt-1">Years Avg. Experience</div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">4.0</div>
              <div className="flex items-center justify-center gap-0 mt-1">
                {[...Array(1)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-500 text-sm ml-2">Avg. Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Grid Section */}
        <div className="mb-12">
          <DoctorGrid doctors={topRatedDoctors} />
        </div>
      </div>
    </section>
  );
}

export default TopRatedDoctors;
