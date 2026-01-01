import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Bone, Brain, FileText, Heart, Microscope, Shield, Clock, Download, Home, Sparkles,  TrendingUp} from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "CareBridge || Diagnostics",
  description: "Health plans for individuals and families",
}

const DiagnosticsPage = () => {
  const services = [
    {
      icon: Activity,
      title: "Blood Tests",
      description: "Complete blood count, lipid profile, diabetes screening, and comprehensive panels",
      tests: "50+ tests available",
      color: "from-red-500 to-pink-500",
      popular: true,
    },
    {
      icon: Heart,
      title: "Cardiac Tests",
      description: "ECG, Echo, stress tests, cardiac markers, and advanced cardiac diagnostics",
      tests: "15+ tests available",
      color: "from-rose-500 to-red-500",
      popular: false,
    },
    {
      icon: Brain,
      title: "Imaging",
      description: "X-Ray, MRI, CT Scan, Ultrasound, and specialized imaging services",
      tests: "20+ scans available",
      color: "from-blue-500 to-indigo-500",
      popular: false,
    },
    {
      icon: Microscope,
      title: "Pathology",
      description: "Urine, stool, culture tests, biopsies, and advanced pathology services",
      tests: "40+ tests available",
      color: "from-green-500 to-emerald-500",
      popular: true,
    },
    {
      icon: Bone,
      title: "Radiology",
      description: "Bone density, mammography, fluoroscopy, and specialized radiology",
      tests: "10+ procedures",
      color: "from-amber-500 to-orange-500",
      popular: false,
    },
    {
      icon: FileText,
      title: "Health Packages",
      description: "Comprehensive health checkup packages for all age groups",
      tests: "8+ packages",
      color: "from-purple-500 to-violet-500",
      popular: true,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "NABL Accredited Labs",
      description: "Partner labs certified by national and international accreditation bodies",
      color: "text-blue-600",
    },
    {
      icon: Home,
      title: "Home Sample Collection",
      description: "Trained phlebotomists collect samples from your home at preferred time",
      color: "text-green-600",
    },
    {
      icon: Download,
      title: "Digital Reports",
      description: "Access reports online with AI-powered insights and trend analysis",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Get reports within 24-48 hours with priority options available",
      color: "text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-black">
        <div className="absolute inset-0  bg-center opacity-10" />
        <div className="container relative mx-auto px-4 pt-13 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white shadow border-0 px-4 py-1.5 text-black">
              <Sparkles className="h-4 w-4 mr-2" />
              Launching Soon • February 2027
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Precision <span className="text-blue-600">Diagnostics</span> at Your Doorstep
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Book 1000+ diagnostic tests online with home sample collection. Get accurate results and digital reports from NABL accredited labs.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-20 relative flex items-center justify-center gap-4 flex-wrap">
          {[
            { value: "1000+", label: "Tests Available", icon: Activity },
            { value: "50+", label: "NABL Labs", icon: Shield },
            { value: "24h", label: "Report Time", icon: Clock },
            { value: "98%", label: "Accuracy Rate", icon: TrendingUp },
          ].map((stat, idx) => {
            return (
               <div key={idx} className="bg-white shadow-xl border-gray-100 text-center h-fit p-3 w-[10rem] lg:w-[12rem] flex flex-col items-center justify-center rounded-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </div>
            );
          })}
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Comprehensive <span className="text-blue-600">Diagnostic Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From routine checkups to advanced diagnostics, we cover all your testing needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group border-2 hover:border-blue-300 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  service.popular ? "border-blue-200 shadow-lg" : "border-gray-100"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3">Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {service.tests}
                  </Badge>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group-hover:border-blue-300">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Why Choose <span className="text-blue-600">Our Services?</span>
              </h2>
              <p className="text-lg text-gray-600">Experience healthcare diagnostics reimagined for the digital age</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${feature.color} bg-opacity-10 flex items-center justify-center shrink-0`}>
                          <Icon className={`h-6 w-6 ${feature.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Simple <span className="text-blue-600">3-Step Process</span>
            </h2>
            <p className="text-lg text-gray-600">Get tested without stepping out of your home</p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              {
                step: "1",
                title: "Book Test",
                description: "Select test or package, choose date & time",
                icon: FileText,
                color: "from-blue-400 to-cyan-400",
              },
              {
                step: "2",
                title: "Home Collection",
                description: "Trained professional collects sample at your home",
                icon: Home,
                color: "from-green-400 to-emerald-400",
              },
              {
                step: "3",
                title: "Digital Report",
                description: "Get report online with expert insights",
                icon: Download,
                color: "from-purple-400 to-pink-400",
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx}>
                  <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 w-[20rem] p-0">
                    <CardContent className="p-8 text-center">
                      <div className={`w-18 h-18 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6`}>
                        <div className="text-3xl font-bold text-white">{step.step}</div>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 -mt-8 border-2 border-white">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
};

export default DiagnosticsPage;
