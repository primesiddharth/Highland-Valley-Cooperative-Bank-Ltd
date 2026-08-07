import { MapPin, Percent, UserCheck, ShieldCheck, Fingerprint, Clock } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Local Community Focus',
    desc: 'We understand Northeast India — its people, its farms, and its businesses. Decisions are made locally, by people who know you.',
    gradient: 'from-blue-500 to-navy-700',
  },
  {
    icon: Percent,
    title: 'Low Interest Rates',
    desc: 'Competitive lending rates starting from 7% p.a. for agriculture, with no hidden charges and transparent fee structures.',
    gradient: 'from-gold-400 to-gold-600',
  },
  {
    icon: UserCheck,
    title: 'Personalised Service',
    desc: 'No call-centre runaround. Talk to your branch manager directly. We treat every member as a partner, not a number.',
    gradient: 'from-green-500 to-green-700',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Digital Banking',
    desc: 'Net Banking, mobile-friendly access, NEFT/RTGS/IMPS transfers — all secured with two-factor authentication.',
    gradient: 'from-rose-500 to-rose-700',
  },
  {
    icon: Fingerprint,
    title: 'Aadhaar & KYC Enabled',
    desc: 'Quick, paperless account opening with Aadhaar e-KYC. PAN Card linked accounts for seamless compliance.',
    gradient: 'from-cyan-500 to-blue-700',
  },
  {
    icon: Clock,
    title: 'Convenient Banking Hours',
    desc: 'Extended counter service Mon–Fri 10 AM–4 PM and Sat 10 AM–1 PM, with digital banking available 24×7.',
    gradient: 'from-amber-500 to-orange-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-muted/30 to-white py-20 lg:py-28">
      {/* Decorative blobs */}
      <div className="absolute right-1/4 top-10 h-64 w-64 rounded-full bg-gold-100/40 blur-3xl float-slow" />
      <div className="absolute left-1/4 bottom-10 h-72 w-72 rounded-full bg-green-100/40 blur-3xl float-slow" style={{ animationDelay: '2s' }} />

      <div className="container-bank relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-100 to-amber-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-gold-700">
            <ShieldCheck className="h-4 w-4" />
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy-800 sm:text-4xl lg:text-5xl">
            Banking That{' '}
            <span className="bg-gradient-to-r from-gold-500 to-green-600 bg-clip-text text-transparent">
              Understands You
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-green-500" />
          <p className="mt-4 text-base text-muted-foreground">
            For three decades, families and businesses across Nagaland and the
            Northeast have trusted us — here&apos;s why they keep coming back.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 perspective-1000">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-2xl card-3d"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Corner gradient glow */}
                <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`} />

                <div className="relative z-10 flex gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
