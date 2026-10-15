import React, { useState } from 'react';

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "للمستخدمين والزبائن",
      icon: "🛍️",
      items: [
        "إشعارات فورية عند نزول عروض جديدة بمدينتك.",
        "تصفح حسب الفئة (مطاعم، ملابس، خدمات، إلكترونيات).",
        "حفظ العروض المفضلة وتفعيل التنبيهات قبل انتهائها."
      ]
    },
    {
      title: "للتجار وأصحاب المحلات",
      icon: "🏪",
      items: [
        "لوحة تحكم سهلة لإضافة وإدارة العروض بسرعة.",
        "وصول مباشر لآلاف الزبائن المهتمين بالشراء الفوري.",
        "تقارير تفاعلية لعدد مرات مشاهدة واستخدام الكوبونات."
      ]
    }
  ];

  return (
    <section id="features" className="py-20 border-t border-slate-800/50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 tracking-wider uppercase mb-3 inline-block">
            مميزات المنصة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">مميزات صُممت لتلبي احتياجات الجميع</h2>
          <p className="text-slate-300 font-medium">سواء كنت تبحث عن التوفير أو ترغب بزيادة مبيعات متجرك</p>
        </div>

        {/* Tabs Header */}
        <div className="flex justify-center gap-4 mb-12">
          {features.map((feat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-2xl font-bold text-base transition-all flex items-center gap-2 border ${
                activeTab === idx 
                  ? 'text-white shadow-xl shadow-orange-500/20 border-orange-500/50' 
                  : 'text-slate-300 bg-slate-950/60 hover:bg-slate-900 border-slate-800 backdrop-blur-md'
              }`}
              style={{ backgroundColor: activeTab === idx ? 'var(--color-primary)' : undefined }}
            >
              <span>{feat.icon}</span>
              <span>{feat.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl border border-orange-500/40 bg-slate-950/60 backdrop-blur-xl shadow-2xl">
          <ul className="space-y-6">
            {features[activeTab].items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0 shadow-sm border border-orange-500/30" style={{ backgroundColor: 'var(--color-primary)' }}>
                  ✓
                </span>
                <span className="text-lg text-slate-200 font-medium pt-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}