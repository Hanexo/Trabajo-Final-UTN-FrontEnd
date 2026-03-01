import { createContext, useState } from "react";
import { getContacts } from "../services/contactService";

export const ContactsContext = createContext({
    contacts: []
});

const ContactsContextProvider = ({ children }) => {

    // Al cargar, normalizamos los datos para garantizar que cada contacto
    // tenga SOLO sus propios mensajes (por si el servicio los mezcla)
    const normalizeContacts = () => {
        const raw = getContacts();

        return raw.map(contact => {
            let messages = Array.isArray(contact.messages) ? contact.messages : [];

            // Si los mensajes tienen contact_id, filtramos solo los de este contacto
            if (messages.length > 0 && messages[0].contact_id !== undefined) {
                messages = messages.filter(m => m.contact_id === contact.id);
            }

            return { ...contact, messages };
        });
    };

    const [contactsState, setContactsState] = useState(normalizeContacts);

    const sendMessage = (contactId, text) => {
        setContactsState(prevContacts =>
            prevContacts.map(contact => {
                if (contact.id === contactId) {
                    const newMessage = {
                        // ── FIX: ID único global, no basado en .length ──
                        // .length causa IDs duplicados entre contactos
                        id: Date.now(),
                        text: text,
                        send_by_me: true,
                        created_at: new Date().toISOString(),
                        is_read: true,
                        contact_id: contactId,  // guardamos a quién pertenece
                    };
                    return {
                        ...contact,
                        messages: [...contact.messages, newMessage]
                    };
                }
                return contact;
            })
        );
    };

    const markAsRead = (contactId) => {
        setContactsState(prevContacts =>
            prevContacts.map(contact =>
                contact.id === contactId
                    ? { ...contact, unread: 0 }
                    : contact
            )
        );
    };

    const provider_values = {
        contacts: contactsState,
        sendMessage,
        markAsRead,
    };

    return (
        <ContactsContext.Provider value={provider_values}>
            {children}
        </ContactsContext.Provider>
    );
};

export default ContactsContextProvider;
