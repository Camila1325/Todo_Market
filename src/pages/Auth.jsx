import React from 'react';

const Auth = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans antialiased">
      {/* Logo y Encabezado */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="bg-orange-600 p-2 rounded-xl">
            <span className="material-symbols-outlined text-white text-3xl">shopping_bag</span>
          </div>
          <span className="text-3xl font-extrabold tracking-tight text-gray-900">Todo Market</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">¡Qué bueno verte de nuevo!</h2>
        <p className="mt-2 text-sm text-gray-600">
          O si prefieres, <a href="#" className="font-medium text-orange-600 hover:text-orange-500">crea una cuenta nueva</a>
        </p>
      </div>

      {/* Tarjeta de Formulario */}
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/50 border border-gray-100 sm:rounded-2xl sm:px-10">

          {/* Social Login - Movido arriba (muy común en e-commerce) */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex w-full justify-center items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
              <img className="h-5 w-5" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
              <span className="hidden sm:inline">Google</span>
            </button>
            <button className="flex w-full justify-center items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
              <img className="h-5 w-5" src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" />
              <span className="hidden sm:inline">Facebook</span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-white px-4 text-gray-400 uppercase tracking-widest text-[10px]">o usa tu email</span>
            </div>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder=" tu@ejemplo.com"
                  className="block w-full rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  placeholder=" ••••••••"
                  className="block w-full rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600" />
              <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">Recordarme</label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-orange-600 px-3 py-3 text-sm font-bold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all active:scale-95"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>


        <p className="mt-10 text-center text-xs text-gray-400">
          &copy; 2026 Todo Market. Proyecto con React y Firabase.
        </p>
      </div>
    </div>
  );
};

export default Auth;
