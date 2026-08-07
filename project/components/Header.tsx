'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, Lock, Landmark, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Accounts', href: '#accounts' },
  { name: 'Loans', href: '#loans' },
  { name: 'Deposits', href: '#deposits' },
  { name: 'Branches', href: '#branches' },
  { name: 'Govt. Schemes', href: '#schemes' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white/90 lg:block">
        <div className="container-bank flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-gold-400" />
              +91 94360 12345
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-gold-400" />
              info@highlandvalleycoop.in
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold-400" />
              Kohima, Nagaland - 797001
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">Regulated by RBI | NABARD</span>
            <span className="h-4 w-px bg-white/20" />
            <span className="text-gold-400">IFSC: HVNB0000001</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-bank flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 transition-transform hover:scale-105" aria-label="Highland Valley Cooperative Bank home">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 shadow-lg lg:h-12 lg:w-12">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-400/20 to-transparent" />
              <Landmark className="relative h-6 w-6 text-gold-400 lg:h-7 lg:w-7" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-navy-800 lg:text-base">
                Highland Valley
              </span>
              <span className="text-[11px] font-medium text-muted-foreground lg:text-xs">
                Cooperative Bank Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:text-gold-600"
              >
                {link.name}
              </Link>
            ))}
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy-600">
                More <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-1 w-44 overflow-hidden rounded-lg border border-border bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {navLinks.slice(7).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Net Banking + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="#net-banking"
              className="group relative hidden items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-md transition-all hover:shadow-lg hover:shadow-gold-500/30 sm:flex"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
              <Lock className="relative h-4 w-4" />
              Net Banking Login
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-navy-800 transition-colors hover:bg-navy-50 xl:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[64px] z-40 overflow-y-auto bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 xl:hidden lg:top-[112px]">
          <nav className="container-bank flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-navy-800 hover:text-gold-400"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#net-banking"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-3 text-base font-semibold text-navy-900"
            >
              <Lock className="h-5 w-5" />
              Net Banking Login
            </Link>
            <div className="mt-6 border-t border-white/10 pt-6 text-sm text-white/70">
              <div className="flex items-center gap-2 py-1">
                <Phone className="h-4 w-4 text-gold-400" /> +91 94360 12345
              </div>
              <div className="flex items-center gap-2 py-1">
                <Mail className="h-4 w-4 text-gold-400" /> info@highlandvalleycoop.in
              </div>
              <div className="flex items-center gap-2 py-1">
                <MapPin className="h-4 w-4 text-gold-400" /> Kohima, Nagaland - 797001
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
