import Link from 'next/link';
import { UserPlus, ArrowRight, Phone, Sparkles } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient bg-gradient-to-r from-gold-500 via-gold-600 to-amber-600" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-cta" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-cta)" />
        </svg>
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl float-slow" />
      <div className="absolute right-10 bottom-0 h-48 w-48 rounded-full bg-navy-900/10 blur-2xl float-slow" style={{ animationDelay: '2s' }} />

      <div className="container-bank relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy-900/20 px-4 py-1.5 text-sm font-medium text-navy-900">
            <Sparkles className="h-4 w-4" />
            Membership opens doors
          </div>
          <h2 className="text-3xl font-bold text-navy-900 text-shadow-lg sm:text-4xl lg:text-5xl">
            Become a Member Today
          </h2>
          <p className="mt-3 text-base text-navy-800/80 sm:text-lg">
            Join 50,000+ members who trust Highland Valley Cooperative Bank for
            their savings, loans, and financial growth. Open your account with
            just Aadhaar and PAN — it takes less than 15 minutes.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-navy-900 px-7 py-4 text-base font-bold text-white shadow-2xl transition-all hover:shadow-navy-900/30"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
            <UserPlus className="h-5 w-5" />
            Open an Account
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+919436012345"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-900 bg-white/10 px-7 py-4 text-base font-semibold text-navy-900 backdrop-blur-sm transition-all hover:bg-navy-900 hover:text-white"
          >
            <Phone className="h-5 w-5" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
