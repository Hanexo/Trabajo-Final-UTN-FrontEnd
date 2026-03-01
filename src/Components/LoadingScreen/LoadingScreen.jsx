import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './LoadingScreen.css';

export default function SplashScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="loading--container">
            <div className="loading--content">

                <div className="loading--icon">
                    <svg viewBox="0 0 48 48" width="90" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#25d366" />
                        <circle cx="24" cy="22" r="13" fill="white" />
                        <polygon points="14,32 8,40 20,32" fill="white" />
                        <path d="M19 16.5c-.3.7-1.5 3.3-.5 5.2 1 2 3.2 4.3 5.3 5.3 1.9 1 4.5-.2 5.2-.5.3-.1.4-.5.2-.7l-1.8-2.2c-.2-.2-.5-.3-.7-.1l-1.3.9c-.2.1-.5.1-.7-.1-1-1-2.2-2.4-2.2-2.4s-1.4-1.2-2.4-2.2c-.2-.2-.2-.5-.1-.7l.9-1.3c.2-.2.1-.5-.1-.7l-2.2-1.8c-.2-.2-.6-.1-.7.2z" fill="#25d366" />
                    </svg>
                </div>

                <h1 className="loading--title">WhatsApp</h1>

                <div className="loading--progress__wrap">
                    <div className="loading--progress__bar" />
                </div>

            </div>

            <div className="loading--footer">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="#8696a0" strokeWidth="1.5" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Cifrado de extremo a extremo</span>
            </div>
        </div>
    );
}
