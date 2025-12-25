import { Button } from "@/components/ui/button";
import { Calendar1, Search, Sparkles, Shield, Star } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden min-h-[85vh] flex items-center justify-center" role="banner" aria-label="AI Doctor Finder Hero Section">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

        {/* Animated Gradient Mesh */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 85%, rgba(59, 130, 246, 0.12) 0%, transparent 55%),
              radial-gradient(circle at 85% 15%, rgba(139, 92, 246, 0.12) 0%, transparent 55%),
              radial-gradient(circle at 35% 65%, rgba(6, 182, 212, 0.08) 0%, transparent 45%)
            `,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-violet-200/10 to-purple-200/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]" />

        {/* Small floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + i * 6}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Pulsing Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 border border-blue-100/40 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-12 border border-indigo-100/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-24 border border-cyan-100/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
      </div>

      {/* Subtle Glowing Spots */}
      <div className="absolute top-32 left-20 w-2 h-2 bg-blue-300/40 rounded-full shadow-[0_0_15px_8px] shadow-blue-300/20 animate-pulse" />
      <div className="absolute bottom-32 right-20 w-1.5 h-1.5 bg-indigo-300/30 rounded-full shadow-[0_0_10px_5px] shadow-indigo-300/15 animate-pulse delay-500" />
      <div className="absolute top-48 right-32 w-1 h-1 bg-cyan-300/20 rounded-full shadow-[0_0_8px_3px] shadow-cyan-300/10 animate-pulse delay-300" />

      {/* Soft Scan Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/5 to-transparent animate-[scan_8s_linear_infinite]" />
      </div>

      {/* Subtle Diagonal Lines */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(59, 130, 246, 0.1) 20px,
            rgba(59, 130, 246, 0.1) 40px
          )`,
        }}
      />

      {/* Fade-out gradient at the bottom (Blinded effect) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/90 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-50/50 to-transparent z-19" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-50/30 to-transparent z-18" />

      {/* Main Content - Your existing code stays exactly the same */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 pt-5 gap-8 z-30 relative" aria-labelledby="hero-heading">
        {/* AI Badge - Enhanced */}
        <div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-5 rounded-full w-fit font-medium text-sm border border-blue-100 shadow-sm"
          aria-label="AI powered healthcare badge"
        >
          <div className="p-1.5 bg-blue-100 rounded-full">
            <Sparkles size={16} className="text-blue-600" aria-hidden="true" />
          </div>
          <span className="font-semibold">AI-Powered Healthcare</span>
          <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping" />
        </div>

        {/* Main Heading */}
        <div>
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
            Smarter Healthcare
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-3">Guided by AI.</span>
          </h1>

          <div className="inline-flex items-center justify-center gap-2 text-md  text-gray-500 mt-2">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span>AI matching active</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl leading-relaxed text-sm md:text-xl">
          Our advanced <strong className="text-blue-700 font-semibold">AI doctor finder</strong> analyzes your symptoms, medical history, and preferences to connect you with the
          best-fit doctors in seconds.
        </p>

        {/* CTA Buttons - Centered */}
        <div className="flex justify-center gap-6" role="group" aria-label="Hero actions">
          <Link href="/consultation">
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl px-5 md:px-8 py-5 md:py-7 hover:scale-105 hover:shadow-xl duration-300 transition-all shadow-lg text-sm md:text-lg font-semibold cursor-pointer md:w-full w-40 overflow-hidden"
              aria-label="Find your doctor with AI"
            >
              <Search className="mr-3 hidden md:flex" size={22} aria-hidden="true" />
              <span>Find Your Doctor</span>
            </Button>
          </Link>

          <Link href="/consultation">
            <Button
              variant="outline"
              className="rounded-xl px-5 md:px-8 py-5 md:py-7 border-3 border-blue-200 text-blue-700 hover:text-blue-800 hover:border-blue-300 hover:scale-105 hover:shadow-xl duration-300 transition-all bg-white/90 backdrop-blur-sm text-sm md:text-lg font-semibold cursor-pointer md:w-full w-40 overflow-hidden"
              aria-label="Book appointment with a doctor"
            >
              <Calendar1 className="mr-3 hidden md:flex" size={22} aria-hidden="true" />
              <span>Book Appointment</span>
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-8 pt-8 text-gray-700" aria-label="Healthcare statistics">
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">50K+</p>
            <p className="text-sm text-gray-600 font-medium">Patients Served</p>
          </div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block" />
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">1000+</p>
            <p className="text-sm text-gray-600 font-medium">Expert Doctors</p>
          </div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block" />
          <div className="text-center md:text-left">
            <p className="flex justify-center items-center gap-1 text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              4.9 <Star size={24} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
            </p>
            <p className="text-sm text-gray-600 font-medium">Average Rating </p>
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="pt-8">
          <p className="text-gray-500 text-[11px] md:text-sm flex items-center gap-2">
            <Shield size={16} className="text-green-500" aria-hidden="true" />
            Trusted by healthcare professionals nationwide
            <span className="text-green-500 font-semibold ml-1">✓</span>
          </p>
        </div>
      </section>
    </header>
  );
}
