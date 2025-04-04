
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Product data
const featuredProducts = [
  {
    id: 1,
    title: "AutoMate Pro",
    description: "Workflow automation suite for developers",
    price: 49.99,
    category: "Automation",
    image: "/placeholder.svg",
    badgeText: "Popular",
    rating: 4.8
  },
  {
    id: 2,
    title: "DataScraper X",
    description: "Advanced web scraping tool with proxy rotation",
    price: 39.99,
    category: "Web Scraper",
    image: "/placeholder.svg",
    badgeText: "New",
    rating: 4.5
  },
  {
    id: 3,
    title: "LeadBooster AI",
    description: "AI-powered lead generation suite",
    price: 79.99,
    category: "AI Tools",
    image: "/placeholder.svg",
    badgeText: "Best Seller",
    rating: 4.9
  },
  {
    id: 4,
    title: "InboxZero",
    description: "Email automation and management tool",
    price: 29.99,
    category: "Chrome Extension",
    image: "/placeholder.svg",
    badgeText: "Sale",
    rating: 4.2
  },
];

// Product card component
const ProductCard = ({ product }: { product: (typeof featuredProducts)[0] }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleViewProduct = () => {
    navigate(`/products/${product.id}`);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${product.title} has been ${isFavorite ? "removed from" : "added to"} your favorites.`,
      duration: 3000,
    });
  };
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md card-hover border border-border glow cursor-pointer"
      onClick={handleViewProduct}
    >
      <div className="relative">
        <div className="bg-gradient-to-br from-primary/5 to-accent/5">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-48 object-cover"
          />
        </div>
        {product.badgeText && (
          <Badge className="absolute top-3 right-3 bg-accent text-white">
            {product.badgeText}
          </Badge>
        )}
        <button 
          onClick={handleToggleFavorite}
          className="absolute top-3 left-3 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-pink-500 text-pink-500" : ""}`} />
        </button>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{product.title}</h3>
          <span className="text-lg font-bold text-primary">${product.price}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
            {product.category}
          </span>
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="gap-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" /> Add
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Eye className="h-4 w-4" /> View
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{product.title}</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 mb-4">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
                  </div>
                  <p className="text-md">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                    <Button onClick={handleViewProduct} className="btn-gradient">View Details</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const navigate = useNavigate();
  
  const handleViewAll = () => {
    navigate('/marketplace');
  };
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Popular Tools Right Now</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the most loved automation tools and scripts that are helping professionals save time and boost productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="btn-gradient" onClick={handleViewAll}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
