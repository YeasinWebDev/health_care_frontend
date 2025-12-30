import { HeartPulse, Brain, Bone, Baby, ChevronRight, Stethoscope, Microscope, Eye, Shield } from "lucide-react";
import { CardContent } from "@/components/ui/card";

const specialists = [
  {
    name: "Cardiology",
    icon: HeartPulse,
    description: "Heart health specialists for comprehensive cardiovascular care",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-50 to-pink-50",
    doctorCount: "250+ Doctors",
    tag: "Heart Health",
  },
  {
    name: "Neurology",
    icon: Brain,
    description: "Expert care for brain and nervous system disorders",
    gradient: "from-blue-600 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    doctorCount: "180+ Doctors",
    tag: "Brain & Nerves",
  },
  {
    name: "Orthopedic",
    icon: Bone,
    description: "Bone, joint, and musculoskeletal system specialists",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
    doctorCount: "320+ Doctors",
    tag: "Bones & Joints",
  },
  {
    name: "Pediatric",
    icon: Baby,
    description: "Comprehensive healthcare for children and infants",
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-50 to-green-50",
    doctorCount: "190+ Doctors",
    tag: "Child Care",
  },
  {
    name: "General Medicine",
    icon: Stethoscope,
    description: "Primary care physicians for overall health management",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    doctorCount: "450+ Doctors",
    tag: "Primary Care",
  },
  {
    name: "Dermatology",
    icon: Shield,
    description: "Skin, hair, and nail care specialists",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    doctorCount: "160+ Doctors",
    tag: "Skin Care",
  },
  {
    name: "Ophthalmology",
    icon: Eye,
    description: "Eye care and vision health specialists",
    gradient: "from-sky-500 to-blue-500",
    bgGradient: "from-sky-50 to-blue-50",
    doctorCount: "140+ Doctors",
    tag: "Eye Care",
  },
  {
    name: "Pathology",
    icon: Microscope,
    description: "Diagnostic and laboratory medicine experts",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    doctorCount: "110+ Doctors",
    tag: "Diagnostics",
  },
];

const Specialities = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-white to-blue-50/30 w-full" aria-labelledby="specialists-heading">
      <div className="mx-auto px-4 max-w-[1500px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-100">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Medical Specialties</span>
          </div>
          
          <h2 id="specialists-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Expert Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">All Specialties</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-xl font-medium">
            Access top-rated specialists across all major medical fields. Our AI-powered matching ensures you connect with the right doctor for your specific needs.
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-6 mb-12">
          {specialists.slice(0, 4).map((specialist) => {
            const Icon = specialist.icon;
            return (
              <div 
                // href={`/specialists/${specialist.name.toLowerCase()}`} 
                key={specialist.name}
                className="group"
              >
                <article
                  className="h-full relative overflow-hidden bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${specialist.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-2xl mx-auto flex items-center justify-center bg-gradient-to-br ${specialist.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <Icon size={36} aria-hidden="true" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm border">
                        {specialist.tag}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors mb-3">
                      {specialist.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {specialist.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-semibold text-gray-700">
                        {specialist.doctorCount}
                      </span>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span className="text-sm font-medium">Explore</span>
                        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-500 transition-all duration-300" />
                  </CardContent>
                </article>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div>
          <div className="flex flex-col sm:flex-row md:items-center justify-center gap-5 md:gap-8 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Shield size={20} className="text-green-600" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Verified Doctors</p>
                <p className="text-sm">All doctors are board-certified</p>
              </div>
            </div>
            
            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Brain size={20} className="text-blue-600" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">AI-Matched</p>
                <p className="text-sm">Personalized doctor recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialities;