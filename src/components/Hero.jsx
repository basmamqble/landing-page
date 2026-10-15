import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="relative pt-20 pb-28 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* بادج تعريفي فوق العنوان */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/60 border border-orange-500/40 text-orange-400 text-xs font-bold mb-8 shadow-lg backdrop-blur-md">
          <span>⚡</span>
          <span>منصة تجارية لاكتشاف الصفقات والعروض القريبة فوراً</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
          العرض موجود، والزبون موجود.. لكن لا يلتقيان في <span className="text-orange-500">اللحظة المناسبة!</span>
        </h1>

        {/* النص الوصفي */}
        <p className="text-lg sm:text-xl font-medium text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          منصة "لحّق حالك" تحول العرض المؤقت من مجرد منشور ضائع في الجروبات إلى فرصة محلية مباشرة توصلك للمحل قبل ما ينتهي العرض خلال 24 ساعة.
        </p>

        {/* أزرار الإجراء */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#deals"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-white text-base shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <span>🔥</span>
            <span>اكتشف العروض القريبة</span>
          </a>

          <a
            href="#problem"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-white text-base bg-slate-950/60 border border-orange-500/40 hover:bg-slate-900/80 transition-all shadow-xl backdrop-blur-md flex items-center justify-center gap-2"
          >
            <span>💡</span>
            <span>كيف تعمل المنصة؟</span>
          </a>
        </div>

      </div>
    </section>
  );
}