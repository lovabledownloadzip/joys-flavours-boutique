import { Heart, Leaf, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Plant-Based",
      description: "Every single product is made with carefully selected plant-based ingredients, ensuring delicious taste without compromise."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each treat is handcrafted with passion and care, bringing joy to every bite and smile to every customer."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We're not just a bakery; we're part of the community, supporting local suppliers and sustainable practices."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest organic ingredients and traditional baking methods to ensure exceptional quality."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
            About Joy's Flavours
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Our story began with a simple belief: that plant-based treats can be just as delicious, 
            if not more so, than traditional baked goods. Today, we're proud to bring you the finest 
            vegan bakery experience.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Joy's Flavours was born out of a passion for creating delicious, sustainable treats 
                that everyone can enjoy. Founded in 2020 by Joy Martinez, a passionate baker and 
                environmental advocate, our bakery started as a small home-based operation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What began as weekend farmers market visits quickly grew into a beloved local institution. 
                Joy's commitment to using only the finest organic, plant-based ingredients resonated with 
                health-conscious customers and dessert lovers alike.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to serve our community with a wide range of vegan cakes, pastries, 
                cookies, and breads that prove plant-based can be absolutely delicious.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 text-white shadow-hover">
                <h3 className="font-heading text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="mb-6 opacity-90">
                  "Bringing joy through vegan flavors, one bite at a time."
                </p>
                <p className="text-sm opacity-80">
                  We believe that choosing plant-based shouldn't mean compromising on taste. 
                  Every product we create is a testament to this belief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These core principles guide everything we do, from ingredient selection to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-background border-0 shadow-card hover:shadow-hover transition-smooth text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Friendly Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-accent text-white rounded-2xl p-8 md:p-12 text-center shadow-hover">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                🌍 Eco-Friendly Commitment
              </h2>
              <p className="text-lg mb-6 opacity-90">
                We're committed to sustainable practices that protect our planet for future generations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">♻️ Sustainable Packaging</h4>
                  <p className="opacity-80">Biodegradable and recyclable packaging materials only</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🌱 Local Sourcing</h4>
                  <p className="opacity-80">Supporting local organic farmers and suppliers</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🔄 Zero Waste</h4>
                  <p className="opacity-80">Minimizing waste through careful planning and composting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Ready to Experience Joy's Flavours?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the joy of premium vegan treats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">Shop Our Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;