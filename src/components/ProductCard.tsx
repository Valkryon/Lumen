import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  delay?: number;
}

const ProductCard = ({ title, description, price, originalPrice, image, badge, delay = 0 }: ProductCardProps) => {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div 
      className="group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
          {badge}
        </div>
      )}

      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-green-500 text-green-50 text-xs font-bold">
          -{discount}%
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-secondary to-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>

        {/* Price and CTA */}
        <div className="flex items-end justify-between pt-2">
          <div className="space-y-1">
            {originalPrice && (
              <p className="text-muted-foreground text-sm line-through">
                R$ {originalPrice.toFixed(2)}
              </p>
            )}
            <p className="font-bold text-2xl text-primary">
              R$ {price.toFixed(2)}
            </p>
          </div>
          <Button variant="hero" size="default" className="shadow-lg">
            <ShoppingCart className="w-4 h-4" />
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
