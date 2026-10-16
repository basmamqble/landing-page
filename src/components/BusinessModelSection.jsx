import React from 'react';
import { businessModelData, targetAudiences } from '../data/businessModelData';

export default function BusinessModelSection() {
  return (
    <section
      id="business-model"
      className="py-24 border-t border-slate-800/60 bg-slate-950/10 relative overflow-hidden"
    >
      {/* هالة ضوئية خفيفة */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* الهيدر الرئيسي */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 tracking-wider uppercase mb-4 inline-block shadow-inner">
            BUSINESS MODEL
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
            كيف تتحول المنصة إلى مشروع مستدام؟
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-medium">
            نموذج عمل مرن يضمن تحقيق أعلى قيمة للمتاجر مع استدامة مالية للمنصة
          </p>
        </div>

        {/* كروت ركائز النموذج التجاري الثلاثة */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {businessModelData.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative border backdrop-blur-xl ${
                item.highlight
                  ? 'border-orange-500 ring-2 ring-orange-500/20 bg-slate-900/80 shadow-2xl shadow-orange-500/10 md:scale-105'
                  : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl p-3 bg-slate-800/60 rounded-2xl border border-slate-700/50">
                    {item.icon}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      item.highlight
                        ? 'bg-orange-500/20 text-orange-300 border-orange-500/30'
                        : 'bg-slate-800/80 text-slate-400 border-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.features.map((feat, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm font-semibold text-slate-200"
                    >
                      <svg
                        className="w-5 h-5 text-orange-400 ml-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                  item.highlight
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                انضم الآن
              </button>
            </div>
          ))}
        </div>

        {/* بنر توثيق التجار */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent border border-orange-500/30 backdrop-blur-lg mb-20 text-center sm:text-right flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-orange-500/20 rounded-2xl border border-orange-500/40 text-2xl shrink-0">
              🛡️
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">
                توثيق التاجر: <span className="text-orange-400">ختم الثقة التجاري</span>
              </h4>
              <p className="text-slate-300 text-sm font-medium">
                اعتماد وتوثيق المتاجر الموثوقة لتميزها عن العروض المضللة وتوفير تجربة آمنة للمستخدمين.
              </p>
            </div>
          </div>
          <span className="px-5 py-2.5 bg-orange-500 text-white text-xs font-extrabold rounded-xl shrink-0 shadow-md">
            حسابات موثقة
          </span>
        </div>

        {/* قسم الفئات المستهدفة (B2C, B2B, B2G) */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              لمن موجه النظام؟
            </h3>
            <p className="text-slate-400 text-sm">
              حلقة وصل ذكية تنعش الاقتصاد وتخدم كافة الفئات
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {targetAudiences.map((aud, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-lg border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 font-black text-xs rounded-lg mb-4">
                  {aud.code}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{aud.title}</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}