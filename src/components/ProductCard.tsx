import { Heart, Plus, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isVegan: boolean;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-smooth cursor-pointer bg-gradient-card border-0">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-bounce duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isVegan && (
            <div className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Leaf className="h-3 w-3" />
              Vegan
            </div>
          )}
          {product.isNew && (
            <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
              New
            </div>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-smooth"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Add Button */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-smooth">
          <Button variant="hero" size="sm">
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            {product.category}
          </p>
          <h3 className="font-heading text-lg font-medium text-foreground line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-primary">
              ${product.price.toFixed(2)}
            </p>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;