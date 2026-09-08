import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm py-4 px-8 flex justify-between items-center shadow-sm">
      {/* Sisi Kiri: Logo */}
      <div className="text-2xl font-bold font-serif tracking-tighter">HRK</div>
      
      {/* Bagian Tengah: Menu Navigasi (Menggunakan absolute/margin untuk memastikan posisinya tepat di tengah secara visual) */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-500 absolute left-1/2 transform -translate-x-1/2">
        <li><a href="#home" className="text-gray-900 font-semibold hover:text-blue-600 transition">Home</a></li>
        <li><a href="#tentang" className="hover:text-gray-900 transition">Tentang</a></li>
        <li><a href="#projek" className="hover:text-gray-900 transition">Projek</a></li>
        <li><a href="#pengalaman" className="hover:text-gray-900 transition">Pengalaman</a></li>
        <li><a href="#sertifikat" className="hover:text-gray-900 transition">Sertifikat</a></li>
        {/* <li><a href="#desain" className="hover:text-gray-900 transition">Desain</a></li> */}
        <li><a href="#kontak" className="hover:text-gray-900 transition">Kontak</a></li>
      </ul>

      {/* Sisi Kanan: Elemen kosong penyeimbang agar logo tetap di kiri dan menu benar-benar di tengah */}
      <div className="hidden md:block w-10"></div>
    </nav>
  );
};

export default Navbar;