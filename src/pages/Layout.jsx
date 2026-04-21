

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ShoppingBag, Menu, X, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to top on page change, but ignore for anchor links on the same page
    if (location.hash) {
      // Let the browser handle scrolling for anchor links
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    // Set default meta tags if not already set by individual pages
    // Open Graph Title
    if (!document.querySelector('meta[property="og:title"]')) {
      const ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.content = 'KrisPy Bakery – Ambachtelijk gebak in Zierikzee';
      document.head.appendChild(ogTitle);
    }

    // Open Graph Description
    if (!document.querySelector('meta[property="og:description"]')) {
      const ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.content = 'Ambachtelijke taarten, cupcakes, koekjes en cinnamon rolls. Vers uit onze bakkerij in Zierikzee.';
      document.head.appendChild(ogDescription);
    }

    // Open Graph Image
    if (!document.querySelector('meta[property="og:image"]')) {
      const ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.content = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/d1deb20a4_Taartfotohomepagina.jpg';
      document.head.appendChild(ogImage);
    }

    // Open Graph Type
    if (!document.querySelector('meta[property="og:type"]')) {
      const ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      ogType.content = 'website';
      document.head.appendChild(ogType);
    }

    // Open Graph URL
    if (!document.querySelector('meta[property="og:url"]')) {
      const ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.content = window.location.href;
      document.head.appendChild(ogUrl);
    }

    // Keywords Meta Tag
    if (!document.querySelector('meta[name="keywords"]')) {
      const keywords = document.createElement('meta');
      keywords.name = 'keywords';
      keywords.content = 'bakkerij Zierikzee, ambachtelijke taarten, cupcakes bestellen, cinnamon rolls Zeeland, KrisPy Bakery, maatwerk taarten, vers gebak, lokale bakkerij, taarten op maat, bruidstaarten Zeeland';
      document.head.appendChild(keywords);
    }

    // Set default title if not explicitly set by a page
    if (document.title === '') {
      document.title = 'KrisPy Bakery – Ambachtelijk gebak in Zierikzee';
    }
  }, []); // Run only once on mount

  const navItems = [
    { name: 'Home', path: 'Home' },
    { name: 'Over', path: 'Over' },
    { name: 'Bestellen', path: 'Bestellen' },
    { name: 'FAQ', path: 'FAQ' } // Changed to a regular page link
  ];

  const isActivePage = (pageName) => {
    return currentPageName === pageName || (pageName === 'Home' && location.pathname === '/');
  };

  return (
    <div className="min-h-screen bg-[#F7F1E6]">
      <style>{`
        :root {
          --color-bg: #F7F1E6;
          --color-text: #3A2A20;
          --color-primary: #5B3A2E;
          --color-primary-700: #4A2F25;
          --color-accent: #D2A679;
          --color-line: #E6D7C6;
        }

        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--color-text);
          line-height: 1.75;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        
        .btn-primary {
          background-color: var(--color-primary);
          color: white;
          border-radius: 12px;
          transition: all 0.2s ease;
        }
        
        .btn-primary:hover {
          background-color: var(--color-primary-700);
          transform: translateY(-1px);
        }
        
        .card-shadow {
          box-shadow: 0 4px 20px rgba(59, 42, 32, 0.08);
          border: 1px solid var(--color-line);
          border-radius: 20px;
        }
        
        .accent-line {
          width: 60px;
          height: 3px;
          background-color: var(--color-accent);
          margin-bottom: 1rem;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F7F1E6]/95 backdrop-blur-sm border-b border-[#E6D7C6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex-shrink-0">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/03b1ab260_ChatGPTImageJul29202506_26_37PM.png" 
                alt="KrisPy Bakery Logo" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.path}
                    href={createPageUrl(item.path)}
                    className="text-[#3A2A20] hover:text-[#5B3A2E] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className={`text-[#3A2A20] hover:text-[#5B3A2E] transition-colors duration-200 font-medium ${
                      isActivePage(item.path) ? 'text-[#5B3A2E] border-b-2 border-[#D2A679] pb-1' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Button */}
            {/* The 'Bestel Nu' button in the header already links to the 'Bestellen' page. */}
            <div className="hidden lg:block">
              <Link to={createPageUrl('Bestellen')}>
                <Button className="btn-primary flex items-center gap-2 px-6 py-3">
                  <ShoppingBag className="w-4 h-4" />
                  Bestel Nu
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#3A2A20]" />
              ) : (
                <Menu className="w-6 h-6 text-[#3A2A20]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#F7F1E6] border-t border-[#E6D7C6]">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.path}
                    href={createPageUrl(item.path)}
                    className="block text-[#3A2A20] hover:text-[#5B3A2E] font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className={`block text-[#3A2A20] hover:text-[#5B3A2E] font-medium py-2 ${
                      isActivePage(item.path) ? 'text-[#5B3A2E] border-l-4 border-[#D2A679] pl-4' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-[#E6D7C6]">
                {/* The 'Bestel Nu' button in the mobile menu already links to the 'Bestellen' page. */}
                <Link to={createPageUrl('Bestellen')} className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="btn-primary w-full flex items-center justify-center gap-2 py-3">
                    <ShoppingBag className="w-4 h-4" />
                    Bestel Nu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#3A2A20] text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Pitch */}
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/aeeeba2e4_KrisPyBakeryLogo.png" 
                alt="KrisPy Bakery Logo" 
                className="h-20 w-auto mb-4"
              />
              <p className="text-gray-300 max-w-md">
                Ambachtelijk gebak en maatwerk vanuit onze aan-huis bakkerij. 
                Vers gebakken met liefde en lokale ingrediënten.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold mb-4 text-[#D2A679]">Navigatie</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    {item.isAnchor ? (
                      <a
                        href={createPageUrl(item.path)}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={createPageUrl(item.path)}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4 text-[#D2A679]">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>WhatsApp: +31 06 57 58 68 40</p>
                <p>Afhaaladres: Beddeweeg 12, 4301 EK Zierikzee</p>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/krispy.bakery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D2A679] transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 KrisPy Bakery. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm">
                Privacy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

