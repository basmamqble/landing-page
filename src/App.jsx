import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import DealsDemo from './components/DealsDemo';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
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