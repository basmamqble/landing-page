import React from 'react';
import { mockDeals } from '../data/dealsData';

export default function DealsDemo() {
  return (
    <section id="deals" className="py-20 border-t border-slate-800/50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 tracking-wider uppercase mb-3 inline-block">
            معاينة العروض
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            عروض نشطة الآن
          </h2>
          <p className="text-slate-300 font-medium">نماذج حية للعروض اليومية القريبة منك</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mockDeals.map((deal) => (
            <div 
              key={deal.id} 
              className="rounded-3xl border border-orange-500/40 ring-2 ring-orange-500/10 bg-slate-900/80 backdrop-blur-md p-6 flex flex-col justify-between card-hover-effect shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
                    {deal.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-500/40">
                    خصم {deal.discount}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{deal.title}</h3>
                <p className="text-sm font-semibold text-orange-400 mb-6">📍 {deal.store}</p>

                <div className="flex items-baseline gap-3 mb-6 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                  <span className="text-3xl font-black text-white">{deal.newPrice}</span>
                  <span className="text-sm text-slate-400 line-through font-medium">{deal.oldPrice}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-bold">⏳ يتبقّى: {deal.timeLeft}</span>
                <span 
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm border border-orange-500/30"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  عرض قريب
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}