
import { Button } from "@/components/ui/button";
import { ShoppingCart, Code } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[50rem] bg-gradient-to-b from-accent/5 to-transparent -z-10"></div>
      
      {/* Abstract shapes - optional */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="animate-fade-in">
              <span className="block">Automate.</span>
              <span className="block">Scale.</span>
              <span className="block text-gradient">Save Time.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Explore powerful tools made for developers, marketers, and digital pros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="gap-2">
                <ShoppingCart className="h-5 w-5" /> Browse Marketplace
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Code className="h-5 w-5" /> Become a Seller
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Abstract code animation */}
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-xl"></div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 font-mono text-sm relative z-10 animate-float">
                <pre className="text-gray-800 dark:text-gray-300 overflow-x-auto">
                  <code>
{`// Automation made simple
function automateWorkflow() {
  const tasks = fetchTasks();
  
  return tasks.map(task => {
    return processTask(task);
  }).filter(result => {
    return result.status === 'completed';
  });
}

// Save hours of manual work
const results = automateWorkflow();
console.log('Time saved: 8.5 hours');`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
