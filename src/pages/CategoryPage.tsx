
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Category data - this would typically come from an API
const categoryData = {
  "automation-scripts": {
    name: "Automation Scripts",
    description: "Save time and streamline workflows with powerful automation scripts",
    icon: "⚙️",
    products: [
      {
        id: 3,
        title: "Social Media Scheduler",
        desc: "Schedule and manage all your social media posts from one place.",
        price: 39.99,
        tags: ["Social Media", "Scheduler", "Automation"],
        rating: 4.2
      },
      {
        id: 5,
        title: "Email Marketing Automation",
        desc: "Streamline your email campaigns with this marketing automation tool.",
        price: 59.99,
        tags: ["Email", "Marketing", "Automation"],
        rating: 4.6
      },
      {
        id: 9,
        title: "File Organizer Script",
        desc: "Automatically organize files by type, date, or custom rules.",
        price: 24.99,
        tags: ["Files", "Organization", "Python"],
        rating: 4.3
      },
      {
        id: 10,
        title: "Web Scraper Pro",
        desc: "Extract data from websites with this customizable scraping tool.",
        price: 44.99,
        tags: ["Web Scraping", "Data", "Python"],
        rating: 4.7
      }
    ]
  },
  "saas-tools": {
    name: "SaaS Tools",
    description: "Complete software solutions ready to deploy for your business",
    icon: "🚀",
    products: [
      {
        id: 2,
        title: "E-commerce Dashboard",
        desc: "Complete admin dashboard solution for online stores with analytics and inventory management.",
        price: 79.99,
        tags: ["Dashboard", "E-commerce", "Admin"],
        rating: 4.5
      },
      {
        id: 6,
        title: "Data Visualization Library",
        desc: "Interactive charts and graphs for data-driven applications.",
        price: 69.99,
        tags: ["Data", "Visualization", "Library"],
        rating: 4.4
      },
      {
        id: 11,
        title: "Customer Support Helpdesk",
        desc: "Complete helpdesk solution with ticket management and customer portal.",
        price: 89.99,
        tags: ["Support", "Helpdesk", "CRM"],
        rating: 4.8
      },
      {
        id: 12,
        title: "Project Management System",
        desc: "Track projects, manage tasks, and collaborate with your team.",
        price: 69.99,
        tags: ["Project", "Management", "Team"],
        rating: 4.6
      }
    ]
  },
  "ai-tools": {
    name: "AI Tools",
    description: "Harness the power of artificial intelligence with these ready-to-use tools",
    icon: "🧠",
    products: [
      {
        id: 1,
        title: "AI Content Generator",
        desc: "Generate blog posts, product descriptions, and more with this advanced AI tool.",
        price: 49.99,
        tags: ["AI", "Content", "Generator"],
        rating: 4.7
      },
      {
        id: 8,
        title: "Text-to-Speech Converter",
        desc: "Convert any text to natural-sounding speech with multiple voices.",
        price: 34.99,
        tags: ["AI", "Speech", "Converter"],
        rating: 4.3
      },
      {
        id: 13,
        title: "AI Image Enhancer",
        desc: "Automatically improve image quality with AI-powered enhancement.",
        price: 39.99,
        tags: ["AI", "Images", "Enhancement"],
        rating: 4.5
      },
      {
        id: 14,
        title: "Sentiment Analysis API",
        desc: "Analyze text sentiment for customer feedback, social media, and more.",
        price: 54.99,
        tags: ["AI", "Sentiment", "Analysis"],
        rating: 4.4
      }
    ]
  },
  "chrome-extensions": {
    name: "Chrome Extensions",
    description: "Enhance your browser experience with powerful Chrome extensions",
    icon: "🔌",
    products: [
      {
        id: 4,
        title: "SEO Analyzer Chrome Extension",
        desc: "Analyze SEO metrics of any website directly from your browser.",
        price: 29.99,
        tags: ["SEO", "Chrome", "Extension"],
        rating: 4.8
      },
      {
        id: 7,
        title: "Password Manager Extension",
        desc: "Secure password storage and management right in your browser.",
        price: 19.99,
        tags: ["Security", "Password", "Chrome"],
        rating: 4.9
      },
      {
        id: 15,
        title: "Screenshot & Annotation Tool",
        desc: "Capture, annotate, and share screenshots directly from your browser.",
        price: 24.99,
        tags: ["Screenshots", "Annotation", "Chrome"],
        rating: 4.7
      },
      {
        id: 16,
        title: "Tab Manager Pro",
        desc: "Organize and manage your browser tabs efficiently.",
        price: 14.99,
        tags: ["Tabs", "Organization", "Chrome"],
        rating: 4.6
      }
    ]
  }
};

const ProductCard = ({ id, title, desc, price, tags, rating }: {
  id: number;
  title: string;
  desc: string;
  price: number;
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

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? categoryData[categoryId as keyof typeof categoryData] : null;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <p className="mb-8">The category you're looking for doesn't exist.</p>
            <Link to="/marketplace">
              <Button>Browse All Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="text-5xl mb-4">{category.icon}</div>
            <h1 className="text-4xl font-bold mb-4 text-gradient">{category.name}</h1>
            <p className="text-xl text-muted-foreground">{category.description}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {category.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mb-8">
            <Link to="/marketplace">
              <Button variant="outline">Browse All Products</Button>
            </Link>
          </div>
          
          <div className="bg-muted p-6 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Looking for something specific?</h2>
            <p className="text-center mb-6">
              We have many more {category.name.toLowerCase()} not listed here. Contact us to find exactly what you need.
            </p>
            <div className="text-center">
              <Link to="/contact">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
