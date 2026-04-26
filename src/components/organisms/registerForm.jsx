import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../atoms/button';
import { FormField } from '../molecules/formField';
import { SocialButton } from '../molecules/socialButton';
import { registerWithEmail } from '../../back/auth';

export const RegisterForm = ({ onSwitchToLogin }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        terms: false
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es obligatorio';
        if (!formData.lastName.trim()) newErrors.lastName = 'El apellido es obligatorio';
        if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = 'Email inválido';
        if (formData.password.length < 8) newErrors.password = 'Mínimo 8 caracteres';
        if (!formData.terms) newErrors.terms = 'Debes aceptar los términos';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        const fieldName = id;
        setFormData(prev => ({
            ...prev,
            [fieldName]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[fieldName]) {
            setErrors(prev => ({ ...prev, [fieldName]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        const displayName = `${formData.firstName} ${formData.lastName}`;
        const result = await registerWithEmail(formData.email, formData.password, displayName);
        setIsLoading(false);

        if (result.success) {
            console.log('Registro exitoso:', result.user);
            navigate('/');
        } else {
            setErrors({ form: 'Error al crear la cuenta. Es posible que el correo ya esté en uso.' });
        }
    };

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

            {errors.form && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 animate-in fade-in slide-in-from-top-2 duration-300">
                    <span className="material-symbols-outlined">error</span>
                    <p className="text-xs font-medium">{errors.form}</p>
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                        label="Nombre"
                        id="firstName"
                        type="text"
                        placeholder="Alex"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                    />
                    <FormField
                        label="Apellido"
                        id="lastName"
                        type="text"
                        placeholder="Johnson"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                    />
                </div>

                <FormField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="tu@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <FormField
                    label="Contraseña"
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

                <div className="flex flex-col gap-1 pt-2">
                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            className={`mt-1 rounded border-gray-300 text-orange-600 focus:ring-orange-500 transition-colors ${errors.terms ? 'border-red-500' : ''}`}
                        />
                        <label htmlFor="terms" className="text-xs text-gray-500 leading-tight">
                            Al registrarte, aceptas nuestros <a href="#" className="text-orange-600 font-bold">Términos de Servicio</a> y <a href="#" className="text-orange-600 font-bold">Política de Privacidad</a>.
                        </label>
                    </div>
                    {errors.terms && <p className="text-[10px] text-red-500 font-medium">{errors.terms}</p>}
                </div>

                <Button
                    type="submit"
                    className="w-full py-3 mt-4 flex justify-center items-center gap-2"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                            Procesando...
                        </>
                    ) : 'Crear Cuenta'}
                </Button>
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
