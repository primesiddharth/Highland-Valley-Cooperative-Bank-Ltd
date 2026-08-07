import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    designation: 'Small Business Owner, Dimapur',
    quote:
      'I took a Mudra loan to expand my hardware shop. The staff at the Dimapur branch guided me through every document. The loan was sanctioned in under a week — no hidden charges, no hassle.',
    rating: 5,
    image: 'https://images.pexels.com/photos/12495827/pexels-photo-12495827.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    gradient: 'from-blue-500 to-navy-700',
  },
  {
    name: 'Priya Konyak',
    designation: 'School Teacher, Mokokchung',
    quote:
      'Highland Valley feels different from big banks. They know me by name. My salary account, RD, and FD are all here, and the interest rates on deposits are genuinely better than nationalised banks.',
    rating: 5,
    image: 'https://images.pexels.com/photos/17450830/pexels-photo-17450830.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    gradient: 'from-gold-400 to-gold-600',
  },
  {
    name: 'Zhipreni Ao',
    designation: 'Farmer & KCC Holder, Wokha',
    quote:
      'The Kisan Credit Card changed how I farm. I get credit before sowing season and repay after harvest. The interest subsidy makes it affordable. This bank truly understands farmers.',
    rating: 5,
    image: 'https://images.pexels.com/photos/10987899/pexels-photo-10987899.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    gradient: 'from-green-500 to-green-700',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-20 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7694299/pexels-photo-7694299.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-5"
        />
        <div className="absolute inset-0 animated-gradient bg-gradient-to-tr from-gold-500/10 via-transparent to-green-500/10" />
      </div>

      {/* Floating blobs */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl float-slow" />
      <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl float-slow" style={{ animationDelay: '2s' }} />

      <div className="container-bank relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-gold-400">
            <Star className="h-4 w-4 fill-gold-400" />
            Member Stories
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Trusted by Thousands{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Across the Northeast
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-green-500" />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 perspective-1000">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/40 hover:bg-white/10 card-3d"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-gold-400/20 transition-transform duration-500 group-hover:scale-125 group-hover:text-gold-400/40" />
              <div className="relative z-10 flex flex-col">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${t.gradient} blur-sm opacity-60`} />
                    <img
                      src={t.image}
                      alt={`Portrait of ${t.name}`}
                      className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/60">{t.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
