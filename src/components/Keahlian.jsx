import React, { useState } from 'react';
import { FiLayout, FiServer, FiDatabase, FiCpu, FiX, FiCheckCircle, FiUsers, FiTarget } from 'react-icons/fi';

const Keahlian = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="keahlian" className="mt-32 px-4 md:px-0 relative">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
          Keahlian <span className="w-16 h-[2px] bg-blue-600 block"></span>
        </h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-blue-600 font-medium hover:underline text-sm md:text-base cursor-pointer"
        >
          Lihat Semua Keahlian &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <FiLayout size={24} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Frontend & Web</h3>
          <p className="text-gray-500 text-sm">HTML, CSS, JavaScript, React.js</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
            <FiServer size={24} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Backend & API</h3>
          <p className="text-gray-500 text-sm">Node.js, Full Stack Development, API Integration</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
            <FiDatabase size={24} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Database & Data</h3>
          <p className="text-gray-500 text-sm">MySQL, Supabase, Data Management</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
            <FiCpu size={24} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">AI, IoT & Network</h3>
          <p className="text-gray-500 text-sm">Artificial Intelligence (CNN), IoT, Network Admin</p>
        </div>
      </div>

      {/* Komponen Modal / Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">
            
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-2xl font-bold text-gray-900">Detail Keahlian & Teknologi</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-600 rounded-full transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Kolom Keterampilan Teknis */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-700 flex items-center gap-2 mb-3">
                    <FiLayout /> Keterampilan Teknis Utama
                  </h4>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2"><FiCheckCircle className="mt-1 text-green-500 shrink-0" /> HTML, CSS, JavaScript, React.js, dan Node.js untuk pengembangan website yang responsif.</li>
                    <li className="flex items-start gap-2"><FiCheckCircle className="mt-1 text-green-500 shrink-0" /> Pengalaman dalam Full Stack Web Development serta integrasi API.</li>
                    <li className="flex items-start gap-2"><FiCheckCircle className="mt-1 text-green-500 shrink-0" /> Pemahaman manajemen basis data relasional menggunakan MySQL dan Supabase.</li>
                    <li className="flex items-start gap-2"><FiCheckCircle className="mt-1 text-green-500 shrink-0" /> Implementasi logika algoritma kecerdasan buatan (CNN) dan arsitektur Internet of Things (IoT).</li>
                    <li className="flex items-start gap-2"><FiCheckCircle className="mt-1 text-green-500 shrink-0" /> Keahlian Administrasi Jaringan (Network Administration) serta pengelolaan jaringan dan perangkat.</li>
                  </ul>
                </div>
              </div>

              {/* Kolom Keterampilan Interpersonal & Lainnya */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-purple-700 flex items-center gap-2 mb-3">
                    <FiUsers /> Keterampilan Interpersonal
                  </h4>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2"><FiTarget className="mt-1 text-indigo-500 shrink-0" /> Memiliki pemikiran kritis dalam Analisis Sistem dan Pemecahan Masalah teknologi.</li>
                    <li className="flex items-start gap-2"><FiTarget className="mt-1 text-indigo-500 shrink-0" /> Memiliki kemampuan kepemimpinan, manajemen tim, dan kolaborasi.</li>
                    <li className="flex items-start gap-2"><FiTarget className="mt-1 text-indigo-500 shrink-0" /> Memiliki pengalaman dalam manajemen proyek dan pengelolaan operasional digital.</li>
                    <li className="flex items-start gap-2"><FiTarget className="mt-1 text-indigo-500 shrink-0" /> Cepat beradaptasi terhadap inovasi teknologi terbaru untuk efisiensi pekerjaan.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-orange-700 flex items-center gap-2 mb-3">
                    <FiCpu /> Kompetensi Tambahan
                  </h4>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2"><FiCheckCircle className="mt-1 text-green-500 shrink-0" /> Digital Marketing & Administrasi Keuangan operasional.</li>
                    <li className="flex items-start gap-2"><FiCheckCircle className="mt-1 text-green-500 shrink-0" /> Terampil menggunakan Microsoft Office (Word, Excel, dan PowerPoint) untuk administrasi, pengolahan data, dokumentasi, dan presentasi.</li>
                    <li className="flex items-start gap-2"><FiCheckCircle className="mt-1 text-green-500 shrink-0" /> Graphic Design: Poster, pamflet, banner, desain kaos, dan materi publikasi digital menggunakan Canva.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Keahlian;