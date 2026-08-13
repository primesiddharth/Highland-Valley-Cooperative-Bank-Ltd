import Link from "next/link";
import {
  Landmark,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Accounts", href: "#accounts" },
  { name: "Loans", href: "#loans" },
  { name: "Deposits", href: "#deposits" },
  { name: "Govt. Schemes", href: "#schemes" },
  { name: "Branches", href: "#branches" },
  { name: "Careers", href: "#careers" },
];

const serviceLinks = [
  { name: "Savings Account", href: "#accounts" },
  { name: "Fixed Deposit (FD)", href: "#deposits" },
  { name: "Recurring Deposit (RD)", href: "#deposits" },
  { name: "Home Loan", href: "#loans" },
  { name: "Kisan Credit Card", href: "#schemes" },
  { name: "Net Banking", href: "#net-banking" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />

      {/* Main footer */}
      <div className="container-bank relative z-10 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand & contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 ring-1 ring-gold-500/30 shadow-lg">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-400/20 to-transparent" />
                <Landmark className="relative h-6 w-6 text-gold-400" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold">Highland Valley</span>
                <span className="text-xs text-white/60">
                  Cooperative Bank Ltd.
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              A community-rooted cooperative bank serving Nagaland and Northeast
              India since 1994. Banking that grows with you.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <p className="flex items-start gap-2 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                2nd Floor, Heritage Plaza, Circular Road, Kohima, Nagaland -
                797001
              </p>
              <p className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                +91 94360 12345
              </p>
              <p className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                info@highlandvalleycoop.in
              </p>
              <p className="flex items-start gap-2 text-white/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                Mon–Fri: 10:00 AM – 4:00 PM
                <br />
                Sat: 10:00 AM – 1:00 PM
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Stay Connected
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Get updates on new schemes, interest rate changes, and branch
              announcements.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold-400 focus:bg-white/10"
              />
              <button
                type="button"
                className="shrink-0 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:from-gold-400 hover:to-gold-500 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-5 flex gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-all hover:bg-gold-500 hover:text-navy-900"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory disclaimer */}
      <div className="border-t border-white/10 bg-navy-900">
        <div className="container-bank py-5">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-white/60 lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                Registered under Nagaland State Cooperative Societies Act
              </span>
              <span className="hidden lg:inline">|</span>
              <span>Regulated by Reserve Bank of India (RBI)</span>
              <span className="hidden lg:inline">|</span>
              <span>Member of NAFCUB</span>
            </div>
            <span className="text-white/50">
              Deposits insured by DICGC up to ₹5 Lakh
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy-900">
        <div className="container-bank flex flex-col items-center justify-between gap-3 py-4 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          {/* Copyright Info */}
          <p>
            © 2025 Highland Valley Cooperative Bank Ltd. All Rights Reserved.{" "}
            <span className="hidden sm:inline">|</span> IFSC: HVNB0000001{" "}
            <span className="hidden sm:inline">|</span> License No.
            RBI/COOP/NL/1994/001 (placeholder)
          </p>

          {/* CreyoTech Credit */}
          <a
            href="https://creyotech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-1.5 transition-colors duration-300"
          >
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by</span>

            <span className="font-semibold text-amber-400 transition-colors group-hover:text-amber-300">
              Creyotech IT Services
            </span>

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
