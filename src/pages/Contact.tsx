import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-CAKE",
      subtitle: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@joysflavours.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Bakery Street, Sweet City, SC 12345",
      subtitle: "See directions below"
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: "Tue-Sun: 7AM-8PM",
      subtitle: "Closed Mondays"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our products, 
            want to place a custom order, or just want to say hello.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input type="text" placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input type="text" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground">
                      <option>General Inquiry</option>
                      <option>Custom Order</option>
                      <option>Wholesale/Catering</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="bg-gradient-hero text-white border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="mb-4 opacity-90">
                  Chat with us directly for quick responses and order updates.
                </p>
                <Button variant="cream" size="lg">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                Choose the best way to reach us. We're here to help!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-card transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1">
                          {item.details}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Find Our Store
                </h3>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-3" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Google Maps integration would go here</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Directions:</strong> Located in the heart of Sweet City's artisan district, 
                    just two blocks from the main square. Free parking available behind the building.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;