import React from 'react';
import { teamMembers } from '../data/teamData';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 border-t border-slate-800/50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 tracking-wider uppercase mb-3 inline-block">
            فريق العمل
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            فريق العمل المبدع 
          </h2>
          <p className="text-slate-300 font-medium">
            أعضاء فريق "لحّق حالك" يتوزعون بين التطوير والبرمجة والتصميم والتسويق
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl border border-orange-500/40 ring-2 ring-orange-500/10 overflow-hidden p-6 text-center transition-all flex flex-col justify-between hover:-translate-y-1 shadow-xl bg-slate-900/80 backdrop-blur-md"
            >
              <div>
                {/* Leader Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold border ${
                    member.isLeader 
                      ? 'text-orange-300 bg-orange-500/20 border-orange-400' 
                      : 'text-slate-300 bg-slate-800 border-slate-700'
                  }`}>
                    {member.isLeader ? '★ قائد الفريق' : '⚡ عضو فريق العمل'}
                  </span>
                </div>

                {/* Avatar Image */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-500/50 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  {member.role}
                </p>

                {/* Info List */}
                <div className="text-xs text-slate-300 space-y-2 mb-6 text-right bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                  <p className="flex items-center gap-2 truncate">
                    <span>📧</span>
                    <span className="truncate font-medium">{member.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <span className="font-medium">{member.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    <span className="font-medium">{member.location}</span>
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                {/* LinkedIn Link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>رابط LinkedIn الشخصي</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}