import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BannerDashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const images = [
    `${baseUrl}/img/Banner2.jpg`,
    `${baseUrl}/img/Banner1.jpg`,
  ];

  // Gunakan useEffect untuk mengganti gambar setiap interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    // Membersihkan interval saat komponen tidak digunakan
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="banner-dashboard bg-white">
      <div className="container">
        <div className="col-md-12">
          <AnimatePresence>
            {images.map((src, index) =>
              index === currentImage ? (
                <motion.img
                  key={index}
                  src={src}
                  alt={`Banner ${index + 1}`}
                  className="container p-0 rounded-xl position-absolute top-0 left-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ display: "none" }} // Menghilangkan gambar sebelumnya langsung
                  transition={{ duration: 0.4 }}
                />
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BannerDashboard;
