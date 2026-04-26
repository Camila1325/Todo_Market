import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ImageGallery = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
    const [isZooming, setIsZooming] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setZoomPos({ x, y });
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col border border-gray-100">
            <div 
                className="relative aspect-square md:aspect-[4/3] w-full bg-gray-50 overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
                onMouseMove={handleMouseMove}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeIndex}
                        src={images[activeIndex]}
                        alt="Product main view"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ 
                            opacity: 1, 
                            scale: isZooming ? 1.5 : 1,
                            transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
                        }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-contain p-4 transition-transform duration-200 ease-out"
                    />
                </AnimatePresence>
            </div>
            
            <div className="flex gap-3 p-4 bg-white border-t border-gray-100 overflow-x-auto scrollbar-hide">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                            activeIndex === index 
                                ? 'border-orange-600 ring-4 ring-orange-50' 
                                : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-200'
                        }`}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
};
