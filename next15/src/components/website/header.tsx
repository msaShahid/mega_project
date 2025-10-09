'use client';

import { useState } from 'react';
import { Brain, Menu, X, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/demo', label: 'Demo' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`}
    >
      {label}
    </Link>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">AI Platform</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}

            <Link 
              href={'/signin'}
              className="flex items-center space-x-2 rounded-lg bg-gray-800 px-4 py-2 transition hover:bg-gray-700"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>

            <Link
              href="/get-started"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-white transition-all hover:from-blue-600 hover:to-purple-700 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} onClick={handleMobileLinkClick} />
              ))}

              <Link
                href={'/signin'}
                onClick={handleMobileLinkClick}
                className="flex items-center space-x-2 w-fit rounded-lg bg-gray-800 px-4 py-2 transition hover:bg-gray-700"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>

              <Link
                href="/get-started"
                className="w-fit rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-white transition-all hover:from-blue-600 hover:to-purple-700"
                onClick={handleMobileLinkClick}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
