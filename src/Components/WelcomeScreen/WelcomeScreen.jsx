import React from 'react';
import './WelcomeScreen.css';

export default function WelcomeScreen() {
    return (
        <div className="ws--root">

            {/* Tarjeta superior */}
            <div className="ws--card">
                <div className="ws--illustration">
                    <svg viewBox="0 0 160 120" width="180" height="135" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Laptop */}
                        <rect x="20" y="20" width="100" height="70" rx="6" fill="#f0f2f5" stroke="#c8c8c8" strokeWidth="2" />
                        <rect x="28" y="28" width="84" height="54" rx="3" fill="#e9edef" />
                        <rect x="8" y="90" width="124" height="8" rx="4" fill="#d1d7db" />
                        <rect x="36" y="38" width="50" height="4" rx="2" fill="#b0b8be" />
                        <rect x="36" y="48" width="40" height="4" rx="2" fill="#b0b8be" />
                        <rect x="36" y="58" width="45" height="4" rx="2" fill="#b0b8be" />
                        <rect x="36" y="68" width="30" height="4" rx="2" fill="#b0b8be" />
                        {/* Teléfono superpuesto */}
                        <rect x="88" y="28" width="46" height="74" rx="8" fill="#25d366" stroke="white" strokeWidth="2.5" />
                        <rect x="94" y="38" width="34" height="50" rx="3" fill="white" opacity="0.9" />
                        <circle cx="111" cy="34" r="2" fill="white" opacity="0.6" />
                        <circle cx="111" cy="88" r="3" fill="white" opacity="0.5" />
                        {/* Auricular */}
                        <path d="M101 58 c0-8 20-8 20 0 c0 6-4 10-6 8 l-2-2 c-1-1 0-3-1-4 c-2-2-4-2-6 0 c-1 1 0 3-1 4 l-2 2 c-2 2-2-2-2-8z" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        {/* X en esquina laptop */}
                        <line x1="94" y1="32" x2="100" y2="38" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="100" y1="32" x2="94" y2="38" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>

                <h2 className="ws--card__title">Descarga WhatsApp para Windows</h2>
                <p className="ws--card__desc">
                    Obtén funciones adicionales, como llamadas y videollamadas, compartir pantalla y más.
                </p>
                <button className="ws--download__btn">Descargar</button>
            </div>

            {/* Botones de acción */}
            <div className="ws--actions">
                <button className="ws--action__btn">
                    <i className="bi bi-file-earmark-text ws-action-icon"></i>
                    <span>Enviar documento</span>
                </button>
                <button className="ws--action__btn">
                    <i className="bi bi-person-plus ws-action-icon"></i>
                    <span>Añadir contacto</span>
                </button>
            </div>

        </div>
    );
}