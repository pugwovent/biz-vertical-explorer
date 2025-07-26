import Navigation from "@/components/Navigation";
import BusinessHero from "@/components/BusinessHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const HigherEducation = () => {
  const programs = [
    {
      title: "Business Administration",
      description: "Comprehensive MBA and undergraduate business programs",
      features: ["MBA Program", "Finance & Accounting", "Marketing & Sales", "Entrepreneurship"]
    },
    {
      title: "Technology & Engineering",
      description: "Cutting-edge programs in technology and engineering fields",
      features: ["Computer Science", "Data Science", "Software Engineering", "Cybersecurity"]
    },
    {
      title: "Liberal Arts & Sciences",
      description: "Well-rounded education in humanities and natural sciences",
      features: ["Psychology", "Biology & Chemistry", "English & Literature", "History & Philosophy"]
    },
    {
      title: "Professional Development",
      description: "Continuing education and certification programs",
      features: ["Executive Education", "Professional Certificates", "Online Learning", "Corporate Training"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <BusinessHero
        title="AnyBusiness Higher Education"
        subtitle="Excellence in Education & Research"
        description="Shaping tomorrow's leaders through innovative education and groundbreaking research"
        image={heroImage}
      />

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Academic Programs</h2>
          <p className="text-lg text-muted-foreground">Discover your passion and unlock your potential</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose AnyBusiness University?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="text-4xl mb-4 block">🎓</span>
              <h3 className="font-semibold mb-2">Expert Faculty</h3>
              <p className="text-muted-foreground">World-class professors and industry leaders</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">🔬</span>
              <h3 className="font-semibold mb-2">Research Excellence</h3>
              <p className="text-muted-foreground">Cutting-edge research opportunities</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">🌐</span>
              <h3 className="font-semibold mb-2">Global Network</h3>
              <p className="text-muted-foreground">International partnerships and exchanges</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">💼</span>
              <h3 className="font-semibold mb-2">Career Success</h3>
              <p className="text-muted-foreground">95% graduate employment rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Life Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Campus Life & Resources</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Modern Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  State-of-the-art laboratories
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Digital library & archives
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Student recreation center
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Student Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Academic advising
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Career services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Mental health resources
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Activities & Clubs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  200+ student organizations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  NCAA Division II athletics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Community service programs
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Start Your Journey</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join a community of scholars, innovators, and leaders. Discover the transformative power of education 
                at AnyBusiness University, where academic excellence meets real-world application.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📚</span>
                  <div>
                    <h3 className="font-semibold mb-2">Academic Excellence</h3>
                    <p className="text-muted-foreground">Rigorous programs designed for success</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🤝</span>
                  <div>
                    <h3 className="font-semibold mb-2">Industry Connections</h3>
                    <p className="text-muted-foreground">Strong partnerships with leading employers</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Admissions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Campus Address</h4>
                    <p className="text-muted-foreground">100 University Drive<br />Education City, EC 13579</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Admissions Office</h4>
                    <p className="text-muted-foreground">(555) 123-APPLY</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Student Services</h4>
                    <p className="text-muted-foreground">(555) 123-HELP</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">admissions@anybusinessu.edu</p>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HigherEducation;