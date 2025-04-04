
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <Card className="h-full">
    <CardHeader className="space-y-1">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  popular = false 
}: { 
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}) => (
  <Card className={`flex flex-col border-2 ${popular ? 'border-primary' : 'border-border'}`}>
    {popular && (
      <div className="py-1 px-4 bg-primary text-primary-foreground text-sm font-medium text-center">
        Most Popular
      </div>
    )}
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <div className="mt-4 mb-2">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-muted-foreground">/month</span>
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <div className="p-6 pt-0 mt-auto">
      <Button className={`w-full ${popular ? '' : 'variant-outline'}`}>
        Choose Plan
      </Button>
    </div>
  </Card>
);

const BecomeSeller = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = () => {
    toast({
      title: "Application received!",
      description: "We'll review your application and get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Sell Your Code on Picode</h1>
            <p className="text-xl mb-8">
              Turn your code into a profitable business. Join thousands of developers making a living by selling their tools, scripts, and extensions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="font-semibold px-8">Apply Now</Button>
              <Button size="lg" variant="outline" className="font-semibold px-8">Learn More</Button>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Sell on Picode?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Reach More Customers" 
                description="Access our global community of businesses and developers looking for high-quality code solutions."
                icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
              />
              <FeatureCard 
                title="Keep More Revenue" 
                description="Enjoy competitive commission rates, letting you maximize your earnings on every sale."
                icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              />
              <FeatureCard 
                title="Powerful Dashboard" 
                description="Track your sales, manage products, and gain insights with our intuitive seller dashboard."
                icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              />
            </div>
          </section>
          
          {/* How It Works Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Apply</h3>
                <p className="text-muted-foreground">Fill out our seller application with your details and product ideas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
                <p className="text-muted-foreground">Our team reviews your application and provides feedback.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">List Products</h3>
                <p className="text-muted-foreground">Upload your code products with descriptions, screenshots, and pricing.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Earn Money</h3>
                <p className="text-muted-foreground">Start making sales and receive payments directly to your account.</p>
              </div>
            </div>
          </section>
          
          {/* Pricing Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Seller Plans</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose a plan that fits your needs. All plans include access to our seller dashboard, analytics, and customer support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingTier 
                name="Basic" 
                price={19}
                description="Perfect for individuals just starting out"
                features={[
                  "List up to 5 products",
                  "15% marketplace fee",
                  "Basic analytics",
                  "Standard support",
                  "Manual payouts"
                ]}
              />
              <PricingTier 
                name="Professional" 
                price={49}
                description="Ideal for active creators with multiple products"
                features={[
                  "List up to 20 products",
                  "10% marketplace fee",
                  "Advanced analytics",
                  "Priority support",
                  "Weekly automatic payouts",
                  "Product promotion"
                ]}
                popular={true}
              />
              <PricingTier 
                name="Business" 
                price={99}
                description="For established businesses and power sellers"
                features={[
                  "Unlimited products",
                  "8% marketplace fee",
                  "Enterprise analytics",
                  "24/7 dedicated support",
                  "Daily automatic payouts",
                  "Featured placement",
                  "Custom storefront"
                ]}
              />
            </div>
          </section>
          
          {/* Application Form */}
          <section className="max-w-2xl mx-auto mb-20">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Apply to Become a Seller</CardTitle>
                <CardDescription>
                  Fill out the form below to start your application process. Our team will review your details and get back to you within 2-3 business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <Input id="firstName" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <Input id="lastName" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-1">
                      Website or GitHub (optional)
                    </label>
                    <Input id="website" />
                  </div>
                  
                  <div>
                    <label htmlFor="products" className="block text-sm font-medium mb-1">
                      What types of products would you like to sell?
                    </label>
                    <Textarea 
                      id="products" 
                      placeholder="Describe the code products you plan to sell on Picode"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium mb-1">
                      Tell us about your development experience
                    </label>
                    <Textarea 
                      id="experience" 
                      placeholder="Share your background, skills, and any relevant experience"
                    />
                  </div>
                  
                  <Button 
                    type="button" 
                    onClick={handleApplyClick}
                    className="w-full"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
          
          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What types of products can I sell?</AccordionTrigger>
                <AccordionContent>
                  You can sell a wide range of digital code products including scripts, plugins, extensions, full applications, templates, themes, components, and more. All products must be original work or properly licensed.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How do payouts work?</AccordionTrigger>
                <AccordionContent>
                  Payouts are processed according to your plan schedule. Basic sellers receive manual payouts upon request, Professional sellers get weekly automatic payouts, and Business sellers enjoy daily payouts. We support multiple payout methods including PayPal, Stripe, and bank transfers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Do I retain ownership of my products?</AccordionTrigger>
                <AccordionContent>
                  Yes, you retain full ownership and copyright of your products. By selling on Picode, you grant us a license to market and distribute your products to customers according to the terms of our seller agreement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How is customer support handled?</AccordionTrigger>
                <AccordionContent>
                  You are responsible for providing technical support for your products. Picode handles payment and marketplace issues. We provide tools to help you manage customer inquiries and maintain satisfaction ratings.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I offer free products?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can offer free products as part of your marketing strategy. Free products can help build your reputation and drive traffic to your paid offerings. There are no fees on free products.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeSeller;
