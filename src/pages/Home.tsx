import { Link } from "react-router-dom";
import { ArrowRight, Star, Leaf, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-bakery.jpg";

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The best vegan cakes I've ever tasted! You can't tell they're plant-based.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c7a5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      text: "Joy's Flavours has completely changed my perspective on vegan desserts. Amazing!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Wilson",
      text: "Fresh, delicious, and beautifully presented. My go-to bakery for special occasions.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Delicious Vegan Treats
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animation-delay-200">
            100% Plant-Based Goodness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button variant="hero" size="xl" asChild>
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="cream" size="xl" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold">100% Vegan</h3>
              <p className="text-muted-foreground">
                All our products are completely plant-based, using only the finest natural ingredients.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Fresh Daily</h3>
              <p className="text-muted-foreground">
                Baked fresh every morning with love and care for the perfect taste and texture.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Same-day delivery available for orders placed before 2 PM in select areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Featured Treats
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most popular vegan creations, made with premium ingredients and lots of love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seasonal Promotion */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-4">
            🎃 Pumpkin Spice Collection
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Limited Edition! Available only during autumn season.
          </p>
          <Button variant="cream" size="lg">
            Order Now - Limited Time
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Real reviews from real people who love our vegan treats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;