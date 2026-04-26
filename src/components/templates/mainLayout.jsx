import React from 'react';
import { Navbar } from '../organisms/navbar';

export const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            <footer className="py-8 border-t border-gray-100 text-center text-gray-400 text-xs">
                &copy; 2026 Todo Market. Creado con React, Tailwind y Firebase.
            </footer>
        </div>
    );
};