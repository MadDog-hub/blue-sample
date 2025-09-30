import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import OceanStickers from '@/components/OceanStickers';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { name: 'Our Moments', href: '#slideshow' },
    { name: 'Countdown', href: '#countdown' },
    { name: 'Our Story', href: '#story' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Venue', href: '#venue' },
    { name: 'Dress Code', href: '#dresscode' },
    { name: 'Prenup Photos', href: '#prenup-photos' },
    { name: 'RSVP', href: '#rsvp' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide navigation based on scroll - only show when scrolling starts
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        // Hide navigation when at the top
        setIsVisible(false);
      }

      // Update active section
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Don't show navigation immediately when component mounts
    setIsVisible(false);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.slice(1); // Remove the # from the href
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Calculate the offset for the fixed navigation
      const navHeight = 64; // Approximate navigation height
      const elementTop = element.offsetTop - navHeight;
      
      // Smooth scroll to the element
      window.scrollTo({
        top: Math.max(0, elementTop),
        behavior: 'smooth'
      });
    } else {
      // Fallback: try querySelector if getElementById fails
      const fallbackElement = document.querySelector(href);
      if (fallbackElement) {
        const navHeight = 64;
        const rect = fallbackElement.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: Math.max(0, elementTop),
          behavior: 'smooth'
        });
      } else {
        // If element is not found, scroll to top
        console.warn(`Section ${sectionId} not found`);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-soft transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-xl font-display font-semibold text-gold">
              A<span className="text-gold">&</span>S
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-primary/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/90 backdrop-blur-md border-b border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;