
import { 
  Zap, 
  Globe, 
  UserSearch, 
  Box, 
  Chrome, 
  Sparkles 
} from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useNavigate } from "react-router-dom";

// Category data
const categories = [
  {
    id: 1,
    title: "Automation Scripts",
    description: "Automate repetitive tasks",
    icon: Zap,
    url: "/categories/automation-scripts",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "Web Scrapers",
    description: "Extract data from websites",
    icon: Globe,
    url: "/categories/web-scrapers",
    color: "from-green-400 to-green-600",
  },
  {
    id: 3,
    title: "Lead Gen Bots",
    description: "Generate qualified leads",
    icon: UserSearch,
    url: "/categories/lead-gen-bots",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    id: 4,
    title: "SaaS Tools",
    description: "Software as a service",
    icon: Box,
    url: "/categories/saas-tools",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 5,
    title: "Chrome Extensions",
    description: "Enhance your browser",
    icon: Chrome,
    url: "/categories/chrome-extensions",
    color: "from-red-400 to-red-600",
  },
  {
    id: 6,
    title: "AI Tools",
    description: "Powered by artificial intelligence",
    icon: Sparkles,
    url: "/categories/ai-tools",
    color: "from-indigo-400 to-indigo-600",
  },
];

// Category card component
const CategoryCard = ({ category }: { category: (typeof categories)[0] }) => {
  const navigate = useNavigate();
  const Icon = category.icon;
  
  const handleClick = () => {
    navigate(category.url);
  };
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          onClick={handleClick}
          className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer text-center"
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${category.color} text-white mb-4`}>
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-bold mb-1">{category.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div>
            <h4 className="text-sm font-semibold">{category.title}</h4>
            <p className="text-sm text-muted-foreground">
              Click to browse all {category.title.toLowerCase()}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse By Category</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the perfect tools for your specific needs in our organized categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
