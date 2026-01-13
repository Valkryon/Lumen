import { ChevronDown, Copy, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useState } from "react";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "play.lumenrp.com";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse-glow opacity-40 delay-100" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow opacity-50 delay-200" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse-glow opacity-30 delay-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Servidor Online
          </div>

          {/* Main Title */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-wider">
            <span className="text-glow">BEM-VINDO À</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              LUMEN RP
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Um servidor de roleplay único, onde sua história começa. 
            Explore, construa e viva aventuras inesquecíveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="heroOutline" 
              size="lg" 
              onClick={copyIP}
              className="min-w-[200px]"
            >
              <Copy className="w-5 h-5" />
              {copied ? "IP Copiado!" : "Copiar IP"}
            </Button>
            
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Acessar a Loja
            </Button>
            
            <Button variant="outline" size="lg" className="min-w-[200px]">
              <ExternalLink className="w-5 h-5" />
              Discord
            </Button>
          </div>

          {/* Server IP */}
          <div className="pt-4">
            <p className="text-muted-foreground text-sm">Endereço do servidor</p>
            <p className="font-mono text-primary text-lg text-glow">{serverIP}</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
