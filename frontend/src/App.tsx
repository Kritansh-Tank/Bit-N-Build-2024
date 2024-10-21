import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactCalculator from './components/ImpactCalculator';
import EcoAccommodations from './components/EcoAccommodations';
import EcoActivities from './components/EcoActivities';
import Itineraries from './components/Itineraries';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImpactCalculator />
        <EcoAccommodations />
        <EcoActivities />
        <Itineraries />
      </main>
      <Footer />
    </div>
  );
}

export default App;