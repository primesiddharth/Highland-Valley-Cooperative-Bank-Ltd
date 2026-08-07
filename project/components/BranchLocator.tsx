import { Search, MapPin, Phone, Clock, Building2, Navigation, Navigation2 } from 'lucide-react';

const branches = [
  {
    name: 'Main Branch — Kohima',
    address: '2nd Floor, Heritage Plaza, Circular Road, Kohima, Nagaland - 797001',
    ifsc: 'HVNB0000001',
    phone: '+91 94360 12345',
    hours: 'Mon–Fri: 10:00 AM – 4:00 PM | Sat: 10:00 AM – 1:00 PM',
    isMain: true,
    gradient: 'from-gold-400 to-gold-600',
  },
  {
    name: 'Dimapur Branch',
    address: 'GS Road, Near City Tower, Dimapur, Nagaland - 797112',
    ifsc: 'HVNB0000002',
    phone: '+91 94360 23456',
    hours: 'Mon–Fri: 10:00 AM – 4:00 PM | Sat: 10:00 AM – 1:00 PM',
    gradient: 'from-blue-500 to-navy-700',
  },
  {
    name: 'Mokokchung Branch',
    address: 'Marangchung Junction, Mokokchung, Nagaland - 798601',
    ifsc: 'HVNB0000003',
    phone: '+91 94360 34567',
    hours: 'Mon–Fri: 10:00 AM – 4:00 PM | Sat: 10:00 AM – 1:00 PM',
    gradient: 'from-green-500 to-green-700',
  },
  {
    name: 'Wokha Branch',
    address: 'Police Point, Wokha Town, Wokha, Nagaland - 797111',
    ifsc: 'HVNB0000004',
    phone: '+91 94360 45678',
    hours: 'Mon–Fri: 10:00 AM – 4:00 PM | Sat: 10:00 AM – 1:00 PM',
    gradient: 'from-rose-500 to-rose-700',
  },
];

export default function BranchLocator() {
  return (
    <section id="branches" className="relative overflow-hidden bg-gradient-to-b from-white to-muted/40 py-20 lg:py-28">
      {/* Background image faint */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/12522753/pexels-photo-12522753.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      <div className="container-bank relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-navy-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-navy-700">
            <Navigation2 className="h-4 w-4" />
            Branch Network
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy-800 sm:text-4xl lg:text-5xl">
            Find a Branch{' '}
            <span className="bg-gradient-to-r from-navy-600 to-green-600 bg-clip-text text-transparent">
              Near You
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-green-500" />
          <p className="mt-4 text-base text-muted-foreground">
            With 25+ branches across Nagaland and the Northeast, we&apos;re never
            far away. Visit us for account opening, passbook updates, KYC, and
            loan consultations.
          </p>
        </div>

        {/* Search bar */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-3 shadow-lg sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-muted/30 px-4 py-3">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by city, branch name, or IFSC code..."
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy-700 to-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:from-navy-600 hover:to-navy-800"
            >
              <Navigation className="h-4 w-4" />
              Locate Branch
            </button>
          </div>
        </div>

        {/* Branch cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 perspective-1000">
          {branches.map((branch, i) => (
            <div
              key={branch.name}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:shadow-2xl card-3d ${
                branch.isMain
                  ? 'border-gold-300 bg-gradient-to-br from-gold-50 to-amber-50'
                  : 'border-border bg-white'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Decorative gradient corner */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${branch.gradient} opacity-10 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-20`} />

              {branch.isMain && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  Head Office
                </span>
              )}
              <div className={`relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${branch.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy-800">
                {branch.name}
              </h3>
              <div className="mt-4 space-y-2.5 text-sm">
                <p className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" />
                  {branch.address}
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-navy-600" />
                  {branch.phone}
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0 text-navy-600" />
                  {branch.hours}
                </p>
                <p className="flex items-center gap-2 pt-1">
                  <span className="text-xs font-medium text-muted-foreground">IFSC:</span>
                  <span className="rounded-md bg-navy-50 px-2.5 py-1 font-mono text-xs font-semibold text-navy-700">
                    {branch.ifsc}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
