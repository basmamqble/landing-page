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
    <section id="features" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">مميزات صُممت لتلبي احتياجات الجميع</h2>
          <p className="text-slate-600 font-medium">سواء كنت تبحث عن التوفير أو ترغب بزيادة مبيعات متجرك</p>
        </div>

        {/* Tabs Header */}
        <div className="flex justify-center gap-4 mb-12">
          {features.map((feat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-xl font-bold text-lg transition-all flex items-center gap-2 ${
                activeTab === idx 
                  ? 'text-white shadow-lg shadow-orange-500/20' 
                  : 'text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200'
              }`}
              style={{ backgroundColor: activeTab === idx ? 'var(--color-primary)' : undefined }}
            >
              <span>{feat.icon}</span>
              <span>{feat.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <ul className="space-y-6">
            {features[activeTab].items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0 shadow-sm" style={{ backgroundColor: 'var(--color-primary)' }}>
                  ✓
                </span>
                <span className="text-lg text-slate-800 font-medium pt-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}