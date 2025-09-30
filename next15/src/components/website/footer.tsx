'use client';

import Link from 'next/link';
import { Brain, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: Twitter,
  },
  {
    href: 'mailto:info@aiplatform.com',
    label: 'Email',
    icon: Mail,
  },
];

const productLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/api', label: 'API' },
  { href: '/docs', label: 'Documentation' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#');
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className="hover:text-white transition-colors">
      {label}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Social Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-8 w-8 text-blue-400" aria-hidden="true" />
              <span className="text-2xl font-bold text-white">AI Platform</span>
            </div>
            <p className="mb-6 max-w-md">
              Empowering businesses with cutting-edge AI solutions for a smarter, more efficient future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <nav aria-label="Product Links">
            <h3 className="text-lg font-semibold mb-6 text-white">Product</h3>
            <ul className="space-y-3">
              {productLinks.map(({ href, label }) => (
                <li key={label}>
                  <FooterLink href={href} label={label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-label="Company Links">
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <FooterLink href={href} label={label} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {currentYear} AI Platform. All rights reserved.</p>
            <address className="not-italic flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <span>
                Contact:{' '}
                <a href="mailto:info@aiplatform.com" className="hover:text-white">
                  info@aiplatform.com
                </a>
              </span>
              <span className="hidden sm:inline">|</span>
              <span>+1 (555) 123-4567</span>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
