import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoImage from "@/assets/joys-flavours-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Joy's Flavours" className="h-10 w-10" />
              <span className="font-heading text-xl font-semibold text-primary">
                Joy's Flavours
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bringing joy through vegan flavors, one bite at a time. Premium plant-based treats made with love and natural ingredients.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">100% Plant-Based</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Shop", "About Us", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">Categories</h3>
            <ul className="space-y-2">
              {["Cakes", "Pastries", "Cookies", "Breads", "Special Diet"].map((category) => (
                <li key={category}>
                  <Link
                    to={`/shop?category=${category.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get 10% off your first order! Subscribe to our newsletter for exclusive deals.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1"
                />
                <Button variant="hero" size="sm">
                  Subscribe
                </Button>
              </div>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter, Mail].map((Icon, index) => (
                  <Button key={index} variant="ghost" size="icon" className="h-8 w-8">
                    <Icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-CAKE</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hello@joysflavours.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Bakery Street, Sweet City</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Joy's Flavours. All rights reserved. Made with 🌱 for a better world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;