import React, { useContext, useState, useMemo } from 'react';
import { ContactsContext } from '../../ContactsContext/ContactsContext';
import { Link } from 'react-router';
import './ContactSidebar.css';

const FILTERS = ['Todos', 'No leídos', 'Favoritos', 'Grupos'];

export default function ContactSidebar() {
    const { contacts } = useContext(ContactsContext);
    const [profileContact, setProfileContact] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filteredContacts = useMemo(() => {
        let result = contacts;

        // Filtro por pestaña activa
        if (activeFilter === 'No leídos') {
            result = result.filter(c => c.unread > 0);
        } else if (activeFilter === 'Favoritos') {
            result = result.filter(c => c.favorite);
        } else if (activeFilter === 'Grupos') {
            result = result.filter(c => c.isGroup);
        }

        // Filtro por búsqueda
        const q = searchQuery.trim().toLowerCase();
        if (q) {
            result = result.filter(c =>
                c.name.toLowerCase().includes(q) ||
                (c.last_message && c.last_message.toLowerCase().includes(q))
            );
        }

        return result;
    }, [contacts, searchQuery, activeFilter]);

    const handleAvatarClick = (e, contact) => {
        e.preventDefault();
        e.stopPropagation();
        setProfileContact(contact);
    };

    const closeProfile = () => setProfileContact(null);

    return (
        <>
            <div className="sidebar--container">
                <header className="sidebar--header">
                    <div className="header--content">
                        <h2>Chats</h2>
                        <button className="add--chat__icon">+</button>
                    </div>
                </header>

                <div className="search--bar">
                    <div className="search--icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar un chat o iniciar uno nuevo"
                        className="search--input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="search--clear__btn"
                            title="Limpiar búsqueda"
                        >
                            ✕
                        </button>
                    )}
                </div>

                <div className="filter--tabs">
                    {FILTERS.map(filter => (
                        <button
                            key={filter}
                            className={`filter--tab ${activeFilter === filter ? 'filter--tab__active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="contact--list">
                    {filteredContacts.length === 0 ? (
                        <div style={{
                            padding: '32px 16px',
                            textAlign: 'center',
                            color: '#8696a0',
                            fontSize: '14px',
                        }}>
                            {searchQuery
                                ? <>No se encontraron contactos para "<strong>{searchQuery}</strong>"</>
                                : `No hay contactos en "${activeFilter}"`
                            }
                        </div>
                    ) : (
                        filteredContacts.map((contact) => (
                            <Link
                                to={`/home/chat/${contact.id}`}
                                key={contact.id}
                                className="contact--item__link"
                            >
                                <div className="contact--card">
                                    <div
                                        className="avatar--wrapper"
                                        onClick={(e) => handleAvatarClick(e, contact)}
                                        title="Ver perfil"
                                    >
                                        <img
                                            src={contact.profile_picture}
                                            alt={contact.name}
                                            className="contact--avatar"
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=128c7e&color=fff&size=48`;
                                            }}
                                        />
                                        {contact.online && (
                                            <span className="online--indicator" />
                                        )}
                                    </div>

                                    <div className="contact--details">
                                        <div className="contact--details__row">
                                            <span className="contact--name">{contact.name}</span>
                                            <span className="contact--time">{contact.last_time_connection}</span>
                                        </div>
                                        <div className="contact--details__row">
                                            <span className="last--message">
                                                {contact.last_message || 'Click para chatear...'}
                                            </span>
                                            {contact.unread > 0 && (
                                                <span className="unread--badge">{contact.unread}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>

            {/* Modal */}
            {profileContact && (
                <div className="profile--overlay" onClick={closeProfile}>
                    <div className="profile--modal" onClick={(e) => e.stopPropagation()}>

                        <div
                            className="profile--banner"
                            style={{ backgroundImage: `url(${profileContact.profile_picture})` }}
                        >
                            <div className="profile--banner__blur" />
                            <button className="profile--close__btn" onClick={closeProfile}>✕</button>
                        </div>

                        <div className="profile--avatar__section">
                            <div className="profile--avatar__ring">
                                <img
                                    src={profileContact.profile_picture}
                                    alt={profileContact.name}
                                    className="profile--avatar__large"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profileContact.name)}&background=128c7e&color=fff&size=100`;
                                    }}
                                />
                            </div>
                            {profileContact.online
                                ? <span className="profile--status__pill online"> En línea</span>
                                : <span className="profile--status__pill offline"> {profileContact.last_time_connection || 'Desconectado'}</span>
                            }
                        </div>

                        <div className="profile--info">
                            <h2 className="profile--name">{profileContact.name}</h2>

                            <div className="profile--section">
                                <p className="profile--section__title">Información de contacto</p>
                                <div className="profile--field">
                                    <div className="profile--field__icon--wrap">📞</div>
                                    <div className="profile--field__body">
                                        <p className="profile--field__value">
                                            {profileContact.phone || '+54 9 11 0000-0000'}
                                        </p>
                                        <p className="profile--field__label">Teléfono móvil</p>
                                    </div>
                                </div>
                                {profileContact.email && (
                                    <div className="profile--field">
                                        <div className="profile--field__icon--wrap">✉️</div>
                                        <div className="profile--field__body">
                                            <p className="profile--field__value">{profileContact.email}</p>
                                            <p className="profile--field__label">Correo electrónico</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="profile--section">
                                <p className="profile--section__title">Estado</p>
                                <div className="profile--field">
                                    <div className="profile--field__icon--wrap">💬</div>
                                    <div className="profile--field__body">
                                        <p className="profile--field__value">
                                            {profileContact.status || 'Disponible'}
                                        </p>
                                        <p className="profile--field__label">Mensaje de estado</p>
                                    </div>
                                </div>
                            </div>

                            <div className="profile--section">
                                <p className="profile--section__title">Grupos en común</p>
                                <div className="profile--field no-border">
                                    <div className="profile--field__icon--wrap">👥</div>
                                    <div className="profile--field__body">
                                        <p className="profile--field__value">
                                            {profileContact.shared_groups || '0 grupos en común'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="profile--action">
                                <Link
                                    to={`/home/chat/${profileContact.id}`}
                                    className="profile--action__btn primary"
                                    onClick={closeProfile}
                                >
                                    <span><i class="bi bi-chat-dots-fill"></i>
                                    </span> Mensaje
                                </Link>
                                <button className="profile--action__btn secondary">
                                    <span><i class="bi bi-telephone-inbound"></i>
                                    </span> Llamar
                                </button>
                                <button className="profile--action__btn secondary">
                                    <span>🎥</span> Video
                                </button>
                            </div>

                            <button className="profile--block__btn">
                                <i class="bi bi-ban"></i> Bloquear a {profileContact.name}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}