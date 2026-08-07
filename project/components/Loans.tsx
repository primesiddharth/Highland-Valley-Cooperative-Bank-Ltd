import Link from 'next/link';
import { Home, User, Sprout, Store, Car, ArrowRight, Percent, Coins } from 'lucide-react';

const loans = [
  {
    icon: Home,
    title: 'Home Loan',
    rate: '8.50% p.a.',
    desc: 'Build your dream home with flexible EMIs, tenure up to 30 years, and PM Awas Yojana subsidies for eligible borrowers.',
    badge: 'Most Popular',
    gradient: 'from-blue-500 to-navy-700',
  },
  {
    icon: User,
    title: 'Personal Loan',
    rate: '11.00% p.a.',
    desc: 'Quick approval for weddings, medical needs, or travel. Minimal documentation with flexible repayment options.',
    gradient: 'from-gold-400 to-gold-600',
  },
  {
    icon: Sprout,
    title: 'Agriculture / KCC Loan',
    rate: '7.00% p.a.',
    desc: 'Kisan Credit Card financing for seeds, fertilizers, equipment, and crop cultivation. Subsidised interest for farmers.',
    badge: 'Govt. Subsidised',
    gradient: 'from-green-500 to-green-700',
  },
  {
    icon: Store,
    title: 'Business Loan',
    rate: '10.50% p.a.',
    desc: 'MSME and Mudra loans to grow your enterprise — working capital, machinery, or expansion. Collateral-free up to ₹10 Lakh.',
    gradient: 'from-rose-500 to-rose-700',
  },
  {
    icon: Car,
    title: 'Vehicle Loan',
    rate: '9.25% p.a.',
    desc: 'Finance your two-wheeler or four-wheeler with quick disbursal and up to 90% on-road funding.',
    gradient: 'from-cyan-500 to-blue-700',
  },
  {
    icon: Coins,
    title: 'Gold Loan',
    rate: '9.50% p.a.',
    desc: 'Instant liquidity against your gold ornaments. Safe custody, transparent valuation, and tenure up to 12 months.',
    gradient: 'from-amber-500 to-orange-600',
  },
];

export default function Loans() {
  return (
    <section id="loans" className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7415330/pexels-photo-7415330.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/95 to-navy-800/90" />
        <div className="absolute inset-0 animated-gradient bg-gradient-to-tr from-gold-500/10 via-transparent to-green-500/10" />
      </div>

      {/* Floating blobs */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl float-slow" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl float-slow" style={{ animationDelay: '3s' }} />

      <div className="container-bank relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-gold-400">
            <Percent className="h-4 w-4" />
            Loans & Advances
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Affordable Loans,{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Faster Approval
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-green-500" />
          <p className="mt-4 text-base text-white/80">
            Whether you&apos;re buying a home, funding a harvest, or growing a
            business — our loans come with competitive interest rates and
            personalised guidance from our branch teams.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 perspective-1000">
          {loans.map((loan, i) => {
            const Icon = loan.icon;
            return (
              <div
                key={loan.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/40 hover:bg-white/10 card-3d"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${loan.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                {/* Decorative circle */}
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${loan.gradient} opacity-20 transition-transform duration-700 group-hover:scale-150`} />

                <div className="relative z-10 flex flex-col">
                  <div className="mb-5 flex items-start justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${loan.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    {loan.badge && (
                      <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300 ring-1 ring-green-400/30">
                        {loan.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {loan.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5">
                    <Percent className="h-4 w-4 text-green-400" />
                    <span className="text-sm font-bold text-green-400">
                      Starting @ {loan.rate}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                    {loan.desc}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-all group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-navy-900"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl glass px-6 py-4 text-center text-sm text-white/70">
          <span className="font-medium text-gold-400">Note:</span> Interest rates
          are indicative and subject to change. Final rate depends on credit
          assessment, loan amount, and tenure. Please visit your nearest branch
          for current rates and applicable charges.
        </div>
      </div>
    </section>
  );
}
