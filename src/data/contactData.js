export const contacts = [
    {
        id: 1,
        name: 'Ilia Topuria',
        number: '+34 611 223 344',
        description: 'El Matador 🥊 | Campeón de Peso Pluma de la UFC. "La victoria es para los que creen".',
        last_time_connection: '12:30 a.m.',
        last_message: 'Bien yo estoy',
        profile_picture: "/public/IliaTopuriaProfile.jpg",
        online: true,
        unread: 1,
        messages: [
            { id: 1, text: 'Bro, ¿viste la pelea de ayer?', send_by_me: true, created_at: '2024-05-29T21:00:00Z', is_read: true },
            { id: 2, text: 'Sí, mucho nivel bajo. Nadie tiene mi boxeo.', send_by_me: false, created_at: '2024-05-29T21:05:00Z', is_read: true },
            { id: 3, text: 'Jajaja, el campeón hablando con la verdad.', send_by_me: true, created_at: '2024-05-29T21:10:00Z', is_read: true },
            { id: 4, text: '¡Qué locura el ambiente en el Bernabéu ayer!', send_by_me: true, created_at: '2024-05-31T20:00:00Z', is_read: true },
            { id: 5, text: 'Hermano, fue increíble. España está a otro nivel. 🇪🇸', send_by_me: false, created_at: '2024-05-31T20:05:00Z', is_read: true },
            { id: 6, text: '¿Vas a traer el evento a Madrid al final?', send_by_me: true, created_at: '2024-05-31T20:10:00Z', is_read: true },
            { id: 7, text: '100%. Dana ya sabe lo que hay.', send_by_me: false, created_at: '2024-05-31T20:15:00Z', is_read: true },
            { id: 8, text: '¿Hoy toca sparring duro?', send_by_me: true, created_at: '2024-06-01T11:55:00Z', is_read: true },
            { id: 9, text: 'Hola, como estas?', send_by_me: true, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 10, text: 'Bien yo estoy', send_by_me: false, created_at: '2024-06-01T12:05:00Z', is_read: false }
        ]
    },
    {
        id: 2,
        name: 'Islam Makhachev',
        number: '+7 900 123 45 67',
        description: 'Libra por Libra #1 🦅 Equipo Daguestán. En la cima del mundo.',
        last_time_connection: 'Ayer',
        last_message: 'Sí, nos vemos en el gimnasio',
        profile_picture: "/public/IslamMakhachev--Profile.jpg",
        online: true,
        unread: 0,
        messages: [
            { id: 11, text: 'Ey Islam, ¿cómo va el campamento?', send_by_me: true, created_at: '2024-05-28T09:00:00Z', is_read: true },
            { id: 12, text: 'Todo bien, entrenando 3 veces al día.', send_by_me: false, created_at: '2024-05-28T09:15:00Z', is_read: true },
            { id: 13, text: 'Máquina. ¿Khabib está apretando mucho?', send_by_me: true, created_at: '2024-05-28T09:20:00Z', is_read: true },
            { id: 14, text: 'Hermano, su entrenamiento es una locura. No hay descanso.', send_by_me: false, created_at: '2024-05-28T09:30:00Z', is_read: true },
            { id: 15, text: 'Gran sumisión en el último asalto el otro día. Inevitable.', send_by_me: true, created_at: '2024-05-30T10:00:00Z', is_read: true },
            { id: 16, text: 'Gracias hermano. Lucha de Daguestán, ya sabes. A aplastar.', send_by_me: false, created_at: '2024-05-30T10:15:00Z', is_read: true },
            { id: 17, text: '¿Todo listo para el entreno de hoy?', send_by_me: true, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 18, text: 'Sí, nos vemos en el gimnasio', send_by_me: false, created_at: '2024-06-01T12:05:00Z', is_read: true }
        ]
    },
    {
        id: 3,
        name: 'Khabib Nurmagomedov',
        number: '+7 900 555 00 11',
        description: 'The Eagle 🦅 | 29-0 | Alhamdullilah para todo. Entrena duro o vete a casa.',
        last_time_connection: 'Ayer',
        last_message: 'Mándame la ubicación',
        profile_picture: "/public/KhabibNurmagomedov--Profile.jpg",
        online: false,
        unread: 0,
        messages: [
            { id: 19, text: 'Khabib, ¿vas a estar en la esquina de Islam este fin de semana?', send_by_me: true, created_at: '2024-05-28T09:00:00Z', is_read: true },
            { id: 20, text: 'Por supuesto. Está listo para aplastar a todo el mundo.', send_by_me: false, created_at: '2024-05-28T09:30:00Z', is_read: true },
            { id: 21, text: '¿Algún consejo para mejorar el control en el suelo?', send_by_me: true, created_at: '2024-05-29T10:00:00Z', is_read: true },
            { id: 22, text: 'Tienes que cansarlos. Correr por la montaña, luchar con osos.', send_by_me: false, created_at: '2024-05-29T10:30:00Z', is_read: true },
            { id: 23, text: 'Jajaja, lo de los osos te lo dejo a ti.', send_by_me: true, created_at: '2024-05-29T10:35:00Z', is_read: true },
            { id: 24, text: 'Esto no es broma, hermano. Alhamdullilah.', send_by_me: false, created_at: '2024-05-29T10:40:00Z', is_read: true },
            { id: 25, text: 'Hermano, ¿dónde estás hoy para entrenar?', send_by_me: true, created_at: '2024-06-01T10:00:00Z', is_read: true },
            { id: 26, text: 'Mándame la ubicación', send_by_me: false, created_at: '2024-06-01T10:05:00Z', is_read: true }
        ]
    },
    {
        id: 4,
        name: 'Dustin Poirier',
        number: '+1 337 555 0199',
        description: 'El Diamante 💎 | Luisiana | "Todo tiene un precio". No hay retiro sin pelea.',
        last_time_connection: 'Domingo',
        last_message: 'Te mandé una botella de mi salsa picante',
        profile_picture: "/public/DustinPoirier--Profile.jpg",
        online: true,
        unread: 1,
        messages: [
            { id: 27, text: '¡Hey Dustin! ¿Cómo va todo por Luisiana?', send_by_me: true, created_at: '2024-05-27T14:00:00Z', is_read: true },
            { id: 28, text: 'Todo excelente, descansando con la familia.', send_by_me: false, created_at: '2024-05-27T14:20:00Z', is_read: true },
            { id: 29, text: 'Ese boxeo estuvo impecable el sábado.', send_by_me: true, created_at: '2024-05-29T14:00:00Z', is_read: true },
            { id: 30, text: 'Te lo agradezco, bro. Dejando el corazón en el octágono como siempre.', send_by_me: false, created_at: '2024-05-29T14:20:00Z', is_read: true },
            { id: 31, text: 'Nunca decepcionas en las peleas, pura guerra.', send_by_me: true, created_at: '2024-05-29T14:25:00Z', is_read: true },
            { id: 32, text: 'Cuentas saldadas 💎', send_by_me: false, created_at: '2024-05-29T14:30:00Z', is_read: true },
            { id: 33, text: '¡Esa última guillotina casi entra hoy en el sparring!', send_by_me: true, created_at: '2024-06-01T15:00:00Z', is_read: true },
            { id: 34, text: 'Jajaja casi. Te mandé una botella de mi salsa picante 🌶️', send_by_me: false, created_at: '2024-06-01T15:10:00Z', is_read: false }
        ]
    },
    {
        id: 5,
        name: 'Charles Oliveira',
        number: '+55 11 98888-7777',
        description: 'El iluminado por Dios 🙏 | Do Bronx. La favela venció otra vez.',
        last_time_connection: 'Sábado',
        last_message: 'El campeón tiene nombre',
        profile_picture: "/public/CharlesOliveira--Profile.jpg",
        online: false,
        unread: 0,
        messages: [
            { id: 35, text: 'Charles, ¿cómo va el corte de peso?', send_by_me: true, created_at: '2024-05-30T16:00:00Z', is_read: true },
            { id: 36, text: 'Todo perfecto, hermano. Confiando en el plan de Dios.', send_by_me: false, created_at: '2024-05-30T16:15:00Z', is_read: true },
            { id: 37, text: 'Se te ve muy fuerte, el jiu-jitsu está en otro nivel.', send_by_me: true, created_at: '2024-05-30T16:20:00Z', is_read: true },
            { id: 38, text: 'Muchas gracias. La favela va a vencer de nuevo.', send_by_me: false, created_at: '2024-05-30T16:25:00Z', is_read: true },
            { id: 39, text: 'A por ellos tigre 🐅', send_by_me: true, created_at: '2024-05-30T16:30:00Z', is_read: true },
            { id: 40, text: '¡Increíble sumisión Charles!', send_by_me: true, created_at: '2024-06-01T18:00:00Z', is_read: true },
            { id: 41, text: '¡El campeón tiene nombre, se llama Charles Oliveira! 🇧🇷', send_by_me: false, created_at: '2024-06-01T18:05:00Z', is_read: true }
        ]
    },
    {
        id: 6,
        name: 'Conor McGregor',
        number: '+353 1 444 0000',
        description: 'The Notorious 🇮🇪 | Doble Campeón. El Rey ha vuelto.',
        last_time_connection: 'Sábado',
        last_message: 'Eso es mentalidad 🔥',
        profile_picture: "/public/ConorMcGregor--Profile.jpg",
        online: false,
        unread: 0,
        messages: [
            { id: 42, text: '¿Viste la última pelea estelar?', send_by_me: true, created_at: '2024-05-25T22:00:00Z', is_read: true },
            { id: 43, text: 'Aburrido. Nadie pega como yo. Son todos unos vagos.', send_by_me: false, created_at: '2024-05-25T22:05:00Z', is_read: true },
            { id: 44, text: 'Jajaja, nunca cambias.', send_by_me: true, created_at: '2024-05-25T22:10:00Z', is_read: true },
            { id: 45, text: 'Cuando regrese, será el evento más grande de la historia. ¡Grítalo!', send_by_me: false, created_at: '2024-05-25T22:15:00Z', is_read: true },
            { id: 46, text: '¿Ya estás a tope entrenando o sigues en el yate?', send_by_me: true, created_at: '2024-05-25T22:20:00Z', is_read: true },
            { id: 47, text: 'Proper 12 en una mano, los guantes en la otra. 🥃🥊', send_by_me: false, created_at: '2024-05-25T22:25:00Z', is_read: true },
            { id: 48, text: "No estamos aquí solo para participar, estamos aquí para tomar el control.", send_by_me: false, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 49, text: 'Eso es mentalidad 🔥', send_by_me: true, created_at: '2024-06-01T12:05:00Z', is_read: true }
        ]
    },
    {
        id: 7,
        name: 'Sean Strickland',
        number: '+1 702 555 8899',
        description: 'American Psychopath 🇺🇸 | Hablo con la verdad. La vida es una pelea.',
        last_time_connection: 'Viernes',
        last_message: 'La vida es pelea, hay que seguir',
        profile_picture: "/public/SeanStrickland--Profile.png",
        online: false,
        unread: 2,
        messages: [
            { id: 50, text: 'Oye Sean, vi tu video boxeando con ese influencer', send_by_me: true, created_at: '2024-05-31T08:00:00Z', is_read: true },
            { id: 51, text: 'Ese tipo necesitaba aprender una lección, tío.', send_by_me: false, created_at: '2024-05-31T08:05:00Z', is_read: true },
            { id: 52, text: 'Casi le arrancas la cabeza en el sparring', send_by_me: true, created_at: '2024-05-31T08:10:00Z', is_read: true },
            { id: 53, text: 'Este es el juego de la lucha. Si no quieres sangrar, vete a jugar al tenis.', send_by_me: false, created_at: '2024-05-31T08:15:00Z', is_read: true },
            { id: 54, text: 'Jajaja, directo como siempre.', send_by_me: true, created_at: '2024-05-31T08:20:00Z', is_read: true },
            { id: 55, text: 'La cosa es esta, chicos... yo solo digo la verdad.', send_by_me: false, created_at: '2024-05-31T08:25:00Z', is_read: true },
            { id: 56, text: 'La vida es pelea, hay que seguir', send_by_me: false, created_at: '2024-06-01T12:00:00Z', is_read: true },
            { id: 57, text: 'Así es Sean, siempre adelante', send_by_me: true, created_at: '2024-06-01T12:05:00Z', is_read: true }
        ]
    },
    {
        id: 8,
        name: 'Max Holloway',
        number: '+1 808 555 2244',
        description: 'Blessed 🌴 | Campeón BMF. "Soy el mejor boxeador de la UFC".',
        last_time_connection: 'Viernes',
        last_message: 'Vamos por el cinturón',
        profile_picture: "/public/MaxHolloway--Profile.png",
        online: true,
        unread: 0,
        messages: [
            { id: 58, text: 'Ese gesto apuntando al suelo en los últimos 10 segundos... historia pura.', send_by_me: true, created_at: '2024-05-27T19:00:00Z', is_read: true },
            { id: 59, text: 'Eso es lo que hacemos, amigo. Dar un espectáculo para los fans. Aloha 🤙', send_by_me: false, created_at: '2024-05-27T19:15:00Z', is_read: true },
            { id: 60, text: 'El mejor boxeador de la UFC sin duda.', send_by_me: true, created_at: '2024-05-27T19:20:00Z', is_read: true },
            { id: 61, text: '¡Ya lo sabes! Es lo que es.', send_by_me: false, created_at: '2024-05-27T19:25:00Z', is_read: true },
            { id: 62, text: '¿Qué sigue ahora? ¿Topuria?', send_by_me: true, created_at: '2024-05-27T19:30:00Z', is_read: true },
            { id: 63, text: 'Mándale el contrato. Quiero esa pelea en Hawái o en España.', send_by_me: false, created_at: '2024-05-27T19:35:00Z', is_read: true },
            { id: 64, text: 'Ese KO en el último segundo fue épico', send_by_me: true, created_at: '2024-06-01T20:00:00Z', is_read: true },
            { id: 65, text: '¡Gracias! El "Blessed Express" no se detiene. Vamos por el cinturón 👑', send_by_me: false, created_at: '2024-06-01T20:05:00Z', is_read: true }
        ]
    }
];