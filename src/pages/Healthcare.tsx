import Navigation from "@/components/Navigation";
import BusinessHero from "@/components/BusinessHero";
import FAQSection from "@/components/FAQSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const Healthcare = () => {
  const services = [
    {
      title: "Primary Care",
      description: "Comprehensive family medicine and preventive care services",
      features: ["Annual Check-ups", "Vaccinations", "Health Screenings", "Chronic Disease Management"]
    },
    {
      title: "Specialized Care",
      description: "Expert specialists for complex medical conditions",
      features: ["Cardiology", "Orthopedics", "Dermatology", "Mental Health Services"]
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency care and urgent medical services",
      features: ["Emergency Room", "Urgent Care", "Trauma Center", "Ambulance Services"]
    }
  ];

  const healthcareFAQs = [
    {
      question: "What are your office hours?",
      answer: "Our main clinic is open Monday through Friday from 7:00 AM to 7:00 PM, and Saturday from 8:00 AM to 4:00 PM. Our emergency department is available 24/7."
    },
    {
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. Please call our billing department at (555) 123-BILL to verify your specific coverage."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling (555) 123-HEAL, using our online patient portal, or visiting our clinic in person. For urgent matters, we offer same-day appointments."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records from previous healthcare providers."
    },
    {
      question: "Do you offer telemedicine services?",
      answer: "Yes, we offer virtual consultations for routine follow-ups, prescription refills, and non-emergency medical concerns. Contact us to schedule a telehealth appointment."
    },
    {
      question: "What emergency services do you provide?",
      answer: "Our emergency department provides 24/7 care for serious injuries, chest pain, difficulty breathing, severe bleeding, and other life-threatening conditions. For true emergencies, call 911."
    },
    {
      question: "Do you have specialists on staff?",
      answer: "Yes, we have specialists in cardiology, orthopedics, dermatology, mental health, pediatrics, and women's health. Specialist appointments typically require a referral from your primary care physician."
    },
    {
      question: "What preventive care services do you offer?",
      answer: "We provide annual physical exams, vaccinations, cancer screenings, blood pressure monitoring, cholesterol testing, diabetes screening, and other preventive health services."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <BusinessHero
        title="AnyBusiness Healthcare"
        subtitle="Compassionate Care, Advanced Medicine"
        description="Providing comprehensive healthcare services to our community for over 25 years"
        image={heroImage}
      />

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Healthcare Services</h2>
          <p className="text-lg text-muted-foreground">Comprehensive medical care tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose AnyBusiness Healthcare?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">👨‍⚕️</span>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Medical Staff</h3>
                    <p className="text-muted-foreground">Board-certified physicians and experienced healthcare professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🏥</span>
                  <div>
                    <h3 className="font-semibold mb-2">State-of-the-Art Facilities</h3>
                    <p className="text-muted-foreground">Modern medical equipment and comfortable patient environments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">❤️</span>
                  <div>
                    <h3 className="font-semibold mb-2">Patient-Centered Care</h3>
                    <p className="text-muted-foreground">Personalized treatment plans focused on your unique needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">(555) 123-HEAL</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Emergency</h4>
                    <p className="text-muted-foreground">24/7 Emergency Line: (555) 911-HELP</p>
                  </div>
                  <Button className="w-full">Schedule Appointment</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection title="Healthcare FAQs" faqs={healthcareFAQs} />
    </div>
  );
};

export default Healthcare;