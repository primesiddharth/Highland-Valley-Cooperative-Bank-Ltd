import Link from 'next/link';
import { Landmark, Home, Sprout, Store, ArrowRight, BadgeCheck } from 'lucide-react';

const schemes = [
  {
    icon: Landmark,
    title: 'PMJDY — Jan Dhan Yojana',
    desc: 'Zero-balance savings account with RuPay debit card, accident insurance cover, and overdraft facility of ₹10,000 after 6 months.',
    tag: 'Ministry of Finance',
    gradient: 'from-blue-500 to-navy-700',
  },
  {
    icon: Home,
    title: 'PM Awas Yojana (PMAY)',
    desc: 'Subsidised home loans for economically weaker and lower-income groups. Interest subsidy up to 6.5% on loans up to ₹6 Lakh.',
    tag: 'Housing for All',
    gradient: 'from-gold-400 to-gold-600',
  },
  {
    icon: Sprout,
    title: 'Kisan Credit Card (KCC)',
    desc: 'Short-term credit for farmers for cultivation, equipment, and post-harvest expenses. Interest subvention and prompt repayment incentives.',
    tag: 'Agriculture Dept.',
    gradient: 'from-green-500 to-green-700',
  },
  {
    icon: Store,
    title: 'PM Mudra Yojana',
    desc: 'Collateral-free loans up to ₹10 Lakh for small businesses and micro units — Shishu, Kishore, and Tarun categories.',
    tag: 'MSME Support',
    gradient: 'from-rose-500 to-rose-700',
  },
];

export default function GovernmentSchemes() {
  return (
    <section id="schemes" className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-gold-50 py-20 lg:py-28">
      {/* Decorative shapes */}
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-green-200/30 blur-3xl float-slow" />
      <div className="absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-gold-200/30 blur-3xl float-slow" style={{ animationDelay: '3s' }} />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/11070641/pexels-photo-11070641.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      <div className="container-bank relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-green-700">
            <BadgeCheck className="h-4 w-4" />
            Government Schemes
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy-800 sm:text-4xl lg:text-5xl">
            We Support{' '}
            <span className="bg-gradient-to-r from-green-600 via-green-500 to-gold-500 bg-clip-text text-transparent">
              National Welfare Schemes
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold-400 via-green-500 to-green-600" />
          <p className="mt-4 text-base text-muted-foreground">
            As a cooperative bank aligned with national priorities, we help you
            access Government of India schemes designed for financial inclusion,
            housing, agriculture, and small enterprise growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-1000">
          {schemes.map((scheme, i) => {
            const Icon = scheme.icon;
            return (
              <div
                key={scheme.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-md transition-all duration-500 hover:shadow-2xl card-3d"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${scheme.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative z-10 flex flex-col transition-colors duration-300 group-hover:text-white">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${scheme.gradient} shadow-lg transition-all duration-500 group-hover:bg-white group-hover:bg-none group-hover:shadow-xl`}>
                    <Icon className="h-7 w-7 text-white transition-colors duration-300 group-hover:text-navy-800" />
                  </div>
                  <span className="mb-2 flex w-fit items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-[11px] font-medium text-green-700 transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                    <BadgeCheck className="h-3 w-3" />
                    {scheme.tag}
                  </span>
                  <h3 className="text-base font-semibold text-navy-800 transition-colors duration-300 group-hover:text-white">
                    {scheme.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
                    {scheme.desc}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors duration-300 group-hover:text-white"
                  >
                    Know More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-navy-50 to-green-50 p-5 text-center text-sm text-muted-foreground">
          Visit any Highland Valley branch — our staff will guide you through
          eligibility and documentation for these schemes.
        </div>
      </div>
    </section>
  );
}
