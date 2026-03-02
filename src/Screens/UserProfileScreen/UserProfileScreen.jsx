import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './UserProfileScreen.css';

export default function UserProfileScreen() {
    const navigate = useNavigate();
    const userName = sessionStorage.getItem('nombreUsuario') || 'Usuario';

    return (
        <div className="ups--layout">

            {/* ── PANEL IZQUIERDO ── */}
            <div className="ups--panel">

                <div className="ups--panel__header">
                    <button className="ups--back__btn" onClick={() => navigate(-1)}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                        </svg>
                    </button>
                    <h2 className="ups--panel__title">Perfil</h2>
                </div>

                {/* Foto de perfil */}
                <div className="ups--avatar__section">
                    <div className="ups--avatar__wrap">
                        <div className="ups--avatar__placeholder">
                            {userName.charAt(0).toUpperCase()}
                        </div>
                        <button className="ups--avatar__edit" title="Cambiar foto">
                            <i className="bi bi-camera-fill"></i>
                        </button>
                    </div>
                </div>

                {/* Nombre */}
                <div className="ups--field">
                    <span className="ups--field__label">Nombre</span>
                    <div className="ups--field__row">
                        <span className="ups--field__value">{userName}</span>
                        <button className="ups--field__edit" title="Editar nombre">
                            <i className="bi bi-pencil"></i>
                        </button>
                    </div>
                </div>

                {/* Info */}
                <div className="ups--field">
                    <span className="ups--field__label">Info.</span>
                    <div className="ups--field__row">
                        <span className="ups--field__value">¡Hola! Estoy usando WhatsApp.</span>
                    </div>
                </div>

                {/* Teléfono */}
                <div className="ups--field">
                    <span className="ups--field__label">Teléfono</span>
                    <div className="ups--field__row">
                        <i className="bi bi-telephone ups--field__phone-icon"></i>
                        <span className="ups--field__value">+54 9 11 3308-7968</span>
                        <button className="ups--field__edit" title="Copiar">
                            <i className="bi bi-copy"></i>
                        </button>
                    </div>
                </div>

            </div>

            {/* ── PANEL DERECHO (placeholder) ── */}
            <div className="ups--right">
                <div className="ups--right__placeholder">
                    <svg viewBox="0 0 24 24" width="80" height="80" fill="none">
                        <circle cx="12" cy="8" r="4" stroke="#c8c8c8" strokeWidth="1.5" />
                        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#c8c8c8" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <p>Perfil</p>
                </div>
            </div>

        </div>
    );
}
