
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSection from "@/components/CategoriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Separator className="my-0" />
        <FeaturedProducts />
        <CategoriesSection />
        <WhyChooseUs />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
