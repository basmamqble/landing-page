import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import DealsDemo from './components/DealsDemo';
import Features from './components/Features';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

import bgPattern from './assets/bg-pattern.jpg';

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* صورة الخلفية ثابتة وتغطي الشاشة بالكامل بدون أي لون يغطيها */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${bgPattern})` }}
      ></div>

      {/* محتوى الموقع بالكامل فوق الخلفية */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSolution />
          <DealsDemo />
          <Features />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}