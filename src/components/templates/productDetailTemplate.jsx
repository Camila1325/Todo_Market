import React from 'react';
import { MainLayout } from './mainLayout';

export const ProductDetailTemplate = ({ 
    gallery, 
    info, 
    actions, 
    tabs, 
    relatedProducts 
}) => {
    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Product Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Left Column: Gallery */}
                    <div className="lg:col-span-7">
                        {gallery}
                    </div>

                    {/* Right Column: Info & Actions */}
                    <div className="lg:col-span-5 flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-fit lg:sticky lg:top-24">
                        {info}
                        {actions}
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mb-16">
                    {tabs}
                </div>

                {/* Related Products */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Productos Relacionados</h2>
                        <button className="text-orange-600 font-bold text-sm hover:underline flex items-center gap-1">
                            Ver todo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                    {relatedProducts}
                </section>
            </div>
        </MainLayout>
    );
};
