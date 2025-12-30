import { Search, ClipboardList, CalendarCheck, ShieldCheck, FileText, Video, CreditCard, HeartPulse } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    title: "Search Doctor",
    description: "Find the right specialist with our advanced search and filters",
  },
  {
    icon: ClipboardList,
    title: "Check Profile",
    description: "Review credentials, ratings, and patient feedback",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Appointment",
    description: "Book convenient time slots with instant confirmation",
  },
  {
    icon: ShieldCheck,
    title: "Secure Consultation",
    description: "HIPAA-compliant, private sessions with verified doctors",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Get e-prescriptions delivered directly to your pharmacy",
  },
  {
    icon: Video,
    title: "Video Consultation",
    description: "Connect instantly from anywhere via secure video call",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple secure payment options with insurance support",
  },
  {
    icon: HeartPulse,
    title: "Health Tracking",
    description: "Ongoing care plans and progress monitoring",
  },
];

const bgGradients = [
  "from-blue-50 to-blue-100/50",
  "from-emerald-50 to-emerald-100/50",
  "from-violet-50 to-violet-100/50",
  "from-amber-50 to-amber-100/50",
  "from-cyan-50 to-cyan-100/50",
  "from-rose-50 to-rose-100/50",
  "from-indigo-50 to-indigo-100/50",
  "from-teal-50 to-teal-100/50",
];

const iconBgColors = ["bg-blue-100", "bg-emerald-100", "bg-violet-100", "bg-amber-100", "bg-cyan-100", "bg-rose-100", "bg-indigo-100", "bg-teal-100"];

const iconColors = ["text-blue-600", "text-emerald-600", "text-violet-600", "text-amber-600", "text-cyan-600", "text-rose-600", "text-indigo-600", "text-teal-600"];

const StepCard = ({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) => {
  const stepNumber = index + 1;

  return (
    <Card className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          {/* Icon with better visual weight */}
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-xl ${iconBgColors[index % 8]} ${
              iconColors[index % 8]
            } transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md`}
          >
            <Icon size={28} strokeWidth={1.5} />
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-lg md:text-xl">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Progress indicator line */}
        {stepNumber < 8 && <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-200 to-transparent hidden xl:block"></div>}
      </CardContent>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-transparent via-white/5 to-white/10 pointer-events-none"></div>
    </Card>
  );
};

const Steps = () => {
  return (
    <section aria-labelledby="process-heading" className="py-16 bg-gradient-to-b from-white to-blue-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with better visual hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-100">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">How It Works</span>
          </div>
          <h2 id="process-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple Steps to
            <span className="text-blue-600"> Better Health</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-xl font-medium text-center">A seamless journey from finding the right specialist to ongoing care—all in one platform</p>
        </div>

        {/* Grid with better spacing */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-r from-blue-400/5 to-emerald-400/5 blur-3xl"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative" data-step={index + 1}>
                <StepCard {...step} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
