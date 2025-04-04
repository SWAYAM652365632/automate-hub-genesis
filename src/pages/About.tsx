
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gradient">About Picode</h1>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-xl mb-6">
                Picode is a revolutionary marketplace for developers and businesses to discover, buy, and sell high-quality code solutions.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p>
                Our mission is to connect developers who build amazing tools with the people who need them. 
                We believe that great code deserves to be shared, and developers deserve to be rewarded for their expertise.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
              <p>
                Founded in 2025, Picode began as a small community of developers who wanted to share their work.
                Today, we've grown into a global marketplace with thousands of products and a vibrant community of 
                developers and businesses.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Quality:</strong> We curate only the best, most reliable code.</li>
                <li><strong>Transparency:</strong> Clear pricing, no hidden fees.</li>
                <li><strong>Community:</strong> We support developers at every stage of their journey.</li>
                <li><strong>Innovation:</strong> Constantly evolving to meet the needs of modern development.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Join Our Community</h2>
              <p>
                Whether you're looking to buy time-saving tools or sell your creations, 
                Picode is the place where code becomes valuable.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
