import React from 'react';

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "اكتشف العرض القريب", desc: "تصفح الخصومات الحية المتاحة قريب منك حسب موقعك الجغرافي." },
    { num: "02", title: "لحّق حالك بوقتها", desc: "تابع العداد التنازلي للعرض المتاح لمدة 24 ساعة فقط." },
    { num: "03", title: "زور المحل ووفر", desc: "توجه مباشرة للمحل التجاري واستمتع بالتوفير الحقيقي." }
  ];

  return (
<section id="how-it-works" className="py-20 border-t border-slate-800/50 bg-transparent">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-700 tracking-wider uppercase mb-3 inline-block">
            طريقة العمل
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            تجربة <span style={{ color: 'var(--color-primary)' }}>لحّق حالك</span>
          </h2>
          <p className="text-slate-600 font-medium">عرض مؤقت + موقع قريب + اكتشاف سريع</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl border border-slate-200 bg-slate-50 card-hover-effect group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white font-black text-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors shadow-md">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}