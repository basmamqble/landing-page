import React, { useState } from 'react';
import logoImg from '../assets/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with interactive style */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden bg-white shadow-xl shadow-black/20 group-hover:scale-105 transition-transform p-1.5 border border-slate-700">
              <img src={logoImg} alt="La7ek 7alak Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-wide text-white block">
                <span className="text-white">لحّق <span style={{ color: 'var(--color-primary)' }}>حالك</span></span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block -mt-1">
                عروض قريبة لا تنتظر
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-white">
            <a href="#about" className="hover:text-orange-500 active:text-orange-500 transition-colors">عن المنصة</a>
            <a href="#problem" className="hover:text-orange-500 active:text-orange-500 transition-colors">المشكلة والحل</a>
            <a href="#deals" className="hover:text-orange-500 active:text-orange-500 transition-colors">عروض حية</a>
            <a href="#team" className="hover:text-orange-500 active:text-orange-500 transition-colors">فريق العمل</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl p-2">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 border-t border-slate-800 bg-slate-950/90 backdrop-blur-xl space-y-3 font-medium">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-white hover:text-orange-500">عن المنصة</a>
          <a href="#problem" onClick={() => setIsOpen(false)} className="block py-2 text-white hover:text-orange-500">المشكلة والحل</a>
          <a href="#deals" onClick={() => setIsOpen(false)} className="block py-2 text-white hover:text-orange-500">عروض حية</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="block py-2 text-white hover:text-orange-500">فريق العمل</a>
        </div>
      )}
    </nav>
  );
}