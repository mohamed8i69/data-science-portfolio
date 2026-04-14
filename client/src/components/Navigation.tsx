import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadCV = () => {
    const cvUrl = localStorage.getItem("portfolio_cv_url");
    const cvName = localStorage.getItem("portfolio_cv_name");
    
    if (!cvUrl) {
      alert("CV not available for download yet");
      return;
    }

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = cvName || "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    // { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">DS</span>
          </div>
          <span className="font-bold text-primary text-lg hidden sm:inline">
            Data Science
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
          <Button 
            onClick={handleDownloadCV}
            className="bg-primary hover:bg-blue-800 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              onClick={handleDownloadCV}
              className="w-full bg-primary hover:bg-blue-800 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
