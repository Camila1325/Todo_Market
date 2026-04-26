import React from 'react';
import { Logo } from '../components/atoms/logo';
import { LoginForm } from '../components/organisms/loginForm';

const Auth = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <div className="flex justify-center mb-4">
          <Logo size="text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">¡Qué bueno verte de nuevo!</h2>
        <p className="mt-2 text-sm text-gray-600">
          O si prefieres, <a href="#" className="font-medium text-orange-600 hover:text-orange-500 transition-colors">crea una cuenta nueva</a>
        </p>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md animate-in fade-in slide-in-from-bottom duration-500">
        <LoginForm />

        <p className="mt-10 text-center text-xs text-gray-400">
          &copy; 2026 Todo Market. Proyecto con React y Firebase.
        </p>
      </div>
    </div>
  );
};

export default Auth;