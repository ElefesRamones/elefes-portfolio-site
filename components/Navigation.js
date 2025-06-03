import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
                ${isScrolled ? 'py-4 bg-black/10 backdrop-blur-lg' : 'py-6'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-punk bg-gradient-to-r from-accent to-accent-2 
                       bg-clip-text text-transparent cursor-pointer"
            >
              RC
            </motion.span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center gap-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative group ${
                  (router.pathname === href || 
                   (href !== '/' && router.pathname.startsWith(href)))
                    ? 'text-accent'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span className="relative z-10 font-medium transition-colors duration-300">
                  {label}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
                              from-accent to-accent-2 transform origin-left scale-x-0 
                              transition-transform duration-300 ease-out
                              ${(router.pathname === href || 
                                 (href !== '/' && router.pathname.startsWith(href)))
                                  ? 'scale-x-100'
                                  : 'group-hover:scale-x-100'}`} 
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="sm:hidden p-2 text-white/90 hover:text-white rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}