import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses through innovative technology solutions that drive growth and efficiency.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading technology partner for businesses seeking digital transformation worldwide.",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, innovation, excellence, and client success drive everything we do.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
  ];

  const milestones = [
    { year: "2014", event: "Founded with a vision to revolutionize tech solutions" },
    { year: "2016", event: "Reached 50 successful project deliveries" },
    { year: "2018", event: "Expanded team to 30+ professionals" },
    { year: "2020", event: "Launched AI and Cloud services division" },
    { year: "2022", event: "Celebrated 150+ happy clients milestone" },
    { year: "2024", event: "Recognized as industry leader with multiple awards" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Mastersolis</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A decade of excellence in delivering innovative technology solutions that transform businesses
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Founded in 2014, Mastersolis Infotech began with a simple yet powerful vision: to help businesses
              leverage technology to achieve their full potential. What started as a small team of passionate
              developers has grown into a full-service technology partner trusted by businesses worldwide.
            </p>
            <p className="text-lg leading-relaxed">
              Over the years, we've evolved alongside the rapidly changing technology landscape, always staying
              ahead of the curve. From web development to AI integration, cloud solutions to mobile applications,
              we've continuously expanded our expertise to meet the diverse needs of our clients.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're proud to have delivered over 200 successful projects, serving clients across various
              industries. Our team of 50+ skilled professionals brings together expertise in cutting-edge
              technologies, agile methodologies, and industry best practices to deliver solutions that truly make
              a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-4">
                    <p className="text-lg">{milestone.event}</p>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-12 bg-border mt-4 ml-10" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Team Culture</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We believe in fostering a collaborative, innovative, and inclusive work environment where
            every team member can thrive and contribute to our collective success.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-3">Innovation First</h3>
              <p className="text-gray-300">
                We encourage creative thinking and embrace new technologies to stay ahead of the curve.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-300">
                Our team members have access to training, certifications, and growth opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Work-Life Balance</h3>
              <p className="text-gray-300">
                We value the wellbeing of our team with flexible schedules and a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
