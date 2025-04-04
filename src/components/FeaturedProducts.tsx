
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
  },
  {
    id: 2,
    title: "DataScraper X",
    description: "Advanced web scraping tool with proxy rotation",
    price: 39.99,
    category: "Web Scraper",
    image: "/placeholder.svg",
    badgeText: "New",
  },
  {
    id: 3,
    title: "LeadBooster AI",
    description: "AI-powered lead generation suite",
    price: 79.99,
    category: "AI Tools",
    image: "/placeholder.svg",
    badgeText: "Best Seller",
  },
  {
    id: 4,
    title: "InboxZero",
    description: "Email automation and management tool",
    price: 29.99,
    category: "Chrome Extension",
    image: "/placeholder.svg",
    badgeText: "Sale",
  },
];

// Product card component
const ProductCard = ({ product }: { product: (typeof featuredProducts)[0] }) => {
  const navigate = useNavigate();
  
  const handleViewProduct = () => {
    navigate(`/products/${product.id}`);
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-cover"
        />
        {product.badgeText && (
          <Badge className="absolute top-3 right-3" variant="secondary">
            {product.badgeText}
          </Badge>
        )}
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
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="gap-1">
                <Eye className="h-4 w-4" /> View
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{product.title}</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                <p className="text-md">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price}</span>
                  <Button onClick={handleViewProduct}>View Details</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Tools Right Now</h2>
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
          <Button size="lg" onClick={handleViewAll}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
