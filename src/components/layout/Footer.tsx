import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Web Solutions", href: "/web-solutions" },
  { name: "24/7 Voice AI", href: "/voice-ai" },
  { name: "Content Automation", href: "/content-automation" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Online Now (₦299,999 / $199)", href: "/web-solutions#online-now" },
  { name: "Visible Now (₦599,999 / $399)", href: "/web-solutions#visible-now" },
  { name: "Converting Now (₦1.2M / $799)", href: "/web-solutions#converting-now" },
  { name: "Dominating Now (From ₦2.5M)", href: "/web-solutions#dominating-now" },
  { name: "Voice AI (From ₦79,999/mo)", href: "/voice-ai" },
  { name: "Content (From ₦79,999/mo)", href: "/content-automation" },
];

const resources = [
  { name: "Blog", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "FAQs", href: "/how-it-works#faq" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="space-y-4">
          <div>
              <h3 className="text-xl font-display font-bold">AI Now Now</h3>
              <p className="text-xs text-cyan font-medium">by Wiseland Global</p>
              <p className="text-sm text-primary-foreground/70 mt-1">
                Your Business, On Time. Powered by AI.
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan" />
                <span>+234 904 608 9019</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan" />
                <span>hello@ainownow.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-primary-foreground/60 mt-4">
              All prices shown in ₦ (Naira) and $ (USD). We accept multiple currencies.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2025 AI Now Now. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Proudly African 🌍 | By Wiseland Global
          </p>
        </div>
      </div>
    </footer>
  );
}
