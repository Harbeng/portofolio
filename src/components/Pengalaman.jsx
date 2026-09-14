import React from 'react';
// 1. Import logo dari folder assets (Sesuaikan nama file dan ekstensinya jika berbeda)
import plnLogo from '../assets/pln.png';
import genbiLogo from '../assets/genbi.png';
import gamkiLogo from '../assets/gamki.png';

const Pengalaman = () => {
  return (
    <section id="pengalaman" className="mt-32 px-4 md:px-0">
      
      {/* Pengalaman Magang & Proyek */}
      <div className="mb-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
            Pengalaman Magang & Proyek <span className="w-16 h-[2px] bg-blue-600 block"></span>
          </h2>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 mb-6">
          {/* 2. Ganti kotak teks PLN dengan gambar logo */}
          <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-gray-50 border border-gray-100 p-1">
            <img src={plnLogo} alt="Logo PLN" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-xl font-bold text-gray-900">Full Stack Developer Intern & Lead Developer ZEKTRA</h3>
              <span className="text-gray-500 font-medium text-sm md:text-right">Jul 2025 - Des 2026</span>
            </div>
            <p className="text-gray-700 font-medium mb-4">PLN UP2D Suluttenggo</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm md:text-base">
              <li>Mengembangkan dan mengimplementasikan ZEKTRA (Sistem Informasi K3L Digital) berbasis React.js, Node.js, dan Supabase yang mendigitalisasi proses pelaporan operasional perusahaan.</li>
              <li>Membangun fitur manajemen operasional krusial meliputi inspeksi APAR, pengelolaan stok dan peminjaman APD, serta checklist kelayakan kendaraan dinas secara real-time.</li>
              <li>Mengintegrasikan sistem pemindaian QR Code dan fitur pelaporan pengaduan otomatis guna mempercepat respons tanggap darurat dan mewujudkan lingkungan kerja 100% paperless.</li>
              <li>Menerapkan sistem manajemen basis data relasional di Supabase dan sistem log activity otomatis untuk memastikan transparansi dan akurasi data audit lapangan.</li>
              <li>Mengembangkan modul pendukung tambahan seperti pencatatan limbah TPS, jurnal satpam, absensi harian staf, hingga pusat informasi dan broadcast pengumuman.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pengalaman Organisasi */}
      <div>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
            Pengalaman Organisasi <span className="w-16 h-[2px] bg-blue-600 block"></span>
          </h2>
        </div>
        
        {/* GenBI */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 mb-6">
          {/* 3. Ganti ikon dengan gambar logo GenBI */}
          <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-gray-50 border border-gray-100 p-1">
            <img src={genbiLogo} alt="Logo GenBI" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-xl font-bold text-gray-900">Generasi Baru Indonesia (GenBI) Komisariat POLIMDO</h3>
              <span className="text-gray-500 font-medium text-sm md:text-right">Jul 2023 - Jun 2025</span>
            </div>
            <p className="text-gray-700 font-medium mb-4">Koordinator Divisi Publikasi dan Sosialisasi (Jul 2024 - Jun 2025) | Anggota (Jul 2023 - Jun 2024)</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm md:text-base">
              <li>Memimpin tim divisi Publikasi dan Sosialisasi dalam merancang kalender konten dan mengeksekusi strategi kampanye digital.</li>
              <li>Memproduksi dan mengelola konten visual, desain grafis, serta dokumentasi untuk mengedukasi masyarakat terkait kebijakan Bank Indonesia (seperti QRIS dan Cinta Bangga Paham Rupiah).</li>
              <li>Berpartisipasi aktif dalam merencanakan dan merealisasikan beberapa program kerja di bidang pendidikan, lingkungan, dan sosial masyarakat selama menjadi anggota aktif.</li>
            </ul>
          </div>
        </div>

        {/* GAMKI */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
          {/* 4. Ganti ikon dengan gambar logo GAMKI */}
          <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-gray-50 border border-gray-100 p-1">
             <img src={gamkiLogo} alt="Logo GAMKI" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-xl font-bold text-gray-900">Gerakan Angkatan Muda Kristen Indonesia (GAMKI)</h3>
              <span className="text-gray-500 font-medium text-sm md:text-right">Nov 2023 - Sekarang</span>
            </div>
            <p className="text-gray-700 font-medium mb-4">Anggota</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm md:text-base">
              <li>Berkontribusi dalam persiapan dan pelaksanaan program kerja kepemudaan, pengembangan karakter, dan kegiatan pengabdian masyarakat.</li>
              <li>Membangun kolaborasi, kerja sama tim, dan jaringan komunikasi yang efektif antar pemuda di tingkat cabang/daerah.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Pengalaman;