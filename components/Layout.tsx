import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 h-[80px] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">YT</span>
            </div>
            YTpilot
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-accent ${
                  isActive(link.path) ? 'text-black font-bold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/checkout" className="relative group">
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-primary-accent transition-colors" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                2
              </span>
            </Link>
            <Link
              to="/checkout"
              className="bg-primary-accent hover:bg-[#00BFE6] text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary-accent/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 lg:hidden shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 ${
                  isActive(link.path) ? 'text-primary-accent' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/checkout"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-black text-white w-full py-3 rounded-lg text-center font-bold mt-4"
            >
              Get Started
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-[80px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary-black text-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
               <div className="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black text-xs font-bold">YT</span>
                </div>
                YTpilot
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering content creators globally with top-tier design, editing, and strategy services.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-accent transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                 <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/work" className="hover:text-white transition-colors">Our Work</Link></li>
                <li><Link to="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg mb-6">Resources</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Guides</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-lg mb-6">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">Get the latest trends and offers directly.</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-accent transition-colors"
                />
                <button className="bg-primary-accent text-white font-bold py-3 rounded-lg hover:bg-[#00BFE6] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-16 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} YTpilot. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-14 h-14 bg-primary-accent rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Layout;