import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Smartphone, Cloud, Brain, Database, Shield, Zap, Users, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      features: ["Responsive design", "Progressive Web Apps", "E-commerce solutions", "Content Management Systems", "API development"],
      technologies: ["React", "Node.js", "Next.js", "TypeScript"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions",
      features: ["iOS and Android apps", "Cross-platform development", "UI/UX design", "App maintenance", "Performance optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable infrastructure and cloud migration",
      features: ["Cloud architecture", "Migration services", "DevOps automation", "Serverless computing", "Container orchestration"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by AI",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbots & Virtual Assistants", "Machine Learning Models"],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-glow transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
