import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Shield, Users, Zap, Star, Sparkles } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "CareBridge ||  Health Plans",
  description: "Health plans for individuals and families",
};

const HealthPlansPage = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "৳499",
      period: "/month",
      description: "Perfect for individuals seeking essential healthcare coverage",
      features: [
        "2 Doctor Consultations per month",
        "Basic Health Checkup",
        "Digital Prescription Management",
        "Health Records Access",
        "Email & Chat Support",
        "Medicine Discounts (5%)",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: Shield,
    },
    {
      name: "Family Plan",
      price: "৳1,499",
      period: "/month",
      description: "Complete healthcare coverage for your entire family",
      features: [
        "Unlimited Doctor Consultations",
        "Annual Health Checkup for 4 members",
        "Priority Appointment Booking",
        "Specialist Consultations",
        "24/7 Phone & Video Support",
        "Medicine Discounts (20%)",
        "Diagnostic Test Discounts (15%)",
        "Dental & Vision Care",
      ],
      popular: true,
      color: "from-purple-600 to-pink-600",
      icon: Users,
    },
    {
      name: "Premium Plan",
      price: "৳2,999",
      period: "/month",
      description: "Elite healthcare experience with premium benefits",
      features: [
        "Unlimited Consultations (All specialties)",
        "Comprehensive Annual Checkup",
        "Home Visit Services (4 per year)",
        "Emergency Consultation 24/7",
        "Dedicated Health Manager",
        "Medicine Discounts (30%)",
        "Free Diagnostic Tests",
        "Mental Health Support",
        "Annual Dental Cleaning",
        "Fitness & Nutrition Coaching",
      ],
      popular: false,
      color: "from-amber-500 to-orange-600",
      icon: Crown,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden  text-black">
        <div className="absolute inset-0 bg-center opacity-10" />
        <div className="container relative mx-auto px-4 pt-13 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white shadow border-0 px-4 py-1.5 text-black">
              <Sparkles className="h-4 w-4 mr-2" />
              Trusted by 50,000+ Patients
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Healthcare Plans <span className="text-blue-600">That Care</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Choose comprehensive healthcare coverage designed for every life stage. From individual wellness to family protection, we have you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-20 relative flex items-center justify-center gap-4 flex-wrap">
        {[
          { value: "500+", label: "Expert Doctors" },
          { value: "24/7", label: "Support Available" },
          { value: "95%", label: "Patient Satisfaction" },
          { value: "50+", label: "Specialties" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white shadow-xl border-gray-100 text-center h-fit p-3 w-[10rem] lg:w-[12rem] flex flex-col items-center justify-center rounded-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Plan Comparison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Choose Your Perfect <span className="text-blue-600">Health Plan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Select from our range of flexible plans. All include access to our premium healthcare network.</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className={`group relative transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl p-0 cursor-pointer ${
                    plan.popular ? "border-purple-500 shadow-xl" : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 border-0 font-bold text-sm">
                        <Star className="h-4 w-4 mr-2 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {/* Plan Header */}
                  <CardHeader className={`pt-8 pb-6 bg-gradient-to-br ${plan.color} text-white rounded-t-lg`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                        <CardDescription className="text-white/90">{plan.description}</CardDescription>
                      </div>
                      <div className="bg-white/20 p-3 rounded-full">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold">{plan.price}</span>
                        <span className="text-xl ml-2 opacity-90">{plan.period}</span>
                      </div>
                      <p className="text-sm opacity-90 mt-2">Billed annually (save 15%)</p>
                    </div>
                  </CardHeader>

                  {/* Plan Features */}
                  <CardContent className="pt-4">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        What's included:
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="bg-green-100 p-1 rounded-full mt-0.5">
                              <Check className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-gray-50 rounded-lg p-4 mt-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Cancel anytime</span>
                        <span className="font-semibold text-green-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-gray-600">Free trial available</span>
                        <span className="font-semibold text-green-600">✓</span>
                      </div>
                    </div>
                  </CardContent>

                  {/* CTA Button */}
                  <CardFooter className="pb-8 flex flex-col">
                    <Link href="/signup" className="w-full">
                      <Button
                        className={`w-full py-6 text-lg font-semibold ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                        }`}
                        size="lg"
                      >
                        {plan.popular ? "Get Started Now" : "Choose Plan"}
                        <Zap className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <p className="text-center text-sm text-gray-500 mt-3">No credit card required for trial</p>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 cursor-pointer">
            {[
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                question: "Is there a free trial?",
                answer: "All plans come with a 14-day free trial. No credit card required to start.",
              },
              {
                question: "What if I need to cancel?",
                answer: "You can cancel anytime. We'll process refunds for unused months.",
              },
              {
                question: "Are family members covered?",
                answer: "Family and Premium plans cover up to 4 family members under one subscription.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="border-gray-200 hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPlansPage;
