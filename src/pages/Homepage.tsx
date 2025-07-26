import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-business.jpg";

const Homepage = () => {
  const businesses = [
    {
      name: "AnyBusiness Healthcare",
      description: "Comprehensive medical services and patient care solutions",
      path: "/healthcare",
      icon: "🏥"
    },
    {
      name: "AnyBusiness Accommodation",
      description: "Premium hospitality and dining experiences",
      path: "/accommodation",
      icon: "🏨"
    },
    {
      name: "AnyBusiness Retail",
      description: "Quality products and exceptional customer service",
      path: "/retail",
      icon: "🏪"
    },
    {
      name: "AnyBusiness Home Services",
      description: "Professional home improvement and maintenance solutions",
      path: "/home-services",
      icon: "🏠"
    },
    {
      name: "AnyBusiness Higher Education",
      description: "Excellence in education and research innovation",
      path: "/higher-education",
      icon: "🎓"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(34, 34, 139, 0.8), rgba(34, 34, 139, 0.8)), url(${heroImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-4">Amazon Connect Demo</h1>
            <p className="text-xl mb-6">AI-Powered Contact Center Self-Service Experience</p>
            <p className="text-lg opacity-90">Experience how Amazon Connect transforms customer interactions with GenAI capabilities across diverse business verticals</p>
          </div>
        </div>
      </div>

      {/* Business Verticals Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Business Verticals</h2>
          <p className="text-lg text-muted-foreground">Explore our diverse portfolio of businesses serving communities nationwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business) => (
            <Card key={business.path} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{business.icon}</div>
                <CardTitle className="text-xl">{business.name}</CardTitle>
                <CardDescription>{business.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to={business.path}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">About AnyBusiness Network</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For over two decades, the AnyBusiness Network has been a trusted partner to communities across the United States. 
              Our commitment to excellence, innovation, and customer satisfaction drives everything we do across our diverse 
              portfolio of business verticals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;