import React, { useState } from 'react';
import { FiArrowRight, FiX, FiZoomIn, FiExternalLink, FiGithub } from 'react-icons/fi';

// 1. Import Gambar Projek 1 (Sistem Klasifikasi Ikan)
import ikanImg1 from '../assets/ikan/sistem.png';
import ikanImg2 from '../assets/ikan/sistem3.png';
import ikanImg3 from '../assets/ikan/sistem2.png';

// 2. Import Gambar Projek 2 (Monitoring Skripsi & IoT)
import iotImg1 from '../assets/alat/alat1.jpeg';
import iotImg2 from '../assets/alat/alat2.jpeg';
import iotImg3 from '../assets/alat/alat3.jpeg';

// 3. Import Gambar Projek 3 (ZEKTRA)
import zektraImg1 from '../assets/zektra/zektra.png';
import zektraImg2 from '../assets/zektra/zektra2.png';
import zektraImg3 from '../assets/zektra/zektra3.png';

// 4. Import Gambar Projek 4 (VCO Dashboard)
import vcoImg1 from '../assets/vco/vco1.png';
import vcoImg2 from '../assets/vco/vco2.png';
import vcoImg3 from '../assets/vco/vco3.png';

const ProjekSaya = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const projects = [
    {
      title: "Sistem Klasifikasi Kesegaran Ikan",
      desc: "Sistem berbasis web dengan AI (CNN) dan IoT untuk klasifikasi kesegaran ikan.",
      fullDesc: "Proyek Tugas Akhir berupa Sistem Pemantauan Kualitas Ikan dan Peringatan Dini Cerdas. Sistem ini mengintegrasikan Jaringan Syaraf Konvolusional (CNN) untuk mendeteksi tingkat kesegaran ikan berdasarkan citra visual, yang dipadukan dengan sensor Internet of Things (IoT) untuk pemantauan suhu dan kondisi lingkungan secara real-time.",
      tags: ["Web App", "React.js", "Node.js", "Python", "Supabase", "AI", "CNN", "Random Forest", "Decision Fusion", "Fonnte"],
      images: [ikanImg1, ikanImg2, ikanImg3],
      linkRepo: "https://github.com/Harbeng/skripsi-monitoring-ikan", 
      linkLive: "https://sistem-klasifikasi-ikan.com/"  
    },
    {
      title: "Sistem Monitoring Skripsi & IoT",
      desc: "Monitoring proses berbasis ESP32, React, dan database Supabase yang di-deploy via Railway.",
      fullDesc: "Platform pemantauan terintegrasi yang menghubungkan perangkat keras (ESP32) dengan antarmuka web modern. Dibangun menggunakan React.js untuk sisi frontend, Supabase sebagai basis data real-time, dan di-deploy menggunakan infrastruktur Railway untuk memastikan ketersediaan sistem yang tinggi dan respons yang cepat.",
      tags: ["C++", "Arduino IDE", "IoT", "ESP32 DevKit V1", "Sensor MQ-137", "Sensor MQ-135", "Sensor BME688", "Sensor ZE08-CH2O", "Buzzer"],
      images: [iotImg1, iotImg2, iotImg3],
    },
    {
      title: "Manajemen Proyek Cloud ZEKTRA",
      desc: "Sistem Informasi K3L Digital terintegrasi di PT PLN UP2D Suluttenggo.",
      fullDesc: "Mendigitalisasi proses pelaporan operasional K3L (Keselamatan, Kesehatan Kerja, dan Lingkungan) di lingkungan perusahaan. Memiliki fitur inspeksi APAR, pengelolaan peminjaman APD, sistem pemindaian QR Code, dan pelaporan pengaduan otomatis untuk mewujudkan lingkungan kerja paperless.",
      tags: ["Cloud", "React.js", "Node.js", "Supabase"],
      images: [zektraImg1, zektraImg2, zektraImg3],
      linkRepo: "https://github.com/Harbeng/Zektra",
      linkLive: "https://zektra-ten.vercel.app/"
    },
    {
      title: "VCO Monitoring Dashboard",
      desc: "Dashboard interaktif untuk memonitoring proses pembuatan Virgin Coconut Oil.",
      fullDesc: "Sistem antarmuka digital yang dirancang untuk memantau data secara real-time selama proses produksi Virgin Coconut Oil (VCO). Memudahkan pengguna dalam melakukan tracking indikator penting produksi melalui visualisasi data yang responsif dan mudah dipahami.",
      tags: ["React", "Supabase", "IoT", "Monitoring"],
      images: [vcoImg1, vcoImg2, vcoImg3],
      linkRepo: "https://github.com/Harbeng/vco-dashboard",
      linkLive: "https://vco-dashboard-zeta.vercel.app/"
    }
  ];

  return (
    <section id="projek" className="mt-32 px-4 md:px-0">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
          Projek Saya <span className="w-16 h-[2px] bg-blue-600 block"></span>
        </h2>
      </div>

      {/* Grid Kartu Projek */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedProject(proj)}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-blue-200 transition flex flex-col cursor-pointer group"
          >
            <div className="h-56 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm overflow-hidden group-hover:bg-gray-200 transition">
              {proj.images[0] ? (
                <img src={proj.images[0]} alt={proj.title} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
              ) : (
                "[Gambar Projek]"
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition">{proj.title}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{proj.desc}</p>
              <span className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:underline mt-auto">
                Lihat Detail <FiArrowRight />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Popup Detail Projek */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">
            
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 bg-white border border-gray-200 hover:bg-red-50 text-gray-500 hover:text-red-600 hover:border-red-200 rounded-full transition-colors flex-shrink-0"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto flex flex-col lg:flex-row gap-8">
              
              {/* Kolom Kiri: Galeri Gambar */}
              <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                
                {selectedProject.images[0] && (
                  <div 
                    onClick={() => setZoomedImage(selectedProject.images[0])}
                    className="w-full aspect-video sm:col-span-2 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden text-gray-400 relative group cursor-pointer"
                  >
                    <img src={selectedProject.images[0]} alt="Projek 1" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                        <FiZoomIn size={32} className="mb-2" />
                        <span className="text-sm font-medium">Perbesar</span>
                    </div>
                  </div>
                )}

                {selectedProject.images[1] && (
                  <div 
                    onClick={() => setZoomedImage(selectedProject.images[1])}
                    className="w-full aspect-video bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden text-gray-400 relative group cursor-pointer"
                  >
                    <img src={selectedProject.images[1]} alt="Projek 2" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                        <FiZoomIn size={24} />
                    </div>
                  </div>
                )}

                {selectedProject.images[2] && (
                  <div 
                    onClick={() => setZoomedImage(selectedProject.images[2])}
                    className="w-full aspect-video bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden text-gray-400 relative group cursor-pointer"
                  >
                    <img src={selectedProject.images[2]} alt="Projek 3" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                        <FiZoomIn size={24} />
                    </div>
                  </div>
                )}

              </div>

              {/* Kolom Kanan: Detail & Tautan */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Deskripsi Projek</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Teknologi & Fitur</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol akan muncul HANYA JIKA linkLive atau linkRepo tersedia */}
                {(selectedProject.linkLive || selectedProject.linkRepo) && (
                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                    {selectedProject.linkLive && (
                      <a href={selectedProject.linkLive} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-800 transition flex items-center justify-center gap-2">
                        Kunjungi Situs / Demo <FiExternalLink />
                      </a>
                    )}
                    {selectedProject.linkRepo && (
                      <a href={selectedProject.linkRepo} target="_blank" rel="noopener noreferrer" className="w-full bg-gray-100 text-gray-800 px-5 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2 border border-gray-200">
                        Lihat Repository <FiGithub />
                      </a>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Komponen Modal / Popup ZOOM Gambar Full */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8">
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
            alt="Zoomed Detail" 
            className="relative z-[75] max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl animate-fade-in-up" 
          />
        </div>
      )}
    </section>
  );
};

export default ProjekSaya;