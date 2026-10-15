import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import DealsDemo from './components/DealsDemo';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

// 1. استيراد صورة الخلفية برمجياً لضمان التعرف عليها أثناء الـ Build على Vercel
import bgPattern from './assets/bg-pattern.jpg';

export default function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed text-white"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <DealsDemo />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}