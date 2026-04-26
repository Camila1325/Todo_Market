import React from 'react';
import { Button } from '../atoms/button';
import { FormField } from '../molecules/formField';
import { SocialButton } from '../molecules/socialButton';

export const RegisterForm = ({ onSwitchToLogin }) => {
    return (
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/50 border border-gray-100 sm:rounded-2xl sm:px-10">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Crea tu cuenta</h2>
                <p className="text-gray-500 text-sm mt-1">Únete a la comunidad de Todo Market</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
                <SocialButton
                    provider="Google"
                    iconUrl="https://www.svgrepo.com/show/475656/google-color.svg"
                />
                <SocialButton
                    provider="Facebook"
                    iconUrl="https://www.svgrepo.com/show/475647/facebook-color.svg"
                />
            </div>

            <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-4 text-gray-400 uppercase tracking-widest text-[10px]">o regístrate con tu email</span>
                </div>
            </div>

            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <FormField label="Nombre" id="first-name" type="text" placeholder="Alex" />
                    <FormField label="Apellido" id="last-name" type="text" placeholder="Johnson" />
                </div>
                
                <FormField label="Email" id="email" type="email" placeholder="tu@ejemplo.com" />
                
                <FormField label="Contraseña" id="password" type="password" placeholder="••••••••" />
                
                <div className="flex items-start gap-2 pt-2">
                    <input type="checkbox" id="terms" className="mt-1 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                    <label htmlFor="terms" className="text-xs text-gray-500 leading-tight">
                        Al registrarte, aceptas nuestros <a href="#" className="text-orange-600 font-bold">Términos de Servicio</a> y <a href="#" className="text-orange-600 font-bold">Política de Privacidad</a>.
                    </label>
                </div>

                <Button type="submit" className="w-full py-3 mt-4">Crear Cuenta</Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    ¿Ya tienes una cuenta?{' '}
                    <button 
                        onClick={onSwitchToLogin}
                        className="font-bold text-orange-600 hover:text-orange-500 transition-colors"
                    >
                        Inicia sesión aquí
                    </button>
                </p>
            </div>
        </div>
    );
};
