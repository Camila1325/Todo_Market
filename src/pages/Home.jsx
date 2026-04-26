import React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../components/templates/mainLayout';
import { Button } from '../components/atoms/button';
import { FeatureCard } from '../components/molecules/featureCard';

const Home = () => {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
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
            <Link to="/market">
              <Button className="px-10 py-4 text-lg w-full sm:w-auto">
                Comprar Ahora
              </Button>
            </Link>
            <Button variant="outline" className="px-10 py-4 text-lg">
              Ver Ofertas
            </Button>
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
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon="local_shipping"
            title="Envío Rápido"
            description="Recibe tus productos en menos de 48 horas en las ciudades principales."
          />
          <FeatureCard
            icon="verified_user"
            title="Compra Segura"
            description="Garantía de devolución de 30 días si no estás satisfecho con tu producto."
          />
          <FeatureCard
            icon="headset_mic"
            title="Soporte 24/7"
            description="Nuestro equipo está disponible en cualquier momento para ayudarte."
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;