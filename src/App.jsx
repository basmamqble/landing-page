import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import DealsDemo from './components/DealsDemo';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

import bgPattern from './assets/bg-pattern.jpg';

export default function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed text-white relative"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      {/* طبقة تغميق وضبابية (Overlay + Backdrop Blur) */}
      <div className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm pointer-events-none z-0"></div>

      {/* محتوى الموقع يجب أن يكون فوق الطبقة عبر استخدام relative و z-10 */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSolution />
          <DealsDemo />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}