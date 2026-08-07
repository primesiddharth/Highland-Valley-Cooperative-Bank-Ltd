import Link from 'next/link';
import { Wallet, Building2, Lock, Repeat, ArrowRight, TrendingUp } from 'lucide-react';

const accounts = [
  {
    icon: Wallet,
    title: 'Savings Account',
    desc: 'Aadhaar-linked savings account with debit card, NEFT/RTGS/IMPS access, and no minimum balance for rural accounts.',
    highlight: 'Interest up to 4% p.a.',
    gradient: 'from-blue-500 via-blue-600 to-navy-700',
    bgGradient: 'from-blue-50 to-blue-100/50',
  },
  {
    icon: Building2,
    title: 'Current Account',
    desc: 'Designed for businesses and traders with unlimited transactions, cheque book facility, and overdraft options.',
    highlight: 'No transaction limits',
    gradient: 'from-gold-400 via-gold-500 to-gold-600',
    bgGradient: 'from-gold-50 to-amber-100/50',
  },
  {
    icon: Lock,
    title: 'Fixed Deposit (FD)',
    desc: 'Grow your savings with assured returns. Flexible tenures from 7 days to 10 years. Senior citizens get extra 0.50% p.a.',
    highlight: 'Up to 7.25% p.a.',
    gradient: 'from-green-500 via-green-600 to-green-700',
    bgGradient: 'from-green-50 to-emerald-100/50',
  },
  {
    icon: Repeat,
    title: 'Recurring Deposit (RD)',
    desc: 'Build a habit of saving every month. Start from just ₹100/month with attractive interest rates and loan against RD.',
    highlight: 'Up to 6.75% p.a.',
    gradient: 'from-rose-500 via-rose-600 to-rose-700',
    bgGradient: 'from-rose-50 to-pink-100/50',
  },
];

export default function Accounts() {
  return (
    <section id="accounts" className="relative overflow-hidden bg-gradient-to-b from-muted/40 to-white py-20 lg:py-28">
      {/* Decorative blobs */}
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-gold-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="container-bank relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-navy-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-navy-700">
            <TrendingUp className="h-4 w-4" />
            Accounts & Deposits
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy-800 sm:text-4xl lg:text-5xl">
            Banking for{' '}
            <span className="bg-gradient-to-r from-blue-600 via-navy-600 to-green-600 bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-green-500" />
          <p className="mt-4 text-base text-muted-foreground">
            From your first savings account to long-term fixed deposits, we offer
            accounts that fit your life — with KYC and Aadhaar-enabled onboarding.
          </p>
        </div>

        <div id="deposits" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-1000">
          {accounts.map((account, i) => {
            const Icon = account.icon;
            return (
              <div
                key={account.title}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${account.bgGradient} p-6 shadow-sm transition-all duration-500 hover:shadow-2xl card-3d`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Decorative circle */}
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${account.gradient} opacity-10 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-20`} />

                <div className="relative z-10 flex flex-col">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${account.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-800">
                    {account.title}
                  </h3>
                  <span className="mt-2 inline-flex w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-green-700 shadow-sm">
                    {account.highlight}
                  </span>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {account.desc}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-gold-600"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
