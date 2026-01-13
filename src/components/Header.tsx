import { ShoppingCart, Menu, User, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="font-display font-bold text-primary-foreground text-lg">L</span>
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-glow tracking-wider">
              LUMEN<span className="text-primary">RP</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#categories" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Categorias
            </a>
            <a href="#products" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Produtos
            </a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Discord
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-primary">
              <Search className="w-5 h-5" />
            </Button>

            {/* User */}
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <User className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Button variant="glow" size="default" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">Carrinho</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">
                Início
              </a>
              <a href="#categories" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">
                Categorias
              </a>
              <a href="#products" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">
                Produtos
              </a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">
                Discord
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
