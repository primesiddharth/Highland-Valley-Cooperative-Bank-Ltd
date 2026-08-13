import Link from 'next/link';
import { ArrowRight, ShieldCheck, TrendingUp, Users, PiggyBank, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900">
      {/* Background image with vibrant overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/32060854/pexels-photo-32060854.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Lush green hills and misty landscape of Dzukou Valley, Nagaland, India"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/85 to-navy-800/70" />
        {/* Animated gradient mesh overlay */}
        <div className="absolute inset-0 animated-gradient bg-gradient-to-tr from-gold-500/20 via-transparent to-green-500/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
      </div>

      {/* Floating decorative blobs */}
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl float-slow" />
      <div className="absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-green-500/15 blur-3xl float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl float-slow" style={{ animationDelay: '4s' }} />

      <div className="container-bank relative z-10 grid gap-12 py-10 lg:grid-cols-2 lg:py-24 xl:py-10">
        {/* Left content */}
        <div className="flex flex-col justify-center animate-fade-in-up">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 bg-gradient-to-r from-gold-500/20 to-gold-600/10 px-3 py-1 text-xs font-medium text-gold-300 shadow-lg">
            <ShieldCheck className="h-3 w-3" />
            Serving Northeast India since 1994
            <span className="ml-1 flex h-2 w-2 rounded-full bg-green-400 pulse-glow" />
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white text-shadow-lg sm:text-5xl xl:text-6xl">
            Banking Rooted in{' '}
            <span className="relative bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
              Community Trust
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                <path d="M2 5C50 2 150 2 298 5" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#e6b233" />
                    <stop offset="1" stopColor="#1fa553" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="mt-4 text-base font-medium text-gold-300/90">
            Aapka Vishwas, Hamari Zimmedari
          </p>

          <p className="mt-2 max-w-xl text-base leading-tight font-medium text-white text-shadow-lg sm:text-sm">
            From the hills of Kohima to the valleys of Northeast India, Highland
            Valley Cooperative Bank has empowered farmers, families, and
            businesses for over three decades. We bring you modern banking with
            the warmth of a community that grows together.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="#accounts"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-2 text-base font-bold text-navy-900 shadow-xl transition-all hover:shadow-2xl hover:shadow-gold-500/30"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
              Open an Account
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#loans"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-4 py-2 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-gold-400/50 hover:bg-white/10"
            >
              Explore Loans
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">25+</span>
              <span className="text-xs text-white/60">Branches</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">50,000+</span>
              <span className="text-xs text-white/60">Members</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">₹500 Cr+</span>
              <span className="text-xs text-white/60">Assets</span>
            </div>
          </div>
        </div>

        {/* Right: 3D feature cards */}
        <div className="hidden items-center justify-end lg:flex perspective-1500">
          <div className="grid w-full max-w-md gap-4">
            <div className="group flex items-center gap-4 rounded-2xl glass p-5 shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
                <PiggyBank className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Savings & Deposits</h3>
                <p className="text-sm text-white/70">FD up to 7.25% p.a. for senior citizens</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl glass p-5 shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-2 animate-fade-in-up ml-8" style={{ animationDelay: '0.2s' }}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg">
                <TrendingUp className="h-7 w-7 text-navy-900" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Easy Loans</h3>
                <p className="text-sm text-white/70">Home, Kisan & Business loans from 8.5% p.a.</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl glass p-5 shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                <Users className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Govt. Schemes Support</h3>
                <p className="text-sm text-white/70">PMJDY, PMAY, KCC & Mudra Yojana</p>
              </div>
            </div>

            {/* Rating badge */}
            <div className="mt-2 flex items-center gap-3 rounded-2xl glass px-5 py-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">4.8 / 5 Member Rating</p>
                <p className="text-xs text-white/60">Based on 2,400+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative z-10">
        <svg className="w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1320 10 1200 0 1080 5C960 10 840 30 720 35C600 40 480 30 360 25C240 20 120 25 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
