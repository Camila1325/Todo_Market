import React from 'react';

export const ProfileHeader = ({ user }) => {
    return (
        <section className="flex flex-col items-center mb-10 bg-white rounded-3xl p-10 shadow-sm border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <button className="absolute bottom-1 right-1 bg-orange-600 text-white rounded-full p-2 shadow-lg hover:bg-orange-700 transition-all active:scale-90 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">edit</span>
                </button>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-1">{user.name}</h1>
            <p className="text-gray-500 font-medium">{user.email}</p>
        </section>
    );
};
