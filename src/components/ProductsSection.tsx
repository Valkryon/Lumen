import ProductCard from "./ProductCard";
import categoryVip from "@/assets/category-vip.png";
import categoryCoins from "@/assets/category-coins.png";
import categoryItems from "@/assets/category-items.png";
import categoryCrates from "@/assets/category-crates.png";

const products = [
  {
    title: "VIP DIAMANTE",
    description: "O pacote VIP mais completo com todos os benefícios exclusivos.",
    price: 49.90,
    originalPrice: 69.90,
    image: categoryVip,
    badge: "MAIS VENDIDO",
  },
  {
    title: "1000 Lumen Coins",
    description: "Pacote de moedas para usar nas diversas funcionalidades.",
    price: 29.90,
    image: categoryCoins,
  },
  {
    title: "Espada Celestial",
    description: "Item exclusivo com atributos especiais e efeitos visuais.",
    price: 19.90,
    originalPrice: 29.90,
    image: categoryItems,
    badge: "NOVO",
  },
  {
    title: "Caixa Lendária",
    description: "Caixa com chance de itens ultra raros e exclusivos.",
    price: 14.90,
    image: categoryCrates,
  },
  {
    title: "VIP OURO",
    description: "Pacote VIP intermediário com ótimos benefícios.",
    price: 29.90,
    image: categoryVip,
  },
  {
    title: "500 Lumen Coins",
    description: "Pacote econômico de moedas do servidor.",
    price: 15.90,
    originalPrice: 19.90,
    image: categoryCoins,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block px-4 py-1 rounded-full glass text-accent text-sm font-medium">
            ⚡ Ofertas especiais
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-glow">
            Produtos em destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira os produtos mais populares e aproveite as melhores ofertas
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={`${product.title}-${index}`}
              title={product.title}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              badge={product.badge}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
