import Navigation from "@/components/Navigation";
import BusinessHero from "@/components/BusinessHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const Retail = () => {
  const departments = [
    {
      title: "Electronics & Technology",
      description: "Latest gadgets, computers, and smart home devices",
      features: ["Smartphones & Tablets", "Laptops & Computers", "Smart Home", "Gaming Systems"]
    },
    {
      title: "Home & Garden",
      description: "Everything for your home improvement and outdoor needs",
      features: ["Furniture & Decor", "Kitchen Appliances", "Garden Tools", "Outdoor Furniture"]
    },
    {
      title: "Fashion & Apparel",
      description: "Trendy clothing and accessories for the whole family",
      features: ["Men's & Women's Clothing", "Children's Apparel", "Shoes & Accessories", "Jewelry & Watches"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <BusinessHero
        title="AnyBusiness Retail"
        subtitle="Quality Products, Exceptional Value"
        description="Your one-stop destination for everything you need, backed by outstanding customer service"
        image={heroImage}
      />

      {/* Departments Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Shop Our Departments</h2>
          <p className="text-lg text-muted-foreground">Quality products across every category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{department.title}</CardTitle>
                <CardDescription>{department.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {department.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Shop Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Shop With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="text-4xl mb-4 block">🚚</span>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders over $50</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">↩️</span>
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">🛡️</span>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">100% satisfaction promise</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">💬</span>
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">Knowledgeable staff ready to help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Store</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience our full range of products in person. Our friendly staff is always ready to help you find 
              exactly what you're looking for and provide expert advice on your purchases.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Store Hours</h4>
                <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 9:00 PM<br />Sunday: 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Store Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-muted-foreground">789 Shopping Plaza<br />Retail Town, RT 54321</p>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">(555) 789-SHOP</p>
                </div>
                <div>
                  <h4 className="font-semibold">Customer Service</h4>
                  <p className="text-muted-foreground">(555) 789-HELP</p>
                </div>
                <Button className="w-full">Get Directions</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail;