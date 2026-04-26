import React, { useState } from 'react';
import { Logo } from '../components/atoms/logo';
import { LoginForm } from '../components/organisms/loginForm';
import { RegisterForm } from '../components/organisms/registerForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <div className="flex justify-center mb-4">
          <Logo size="text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          {isLogin ? '¡Qué bueno verte de nuevo!' : '¡Únete a Todo Market!'}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          {isLogin ? (
            <>
              O si prefieres, <button onClick={() => setIsLogin(false)} className="font-medium text-orange-600 hover:text-orange-500 transition-colors">crea una cuenta nueva</button>
            </>
          ) : (
            <>
              ¿Ya tienes cuenta? <button onClick={() => setIsLogin(true)} className="font-medium text-orange-600 hover:text-orange-500 transition-colors">Inicia sesión</button>
            </>
          )}
        </p>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md animate-in fade-in slide-in-from-bottom duration-500">
        {isLogin ? (
          <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
        )}

        <p className="mt-10 text-center text-xs text-gray-400">
          &copy; 2026 Todo Market. Proyecto con React y Firebase.
        </p>
      </div>
    </div>
  );
};

export default Auth;