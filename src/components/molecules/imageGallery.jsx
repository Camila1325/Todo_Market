import React from 'react';

export const ImageGallery = ({ images }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-gray-100">
            <div className="relative aspect-square md:aspect-[4/3] w-full bg-gray-50">
                <img
                    src={images[activeIndex]}
                    alt="Product main view"
                    className="w-full h-full object-contain p-4"
                />
            </div>
            <div className="flex gap-2 p-2 bg-white border-t border-gray-100 overflow-x-auto scrollbar-hide">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                            activeIndex === index ? 'border-orange-600' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
};
