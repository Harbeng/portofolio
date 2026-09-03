import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold font-serif mb-4">HRK</h3>
          <p className="font-bold mb-1">Harry Rudolf Kountur</p>
          <p className="text-gray-400 text-sm mb-4">Fresh Graduate D4 Teknik Informatika</p>
          <p className="text-gray-500 text-sm italic">"Build a better tomorrow with technology."</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-300">Quick Links</h4>
          <div className="grid grid-cols-2 gap-3 text-gray-400 text-sm">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#pengalaman" className="hover:text-white transition-colors">Pengalaman</a>
            <a href="#tentang" className="hover:text-white transition-colors">Tentang</a>
            <a href="#sertifikat" className="hover:text-white transition-colors">Sertifikat</a>
            <a href="#projek" className="hover:text-white transition-colors">Projek</a>
            <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
          </div>
        </div>
        <div>
           <h4 className="font-bold mb-4 text-gray-300">Ikuti Saya</h4>
           <div className="flex gap-4 text-gray-400 mb-6">
              <a href="https://linkedin.com/in/harry-rudolf-kountur-51314938a" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FiLinkedin size={22}/></a>
              <a href="https://github.com/Harbeng" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FiGithub size={22}/></a>
              <a href="https://www.instagram.com/harrykountur?igsi=YTg4aHVxcWxzbmls" className="hover:text-white transition-colors"><FiInstagram size={22}/></a>
              <a href="mailto:harbeng20@gmail.com" className="hover:text-white transition-colors"><FiMail size={22}/></a>
           </div>
           <p className="text-gray-500 text-sm border-t border-gray-800 pt-4">© 2026 Harry Rudolf Kountur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;