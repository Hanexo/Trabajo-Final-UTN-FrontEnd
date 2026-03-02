export const contacts = [
    {
        id: 1,
        name: 'Ilia Topuria',
        number: '+34 611 223 344',
        description: 'El Matador 🥊 | UFC Featherweight Champion. "La victoria es para los que creen".',
        last_time_connection: 'Hace 3 minutos',
        last_message: 'Bien yo estoy',
        profile_picture: "/public/IliaTopuriaProfile.jpg",
        online: true,
        unread: 1,
        messages: [
            { id: 1, text: '¡Qué locura el ambiente en el Bernabéu ayer!', send_by_me: true, created_at: '2024-05-31T20:00:00Z', is_read: true },
            { id: 2, text: 'Hermano, fue increíble. España está a otro nivel.', send_by_me: false, created_at: '2024-05-31T20:05:00Z', is_read: true },
            { id: 3, text: '¿Hoy toca sparring duro?', send_by_me: true, created_at: '2024-06-01T11:55:00Z', is_read: true },

            { id: 5, text: 'Por supuesto hermano', send_by_me: false, created_at: '2024-06-01T12:05:00Z', is_read: false }
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
            { id: 6, text: 'Gran sumisión en el último round, bro. Inevitable.', send_by_me: true, created_at: '2024-05-30T10:00:00Z', is_read: true },
            { id: 7, text: 'Gracias hermano. Dagestan wrestling, ya sabes.', send_by_me: false, created_at: '2024-05-30T10:15:00Z', is_read: true },
            { id: 8, text: 'Todo listo para el entreno?', send_by_me: true, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 9, text: 'Sí, nos vemos en el gym', send_by_me: false, created_at: '2024-06-01T12:05:00Z', is_read: true }
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
            { id: 10, text: 'Khabib, ¿vas a estar en la esquina de Islam este fin de semana?', send_by_me: true, created_at: '2024-05-28T09:00:00Z', is_read: true },
            { id: 11, text: 'Of course. He is ready to smesh everybody.', send_by_me: false, created_at: '2024-05-28T09:30:00Z', is_read: true },
            { id: 12, text: 'Hermano, ¿donde estás?', send_by_me: true, created_at: '2024-06-01T10:00:00Z', is_read: true },
            { id: 13, text: 'Send me location', send_by_me: false, created_at: '2024-06-01T10:05:00Z', is_read: true }
        ]
    },
    {
        id: 4,
        name: 'Dustin Poirier',
        number: '+1 337 555 0199',
        description: 'The Diamond 💎 | Louisiana | "Todo tiene un precio". No hay retiro sin pelea.',
        last_time_connection: 'Hace 1 hora',
        last_message: 'Jajaja casi. Te mandé una botella de mi salsa picante 🌶️',
        profile_picture: "/public/DustinPoirier--Profile.jpg",
        online: true,
        unread: 1,
        messages: [
            { id: 14, text: 'Ese boxeo estuvo impecable el sábado.', send_by_me: true, created_at: '2024-05-29T14:00:00Z', is_read: true },
            { id: 15, text: 'Apreciado, bro. Dejando el corazón en el octágono como siempre.', send_by_me: false, created_at: '2024-05-29T14:20:00Z', is_read: true },
            { id: 16, text: '¡Esa última guillotina casi entra!', send_by_me: true, created_at: '2024-06-01T15:00:00Z', is_read: true },
            { id: 17, text: 'Jajaja casi. Te mandé una botella de mi salsa picante 🌶️', send_by_me: false, created_at: '2024-06-01T15:10:00Z', is_read: false }
        ]
    },
    {
        id: 5,
        name: 'Charles Oliveira',
        number: '+55 11 98888-7777',
        description: 'O iluminado por Deus 🙏 | Do Bronx. La favela venció otra vez.',
        last_time_connection: 'Hace 5 horas',
        last_message: 'O campeão tem nome, se llama Charles Oliveira! 🇧🇷',
        profile_picture: "/public/CharlesOliveira--Profile.jpg",
        online: false,
        unread: 0,
        messages: [
            { id: 18, text: 'Charles, ¿cómo va el corte de peso?', send_by_me: true, created_at: '2024-05-30T16:00:00Z', is_read: true },
            { id: 19, text: 'Tudo perfeito, irmão. Confiando en el plan de Dios.', send_by_me: false, created_at: '2024-05-30T16:15:00Z', is_read: true },
            { id: 20, text: '¡Increíble sumisión Charles!', send_by_me: true, created_at: '2024-06-01T18:00:00Z', is_read: true },
            { id: 21, text: 'O campeão tem nome, se llama Charles Oliveira! 🇧🇷', send_by_me: false, created_at: '2024-06-01T18:05:00Z', is_read: true }
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
            { id: 22, text: '¿Viste la última pelea estelar?', send_by_me: true, created_at: '2024-05-25T22:00:00Z', is_read: true },
            { id: 23, text: 'Boring. Nobody hits like I do. They are all bums.', send_by_me: false, created_at: '2024-05-25T22:05:00Z', is_read: true },
            { id: 24, text: "We're not just here to take part, we're here to take over", send_by_me: false, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 25, text: 'Eso es mentalidad 🔥', send_by_me: true, created_at: '2024-06-01T12:05:00Z', is_read: true }
        ]
    },
    {
        id: 7,
        name: 'Sean Strickland',
        number: '+1 702 555 8899',
        description: 'American Psychopath 🇺🇸 | Hablo con la verdad. La vida es una pelea.',
        last_time_connection: 'Hace 18 horas',
        last_message: 'Así es Sean, siempre adelante',
        profile_picture: "/public/SeanStrickland--Profile.png",
        online: false,
        unread: 2,
        messages: [
            { id: 26, text: 'Oye Sean, vi tu video boxeando con ese influencer', send_by_me: true, created_at: '2024-05-31T08:00:00Z', is_read: true },
            { id: 27, text: 'Ese tipo necesitaba aprender una lección, man.', send_by_me: false, created_at: '2024-05-31T08:05:00Z', is_read: true },
            { id: 28, text: 'La vida es pelea, hay que seguir', send_by_me: false, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 29, text: 'Así es Sean, siempre adelante', send_by_me: true, created_at: '2024-06-01T12:05:00Z', is_read: true }
        ]
    },
    {
        id: 8,
        name: 'Max Holloway',
        number: '+1 808 555 2244',
        description: 'Blessed 🌴 | BMF Champion. "I am the best boxer in the UFC".',
        last_time_connection: 'Hace 10 minutos',
        last_message: '¡Gracias! Blessed Express no se detiene. Vamos por el cinturón 👑',
        profile_picture: "/public/Images/MaxHollowayProfile.jpg",
        online: true,
        unread: 0,
        messages: [
            { id: 30, text: 'Ese gesto apuntando al suelo en los últimos 10 segundos... historia pura.', send_by_me: true, created_at: '2024-05-27T19:00:00Z', is_read: true },
            { id: 31, text: 'Eso es lo que hacemos, my friend. Poner un show para los fans. Aloha 🤙', send_by_me: false, created_at: '2024-05-27T19:15:00Z', is_read: true },
            { id: 32, text: 'Ese KO en el último segundo fue épico', send_by_me: true, created_at: '2024-06-01T20:00:00Z', is_read: true },
            { id: 33, text: '¡Gracias! Blessed Express no se detiene. Vamos por el cinturón 👑', send_by_me: false, created_at: '2024-06-01T20:05:00Z', is_read: true }
        ]
    }
];