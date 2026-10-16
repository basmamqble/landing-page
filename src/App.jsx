import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import DealsDemo from './components/BusinessModelSection';
import Features from './components/Features';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import bgPattern from './assets/bg-pattern.jpg';

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* طبقة الخلفية */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11,19,43,0.40), rgba(11,19,43,0.65)), url(${bgPattern})`,
        }}
      />

      {/* المحتوى */}
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