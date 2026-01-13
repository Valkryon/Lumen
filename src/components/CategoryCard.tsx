import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  productCount: number;
  delay?: number;
}

const CategoryCard = ({ title, description, image, productCount, delay = 0 }: CategoryCardProps) => {
  return (
    <div 
      className="group relative glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-6">
        {/* Image */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl" />
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain rounded-xl group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {description}
          </p>
          <p className="text-xs text-muted-foreground/70">
            {productCount} produtos disponíveis
          </p>
        </div>

        {/* Action */}
        <Button variant="glow" size="default" className="flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground">
          Ver produtos
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
