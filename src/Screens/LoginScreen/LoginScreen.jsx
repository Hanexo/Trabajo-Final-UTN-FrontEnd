import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './LoginScreen.css';

export default function LoginScreen() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ usuario: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = { usuario: '', password: '' };

        if (usuario.trim() === '') {
            newErrors.usuario = 'El nombre de usuario no puede estar vacío.';
        }

        if (password.trim() === '') {
            newErrors.password = 'La contraseña no puede estar vacía.';
        } else if (password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
        }

        if (newErrors.usuario || newErrors.password) {
            setErrors(newErrors);
            return;
        }

        navigate('/home', { state: { nombreUsuario: usuario } });
    };

    return (
        <div className="login--container">

            <div className="login-illustration">
                <svg viewBox="0 0 300 300" width="240" height="240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="150" r="145" stroke="#25D366" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
                    <circle cx="150" cy="150" r="120" stroke="#25D366" strokeWidth="1" opacity="0.15" />
                    <rect x="118" y="95" width="64" height="110" rx="10" stroke="#25D366" strokeWidth="2" />
                    <rect x="125" y="108" width="50" height="72" rx="4" stroke="#25D366" strokeWidth="1.5" />
                    <circle cx="150" cy="192" r="4" stroke="#25D366" strokeWidth="1.5" />
                    <circle cx="150" cy="102" r="2" fill="#25D366" />
                    <rect x="52" y="118" width="46" height="28" rx="8" stroke="#25D366" strokeWidth="1.5" />
                    <path d="M68 146 l-6 8 l10-8" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="62" y1="129" x2="88" y2="129" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="62" y1="136" x2="82" y2="136" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="202" y="118" width="46" height="28" rx="8" stroke="#25D366" strokeWidth="1.5" />
                    <path d="M232 146 l6 8 l-10-8" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="212" y1="129" x2="238" y2="129" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="212" y1="136" x2="232" y2="136" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M80 80 c0-6 8-10 8-2 c0-8 8-4 8 2 c0 6-8 12-8 12 c0 0-8-6-8-12z" stroke="#25D366" strokeWidth="1.5" />
                    <path d="M220 70 l3 8 h8 l-6 5 2 8 -7-4 -7 4 2-8 -6-5 h8z" stroke="#25D366" strokeWidth="1.5" />
                    <circle cx="82" cy="210" r="14" stroke="#25D366" strokeWidth="1.5" />
                    <circle cx="112" cy="210" r="14" stroke="#25D366" strokeWidth="1.5" />
                    <path d="M82 210 l15-20 h10 M97 190 l15 20 M97 190 l-8 0" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M160 68 l14-4 v16 M160 80 v8 M174 76 v8" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                    <ellipse cx="158" cy="89" rx="5" ry="3" stroke="#25D366" strokeWidth="1.5" />
                    <ellipse cx="172" cy="85" rx="5" ry="3" stroke="#25D366" strokeWidth="1.5" />
                    <circle cx="222" cy="205" r="16" stroke="#25D366" strokeWidth="1.5" />
                    <path d="M214 205 q8 10 16 0" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="216" cy="200" r="1.5" fill="#25D366" />
                    <circle cx="226" cy="200" r="1.5" fill="#25D366" />
                    <circle cx="95" cy="68" r="7" stroke="#25D366" strokeWidth="1.5" />
                    <path d="M82 90 q13-14 26 0" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M242 90 l-8 16 h8 l-8 16" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <h1 className="login--title">Bienvenido a WhatsApp</h1>
            <p className="login--subtitle">
                Lee nuestra <span className="login--link">Política de privacidad</span>. Inicia sesión para continuar.
            </p>

            <form className="login--form" onSubmit={handleSubmit}>

                <div className="login--field">
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        className={`login--input ${errors.usuario ? 'login--input--error' : ''}`}
                        value={usuario}
                        onChange={(e) => {
                            setUsuario(e.target.value);
                            if (errors.usuario) setErrors(p => ({ ...p, usuario: '' }));
                        }}
                    />
                    {errors.usuario && (
                        <span className="login--error">
                            <i className="bi bi-exclamation-circle"></i> {errors.usuario}
                        </span>
                    )}
                </div>

                <div className="login--field">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className={`login--input ${errors.password ? 'login--input--error' : ''}`}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password) setErrors(p => ({ ...p, password: '' }));
                        }}
                    />
                    {errors.password && (
                        <span className="login--error">
                            <i className="bi bi-exclamation-circle"></i> {errors.password}
                        </span>
                    )}
                </div>

                <button type="submit" className="login--btn">INICIAR SESIÓN</button>
            </form>

            <div className="login--footer">
                <span className="login--lang">🌐 Español &nbsp;▾</span>
            </div>
        </div>
    );
}
