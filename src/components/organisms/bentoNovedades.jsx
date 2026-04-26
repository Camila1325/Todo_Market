import React from 'react';
import { Button } from '../atoms/button';

export const BentoNovedades = ({ featured, secondaries }) => {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900">Novedades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">

                <div className="md:col-span-2 rounded-2xl bg-white shadow-md overflow-hidden relative group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                    <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={featured.img}
                        alt={featured.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <span className="bg-orange-600 text-white px-3 py-1 rounded text-xs font-bold w-fit mb-2">Recién Llegado</span>
                        <h3 className="text-3xl font-bold text-white mb-1">{featured.title}</h3>
                        <p className="text-gray-200 mb-4 max-w-md">{featured.description}</p>
                        <Button variant="primary" className="w-fit px-8 py-3">
                            Comprar Ahora - {featured.price}
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                    {secondaries.map((item, index) => (
                        <div key={index} className="rounded-2xl bg-white shadow-md overflow-hidden relative group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={item.img}
                                alt={item.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-orange-400 font-bold mt-1">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};