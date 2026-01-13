import CategoryCard from "./CategoryCard";
import categoryVip from "@/assets/category-vip.png";
import categoryCoins from "@/assets/category-coins.png";
import categoryItems from "@/assets/category-items.png";
import categoryCrates from "@/assets/category-crates.png";

const categories = [
  {
    title: "VIPs",
    description: "Benefícios exclusivos e vantagens especiais no servidor.",
    image: categoryVip,
    productCount: 5,
  },
  {
    title: "LUMEN COINS",
    description: "Moeda do servidor para usar em diversas funcionalidades.",
    image: categoryCoins,
    productCount: 8,
  },
  {
    title: "ITENS CUSTOM",
    description: "Itens exclusivos e personalizados para seu personagem.",
    image: categoryItems,
    productCount: 12,
  },
  {
    title: "CAIXAS",
    description: "Caixas com recompensas aleatórias e itens raros.",
    image: categoryCrates,
    productCount: 6,
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block px-4 py-1 rounded-full glass text-primary text-sm font-medium">
            Categorias populares
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-glow">
            Explore nossa loja
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre tudo que você precisa para melhorar sua experiência no Lumen RP
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              image={category.image}
              productCount={category.productCount}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
