import React, { useState } from 'react';
import { FiUser, FiBook, FiMapPin, FiBriefcase, FiX } from 'react-icons/fi';
import fotoHarry from '../assets/me/harry.png';

const TentangSaya = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="tentang" className="mt-32 px-4 md:px-0 relative">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
          Tentang Saya <span className="w-16 h-[2px] bg-blue-600 block"></span>
        </h2>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="text-blue-600 font-medium hover:underline text-sm md:text-base cursor-pointer"
        >
          Lebih Banyak Tentang Saya &rarr;
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Kolom Kiri: Foto & Kutipan */}
        <div className="w-full lg:w-2/5">
          <div className="bg-gray-200 h-80 rounded-2xl mb-4 shadow-sm overflow-hidden flex items-center justify-center">
            <img 
              src={fotoHarry} 
              alt="Harry Rudolf Kountur"
              loading="lazy" 
              className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast]" 
            />
          </div>
          <div className="bg-gray-100 p-5 rounded-xl border-l-4 border-gray-400 text-gray-700 italic font-medium">
            "Terus belajar, terus berkembang, karena proses tidak pernah mengkhianati hasil."
          </div>
        </div>

        {/* Kolom Kanan: Deskripsi & Info */}
        <div className="w-full lg:w-3/5 space-y-8">
          <p className="text-gray-600 leading-relaxed text-lg">
            Saya <span className="font-semibold text-gray-900">Harry Rudolf Kountur</span>, lulusan D4 Teknik Informatika dari Politeknik Negeri Manado (2026) dengan keahlian komprehensif dalam Full Stack Web Development, analisis sistem, dan manajemen basis data. Saya memiliki rekam jejak yang solid dalam memimpin pengembangan sistem digital terintegrasi menggunakan ekosistem React.js, Node.js, dan Supabase. Selain itu, saya dibekali dengan landasan teknis yang kuat dalam penerapan Artificial Intelligence (CNN) dan Internet of Things (IoT).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FiUser size={24} /></div>
              <div>
                <h4 className="font-semibold text-gray-900">Nama</h4>
                <p className="text-gray-600 text-sm">Harry Rudolf Kountur</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FiBook size={24} /></div>
              <div>
                <h4 className="font-semibold text-gray-900">Pendidikan</h4>
                <p className="text-gray-600 text-sm">D4 Teknik Informatika<br/>Politeknik Negeri Manado</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FiMapPin size={24} /></div>
              <div>
                <h4 className="font-semibold text-gray-900">Lokasi</h4>
                <p className="text-gray-600 text-sm">Manado, Sulawesi Utara</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FiBriefcase size={24} /></div>
              <div>
                <h4 className="font-semibold text-gray-900">Status</h4>
                <p className="text-gray-600 text-sm">Fresh Graduate (IPK: 3.62)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Komponen Modal / Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">
            
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-2xl font-bold text-gray-900">Detail Profil & Rekam Jejak</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-600 rounded-full transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-gray-600 leading-relaxed">
              <p>
                Halo! Sebagai lulusan D4 Teknik Informatika Politeknik Negeri Manado dengan IPK 3.62/4.00, perjalanan saya berfokus pada perancangan solusi teknologi yang efisien dan berdampak nyata.
              </p>
              
              <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">Fokus Teknis & Proyek</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Memimpin pengembangan sistem informasi K3L digital (ZEKTRA) di PT PLN UP2D Suluttenggo menggunakan arsitektur web terintegrasi React.js, Node.js, dan Supabase.</li>
                <li>Menyelesaikan Tugas Akhir berupa Sistem Pemantauan Kualitas Ikan dan Peringatan Dini Cerdas yang mengintegrasikan Jaringan Syaraf Konvolusional (CNN) dan Internet of Things (IoT).</li>
                <li>Diakui melalui berbagai sertifikasi kompetensi BNSP di bidang Manajemen Data, Junior Network Administrator, Digital Marketing, dan Artificial Intelligence, serta sertifikasi bahasa Inggris (TOEIC).</li>
              </ul>

              <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">Aktivitas & Kepemimpinan</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Berperan sebagai Koordinator Divisi Publikasi dan Sosialisasi di <strong>GenBI Komisariat POLIMDO</strong>, memimpin tim dalam mengeksekusi strategi kampanye digital yang berhasil meningkatkan engagement media sosial organisasi hingga 30%.</li>
                <li>Aktif berorganisasi di <strong>Gerakan Angkatan Muda Kristen Indonesia (GAMKI)</strong>, berkontribusi dalam program kepemudaan, pengembangan karakter, dan kegiatan pengabdian masyarakat.</li>
              </ul>

              <p className="mt-4 italic text-sm text-gray-500">
                Saya adalah individu yang adaptif dengan kemampuan kepemimpinan yang teruji, siap memberikan kontribusi inovatif dan solusi efisien untuk berkarier di bidang Software Development maupun IT Support System.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TentangSaya;