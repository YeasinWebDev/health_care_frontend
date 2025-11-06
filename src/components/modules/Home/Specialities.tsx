import { HeartPulse, Brain, Bone, Baby } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const specialists = [
  {
    name: "Cardiology",
    icon: HeartPulse,
    gradient: "from-red-500 to-pink-500",
  },
  {
    name: "Neurology",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Orthopedic",
    icon: Bone,
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    name: "Pediatric",
    icon: Baby,
    gradient: "from-green-500 to-emerald-500",
  },
];

const Specialities = () => {
  return (
    <section className="py-24 mt-10" aria-labelledby="specialists-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between items-center mb-12">
            <h2 id="specialists-heading" className="text-4xl font-bold text-gray-900 text-center">
              Our <span className="text-blue-600">Specialists</span>
            </h2>
            <p className="text-gray-500 max-w-md mt-2 text-base text-center">
              Access expert medical care across all major specialties — guided by AI for better outcomes. Find top-rated doctors in Cardiology, Neurology, Orthopedic, and Pediatric
              care.
            </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist) => {
            const Icon = specialist.icon;
            return (
              <article
                key={specialist.name}
                className="group relative overflow-hidden border border-gray-100 text-center shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white rounded-2xl cursor-pointer"
              >
                <CardContent className="p-8">
                  <div
                    className={`
                        w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6
                        bg-linear-to-r ${specialist.gradient} 
                        text-white shadow-lg
                        group-hover:scale-110 transition-transform duration-300
                    `}
                  >
                    <Icon size={36} aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{specialist.name}</h3>

                  <p className="text-sm text-gray-500 mt-2">{`Connect with expert ${specialist.name.toLowerCase()} doctors who provide personalized and AI-guided care.`}</p>

                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </CardContent>
              </article>
            );
          })}
        </div>

        <Link href="/specialists" className="text-blue-600 font-semibold hover:underline sm:mt-0 transition-colors flex items-center justify-center pt-10">
          View All
        </Link>
      </div>
    </section>
  );
};

export default Specialities;
