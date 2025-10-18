import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openPaymentPage = () => {
    window.open(
      "https://pay.grow.link/f6f456002c02374a1359e1962bbbbeca-MjA1NjI4OQ",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-playfair text-2xl font-bold text-turquoise hover:text-turquoise/80 transition-colors">
            Dina Face Fitness
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="font-inter text-foreground hover:text-turquoise transition-colors"
            >
              בית
            </Link>
            <Link 
              to="/bonus" 
              className="font-inter text-foreground hover:text-turquoise transition-colors"
            >
              בונוס מיוחד
            </Link>
            <Link 
              to="/faq" 
              className="font-inter text-foreground hover:text-turquoise transition-colors"
            >
              שאלות ותשובות
            </Link>
            <Link 
              to="/bonuses" 
              className="font-inter text-foreground hover:text-turquoise transition-colors"
            >
              בונוסים נוספים
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>

          {/* Desktop CTA Button */}
          <Button 
            className="hidden md:block bg-gradient-primary hover:shadow-glow transition-all duration-300 font-inter"
            onClick={openPaymentPage}
          >
            התחילי עכשיו
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-inter text-foreground hover:text-turquoise transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                בית
              </Link>
              <Link 
                to="/bonus" 
                className="font-inter text-foreground hover:text-turquoise transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                בונוס מיוחד
              </Link>
              <Link 
                to="/faq" 
                className="font-inter text-foreground hover:text-turquoise transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                שאלות ותשובות
              </Link>
              <Link 
                to="/bonuses" 
                className="font-inter text-foreground hover:text-turquoise transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                בונוסים נוספים
              </Link>
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-inter w-full mt-4"
                onClick={openPaymentPage}
              >
                התחילי עכשיו
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
