
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample product data - in a real app, this would come from an API
const products = [
  {
    id: 1,
    title: "AutoMate Pro",
    description: "Workflow automation suite for developers",
    longDescription: "AutoMate Pro is a comprehensive workflow automation suite designed specifically for developers. With its intuitive interface and powerful features, you can automate repetitive tasks, integrate with popular development tools, and boost your productivity significantly. The suite includes pre-built templates for common workflows, custom script support, and detailed analytics to help you optimize your processes.",
    price: 49.99,
    category: "Automation",
    image: "/placeholder.svg",
    badgeText: "Popular",
    rating: 4.8,
    reviews: 124,
    features: [
      "Pre-built automation templates",
      "Custom script support",
      "Integration with 20+ dev tools",
      "Detailed analytics dashboard",
      "Regular updates and new features"
    ]
  },
  {
    id: 2,
    title: "DataScraper X",
    description: "Advanced web scraping tool with proxy rotation",
    longDescription: "DataScraper X is an advanced web scraping tool that makes data collection effortless. With built-in proxy rotation, anti-detection mechanisms, and support for handling complex websites, it's the perfect solution for developers who need reliable data extraction capabilities. The tool supports multiple output formats, scheduled scraping jobs, and comes with an extensive API for integration into your existing workflows.",
    price: 39.99,
    category: "Web Scraper",
    image: "/placeholder.svg",
    badgeText: "New",
    rating: 4.5,
    reviews: 86,
    features: [
      "Built-in proxy rotation",
      "Anti-detection mechanisms",
      "Support for JavaScript-heavy sites",
      "Multiple export formats (JSON, CSV, XML)",
      "Scheduled scraping jobs"
    ]
  },
  {
    id: 3,
    title: "LeadBooster AI",
    description: "AI-powered lead generation suite",
    longDescription: "LeadBooster AI leverages advanced artificial intelligence to supercharge your lead generation efforts. The tool automatically identifies potential leads from various sources, enriches their data, and helps you prioritize the most promising opportunities. With its machine learning capabilities, LeadBooster gets smarter over time, continuously improving the quality of leads it identifies for your business.",
    price: 79.99,
    category: "AI Tools",
    image: "/placeholder.svg",
    badgeText: "Best Seller",
    rating: 4.9,
    reviews: 215,
    features: [
      "AI-powered lead identification",
      "Automatic data enrichment",
      "Lead scoring and prioritization",
      "CRM integration",
      "Performance analytics"
    ]
  },
  {
    id: 4,
    title: "InboxZero",
    description: "Email automation and management tool",
    longDescription: "InboxZero is a powerful email automation and management tool designed to help you regain control of your inbox. With smart categorization, automated responses, and scheduling features, you can process emails more efficiently and reach inbox zero faster. The tool integrates seamlessly with popular email providers and includes customizable templates for common responses.",
    price: 29.99,
    category: "Chrome Extension",
    image: "/placeholder.svg",
    badgeText: "Sale",
    rating: 4.2,
    reviews: 156,
    features: [
      "Smart email categorization",
      "Automated response templates",
      "Email scheduling",
      "Follow-up reminders",
      "Analytics and insights"
    ]
  },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Find the product by ID
  const product = products.find(p => p.id === Number(productId));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/marketplace')}>
              Back to Marketplace
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${product.title} has been ${isFavorite ? "removed from" : "added to"} your favorites.`,
      duration: 3000,
    });
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Product link has been copied to clipboard.",
      duration: 3000,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <button 
            onClick={handleGoBack} 
            className="flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-accent text-white">{product.category}</Badge>
                {product.badgeText && (
                  <Badge variant="secondary">{product.badgeText}</Badge>
                )}
              </div>
              
              <h1 className="text-4xl font-bold mb-4 text-gradient">{product.title}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">{product.reviews} reviews</span>
              </div>
              
              <p className="text-2xl font-bold mb-6 text-primary">${product.price}</p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {product.longDescription}
              </p>
              
              <Separator className="mb-8" />
              
              <h3 className="font-bold text-xl mb-4">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleToggleFavorite}
                  className={isFavorite ? "bg-pink-50 text-pink-500 border-pink-200" : ""}
                >
                  <Heart className={`mr-2 h-5 w-5 ${isFavorite ? "fill-pink-500 text-pink-500" : ""}`} />
                  {isFavorite ? "Saved" : "Save"}
                </Button>
                
                <Button size="lg" variant="ghost" onClick={handleShare}>
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
