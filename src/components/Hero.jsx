import React from 'react';
import Spline from '@splinetool/react-spline';
import { MapPin, Calendar, Search, Car } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-[1]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center gap-10 px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            One platform for shopping, health, and travel
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/80">
            Book bus and train tickets, hail a ride, schedule doctor visits, and shop essentials — all in one modern, secure experience.
          </p>
        </div>

        <div id="book" className="w-full max-w-3xl">
          <BookingWidget />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a href="#services" className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-black font-semibold shadow-lg shadow-orange-500/20 hover:brightness-95">
            Explore services
          </a>
          <a href="#about" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

function BookingWidget() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs uppercase tracking-wider text-white/60">Quick booking</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <MapPin className="h-4 w-4 text-white/70" />
          <input aria-label="From" placeholder="From" className="w-full bg-transparent text-sm outline-none placeholder:text-white/50" />
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <MapPin className="h-4 w-4 text-white/70" />
          <input aria-label="To" placeholder="To" className="w-full bg-transparent text-sm outline-none placeholder:text-white/50" />
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <Calendar className="h-4 w-4 text-white/70" />
          <input type="date" aria-label="Date" className="w-full bg-transparent text-sm outline-none [color-scheme:dark]" />
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 font-semibold text-black shadow-lg shadow-orange-500/20 hover:brightness-95">
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/70">
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Bus</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Train</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Doctor</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 inline-flex items-center gap-1"><Car className="h-3 w-3" /> Ride</span>
      </div>
    </div>
  );
}
