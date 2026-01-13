import { Send, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Send,
    title: "Entrega Instantânea",
    description: "Receba seus itens automaticamente após a confirmação do pagamento.",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Nossa equipe está sempre disponível para ajudar você.",
  },
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    description: "Pagamentos processados com máxima segurança e criptografia.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 glass border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
