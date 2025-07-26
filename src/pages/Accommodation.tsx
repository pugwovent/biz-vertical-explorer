import Navigation from "@/components/Navigation";
import BusinessHero from "@/components/BusinessHero";
import FAQSection from "@/components/FAQSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const Accommodation = () => {
  const offerings = [
    {
      title: "Luxury Hotel Suites",
      description: "Premium accommodations with world-class amenities",
      features: ["Ocean View Rooms", "24/7 Concierge", "Spa Services", "Business Center"]
    },
    {
      title: "Fine Dining Restaurant",
      description: "Award-winning cuisine crafted by renowned chefs",
      features: ["Farm-to-Table Menu", "Wine Cellar", "Private Dining", "Catering Services"]
    },
    {
      title: "Event Spaces",
      description: "Elegant venues for weddings, conferences, and special events",
      features: ["Grand Ballroom", "Meeting Rooms", "Garden Terrace", "Audio/Visual Equipment"]
    }
  ];

  const accommodationFAQs = [
    {
      question: "What are your check-in and check-out times?",
      answer: "Check-in time is 3:00 PM and check-out is 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
    },
    {
      question: "Do you offer airport transportation?",
      answer: "Yes, we provide complimentary shuttle service to and from the airport. Please contact our concierge at least 24 hours in advance to arrange transportation."
    },
    {
      question: "What dining options are available?",
      answer: "Our award-winning restaurant serves breakfast, lunch, and dinner with farm-to-table cuisine. We also offer 24-hour room service and a lobby café for light meals and beverages."
    },
    {
      question: "Do you have facilities for business meetings and events?",
      answer: "Yes, we have a grand ballroom accommodating up to 300 guests, three smaller meeting rooms, and a garden terrace. All spaces include modern audio/visual equipment and catering services."
    },
    {
      question: "What amenities are included with my stay?",
      answer: "All rooms include complimentary Wi-Fi, fitness center access, pool and spa access, 24-hour concierge service, and daily housekeeping. Premium suites include additional amenities."
    },
    {
      question: "Do you allow pets?",
      answer: "Yes, we are a pet-friendly hotel. We welcome dogs and cats under 50 pounds with a one-time pet fee of $75. Please inform us of your pet when making your reservation."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Standard reservations can be cancelled up to 24 hours before arrival without penalty. Special event and holiday bookings may have different cancellation terms."
    },
    {
      question: "Do you offer wedding packages?",
      answer: "Yes, we offer comprehensive wedding packages including ceremony and reception venues, catering, floral arrangements, photography, and honeymoon suite accommodations. Contact our events team for details."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <BusinessHero
        title="AnyBusiness Accommodation"
        subtitle="Luxury Hospitality & Exceptional Dining"
        description="Creating unforgettable experiences through premium hospitality and culinary excellence"
        image={heroImage}
      />

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Hospitality Services</h2>
          <p className="text-lg text-muted-foreground">Exceptional experiences in every detail</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{offering.title}</CardTitle>
                <CardDescription>{offering.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Experience Luxury Redefined</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🏨</span>
                  <div>
                    <h3 className="font-semibold mb-2">Premium Accommodations</h3>
                    <p className="text-muted-foreground">Luxuriously appointed rooms and suites with stunning views</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🍽️</span>
                  <div>
                    <h3 className="font-semibold mb-2">Culinary Excellence</h3>
                    <p className="text-muted-foreground">Award-winning restaurant featuring locally sourced ingredients</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🎉</span>
                  <div>
                    <h3 className="font-semibold mb-2">Event Perfection</h3>
                    <p className="text-muted-foreground">Elegant spaces and professional planning for memorable occasions</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Reservations & Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">456 Hospitality Boulevard<br />Resort City, RC 67890</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Reservations</h4>
                    <p className="text-muted-foreground">(555) 456-STAY</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Restaurant</h4>
                    <p className="text-muted-foreground">(555) 456-DINE</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Events</h4>
                    <p className="text-muted-foreground">(555) 456-EVENT</p>
                  </div>
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection title="Accommodation FAQs" faqs={accommodationFAQs} />
    </div>
  );
};

export default Accommodation;