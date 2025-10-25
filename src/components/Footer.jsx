import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} OmniGo. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#home" className="hover:text-white">Top</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
