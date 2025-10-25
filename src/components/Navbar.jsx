import React from 'react';
import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-2xl bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border border-white/10">
          <div className="flex items-center gap-2 pl-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 text-black">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/90">OmniGo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#book" className="hover:text-white">Book</a>
            <a href="#about" className="hover:text-white">About</a>
          </nav>
          <button className="mr-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
