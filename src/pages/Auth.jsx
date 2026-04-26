import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../components/atoms/logo';
import { LoginForm } from '../components/organisms/loginForm';
import { RegisterForm } from '../components/organisms/registerForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <div className="flex justify-center mb-4">
          <Link to="/">
            <Logo size="text-3xl" />
          </Link>
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

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md relative overflow-hidden min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? 'login' : 'register'}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {isLogin ? (
              <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
            ) : (
              <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
            )}
          </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center text-xs text-gray-400">
          &copy; 2026 Todo Market. Proyecto con React y Firebase.
        </p>
      </div>
    </div>
  );
};

export default Auth;