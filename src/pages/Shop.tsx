import { useState } from "react";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-4">
            Our Vegan Bakery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete collection of premium plant-based treats, made fresh daily with love and natural ingredients.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </h3>

                {/* Search */}
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-foreground">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-foreground">Categories</label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-smooth ${
                          selectedCategory === category.value
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Special Offers */}
            <Card className="bg-gradient-hero text-white border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  🌟 Special Offer
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Buy 3 items, get 15% off your entire order!
                </p>
                <Button variant="cream" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  {selectedCategory === "all" ? "All Products" : `${selectedCategory}`}
                </h2>
                <span className="text-muted-foreground">
                  ({filteredProducts.length} items)
                </span>
              </div>
              
              <Button variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">
                  No products found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;