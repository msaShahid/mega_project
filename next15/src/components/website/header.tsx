"use client";
import { useState,useEffect } from 'react';
import { Brain, Menu, X, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navigation() {


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // NEW
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/demo', label: 'Demo' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact', isPage: true },
  ];

  if (!hasMounted) return null;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">AI Platform</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label, isPage }) =>
              isPage ? (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors hover:text-blue-400 ${
                    isActive(href) ? 'text-blue-400' : ''
                  }`}
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={href}
                  href={href}
                  className="transition-colors hover:text-blue-400"
                >
                  {label}
                </a>
              )
            )}
            <button
              className="flex items-center space-x-2 rounded-lg bg-gray-800 px-4 py-2 transition hover:bg-gray-700"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </button>
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
              {navLinks.map(({ href, label, isPage }) =>
                isPage ? (
                  <Link
                    key={href}
                    href={href}
                    className={`transition-colors hover:text-blue-400 ${
                      isActive(href) ? 'text-blue-400' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={href}
                    href={href}
                    className="transition-colors hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                )
              )}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-fit rounded-lg bg-gray-800 px-4 py-2 transition hover:bg-gray-700"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </button>
              <Link
                href="/get-started"
                className="w-fit rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-white transition-all hover:from-blue-600 hover:to-purple-700"
                onClick={() => setIsMenuOpen(false)}
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
