import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ContactsContext } from '../../ContactsContext/ContactsContext';
import './NavSidebar.css';

export default function NavSidebar() {
    const { contacts } = useContext(ContactsContext);
    const navigate = useNavigate();

    const totalUnread = contacts.reduce((acc, c) => acc + (c.unread || 0), 0);


    const userAvatar = sessionStorage.getItem('userAvatar') || null;
    const userName = sessionStorage.getItem('nombreUsuario') || 'U';

    return (
        <nav className="nav--sidebar">


            <div className="nav--top">


                <button className="nav--btn nav--btn__active" title="Chats">
                    <span className="nav--icon__wrap">
                        <i className="bi bi-chat-dots-fill"></i>
                        {totalUnread > 0 && (
                            <span className="nav--badge">{totalUnread > 99 ? '99+' : totalUnread}</span>
                        )}
                    </span>
                </button>


                <button className="nav--btn" title="Estados">
                    <span className="nav--icon__wrap">
                        <i className="bi bi-circle-half"></i>
                        <span className="nav--online-dot" />
                    </span>
                </button>


                <button className="nav--btn" title="Comunidades">
                    <i className="bi bi-chat-left-dots"></i>
                </button>


                <button className="nav--btn" title="Contactos">
                    <i className="bi bi-people"></i>
                </button>

            </div>

            {/* ── ÍCONOS INFERIORES ── */}
            <div className="nav--bottom">

                {/* Nuevo chat */}
                <button className="nav--btn" title="Nuevo chat">
                    <i className="bi bi-pencil-square"></i>
                </button>

                {/* Configuración */}
                <button className="nav--btn" title="Configuración">
                    <i className="bi bi-gear"></i>
                </button>

                {/* Avatar de usuario */}
                <button className="nav--btn nav--btn__avatar" title={userName}
                    onClick={() => navigate('/profile')}
                >
                    {userAvatar
                        ? <img src={userAvatar} alt={userName} className="nav--avatar" />
                        : <div className="nav--avatar__placeholder">
                            {userName.charAt(0).toUpperCase()}
                        </div>
                    }
                </button>

            </div>
        </nav>
    );
}
