import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ContactsContext } from '../../ContactsContext/ContactsContext';
import './ProfileScreen.css';

export default function ProfileScreen() {
    const { id } = useParams();
    const { contacts } = useContext(ContactsContext);
    const navigate = useNavigate();

    // Buscamos al luchador por su ID
    const contact = contacts.find(c => c.id === parseInt(id));

    if (!contact) return <div className="profile--error">Contacto no encontrado</div>;

    return (
        <div className="profile--container">
            <header className="profile--header">
                <button className="back--btn" onClick={() => navigate(-1)}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                <h2>Info. del contacto</h2>
            </header>

            <div className="profile--body">
                <div className="profile--main__card">
                    <img src={contact.profile_picture} alt={contact.name} className="profile--img__large" />
                    <h1>{contact.name}</h1>
                    <p className="profile--phone">{contact.number}</p>
                </div>

                <div className="profile--info__section">
                    <span className="section--label">Descripción</span>
                    <p className="section--content">{contact.description}</p>
                </div>

                <div className="profile--info__section">
                    <span className="section--label">Multimedia, enlaces y documentos</span>
                    <p className="section--content">No hay archivos compartidos recientemente.</p>
                </div>
            </div>
        </div>
    );
}

