import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mastersolis Infotech
            </h3>
            <p className="text-sm text-gray-300">
              Empowering businesses through innovative technology solutions and digital transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Web Development</li>
              <li className="text-sm text-gray-300">Mobile Apps</li>
              <li className="text-sm text-gray-300">Cloud Solutions</li>
              <li className="text-sm text-gray-300">AI Integration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>123 Tech Street, Digital City, IN 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>+91 (123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>info@mastersolis.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Mastersolis Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
