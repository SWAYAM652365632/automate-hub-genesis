
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, desc, price, category, tags, rating }: {
  id: number;
  title: string;
  desc: string;
  price: number;
  category: string;
  tags: string[];
  rating: number;
}) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-0">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <div className="flex items-center mt-1">
          <div className="flex items-center text-amber-500">
            {Array(5).fill(0).map((_, i) => (
              <svg 
                key={i}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill={i < rating ? "currentColor" : "none"}
                stroke={i < rating ? "none" : "currentColor"}
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            ))}
            <span className="ml-1 text-xs">({rating.toFixed(1)})</span>
          </div>
          <div className="ml-auto text-xs px-2 py-1 rounded-full bg-muted">
            {category}
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-4 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{desc}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="font-bold text-lg">${price.toFixed(2)}</div>
        <Link to={`/products/${id}`}>
          <Button size="sm">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

// Sample product data
const products = [
  {
    id: 1,
    title: "AI Content Generator",
    desc: "Generate blog posts, product descriptions, and more with this advanced AI tool.",
    price: 49.99,
    category: "AI Tools",
    tags: ["AI", "Content", "Generator"],
    rating: 4.7
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    desc: "Complete admin dashboard solution for online stores with analytics and inventory management.",
    price: 79.99,
    category: "SaaS Tools",
    tags: ["Dashboard", "E-commerce", "Admin"],
    rating: 4.5
  },
  {
    id: 3,
    title: "Social Media Scheduler",
    desc: "Schedule and manage all your social media posts from one place.",
    price: 39.99,
    category: "Automation Scripts",
    tags: ["Social Media", "Scheduler", "Automation"],
    rating: 4.2
  },
  {
    id: 4,
    title: "SEO Analyzer Chrome Extension",
    desc: "Analyze SEO metrics of any website directly from your browser.",
    price: 29.99,
    category: "Chrome Extensions",
    tags: ["SEO", "Chrome", "Extension"],
    rating: 4.8
  },
  {
    id: 5,
    title: "Email Marketing Automation",
    desc: "Streamline your email campaigns with this marketing automation tool.",
    price: 59.99,
    category: "Automation Scripts",
    tags: ["Email", "Marketing", "Automation"],
    rating: 4.6
  },
  {
    id: 6,
    title: "Data Visualization Library",
    desc: "Interactive charts and graphs for data-driven applications.",
    price: 69.99,
    category: "SaaS Tools",
    tags: ["Data", "Visualization", "Library"],
    rating: 4.4
  },
  {
    id: 7,
    title: "Password Manager Extension",
    desc: "Secure password storage and management right in your browser.",
    price: 19.99,
    category: "Chrome Extensions",
    tags: ["Security", "Password", "Chrome"],
    rating: 4.9
  },
  {
    id: 8,
    title: "Text-to-Speech Converter",
    desc: "Convert any text to natural-sounding speech with multiple voices.",
    price: 34.99,
    category: "AI Tools",
    tags: ["AI", "Speech", "Converter"],
    rating: 4.3
  },
];

const Marketplace = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gradient">Marketplace</h1>
              <p className="text-muted-foreground mt-2">Discover and purchase high-quality code solutions</p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <Input placeholder="Search products..." className="w-full" />
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border p-4">
                <h2 className="font-semibold text-lg mb-4">Filter By</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Categories</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="cat-ai" 
                          className="rounded text-primary focus:ring-primary"
                        />
                        <label htmlFor="cat-ai" className="ml-2 text-sm">AI Tools</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="cat-saas" 
                          className="rounded text-primary focus:ring-primary"
                        />
                        <label htmlFor="cat-saas" className="ml-2 text-sm">SaaS Tools</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="cat-auto" 
                          className="rounded text-primary focus:ring-primary"
                        />
                        <label htmlFor="cat-auto" className="ml-2 text-sm">Automation Scripts</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="cat-chrome" 
                          className="rounded text-primary focus:ring-primary"
                        />
                        <label htmlFor="cat-chrome" className="ml-2 text-sm">Chrome Extensions</label>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Input 
                          type="number" 
                          placeholder="Min" 
                          className="w-20" 
                        />
                        <span>-</span>
                        <Input 
                          type="number" 
                          placeholder="Max" 
                          className="w-20" 
                        />
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-1">
                        Apply
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-2">Rating</h3>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`rating-${star}`} 
                            className="rounded text-primary focus:ring-primary"
                          />
                          <label htmlFor={`rating-${star}`} className="ml-2 text-sm flex items-center">
                            <div className="flex text-amber-500">
                              {Array(5).fill(0).map((_, i) => (
                                <svg 
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg" 
                                  viewBox="0 0 24 24" 
                                  fill={i < star ? "currentColor" : "none"}
                                  stroke={i < star ? "none" : "currentColor"}
                                  className="w-4 h-4"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-1">& Up</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full">Apply Filters</Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Tabs defaultValue="all" className="mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Products</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="new">New Arrivals</TabsTrigger>
                  <TabsTrigger value="bestsellers">Best Sellers</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="featured" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {products.slice(0, 3).map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="new" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {products.slice(4, 7).map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="bestsellers" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {products.slice(2, 6).map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-center mt-12">
                <Button variant="outline" className="mx-1">Previous</Button>
                <Button variant="outline" className="mx-1 bg-primary text-primary-foreground">1</Button>
                <Button variant="outline" className="mx-1">2</Button>
                <Button variant="outline" className="mx-1">3</Button>
                <Button variant="outline" className="mx-1">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
