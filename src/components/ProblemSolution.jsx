import React from 'react';

export default function ProblemSolution() {
  return (
    <section id="problem" className="py-20 border-t border-slate-800/50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 tracking-wider uppercase mb-3 inline-block">
            الفجوة والحل
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            لماذا منصة <span style={{ color: 'var(--color-primary)' }}>لحّق حالك</span>؟
          </h2>
          <p className="text-slate-300 font-medium">بدلاً من ضياع العروض بين مجموعات الواتساب وصفحات المحلات المتفرقة</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* كرت المشكلة اليومية */}
          <div className="p-8 rounded-3xl border border-orange-500/40 ring-2 ring-orange-500/10 bg-slate-950/60 backdrop-blur-xl shadow-xl card-hover-effect flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-950/60 text-red-400 border border-red-500/40 flex items-center justify-center font-bold text-xl shadow-sm">
                  ⚠️
                </div>
                <h3 className="text-2xl font-bold text-white">المشكلة اليومية</h3>
              </div>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/80">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>التاجر عنده تنزيلات ممتازة اليوم لكن ما عنده قناة مباشرة توصله بالزبون القريب.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/80">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>الزبون يدور بين الصفحات والمجموعات ويصل متأخراً بعد انتهاء العرض.</span>
                </li>
              </ul>
            </div>
          </div>

          
          {/* كرت الحل الذكي */}
          <div className="p-8 rounded-3xl border border-orange-500/40 ring-2 ring-orange-500/10 bg-slate-950/60 backdrop-blur-xl shadow-xl card-hover-effect flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-xl shadow-sm">
                  💡
                </div>
                <h3 className="text-2xl font-bold text-white">الحل الذكي معنا</h3>
              </div>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/80">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span><b>التاجر:</b> ينشر العرض خلال ثوانٍ معدودة على المنصة.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/80">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span><b>الزبون:</b> يكتشف العروض القريبة فوراً حسب موقعه واهتمامه ويزور المحل مباشرة.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}