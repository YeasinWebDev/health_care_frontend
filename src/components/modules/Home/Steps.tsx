import { Search, ClipboardList, CalendarCheck, ShieldCheck, FileText, Video, CreditCard, HeartPulse } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { icon: Search, title: "Search Doctor", description: "Find your doctor easily with a minimum of effort." },
  { icon: ClipboardList, title: "Check Doctor Profile", description: "Get to know your doctor better." },
  { icon: CalendarCheck, title: "Schedule Appointment", description: "Choose the time and date that suits you." },
  { icon: ShieldCheck, title: "Get Your Solution", description: "Our doctors are here to help you." },
  { icon: FileText, title: "Electronic Prescription", description: "Get your prescription instantly." },
  { icon: Video, title: "Instant Video Consultation", description: "Consult with your doctor from anywhere." },
  { icon: CreditCard, title: "Easy Payment Options", description: "Pay with ease using various methods." },
  { icon: HeartPulse, title: "Health Recovery", description: "Start your journey to better health." },
];

const bgGradients = [
  "from-blue-100 to-blue-50",
  "from-pink-100 to-pink-50",
  "from-green-100 to-green-50",
  "from-yellow-100 to-yellow-50",
  "from-rose-100 to-rose-50",
  "from-indigo-100 to-indigo-50",
  "from-orange-100 to-orange-50",
  "from-teal-100 to-teal-50",
];

const iconColors = ["text-blue-500", "text-pink-500", "text-green-500", "text-yellow-500", "text-rose-500", "text-indigo-500", "text-orange-500", "text-teal-500"];

const StepCard = ({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) => {
  return (
    <Card className={`relative overflow-hidden rounded-2xl cursor-pointer bg-linear-to-br ${bgGradients[index % 8]} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <CardContent className="p-5">
        <div className="flex items-start space-x-4">
          {/* Icon */}
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md ${iconColors[index % 8]} transition-transform duration-300 group-hover:scale-105`}
          >
            <Icon size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-snug">{title}</h3>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>

      {/* Soft hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 pointer-events-none rounded-2xl"></div>
    </Card>
  );
};

const Steps = () => {
  return (
    <section className="py-10 bg-linear-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center flex items-center justify-center flex-col">
          <h2 className="text-4xl font-bold text-gray-900">Easy Steps to Get Your Solution</h2>
          <p className="text-gray-500 max-w-md mt-3 text-base">We provide advanced technologies and high-quality surgery facilities right here.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
