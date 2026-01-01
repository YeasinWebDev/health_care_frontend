import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Pill, Shield, ShoppingCart, Truck, Upload, CheckCircle, Sparkles } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "CareBridge || Medicine",
  description: "Health plans for individuals and families",
};

const MedicinePage = () => {
  const features = [
    {
      icon: Pill,
      title: "Wide Selection",
      description: "10,000+ medicines & healthcare products from trusted brands",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Save up to 30% with our price match guarantee",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery in metro cities, 1-2 days elsewhere",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Genuine Products",
      description: "100% authentic medicines with verified QR codes",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Order anytime with instant prescription verification",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: ShoppingCart,
      title: "Easy Ordering",
      description: "Simple 3-step process with secure payments",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container relative mx-auto px-4 pt-13 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white shadow border-0 px-4 py-1.5 text-black">
              <Sparkles className="h-4 w-4 mr-2" />
              Coming Soon • Launching January 2027
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Your Digital <span className="text-blue-600">Medicine Cabinet</span>
            </h1>
            <p className="text-xl text-black mb-8 leading-relaxed">
              Prescription medicines delivered to your doorstep. Safe, authentic, and convenient healthcare solutions for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-20 relative flex items-center justify-center gap-4 flex-wrap cursor-pointer">
        {[
          { value: "10K+", label: "Medicines Available" },
          { value: "24/7", label: "Delivery Support" },
          { value: "500+", label: "Partner Pharmacies" },
          { value: "100%", label: "Authentic Products" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white shadow-xl border-gray-100 text-center h-fit p-3 w-[10rem] lg:w-[12rem] flex flex-col items-center justify-center rounded-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose <span className="text-blue-600">MediCare</span>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">We're revolutionizing medicine delivery with technology and care</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Verified and trusted service
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-lg text-black">Get your medicines in 3 simple steps</p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              {
                step: "1",
                title: "Upload Prescription",
                description: "Take a photo of your prescription or browse medicines",
                icon: Upload,
                color: "from-blue-400 to-cyan-400",
              },
              {
                step: "2",
                title: "Place Order",
                description: "Verify details, choose delivery slot, and pay securely",
                icon: ShoppingCart,
                color: "from-green-400 to-emerald-400",
              },
              {
                step: "3",
                title: "Get Delivered",
                description: "Track your order in real-time and receive at doorstep",
                icon: Truck,
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
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicinePage;
