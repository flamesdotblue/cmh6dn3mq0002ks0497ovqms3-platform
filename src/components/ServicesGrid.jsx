import React from 'react';
import { ShoppingBag, Stethoscope, Train, Bus, Car } from 'lucide-react';

const services = [
  {
    title: 'Shopping',
    desc: 'Browse curated stores, daily essentials, and secure checkout with unified rewards.',
    icon: ShoppingBag,
    tag: 'Commerce',
    cta: 'Start shopping',
  },
  {
    title: 'Healthcare',
    desc: 'Find doctors, book appointments, and manage prescriptions with ease.',
    icon: Stethoscope,
    tag: 'Care',
    cta: 'Find a doctor',
  },
  {
    title: 'Train & Bus',
    desc: 'Search schedules, compare fares, and reserve seats instantly.',
    icon: Train,
    tag: 'Transit',
    cta: 'Book tickets',
  },
  {
    title: 'Ride-Hailing',
    desc: 'Get a ride in minutes — safe, fast, and affordable across the city.',
    icon: Car,
    tag: 'Mobility',
    cta: 'Request a ride',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Everything you need — in one place</h2>
            <p className="mt-2 max-w-2xl text-white/70">A modern super-app experience combining travel bookings, healthcare, and shopping with delightful design.</p>
          </div>
          <a href="#book" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">Quick book</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, icon: Icon, tag, cta }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
      <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-orange-500/20 blur-2xl transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-6" />
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
          {tag}
        </div>
        <div className="rounded-lg bg-white/5 p-2 text-orange-300">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      <button className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-3 py-2 text-sm font-semibold text-black shadow-orange-500/20 shadow hover:brightness-95">
        {cta}
      </button>
    </div>
  );
}
