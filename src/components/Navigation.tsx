import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { List, X } from 'phosphor-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ciaoLogo from '@/assets/ciao-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to sections when page loads with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        const target = document.querySelector(hash) as HTMLElement;
        if (target) {
          const navHeight = 60;
          const targetPosition = target.offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Tours', href: '#tours' },
    { name: 'Festivals', href: '#festivals' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // If we're not on the homepage, navigate to homepage with hash
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }
    
    // If we're on the homepage, scroll to the section
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      const navHeight = 60; // Account for fixed nav height
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // If we're not on the homepage, navigate to homepage
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    
    // If we're on the homepage, scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-full mx-auto px-0 py-4">
          <div className="flex items-center justify-between px-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            <button 
              onClick={handleLogoClick}
              className="flex items-center space-x-3 cursor-pointer"
            >
                <motion.img 
                  src={ciaoLogo} 
                  alt="Ciao India Tours" 
                  className="h-8 w-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                <motion.span 
                  className="text-xl font-semibold text-foreground tracking-luxury"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Ciao India Tours
                </motion.span>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light tracking-wide cursor-pointer"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-xl z-40 md:hidden border-l border-white/10"
      >
        <div className="pt-20 px-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                x: isMobileMenuOpen ? 0 : 50 
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => handleNavClick(item.href)}
              className="block py-4 text-lg text-muted-foreground hover:text-primary transition-colors duration-300 border-b border-white/5 w-full text-left cursor-pointer"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;