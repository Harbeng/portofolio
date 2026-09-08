import React, { useState } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';

// Import gambar desain dari folder assets/desain (Sesuaikan nama dan ekstensi file)
import desain1 from '../assets/desain/desain.png';
import desain2 from '../assets/desain/desain.png';
import desain3 from '../assets/desain/desain.png';
import desain4 from '../assets/desain/desain.png';
import desain5 from '../assets/desain/desain.png';

const DesainSaya = () => {
  // State untuk menyimpan URL gambar yang sedang di-zoom
  const [zoomedImage, setZoomedImage] = useState(null);

  // Data desain (gunakan null pada properti img jika gambar belum tersedia)
  const designs = [
    { id: 1, img: desain1, alt: "" },
    { id: 2, img: desain2, alt: "" },
    { id: 3, img: desain3, alt: "" },
    { id: 4, img: desain4, alt: "" },
    { id: 5, img: desain5, alt: "" },
  ];

  return (
    <section id="desain" className="mt-32 px-4 md:px-0">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
          Portofolio Desain <span className="w-16 h-[2px] bg-blue-600 block"></span>
        </h2>
        {/* Tombol Lihat Semua Desain telah dihilangkan */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {designs.map((design) => (
          <div 
            key={design.id} 
            onClick={() => design.img && setZoomedImage(design.img)}
            className={`h-64 w-full bg-gray-50 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-xs text-gray-400 overflow-hidden relative group ${design.img ? 'cursor-pointer' : ''}`}
          >
            {design.img ? (
              <>
                <img 
                  src={design.img} 
                  alt={design.alt} 
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105" 
                />
                {/* Efek Hover Kaca Pembesar */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                  <FiZoomIn size={32} />
                </div>
              </>
            ) : (
              "[Gambar Desain]"
            )}
          </div>
        ))}
      </div>

      {/* Komponen Modal / Popup ZOOM Gambar Full */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8">
          {/* Latar Belakang Hitam Pekat */}
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
            alt="Zoomed Desain" 
            className="relative z-[75] max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl animate-fade-in-up" 
          />
        </div>
      )}
    </section>
  );
};

export default DesainSaya;