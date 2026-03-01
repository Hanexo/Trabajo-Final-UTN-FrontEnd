export const contacts = [
    {
        id: 1,
        name: 'Ilia Topuria',
        number: '+34 611 223 344',
        description: 'El Matador 🥊 | UFC Featherweight Champion. "La victoria es para los que creen".',
        last_time_connection: 'Hace 3 minutos',
        last_message: 'Hola, como estas?',
        profile_picture: "/public/IliaTopuriaProfile.jpg",
        online: true,
        unread: 3,
        messages: [
            { id: 1, text: 'Hola, como estas?', send_by_me: true, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 2, text: 'Bien yo estoy', send_by_me: false, created_at: '2024-06-01T12:05:00Z', is_read: false }
        ]
    },
    {
        id: 2,
        name: 'Islam Makhachev',
        number: '+7 900 123 45 67',
        description: 'Pound for Pound #1 🦅 Dagestan Team. En la cima del mundo.',
        last_time_connection: 'Hace 23 minutos',
        last_message: 'Sí, nos vemos en el gym',
        profile_picture: "/public/IslamMakhachev--Profile.jpg",
        online: true,
        unread: 0,
        messages: [
            { id: 3, text: 'Todo listo para el entreno?', send_by_me: true, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 4, text: 'Sí, nos vemos en el gym', send_by_me: false, created_at: '2024-06-01T12:05:00Z', is_read: true }
        ]
    },
    {
        id: 3,
        name: 'Khabib Nurmagomedov',
        number: '+7 900 555 00 11',
        description: 'The Eagle 🦅 | 29-0 | Alhamdullilah para todo. Entrena duro o vete a casa.',
        last_time_connection: 'Ayer',
        last_message: 'Send me location',
        profile_picture: "/public/KhabibNurmagomedov--Profile.jpg",
        online: false,
        unread: 0,
        messages: [
            { id: 5, text: 'Hermano, ¿donde estás?', send_by_me: true, created_at: '2024-06-01T10:00:00Z', is_read: true },
            { id: 6, text: 'Send me location', send_by_me: false, created_at: '2024-06-01T10:05:00Z', is_read: true }
        ]
    },
    {
        id: 4,
        name: 'Dustin Poirier',
        number: '+1 337 555 0199',
        description: 'The Diamond 💎 | Louisiana | "Todo tiene un precio". No hay retiro sin pelea.',
        last_time_connection: 'Hace 1 hora',
        last_message: 'Te mandé una botella de mi salsa picante',
        profile_picture: "/public/DustinPoirier--Profile.jpg",
        online: true,
        unread: 1,
        messages: [
            { id: 7, text: '¡Esa última guillotina casi entra!', send_by_me: true, created_at: '2024-06-01T15:00:00Z', is_read: true },
            { id: 8, text: 'Jajaja casi. Te mandé una botella de mi salsa picante 🌶️', send_by_me: false, created_at: '2024-06-01T15:10:00Z', is_read: false }
        ]
    },
    {
        id: 5,
        name: 'Charles Oliveira',
        number: '+55 11 98888-7777',
        description: 'O iluminado por Deus 🙏 | Do Bronx. La favela venció otra vez.',
        last_time_connection: 'Hace 5 horas',
        last_message: 'O campeão tem nome',
        profile_picture: "/public/CharlesOliveira--Profile.jpg",
        online: false,
        unread: 0,
        messages: [
            { id: 9, text: '¡Increíble sumisión Charles!', send_by_me: true, created_at: '2024-06-01T18:00:00Z', is_read: true },
            { id: 10, text: 'O campeão tem nome, se llama Charles Oliveira! 🇧🇷', send_by_me: false, created_at: '2024-06-01T18:05:00Z', is_read: true }
        ]
    },
    {
        id: 6,
        name: 'Conor McGregor',
        number: '+353 1 444 0000',
        description: 'The Notorious 🇮🇪 | Doble Campeón. El Rey ha vuelto.',
        last_time_connection: 'Hace 12 horas',
        last_message: 'Eso es mentalidad 🔥',
        profile_picture: "/public/Images/ConorMcGregorProfile.jpg",
        online: false,
        unread: 0,
        messages: [
            { id: 14, text: "We're not just here to take part, we're here to take over", send_by_me: false, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 15, text: 'Eso es mentalidad 🔥', send_by_me: true, created_at: '2024-06-01T12:05:00Z', is_read: true }
        ]
    },
    {
        id: 7,
        name: 'Sean Strickland',
        number: '+1 702 555 8899',
        description: 'American Psychopath 🇺🇸 | Hablo con la verdad. La vida es una pelea.',
        last_time_connection: 'Hace 18 horas',
        last_message: 'La vida es pelea, hay que seguir',
        profile_picture: "/public/SeanStrickland--Profile.png",
        online: false,
        unread: 2,
        messages: [
            { id: 16, text: 'La vida es pelea, hay que seguir', send_by_me: false, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 17, text: 'Así es Sean, siempre adelante', send_by_me: true, created_at: '2024-06-01T12:05:00Z', is_read: true }
        ]
    },
    {
        id: 8,
        name: 'Max Holloway',
        number: '+1 808 555 2244',
        description: 'Blessed 🌴 | BMF Champion. "I am the best boxer in the UFC".',
        last_time_connection: 'Hace 10 minutos',
        last_message: 'Vamos por el cinturón',
        profile_picture: "/public/Images/MaxHollowayProfile.jpg",
        online: true,
        unread: 0,
        messages: [
            { id: 18, text: 'Ese KO en el último segundo fue épico', send_by_me: true, created_at: '2024-06-01T20:00:00Z', is_read: true },
            { id: 19, text: '¡Gracias! Blessed Express no se detiene. Vamos por el cinturón 👑', send_by_me: false, created_at: '2024-06-01T20:05:00Z', is_read: true }
        ]
    }
];