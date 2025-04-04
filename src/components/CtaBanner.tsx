
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="gradient-bg text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Got a Tool to Sell?</h2>
              <p className="text-lg md:max-w-xl opacity-90">
                Join our marketplace and sell your automation tools, scripts, and software to thousands of developers and digital professionals.
              </p>
            </div>
            
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              <Code className="mr-2 h-5 w-5" /> Become a Seller
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
