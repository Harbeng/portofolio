import React, { useState } from 'react';
import { FiLinkedin, FiGithub, FiMail, FiInstagram, FiX, FiDownload } from 'react-icons/fi';
import fotoProfil from '../assets/profil.jpeg';
import fileCV from '../assets/CV_Harry-Rudolf-Kountur.pdf'; 

const Hero = () => {
  // State untuk mengontrol buka/tutup popup CV
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-16 px-4 md:px-0">
      {/* Kolom Kiri: Teks */}
      <div className="w-full md:w-1/2 space-y-6">
        <p className="text-lg font-medium text-gray-600">Halo, saya</p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Harry Rudolf <br /> Kountur
        </h1>
        <h2 className="text-xl font-semibold text-gray-800">
          Fresh Graduate D4 Teknik Informatika
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-lg">
          Saya adalah seorang fresh graduate yang memiliki minat di bidang web development, artificial intelligence, dan IoT. Saya senang mempelajari hal baru, membangun solusi digital, dan bekerja dalam tim untuk memberikan dampak nyata.
        </p>
        
        <div className="flex gap-4 pt-4">
          {/* Tombol Lihat Projek */}
          <a href="#projek" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition flex items-center gap-2 inline-flex">
            Lihat Projek Saya &rarr;
          </a>
          
          {/* Tombol Lihat CV (Memicu Popup) */}
          <button 
            onClick={() => setIsCvModalOpen(true)}
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition flex items-center gap-2 cursor-pointer"
          >
            Lihat CV &rarr;
          </button>
        </div>

        {/* Kolom Ikon Sosial Media */}
        <div className="flex gap-5 pt-6 text-gray-600">
          <a href="https://linkedin.com/in/harry-rudolf-kountur-51314938a" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition"><FiLinkedin size={24} /></a>
          <a href="https://github.com/Harbeng" target="_blank" rel="noreferrer" className="hover:text-black transition"><FiGithub size={24} /></a>
          <a href="mailto:harbeng20@gmail.com" className="hover:text-red-500 transition"><FiMail size={24} /></a>
          <a href="https://www.instagram.com/harrykountur?igsi=YTg4aHVxcWxzbmls" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition"><FiInstagram size={24} /></a>
        </div>
      </div>

      {/* Kolom Kanan: Gambar & Ornamen */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="w-[300px] h-[400px] bg-blue-100/50 rounded-full absolute bottom-0 -z-10 blur-xl"></div>
        <div className="w-[350px] h-[400px] bg-blue-600 rounded-t-full absolute bottom-0 -z-10"></div>
        
        <div className="w-[350px] h-[450px] bg-gray-200 rounded-t-full border-b-0 border-white shadow-lg flex items-center justify-center text-gray-400 overflow-hidden">
          <img src={fotoProfil} alt="Harry Rudolf Kountur" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-0 top-1/2 transform rotate-12 text-blue-900 text-2xl font-bold leading-tight font-serif">
          Build <br/> Learn <br/> Grow <br/> Together
        </div>
      </div>

      {/* Modal / Popup Pratinjau CV */}
      {isCvModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
          {/* Latar Belakang Gelap */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCvModalOpen(false)}
          ></div>
          
          {/* Kontak Kotak Modal */}
          <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh] animate-fade-in-up">
            
            {/* Header Modal */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">Curriculum Vitae - Harry Rudolf Kountur</h3>
              <div className="flex items-center gap-3">
                {/* Tombol Download Cadangan di dalam Modal */}
                <a 
                  href={fileCV} 
                  download="CV_Harry-Rudolf-Kountur.pdf"
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition flex items-center gap-2"
                >
                  <FiDownload size={16} /> Download PDF
                </a>
                <button 
                  onClick={() => setIsCvModalOpen(false)}
                  className="p-2 bg-white border border-gray-200 hover:bg-red-50 text-gray-500 hover:text-red-600 hover:border-red-200 rounded-full transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Body Modal: Menampilkan File PDF */}
            <div className="w-full flex-grow bg-gray-100 p-2">
              <iframe 
                src={`${fileCV}#view=FitH`} 
                title="CV Harry Rudolf Kountur" 
                className="w-full h-full rounded-lg border border-gray-200 bg-white"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;