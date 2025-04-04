
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, ChevronDown, LogIn, ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gradient">
            Picode
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/marketplace" className="font-medium hover:text-primary transition-colors">
              Marketplace
            </a>
            <div className="relative group">
              <button className="flex items-center font-medium hover:text-primary transition-colors">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <a
                    href="/categories/automation-scripts"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Automation Scripts
                  </a>
                  <a
                    href="/categories/saas-tools"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    SaaS Tools
                  </a>
                  <a
                    href="/categories/ai-tools"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    AI Tools
                  </a>
                  <a
                    href="/categories/chrome-extensions"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Chrome Extensions
                  </a>
                </div>
              </div>
            </div>
            <a href="/sell" className="font-medium hover:text-primary transition-colors">
              Sell With Us
            </a>
            <a href="/about" className="font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button variant="outline">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/marketplace"
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Marketplace
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="font-medium py-2 flex items-center justify-between w-full text-left">
                  Categories <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <a href="/categories/automation-scripts" className="w-full">
                      Automation Scripts
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/categories/saas-tools" className="w-full">
                      SaaS Tools
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/categories/ai-tools" className="w-full">
                      AI Tools
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/categories/chrome-extensions" className="w-full">
                      Chrome Extensions
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a
                href="/sell"
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sell With Us
              </a>
              <a
                href="/about"
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 flex items-center justify-between">
                <Button variant="outline" size="sm" className="w-[48%]">
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Button>
                <Button size="sm" className="w-[48%]">
                  Sign Up
                </Button>
              </div>
              <Button
                variant="ghost"
                className="justify-start pl-0"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <>
                    <Moon className="mr-2 h-5 w-5" /> Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="mr-2 h-5 w-5" /> Light Mode
                  </>
                )}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
