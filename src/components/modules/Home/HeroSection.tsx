import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar1, Search, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <header className="relative" role="banner" aria-label="AI Doctor Finder Hero Section">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #1447e6 100%)",
        }}
      />

      <section className="flex flex-col relative lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-10 md:pt-20 gap-10" aria-labelledby="hero-heading">
        {/* Left Section */}
        <div className="flex-1 space-y-6 relative">
          <div className="flex items-center gap-2 bg-white text-blue-600 px-3 py-1 rounded-full w-fit font-medium text-sm" aria-label="AI powered healthcare badge">
            <Sparkles size={16} aria-hidden="true" />
            <span>AI-Powered Healthcare</span>
          </div>

          <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Smarter Healthcare for You <br /> — Guided by <span className="text-blue-600">AI.</span>
          </h1>

          <p className="text-gray-600 max-w-md leading-relaxed">
            Our advanced <strong>AI doctor finder</strong> analyzes your symptoms, medical history, and preferences to connect you with the best-fit doctors in seconds. Experience
            faster, smarter, and more personalized healthcare today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4" role="group" aria-label="Hero actions">
            <Button className="bg-blue-600 hover:bg-primary text-white rounded-xl px-6 py-5 hover:scale-105 duration-300 transition-all" aria-label="Find your doctor with AI">
              <Search aria-hidden="true" /> Find Your Doctor
            </Button>

            <Button
              variant="outline"
              className="rounded-xl px-6 py-5 border-primary text-primary hover:text-primary hover:scale-105 duration-300 transition-all"
              aria-label="Book appointment with a doctor"
            >
              <Calendar1 aria-hidden="true" /> Book Appointment
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-6 text-gray-700" aria-label="Healthcare statistics">
            <div>
              <p className="text-2xl font-semibold">50K+</p>
              <p className="text-sm">Patients Served</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">1000+</p>
              <p className="text-sm">Expert Doctors</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">4.9 ⭐</p>
              <p className="text-sm">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right Section (AI Finder Form) */}
        <Card className="flex-1 max-w-md shadow-xl rounded-2xl border border-gray-100 relative" aria-labelledby="ai-finder-title">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 id="ai-finder-title" className="text-xl font-semibold text-gray-900">
                AI Doctor Finder
              </h2>
              <Sparkles className="text-blue-500" aria-hidden="true" />
            </div>

            <form aria-label="AI doctor recommendation form">
              <div className="space-y-2">
                <label htmlFor="symptoms" className="text-gray-600 text-sm font-medium">
                  What are your symptoms?
                </label>
                <Input id="symptoms" name="symptoms" placeholder="e.g. headache, fever, cough" className="rounded-lg" aria-describedby="symptom-help" />
                <p id="symptom-help" className="sr-only">
                  Enter your symptoms to get AI recommendations.
                </p>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-lg mt-4 hover:scale-105 duration-300 transition-all" aria-label="Get AI recommendations">
                Get AI Recommendations
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-2">⚡ Powered by advanced AI algorithms for accurate doctor matching.</p>
          </CardContent>
        </Card>
      </section>
    </header>
  );
}
