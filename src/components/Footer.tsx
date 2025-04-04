
import { Github, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/marketplace" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="/sell" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Sell With Us
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center">
                  <Github className="h-5 w-5 mr-2" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center">
                  <Twitter className="h-5 w-5 mr-2" /> Twitter
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:picode.development@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center">
                  <Mail className="h-5 w-5 mr-2" /> picode.development@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; Picode 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
