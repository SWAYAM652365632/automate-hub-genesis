
import { Zap, Lock, Wrench, DollarSign } from "lucide-react";

// Features data
const features = [
  {
    id: 1,
    title: "Instant Downloads",
    description: "Get immediate access to tools after purchase",
    icon: Zap,
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "SSL encrypted checkout with multiple payment options",
    icon: Lock,
  },
  {
    id: 3,
    title: "Dev-Tested",
    description: "All tools are reviewed and tested by our team",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description: "Competitive prices with no hidden fees",
    icon: DollarSign,
  },
];

// Feature card component
const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => {
  const Icon = feature.icon;
  
  return (
    <div className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover-card">
      <div className="mr-5">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Why Choose Picode</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to providing high-quality tools with exceptional service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
