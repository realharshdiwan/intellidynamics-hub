import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Tech Street", "Digital City, IN 12345"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 (123) 456-7890", "Mon-Fri: 9AM - 6PM"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@mastersolis.com", "support@mastersolis.com"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with us to discuss your project and see how we can help
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
