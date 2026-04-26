import React from 'react';
import { Button } from '../atoms/button';
import { FormField } from '../molecules/formField';
import { SocialButton } from '../molecules/socialButton';

export const LoginForm = () => {
    return (
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/50 border border-gray-100 sm:rounded-2xl sm:px-10">
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
                    <span className="bg-white px-4 text-gray-400 uppercase tracking-widest text-[10px]">o usa tu email</span>
                </div>
            </div>

            <form className="space-y-5">
                <FormField label="Email" id="email" type="email" placeholder="tu@ejemplo.com" />

                <div className="space-y-1">
                    <div className="flex justify-between">
                        <label className="text-sm font-medium text-gray-900">Contraseña</label>
                        <a href="#" className="text-xs font-semibold text-orange-600">¿Olvidaste tu contraseña?</a>
                    </div>
                    <FormField id="password" type="password" placeholder="••••••••" />
                </div>

                <Button type="submit" className="w-full py-3">Iniciar Sesión</Button>
            </form>
        </div>
    );
};