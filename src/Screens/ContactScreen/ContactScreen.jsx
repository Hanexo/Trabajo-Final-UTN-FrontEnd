import { useContext, useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { ContactsContext } from '../../ContactsContext/ContactsContext';
import './ContactScreen.css';

export default function ContactScreen() {
    const { id } = useParams();
    const { contacts, sendMessage, markAsRead } = useContext(ContactsContext);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const contactId = parseInt(id);
    const contact = contacts.find(c => c.id === contactId);

    const contactMessages = (() => {
        if (!contact) return [];
        const msgs = Array.isArray(contact.messages) ? contact.messages : [];
        if (msgs.length > 0 && msgs[0].contact_id !== undefined) {
            return msgs.filter(m => m.contact_id === contactId);
        }
        return msgs;
    })();

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [contactMessages.length]);

    useEffect(() => {
        setInputValue("");
        markAsRead(contactId);
    }, [id]);

    const handleSend = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== "") {
            sendMessage(contactId, inputValue);
            setInputValue("");
        }
    };

    const handleSendClick = () => {
        if (inputValue.trim() !== "") {
            sendMessage(contactId, inputValue);
            setInputValue("");
            inputRef.current?.focus();
        }
    };

    if (!contact) return (
        <div className="cs--nochat">
            <div className="cs--nochat__box">
                <div className="cs--nochat__icon">💬</div>
                <h2>Tus mensajes personales son seguros</h2>
                <p>Selecciona un contacto para comenzar.</p>
                <div className="cs--nochat__lock">🔒 Cifrado de extremo a extremo</div>
            </div>
        </div>
    );

    const grouped = contactMessages.map((msg, i, arr) => ({
        ...msg,
        isFirst: i === 0 || arr[i - 1].send_by_me !== msg.send_by_me,
        isLast: i === arr.length - 1 || arr[i + 1].send_by_me !== msg.send_by_me,
    }));

    return (
        <div className="cs--root">

            <header className="cs--header">
                {/* Botón Back — solo visible en móvil (≤670px) */}
                <button
                    className="cs--hdr__back--btn"
                    onClick={() => navigate('/home')}
                    title="Volver"
                    aria-label="Volver a chats"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </svg>
                </button>

                <Link
                    to={`/home/profile/${contact.id}`}
                    className="cs--header__identity"
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                    <div className="cs--hdr__avatar--wrap">
                        <img
                            src={contact.profile_picture}
                            alt={contact.name}
                            className="cs--hdr__avatar"
                            onError={e => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=128c7e&color=fff&size=42`;
                            }}
                        />
                        {contact.online && <span className="cs--hdr__dot" />}
                    </div>
                    <div>
                        <p className="cs--hdr__name">{contact.name}</p>
                        <p className={`cs--hdr__status ${contact.online ? 'cs--hdr__status--on' : ''}`}>
                            {contact.online ? 'en línea' : (contact.last_time_connection || 'última vez recientemente')}
                        </p>
                    </div>
                </Link>

                <div className="cs--header__actions">
                    <button className="cs--hdr__call--btn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="25" height="25">
                            <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
                        </svg>
                        Llamar
                        <svg viewBox="0 0 24 24" fill="currentColor" width="25" height="25">
                            <path d="M7 10l5 5 5-5z" />
                        </svg>
                    </button>

                    <button className="cs--hdr__icon--btn" title="Buscar">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="25" height="25">
                            <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                    </button>

                    <button className="cs--hdr__icon--btn" title="Más opciones">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="25" height="25">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </button>
                </div>
            </header>

            <div className="cs--messages">
                <div className="cs--date__chip"><span>Hoy</span></div>

                {grouped.map((msg, index) => (
                    <div
                        key={`${contactId}-${msg.id ?? index}`}
                        className={`cs--row ${msg.send_by_me ? 'cs--row__me' : 'cs--row__them'}`}
                    >
                        <div className={[
                            'cs--bubble',
                            msg.send_by_me ? 'cs--bubble__me' : 'cs--bubble__them',
                            msg.isFirst && msg.send_by_me ? 'cs--bubble__tail--me' : '',
                            msg.isFirst && !msg.send_by_me ? 'cs--bubble__tail--them' : '',
                        ].filter(Boolean).join(' ')}>
                            <p className="cs--bubble__text">{msg.text}</p>
                            <span className="cs--bubble__foot">
                                <span className="cs--time">
                                    {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                                {msg.send_by_me && <span className="cs--ticks">✓✓</span>}
                            </span>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <footer className="cs--footer">
                <div className="cs--input__wrap">
                    <textarea
                        ref={inputRef}
                        className="cs--input"
                        placeholder="Escribe un mensaje aquí"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={handleSend}
                        rows={1}
                    />
                </div>
                <button
                    className={`cs--send__btn ${inputValue.trim() ? 'cs--send__btn--on' : ''}`}
                    onClick={handleSendClick}
                >
                    {inputValue.trim() ? "➤" : "🎤"}
                </button>
            </footer>

        </div>
    );
}
