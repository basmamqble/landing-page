import React from 'react';
import logoImg from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-xl pt-16 pb-8 text-slate-300 overflow-hidden">
      
      {/* خلفية جمالية خفيفة */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* العمود الأول: معلومات المنصة */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-2 shadow-xl shadow-black/30 border border-slate-700">
                <img src={logoImg} alt="La7ek 7alak Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-black text-2xl text-white tracking-wide block">
                  لحّق <span style={{ color: 'var(--color-primary)' }}>حالك</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block -mt-1">
                  عروض قريبة لا تنتظر
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-medium pt-2">
              منصة تجارية ذكية لاكتشاف الصفقات والعروض اليومية المؤقتة بالقرب منك قبل انتهائها، لتوفير الوقت والمال بأسرع طريقة ممكنة.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-r-2 border-orange-500 pr-3">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="#about" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span>←</span> عن المنصة</a></li>
              <li><a href="#problem" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span>←</span> المشكلة والحل</a></li>
              <li><a href="#deals" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span>←</span> العروض الحية</a></li>
              <li><a href="#team" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span>←</span> فريق العمل</a></li>
            </ul>
          </div>

          {/* العمود الثالث: تواصل معنا وروابط المشروع */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-r-2 border-orange-500 pr-3">
              روابط المشروع والتواصل
            </h4>
            <div className="flex flex-col gap-3">
              {/* رابط Vercel */}
              <a 
                href="https://la7ek7alak.vercel.app" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 hover:bg-slate-900 transition-all shadow-md group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center text-sm font-bold">🌐</span>
                  <span className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">زيارة المنصة (Vercel)</span>
                </div>
                <span className="text-slate-500 group-hover:text-orange-400 transition-colors text-xs font-bold">↗</span>
              </a>

              {/* رابط GitHub */}
              <a 
                href="https://github.com/Israa-Abuelaish/la7ek7alak" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 hover:bg-slate-900 transition-all shadow-md group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-sm font-bold">💻</span>
                  <span className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">مستودع المشروع (GitHub)</span>
                </div>
                <span className="text-slate-500 group-hover:text-orange-400 transition-colors text-xs font-bold">↗</span>
              </a>

              {/* أزرار السوشيال ميديا بأيقونات SVG حقيقية */}
              <div className="flex items-center gap-3 pt-2">
                {/* إنستغرام */}
                <a 
                  href="https://instagram.com/la7eq.7alaq?cplk=d2prb3M3ZXNmbTE2" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2.5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-transparent hover:text-white transition-all shadow-sm text-sm font-bold text-slate-300 group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>إنستغرام</span>
                </a>

                {/* فيسبوك */}
                <a 
                  href="https://www.facebook.com/share/1EuJHLZoTm/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2.5 hover:bg-blue-600 hover:border-transparent hover:text-white transition-all shadow-sm text-sm font-bold text-slate-300 group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.615V8z"/>
                  </svg>
                  <span>فيسبوك</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* حقوق النشر السفلي */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} مشروع لحّق حالك (La7ek 7alak). جميع الحقوق محفوظة.</p>
          <p className="text-slate-500">تم التطوير بشغف بواسطة فريق العمل </p>
        </div>
      </div>
    </footer>
  );
}