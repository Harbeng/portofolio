import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';
import ilustrasiConnect from '../assets/harko.png'; 

const Kontak = () => {
  return (
    <section id="kontak" className="mt-32 px-4 md:px-0 mb-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Kolom Kiri: Teks & Info Kontak */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontak Saya</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Tertarik bekerja sama atau ingin bertanya lebih lanjut? Jangan ragu untuk menghubungi saya!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FiMail size={20} /></div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Email</h4>
                <p className="text-gray-600 text-sm">harbeng20@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FiPhone size={20} /></div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Telepon</h4>
                <p className="text-gray-600 text-sm">+62 858 2358 7549</p>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FiLinkedin size={20} /></div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">LinkedIn</h4>
                {/* Teks LinkedIn yang bisa diklik */}
                <a 
                  href="https://www.linkedin.com/in/harry-rudolf-kountur-51314938a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm truncate w-48 block hover:text-blue-600 hover:underline transition-colors" 
                  title="linkedin.com/in/harry-rudolf-kountur-51314938a"
                >
                  /in/harry-rudolf-kountur
                </a>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FiMapPin size={20} /></div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Lokasi</h4>
                <p className="text-gray-600 text-sm">Manado, Sulawesi Utara</p>
              </div>
            </div>
          </div>
          <a 
            href="https://wa.me/6285823587549?text=Halo%20Harry,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Hubungi via WhatsApp &rarr;
          </a>
        </div>

        {/* Kolom Kanan: Gambar Ilustrasi */}
        <div className="w-full md:w-1/2 flex justify-center">
           <div className="w-64 h-64 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden shadow-sm border border-gray-100">
             {/* 2. Tag img untuk menampilkan gambar ilustrasi */}
             <img 
               src={ilustrasiConnect} 
               alt="Mari Terhubung" 
               className="w-full h-full object-cover" 
             />
           </div>
        </div>
        
      </div>
    </section>
  );
};

export default Kontak;