import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Building2, Globe, HandHeart, Heart, Users, Sparkles, Target, Handshake, Users2, ChartBar, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "CareBridge || NGOs",
  description: "Health plans for individuals and families",
}

const NGOsPage = () => {
  const ngoCategories = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Organizations providing free medical camps, health education, and preventive care programs",
      count: "25+ NGOs",
      color: "from-red-500 to-pink-500",
      featured: true,
    },
    {
      icon: HandHeart,
      title: "Patient Support",
      description: "Financial aid, rehabilitation, and support systems for critical care patients",
      count: "15+ NGOs",
      color: "from-green-500 to-emerald-500",
      featured: false,
    },
    {
      icon: Users,
      title: "Community Health",
      description: "Grassroots healthcare initiatives in rural and underserved urban communities",
      count: "30+ NGOs",
      color: "from-blue-500 to-cyan-500",
      featured: true,
    },
    {
      icon: Building2,
      title: "Medical Facilities",
      description: "Free clinics, community hospitals, and mobile medical units",
      count: "20+ Organizations",
      color: "from-purple-500 to-violet-500",
      featured: false,
    },
    {
      icon: Award,
      title: "Medical Research",
      description: "Funding medical research, innovation, and healthcare technology development",
      count: "10+ Institutions",
      color: "from-amber-500 to-orange-500",
      featured: false,
    },
    {
      icon: Globe,
      title: "International Aid",
      description: "Global health organizations operating healthcare programs in Bangladesh",
      count: "12+ NGOs",
      color: "from-indigo-500 to-blue-500",
      featured: true,
    },
  ];

  const impactStats = [
    { value: "500K+", label: "Patients Helped", icon: Users2 },
    { value: "100+", label: "NGO Partners", icon: Handshake },
    { value: "8 Div", label: "Divisions Covered", icon: MapPin },
    { value: "10K+", label: "Volunteers", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden  text-black">
        <div className="absolute inset-0 bg-center opacity-10" />
        <div className="container relative mx-auto px-4 pt-13 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white shadow border-0 px-4 py-1.5 text-black">
              <Sparkles className="h-4 w-4 mr-2" />
              Launching Soon • March 2027
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Healthcare <span className="text-blue-600">NGOs Network</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Connecting those in need with compassionate healthcare organizations. Making quality healthcare accessible for everyone, everywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="container mx-auto px-4 -mt-20 relative flex items-center justify-center gap-4 flex-wrap">
        {impactStats.map((stat, idx) => {
          return (
            <div key={idx} className="bg-white shadow-xl border-gray-100 text-center h-fit p-3 w-[10rem] lg:w-[12rem] flex flex-col items-center justify-center rounded-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* NGO Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Find <span className="text-blue-600">Healthcare Support</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover NGOs providing free or subsidized healthcare services across various specialties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngoCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`group cursor-pointer border-2 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  category.featured ? "border-blue-200 shadow-lg" : "border-gray-100"
                }`}
              >
                {category.featured && (
                  <div className="absolute -top-3 right-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-3">Featured</Badge>
                  </div>
                )}
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {category.count}
                  </Badge>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full cursor-pointer group-hover:border-blue-300 group-hover:text-blue-700">
                    View NGOs
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      {/* How It Helps Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                How Our <span className="text-blue-600">Network Helps</span>
              </h2>
              <p className="text-lg text-gray-600">Bridging the gap between healthcare needs and available resources</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "1",
                  title: "Find Support",
                  description: "Search NGOs based on medical needs, location, and services provided",
                  icon: Target,
                  color: "from-blue-400 to-cyan-400",
                },
                {
                  step: "2",
                  title: "Get Assistance",
                  description: "Access free consultations, medicines, and specialized treatments",
                  icon: HandHeart,
                  color: "from-green-400 to-emerald-400",
                },
                {
                  step: "3",
                  title: "Community Programs",
                  description: "Participate in health camps, awareness drives, and preventive care",
                  icon: Users,
                  color: "from-purple-400 to-pink-400",
                },
                {
                  step: "4",
                  title: "Make a Difference",
                  description: "Volunteer, donate, or partner to support healthcare initiatives",
                  icon: ChartBar,
                  color: "from-amber-400 to-orange-400",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="relative">
                    <Card className="border-0 shadow-lg bg-white hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center justify-center gap-4 cursor-pointer">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                            <div className="text-2xl font-bold text-white">{item.step}</div>
                          </div>
                          <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center -mt-8 -ml-0 border-2 border-white">
                            <Icon className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div className="flex-1 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGOsPage;
