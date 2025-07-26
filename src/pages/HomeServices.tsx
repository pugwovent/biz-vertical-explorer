import Navigation from "@/components/Navigation";
import BusinessHero from "@/components/BusinessHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const HomeServices = () => {
  const services = [
    {
      title: "Plumbing Services",
      description: "Expert plumbing solutions for residential and commercial properties",
      features: ["Emergency Repairs", "Pipe Installation", "Drain Cleaning", "Water Heater Service"]
    },
    {
      title: "Electrical Work",
      description: "Licensed electricians for all your electrical needs",
      features: ["Wiring & Rewiring", "Panel Upgrades", "Lighting Installation", "Smart Home Setup"]
    },
    {
      title: "HVAC Services",
      description: "Heating, ventilation, and air conditioning expertise",
      features: ["AC Installation", "Heating Repair", "Duct Cleaning", "Energy Efficiency Audits"]
    },
    {
      title: "Home Renovation",
      description: "Complete home improvement and remodeling services",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Flooring Installation", "Painting Services"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <BusinessHero
        title="AnyBusiness Home Services"
        subtitle="Professional Home Improvement Solutions"
        description="Trusted craftsmen delivering quality workmanship for over 15 years"
        image={heroImage}
      />

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Home Services</h2>
          <p className="text-lg text-muted-foreground">Professional solutions for every home improvement need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Request Quote</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose AnyBusiness Home Services?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="text-4xl mb-4 block">🔧</span>
              <h3 className="font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">Fully certified professionals</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">⏰</span>
              <h3 className="font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-muted-foreground">Available when you need us most</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">✅</span>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">100% satisfaction promise</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">💰</span>
              <h3 className="font-semibold mb-2">Fair Pricing</h3>
              <p className="text-muted-foreground">Transparent, competitive rates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              From small repairs to major renovations, our experienced team is ready to bring your vision to life. 
              Contact us today for a free consultation and estimate.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold mb-2">Emergency Service</h3>
                  <p className="text-muted-foreground">Available 24/7 for urgent repairs</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">📋</span>
                <div>
                  <h3 className="font-semibold mb-2">Free Estimates</h3>
                  <p className="text-muted-foreground">No-obligation quotes for all projects</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Get Started Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Office Address</h4>
                  <p className="text-muted-foreground">321 Service Street<br />Handyman City, HC 98765</p>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">(555) 321-HOME</p>
                </div>
                <div>
                  <h4 className="font-semibold">Emergency Line</h4>
                  <p className="text-muted-foreground">(555) 911-FIXIT</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">info@anybusinesshome.com</p>
                </div>
                <Button className="w-full">Schedule Service</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;