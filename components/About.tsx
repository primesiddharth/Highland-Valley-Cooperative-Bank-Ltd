import { Target, Eye, History, Award, HeartHandshake, ShieldCheck, TrendingUp, Users, Building2 } from 'lucide-react';

const stats = [
  { value: '25+', label: 'Branches Across NE India', icon: Building2, color: 'from-blue-500 to-blue-700' },
  { value: '50,000+', label: 'Satisfied Members', icon: Users, color: 'from-green-500 to-green-700' },
  { value: '30+ Years', label: 'of Community Trust', icon: Award, color: 'from-gold-400 to-gold-600' },
  { value: '₹500 Cr+', label: 'Total Assets Managed', icon: TrendingUp, color: 'from-rose-500 to-rose-700' },
];

export default function About() {
  return (
    <section id="about" className="bg-white">
      {/* Full-width background image banner with story content on top */}
      <div className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32090368/pexels-photo-32090368.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Rolling green hills of Dzukou Valley, Nagaland — the bank's home region"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-900/80 to-navy-800/70" />
          <div className="absolute inset-0 animated-gradient bg-gradient-to-tr from-gold-500/15 via-transparent to-green-500/15" />
        </div>

        {/* Floating decorative blobs */}
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl float-slow" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-green-500/10 blur-3xl float-slow" style={{ animationDelay: '2s' }} />

        {/* Content on top of image */}
        <div className="container-bank relative z-10 py-20 lg:py-28">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-gold-300">
              <History className="h-4 w-4" />
              About Our Bank
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white text-shadow-lg sm:text-4xl lg:text-5xl">
              A Legacy of Trust in the{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Heart of Nagaland
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-green-500" />
          </div>

          {/* Story content directly on the image */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-600 to-navy-900 shadow-lg ring-1 ring-gold-500/30">
                <History className="h-6 w-6 text-gold-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Our Story</h3>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl glass p-6 shadow-xl">
                <p className="text-base leading-relaxed text-white/90">
                  Founded in 1994 in Kohima, Nagaland, Highland Valley Cooperative
                  Bank Ltd. began as a small society with a big vision — to bring
                  formal banking to the underserved communities of Northeast India.
                  What started with a single room and a handful of members has grown
                  into a trusted financial institution serving over 50,000 members
                  across 25+ branches.
                </p>
              </div>
              <div className="rounded-2xl glass p-6 shadow-xl">
                <p className="text-base leading-relaxed text-white/90">
                  As a cooperative bank registered under the{' '}
                  <span className="font-semibold text-gold-300">Nagaland State Cooperative Societies Act</span>,
                  we are regulated by the{' '}
                  <span className="font-semibold text-gold-300">Reserve Bank of India (RBI)</span>{' '}
                  and supervised by{' '}
                  <span className="font-semibold text-gold-300">NABARD</span>. We remain
                  deeply rooted in the communities we serve — from farmers in Wokha
                  to entrepreneurs in Dimapur.
                </p>
              </div>
            </div>

            {/* RBI/NABARD badge */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 rounded-2xl glass px-5 py-4 shadow-xl lift-3d">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-600 to-navy-900 shadow-lg">
                  <Award className="h-6 w-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">RBI Licensed</p>
                  <p className="text-xs text-white/70">NABARD Regulated</p>
                </div>
              </div>
            </div>

            {/* Mission & Vision cards — glass on image */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 perspective-1000">
              <div className="group relative overflow-hidden rounded-2xl glass p-6 shadow-xl transition-all duration-500 hover:shadow-2xl card-3d">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-navy-400/20 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-800 shadow-lg">
                    <Target className="h-6 w-6 text-gold-400" />
                  </div>
                  <h4 className="font-semibold text-white">Our Mission</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                    To provide accessible, affordable financial services that
                    empower individuals, farmers, and small businesses across
                    Northeast India.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl glass p-6 shadow-xl transition-all duration-500 hover:shadow-2xl card-3d">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-400/20 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Our Vision</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                    To be the most trusted cooperative bank in the Northeast,
                    blending modern digital banking with genuine community care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="relative z-10">
          <svg className="w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 30C1320 10 1200 0 1080 5C960 10 840 30 720 35C600 40 480 30 360 25C240 20 120 25 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Stats bar + values — below the image, on white */}
      <div className="container-bank py-16 lg:py-20">
        {/* Stats bar — colorful gradient cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.color} p-6 text-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
                <Icon className="mb-3 h-8 w-8 text-white/80" />
                <p className="text-3xl font-bold lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-white/80">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Values strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 font-medium text-green-700">
            <HeartHandshake className="h-4 w-4" /> Member-Owned Cooperative
          </span>
          <span className="flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 font-medium text-navy-700">
            <ShieldCheck className="h-4 w-4" /> DICGC Insured Deposits up to ₹5 Lakh
          </span>
          <span className="flex items-center gap-2 rounded-full bg-gold-50 px-4 py-2 font-medium text-gold-700">
            <Award className="h-4 w-4" /> NAFCUB Member
          </span>
        </div>
      </div>
    </section>
  );
}
