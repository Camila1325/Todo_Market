import React from 'react';

export const ProductDetailTabs = ({ specs }) => {
    const [activeTab, setActiveTab] = React.useState('specs');

    const tabs = [
        { id: 'specs', label: 'Especificaciones' },
        { id: 'features', label: 'Características' },
        { id: 'shipping', label: 'Envío y Devoluciones' }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                            activeTab === tab.id 
                                ? 'border-orange-600 text-orange-600 bg-orange-50/50' 
                                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            
            <div className="p-8">
                {activeTab === 'specs' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {specs.map((spec, index) => (
                            <div key={index} className="flex justify-between py-3 border-b border-gray-50 last:border-0">
                                <span className="text-sm text-gray-500">{spec.label}</span>
                                <span className="text-sm font-bold text-gray-900">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'features' && (
                    <div className="text-gray-600 text-sm leading-relaxed">
                        Contenido de características...
                    </div>
                )}
                {activeTab === 'shipping' && (
                    <div className="text-gray-600 text-sm leading-relaxed">
                        Contenido de envíos...
                    </div>
                )}
            </div>
        </div>
    );
};
