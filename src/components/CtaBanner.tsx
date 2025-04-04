
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

const CtaBanner = () => {
  const navigate = useNavigate();
  
  const handleBecomeSeller = () => {
    navigate('/become-seller');
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Got a Tool to Sell?</h2>
              <p className="text-lg md:max-w-xl opacity-90">
                Join our marketplace and sell your automation tools, scripts, and software to thousands of developers and digital professionals.
              </p>
            </div>
            
            <Drawer>
              <DrawerTrigger asChild>
                <Button size="lg" variant="secondary" className="whitespace-nowrap hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Code className="mr-2 h-5 w-5" /> Become a Seller
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-gradient-to-b from-background to-background/80 backdrop-blur-sm">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl text-gradient">Become a Seller on Picode</DrawerTitle>
                  <DrawerDescription>
                    Start selling your digital products to thousands of developers and professionals
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-8">
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl mb-6">
                    <p className="mb-6">
                      As a Picode seller, you'll get access to our growing marketplace of tech professionals looking for automation tools and solutions. Our platform handles payments, delivery, and customer support so you can focus on building great products.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Zero upfront costs to join
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Competitive commission rates
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Fast payouts
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Access to thousands of potential customers
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={handleBecomeSeller} className="btn-gradient">Continue</Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
