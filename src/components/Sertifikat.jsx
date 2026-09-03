import React, { useState } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';

import Networking from "../assets/Networking.jpg";

import certNetworkFront from '../assets/gamki.png';
import certNetworkBack from '../assets/gamki.png';

import certDigitalFront from '../assets/digital1.png';
import certDigitalBack from '../assets/digital2.png';

import certDataFront from '../assets/data1.png';
import certDataBack from '../assets/data2.png';

import certAIFront from '../assets/gamki.png';
import certAIBack from '../assets/gamki.png';

const Sertifikat = () => {
  // State untuk menyimpan data sertifikat yang sedang diklik (Modal Info)
  const [selectedCert, setSelectedCert] = useState(null);
  
  // State untuk menyimpan URL gambar yang sedang di-zoom (Modal Gambar Full)
  const [zoomedImage, setZoomedImage] = useState(null);

  // Data sertifikat disesuaikan dengan CV beserta variabel gambarnya
  const certs = [
    { 
      title: "Networking Basics", 
      issuer: "CISCO Networking Academy", 
      date: "December 14, 2024",
      description: "Sertifikasi kompetensi resmi dari CISCO Networking Academy untuk keahlian administrasi jaringan dasar, memvalidasi kemampuan dalam mengelola dan mengamankan perangkat jaringan.",
      imageFront: Networking
    },
    { 
      title: "Junior Network Administrator", 
      issuer: "BNSP - LSP BPPTIK", 
      date: "Nov 2023 - Nov 2026",
      description: "Sertifikasi kompetensi resmi dari BNSP untuk keahlian administrasi jaringan dasar, memvalidasi kemampuan dalam mengelola dan mengamankan perangkat jaringan.",
      imageFront: certNetworkFront,
      imageBack: certNetworkBack
    },
    { 
      title: "Digital Marketing", 
      issuer: "BNSP - LSP Teknologi Digital", 
      date: "Feb 2025 - Feb 2028",
      description: "Sertifikasi kompetensi dari BNSP yang membuktikan keahlian dalam merancang, mengelola, dan mengeksekusi strategi kampanye pemasaran digital atau online.",
      imageFront: certDigitalFront, 
      imageBack: certDigitalBack 
    },
    { 
      title: "Data Management Staff", 
      issuer: "BNSP - LSP Entrepreneur Digital Indonesia", 
      date: "Mar 2025 - Mar 2028",
      description: "Sertifikasi kompetensi BNSP untuk keahlian dalam bidang manajemen data, meliputi proses pengolahan, analisis, dan pemeliharaan basis data secara profesional.",
      imageFront: certDataFront, 
      imageBack: certDataBack 
    },
    { 
      title: "Artificial Intelligence", 
      issuer: "BNSP - LSP Teknologi Informatika Bisnis Digital", 
      date: "Nov 2025 - Mar 2028",
      description: "Sertifikasi kompetensi BNSP yang memvalidasi landasan teknis dan keterampilan praktis dalam menerapkan teknologi Kecerdasan Buatan (AI) untuk kebutuhan bisnis digital.",
      imageFront: certAIFront, 
      imageBack: certAIBack 
    }
  ];

  return (
    <section id="sertifikat" className="mt-32 px-4 md:px-0">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
          Sertifikat <span className="w-16 h-[2px] bg-blue-600 block"></span>
        </h2>
      </div>
      
      {/* Grid Kartu Sertifikat */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedCert(cert)}
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition cursor-pointer flex flex-col group"
          >
            {/* Area Gambar Depan Saja (Thumbnail) */}
            <div className="h-40 w-full bg-gray-50 border border-gray-100 rounded-xl mb-4 flex items-center justify-center text-sm text-gray-400 overflow-hidden group-hover:bg-gray-100 transition">
              {cert.imageFront ? (
                <img src={cert.imageFront} alt={`Depan ${cert.title}`} className="w-full h-full object-cover" />
              ) : (
                "[Gambar Depan]"
              )}
            </div>
            
            {/* Area Teks */}
            <h3 className="font-bold text-gray-900 mb-2 leading-tight flex-grow group-hover:text-blue-600 transition">{cert.title}</h3>
            <p className="text-gray-600 font-medium text-xs mb-1">{cert.issuer}</p>
            <p className="text-gray-400 text-xs">{cert.date}</p>
          </div>
        ))}
      </div>

      {/* Komponen Modal / Popup Detail Sertifikat */}
      {selectedCert && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          {/* Latar Belakang Transparan */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCert(null)}
          ></div>
          
          {/* Kotak Konten Modal */}
          <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">
            
            {/* Header Modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedCert.title}</h3>
                <p className="text-blue-600 font-medium text-sm mt-1">{selectedCert.issuer}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-2 bg-white border border-gray-200 hover:bg-red-50 text-gray-500 hover:text-red-600 hover:border-red-200 rounded-full transition-colors flex-shrink-0"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Body Modal (Bisa discroll) */}
            <div className="p-6 md:p-8 overflow-y-auto flex flex-col lg:flex-row gap-8">
              
              {/* Kolom Gambar (Depan & Belakang) */}
              <div className="w-full lg:w-3/5 flex flex-col gap-6">
                
                {/* Interaktif Gambar Depan */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 text-sm">Halaman Depan</h4>
                  <div 
                    onClick={() => selectedCert.imageFront && setZoomedImage(selectedCert.imageFront)}
                    className={`w-full aspect-[1.414/1] bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden text-gray-400 relative group ${selectedCert.imageFront ? 'cursor-pointer' : ''}`}
                  >
                    {selectedCert.imageFront ? (
                      <>
                        <img src={selectedCert.imageFront} alt={`Depan ${selectedCert.title}`} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                           <FiZoomIn size={32} className="mb-2" />
                           <span className="text-sm font-medium">Klik untuk perbesar</span>
                        </div>
                      </>
                    ) : (
                      "[Scan Halaman Depan]"
                    )}
                  </div>
                </div>
                
                {/* Interaktif Gambar Belakang */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 text-sm">Halaman Belakang / Transkrip Nilai</h4>
                  <div 
                    onClick={() => selectedCert.imageBack && setZoomedImage(selectedCert.imageBack)}
                    className={`w-full aspect-[1.414/1] bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden text-gray-400 relative group ${selectedCert.imageBack ? 'cursor-pointer' : ''}`}
                  >
                    {selectedCert.imageBack ? (
                      <>
                        <img src={selectedCert.imageBack} alt={`Belakang ${selectedCert.title}`} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                           <FiZoomIn size={32} className="mb-2" />
                           <span className="text-sm font-medium">Klik untuk perbesar</span>
                        </div>
                      </>
                    ) : (
                      "[Scan Halaman Belakang]"
                    )}
                  </div>
                </div>
              </div>

              {/* Kolom Informasi & Deskripsi */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Informasi Sertifikat</h4>
                  <div className="space-y-3 mt-4">
                    <div>
                      <p className="text-blue-700/70 text-xs font-semibold uppercase tracking-wider">Masa Berlaku</p>
                      <p className="text-blue-900 font-medium">{selectedCert.date}</p>
                    </div>
                    <div>
                      <p className="text-blue-700/70 text-xs font-semibold uppercase tracking-wider">Lembaga Penerbit</p>
                      <p className="text-blue-900 font-medium">{selectedCert.issuer}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Deskripsi Kompetensi</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {selectedCert.description}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Komponen Modal / Popup ZOOM Gambar Full */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8">
          {/* Latar Belakang Hitam Pekat untuk Mode Zoom */}
          <div 
            className="absolute inset-0 bg-black/90 cursor-pointer"
            onClick={() => setZoomedImage(null)}
          ></div>
          
          <button 
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[80]"
          >
            <FiX size={24} />
          </button>
          
          <img 
            src={zoomedImage} 
            alt="Zoomed Sertifikat" 
            className="relative z-[75] max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl animate-fade-in-up" 
          />
        </div>
      )}

    </section>
  );
};

export default Sertifikat;