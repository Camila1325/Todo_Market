import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-orange-600 p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white text-2xl">shopping_bag</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">Todo Market</span>
        </div>
        <div className="space-x-8 font-medium text-gray-600">
          <Link to="/market" className="hover:text-orange-600 transition-colors">Tienda</Link>
          <Link to="/Auth" className="bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all">Iniciar Sesión</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left duration-700">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-bold uppercase tracking-wide">
            Nueva Colección 2026
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
            Todo lo que buscas, <span className="text-orange-600">en un solo lugar.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed">
            Desde tecnología hasta artículos para el hogar. Calidad premium con envíos rápidos a todo el país.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/market"
              className="px-10 py-4 bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-500 hover:-translate-y-1 transition-all active:scale-95 text-center text-lg"
            >
              Comprar Ahora
            </Link>
            <button className="px-10 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all text-lg">
              Ver Ofertas
            </button>
          </div>
        </div>

        <div className="relative animate-in zoom-in duration-1000">
          <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] -rotate-3"></div>
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000"
            alt="Shopping"
            className="relative rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full"
          />
        </div>
      </main>

      <section className="bg-gray-50 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="space-y-3">
            <span className="material-symbols-outlined text-4xl text-orange-600">local_shipping</span>
            <h3 className="text-xl font-bold">Envío Rápido</h3>
            <p className="text-gray-500">Recibe tus productos en menos de 48 horas en las ciudades principales.</p>
          </div>
          <div className="space-y-3">
            <span className="material-symbols-outlined text-4xl text-orange-600">verified_user</span>
            <h3 className="text-xl font-bold">Compra Segura</h3>
            <p className="text-gray-500">Garantía de devolución de 30 días si no estás satisfecho.</p>
          </div>
          <div className="space-y-3">
            <span className="material-symbols-outlined text-4xl text-orange-600">headset_mic</span>
            <h3 className="text-xl font-bold">Soporte 24/7</h3>
            <p className="text-gray-500">Estamos aquí para ayudarte en cualquier momento de tu compra.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;