import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../atoms/button';
import { FormField } from '../molecules/formField';
import { SocialButton } from '../molecules/socialButton';

export const LoginForm = ({ onSwitchToRegister }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = 'Email inválido';
        if (!formData.password) newErrors.password = 'La contraseña es obligatoria';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        console.log('Login exitoso:', formData);
        navigate('/'); // Redirigir al home tras login
    };

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

            <form className="space-y-5" onSubmit={handleSubmit}>
                <FormField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="tu@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <div className="space-y-1">
                    <div className="flex justify-between">
                        <label className="text-sm font-medium text-gray-900">Contraseña</label>
                        <a href="#" className="text-xs font-semibold text-orange-600">¿Olvidaste tu contraseña?</a>
                    </div>
                    <FormField
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                        rightElement={
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-gray-400 hover:text-orange-600 transition-colors"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {showPassword ? 'visibility_off' : 'visibility'}
                                </span>
                            </button>
                        }
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full py-3 flex justify-center items-center gap-2"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                            Iniciando...
                        </>
                    ) : 'Iniciar Sesión'}
                </Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    ¿No tienes una cuenta?{' '}
                    <button
                        onClick={onSwitchToRegister}
                        className="font-bold text-orange-600 hover:text-orange-500 transition-colors"
                    >
                        Regístrate aquí
                    </button>
                </p>
            </div>
        </div>
    );
};
