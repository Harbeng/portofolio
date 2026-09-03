import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TentangSaya from './components/TentangSaya';
import Keahlian from './components/Keahlian';
import ProjekSaya from './components/ProjekSaya';
import DesainSaya from './components/DesainSaya';
import Pengalaman from './components/Pengalaman';
import Sertifikat from './components/Sertifikat';
import Kontak from './components/Kontak';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Hero />
        <TentangSaya />
        <Keahlian />
        <ProjekSaya />
        <DesainSaya />
        <Pengalaman />
        <Sertifikat />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
}

export default App;