
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

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

  // Close mobile menu after navigation
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Check if a path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
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
          <Link to="/" className="text-2xl font-bold text-gradient">
            Picode
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/marketplace" 
              className={`font-medium transition-colors ${isActive('/marketplace') ? 'text-primary' : 'hover:text-primary'}`}
            >
              Marketplace
            </Link>
            <div className="relative group">
              <button className="flex items-center font-medium hover:text-primary transition-colors">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link
                    to="/categories/automation-scripts"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    Automation Scripts
                  </Link>
                  <Link
                    to="/categories/saas-tools"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    SaaS Tools
                  </Link>
                  <Link
                    to="/categories/ai-tools"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    AI Tools
                  </Link>
                  <Link
                    to="/categories/chrome-extensions"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    Chrome Extensions
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/become-seller" 
              className={`font-medium transition-colors ${isActive('/become-seller') ? 'text-primary' : 'hover:text-primary'}`}
            >
              Sell With Us
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'hover:text-primary'}`}
            >
              Contact
            </Link>
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
              <Link
                to="/"
                className={`font-medium py-2 transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/marketplace"
                className={`font-medium py-2 transition-colors ${isActive('/marketplace') ? 'text-primary' : 'hover:text-primary'}`}
                onClick={closeMenu}
              >
                Marketplace
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="font-medium py-2 flex items-center justify-between w-full text-left">
                  Categories <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/automation-scripts" className="w-full" onClick={closeMenu}>
                      Automation Scripts
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/saas-tools" className="w-full" onClick={closeMenu}>
                      SaaS Tools
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/ai-tools" className="w-full" onClick={closeMenu}>
                      AI Tools
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/chrome-extensions" className="w-full" onClick={closeMenu}>
                      Chrome Extensions
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                to="/become-seller"
                className={`font-medium py-2 transition-colors ${isActive('/become-seller') ? 'text-primary' : 'hover:text-primary'}`}
                onClick={closeMenu}
              >
                Sell With Us
              </Link>
              <Link
                to="/about"
                className={`font-medium py-2 transition-colors ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`font-medium py-2 transition-colors ${isActive('/contact') ? 'text-primary' : 'hover:text-primary'}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
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
