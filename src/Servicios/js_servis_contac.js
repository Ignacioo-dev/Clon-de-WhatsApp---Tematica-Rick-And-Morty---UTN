const contacts = [
    {
        id: 1,
        nombre: "Rick Sanchez",
        descrip: "Abuelo científico de Morty",
        last_connection: "10:00",
        avatar: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        messages: [
            {
                id: 31,
                emisor: "OTRO",
                hora: "10:30",
                texto:
                    "¡Excelente! Podemos usar esa rama para probar distintas estrategias de seguridad y control de acceso.",
                status: "visto",
            },
            {
                id: 32,
                emisor: "YO",
                hora: "10:31",
                texto:
                    "Sí, además quiero integrar roles con Firestore Rules. Así puedo limitar acceso según tipo de usuario.",
                status: "visto",
            },
            {
                id: 33,
                emisor: "OTRO",
                hora: "10:32",
                texto:
                    "¿Pensaste en usar alguna librería para la UI de los formularios?",
                status: "visto",
            },
            {
                id: 34,
                emisor: "YO",
                hora: "10:33",
                texto:
                    "Sí, estoy probando React Hook Form. Es súper liviana y tiene buen soporte para validaciones complejas.",
                status: "visto",
            },
            {
                id: 35,
                emisor: "OTRO",
                hora: "10:34",
                texto:
                    "La usé en un proyecto anterior. Se lleva muy bien con Zod para validaciones también.",
                status: "visto",
            },
            {
                id: 36,
                emisor: "YO",
                hora: "10:35",
                texto:
                    "¡Tal cual! Justamente ahora estoy armando el esquema con Zod para validar los datos antes de enviar al backend.",
                status: "visto",
            },
            {
                id: 37,
                emisor: "OTRO",
                hora: "10:36",
                texto: "¿Cómo vas a manejar el login con Firebase Auth?",
                status: "visto",
            },
            {
                id: 38,
                emisor: "YO",
                hora: "10:37",
                texto:
                    "Voy a usar el método de correo y contraseña, pero después quiero sumar Google y GitHub como proveedores externos.",
                status: "visto",
            },
            {
                id: 39,
                emisor: "OTRO",
                hora: "10:38",
                texto:
                    "Perfecto. No te olvides de configurar bien los dominios autorizados en la consola de Firebase.",
                status: "visto",
            },
            {
                id: 40,
                emisor: "YO",
                hora: "10:39",
                texto:
                    "Obvio, ya los agregué. Después lo deployo en Vercel para pruebas y te paso el link.",
                status: "visto",
            },
        ],
    },
    {
        id: 2,
        nombre: "Morty Smith",
        descrip: "Nieto de Rick, aventurero involuntario",
        last_connection: "10:05",
        avatar: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "11:00",
                texto:
                    "¿Morty, estás libre para probar el chat que estoy desarrollando?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "11:01",
                texto:
                    "Ehh... sí, creo que sí. ¿Qué tengo que hacer? ¿Va a explotar algo? 😰",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "11:02",
                texto:
                    "Tranqui, solo quiero que pruebes enviar y recibir mensajes. Estoy testeando la conexión con Firebase y sockets.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "11:03",
                texto:
                    "Ah bueno, eso suena menos peligroso que lo que hago con Rick. ¿Dónde entro?",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "11:04",
                texto:
                    "Te paso el link: localhost:3000/chat — Entrá y escribí cualquier cosa.",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "11:05",
                texto:
                    "Estoy dentro... woah, se ve bastante bien. ¿Lo hiciste todo vos?",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "11:06",
                texto: "Sí, con React, Firebase, y un poco de magia negra con CSS.",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "11:07",
                texto:
                    "¡Wow! ¿Podrías enseñarme eso? Me gustaría poder hacer una app para guardar las aventuras que tengo con Rick.",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "11:08",
                texto:
                    "Dale, podríamos armar algo con login, base de datos y hasta mapas si querés.",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "11:09",
                texto:
                    "¡Sí! Aunque... ¿podemos ponerle un botón de emergencia también? Por si las cosas se ponen raras.",
                status: "visto",
            },
        ],
    },
    {
        id: 3,
        nombre: "Summer Smith",
        descrip: "Hermana mayor de Morty",
        last_connection: "09:45",
        avatar: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "12:00",
                texto: "Ey Summer, ¿probaste la app que te pasé?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "12:01",
                texto:
                    "¿Esa cosa con fondo oscuro y burbujitas? Sí, entré un segundo. ¿La hiciste vos?",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "12:02",
                texto:
                    "Sí, la estoy armando en React. Estoy probando una interfaz estilo WhatsApp pero más personalizable.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "12:03",
                texto:
                    "Wow... o sea, es mejor que estar scrolleando TikTok todo el día. ¿Y podés ponerle stickers?",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "12:04",
                texto:
                    "Aún no, pero es buena idea. Podría usar una librería o armar un sistema de media uploads con Firebase Storage.",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "12:05",
                texto:
                    "No tengo idea de qué significa eso, pero suena genial. Mientras pueda ponerle gifs, soy feliz.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "12:06",
                texto:
                    "Voy a integrar Giphy o Tenor para eso. Así podés buscar gifs directamente desde el chat.",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "12:07",
                texto:
                    "Literalmente quiero eso en mi vida. ¿También pensás hacer algo tipo estados como en Instagram?",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "12:08",
                texto:
                    'Sí, estoy diseñando una sección de "Historias" usando SwiperJS. Va a tener expiración automática en 24 horas.',
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "12:09",
                texto:
                    "Okay, si hacés que pueda poner filtros o efectos... te hago promo gratis con mis amigas 😎",
                status: "visto",
            },
        ],
    },
    {
        id: 4,
        nombre: "Beth Smith",
        descrip: "Madre de Morty e hija de Rick",
        last_connection: "08:30",
        avatar: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "13:00",
                texto: "Hola Beth, ¿probaste el prototipo del sistema que te mostré?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "13:01",
                texto:
                    "Sí, lo abrí mientras revisaba unas radiografías. Bastante fluido, la verdad.",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "13:02",
                texto:
                    "Genial. Estoy trabajando en la parte de autenticación y control de acceso.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "13:03",
                texto:
                    "¿Incluye niveles de permisos? Tipo administrador, usuario, etc.",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "13:04",
                texto:
                    "Sí. Cada rol tiene acceso limitado a determinadas vistas y funciones.",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "13:05",
                texto:
                    "Eso es útil. Deberías considerar implementar logs de actividad también.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "13:06",
                texto:
                    "Buena idea. Estaba pensando en usar Firebase Analytics o crear mi propio sistema con Firestore.",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "13:07",
                texto:
                    "Custom siempre es mejor, aunque más trabajo. Pero si lo hacés bien, te sirve para más proyectos.",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "13:08",
                texto: "Exacto. Quiero que sea escalable desde el principio.",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "13:09",
                texto:
                    "Eso suena más profesional que la mayoría de cosas que hace Rick. Bien por vos.",
                status: "visto",
            },
        ],
    },
    {
        id: 5,
        nombre: "Jerry Smith",
        descrip: "Padre de Morty, yerno de Rick",
        last_connection: "11:15",
        avatar: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "11:12",
                texto: "Hey Jerry, ¿necesitás ayuda con tu presentación?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "11:13",
                texto: "Sí, estaba pensando en usar Comic Sans... ¿eso está bien, no?",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "11:14",
                texto:
                    "Eh... quizás probá con algo más profesional, como Roboto o Inter.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "11:15",
                texto: "Ah, claro, claro. Igual la hice en Paint... 😬",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "11:16",
                texto:
                    "Paint no es precisamente una herramienta de presentaciones, Jerry...",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "11:17",
                texto:
                    "Bueno, pero hice animaciones. ¡Mirá! Esta es una paloma... creo.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "11:18",
                texto: "...eso parece más una papa con alas.",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "11:19",
                texto:
                    "¡Gracias! Mi mamá decía lo mismo. Siempre supo ver el arte en mí.",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "11:20",
                texto: "Bueno, te paso una plantilla de PowerPoint. Usala mejor.",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "11:21",
                texto:
                    "¡Sos un genio! Si esto sale bien, te doy créditos en los agradecimientos.",
                status: "visto",
            },
        ],
    },
    {
        id: 6,
        nombre: "Beth del Espacio",
        descrip: "Versión alternativa de Beth, rebelde espacial",
        last_connection: "11:50",
        avatar: "https://rickandmortyapi.com/api/character/avatar/770.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "10:01",
                texto: "¿Beth? ¿Sos vos o la del espacio?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "10:02",
                texto: "¿Importa? La del espacio tiene mejores armas.",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "10:03",
                texto: "Bueno, al menos no sos Jerry. Ya es un avance.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "10:03",
                texto: "Cualquier cosa es un avance respecto a Jerry.",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "10:04",
                texto: "¿Cómo es vivir viajando por el espacio?",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "10:04",
                texto: "Menos aburrido que tus preguntas.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "10:05",
                texto: "Wow... directo al ego.",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "10:06",
                texto:
                    "No te preocupes, es una conversación amistosa. Así hablo con todos.",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "10:06",
                texto: "¿Tenés tiempo para una misión conmigo?",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "10:07",
                texto: "Si no incluye babysitting de Morty, tal vez.",
                status: "visto",
            },
        ],
    },
    {
        id: 7,
        nombre: "Doofus Rick",
        descrip: "El Rick más amable del multiverso",
        last_connection: "07:30",
        avatar: "https://rickandmortyapi.com/api/character/avatar/294.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "12:01",
                texto: "¿Sos… el Rick raro del pan?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "12:02",
                texto: "¡Hola, amigo! Sí, hice pan casero hoy. ¿Querés un poco?",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "12:03",
                texto: "No sos como los otros Ricks.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "12:03",
                texto: "Gracias, trato de ser yo mismo. ¿Eso está mal?",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "12:04",
                texto: "Para nada. Es… refrescante.",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "12:05",
                texto:
                    "¿Te gustaría ayudarme a hornear esta tarde? También adopté una paloma.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "12:05",
                texto: "Esto no es lo que esperaba de un Rick.",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "12:06",
                texto: "Tal vez porque esperás muy poco de la gente :)",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "12:07",
                texto: "Me hiciste pensar. Eso no pasa seguido.",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "12:08",
                texto: "¡Ese es el espíritu! El pan te espera 🍞",
                status: "visto",
            },
        ],
    },
    {
        id: 8,
        nombre: "Evil Morty",
        descrip: "Morty malvado y calculador",
        last_connection: "06:15",
        avatar: "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "21:00",
                texto: "¿Eres realmente quien todos dicen que sos?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "21:01",
                texto: "Lo que importa no es quién soy, sino qué puedo lograr.",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "21:02",
                texto: "¿Cuál es tu objetivo final con todo esto?",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "21:03",
                texto: "Libertad. Control sobre mi destino y sobre el multiverso.",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "21:04",
                texto: "¿Y qué planeás hacer con aquellos que se interpongan?",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "21:05",
                texto: "Los usaré o los eliminaré. No hay lugar para la debilidad.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "21:06",
                texto: "¿Puedo confiar en vos?",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "21:07",
                texto:
                    "La confianza es para los ingenuos. La alianza es para los inteligentes.",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "21:08",
                texto: "Entonces, ¿cuál es nuestra alianza?",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "21:09",
                texto: "Sobrevivir y dominar. Nada menos.",
                status: "visto",
            },
        ],
    },
    {
        id: 9,
        nombre: "Snuffles",
        descrip: "El perro inteligente de la familia",
        last_connection: "09:00",
        avatar: "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "14:00",
                texto: "Hey Snuffles, ¿cómo va el plan de dominación mundial?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "14:01",
                texto:
                    "¿Quieres decir mi proyecto para mejorar la convivencia entre humanos y perros? Va viento en popa.",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "14:02",
                texto: "Eso suena menos siniestro de lo que esperaba.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "14:03",
                texto: "Porque los humanos subestiman el poder del intelecto canino.",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "14:04",
                texto: "¿Y cuál es el siguiente paso?",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "14:05",
                texto:
                    "Establecer una sociedad justa donde los perros tengan voz y voto. Empezando por las calles del vecindario.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "14:06",
                texto: "¿Te ayudamos a organizar la primera reunión canina?",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "14:07",
                texto:
                    "Será un placer. Pero solo si traés las mejores golosinas para perros.",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "14:08",
                texto: "Cuenta con eso. ¿Y qué hay de Rick? ¿Sigue sin entenderlo?",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "14:09",
                texto:
                    "Rick está demasiado ocupado con sus inventos. Pero uno de estos días, Snuffles dominará la casa.",
                status: "visto",
            },
        ],
    },
    {
        id: 10,
        nombre: "Birdperson",
        descrip: "Viejo amigo de Rick",
        last_connection: "12:10",
        avatar: "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "15:00",
                texto: "Birdperson, necesito tu consejo sobre una decisión importante.",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "15:01",
                texto: "La sabiduría se encuentra en el equilibrio, joven amigo.",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "15:02",
                texto:
                    "Estoy dudando entre seguir un camino seguro o arriesgarme por algo grande.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "15:03",
                texto:
                    "El camino del valor está lleno de incertidumbre, pero solo ese lleva a la verdadera gloria.",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "15:04",
                texto: "¿Y si fracaso? ¿Cómo seguir adelante?",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "15:05",
                texto:
                    "Caer no es el fin, sino la oportunidad de levantarse con mayor fuerza.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "15:06",
                texto: "Gracias, Birdperson. Tus palabras me inspiran.",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "15:07",
                texto:
                    "Recuerda siempre: la verdadera batalla está dentro de uno mismo.",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "15:08",
                texto:
                    "Lo tendré presente. ¿Quieres unirte a mi proyecto de desarrollo?",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "15:09",
                texto:
                    "La fuerza de la unión siempre supera a la del individuo. Contad conmigo.",
                status: "visto",
            },
        ],
    },
    {
        id: 11,
        nombre: "Tammy Guetermann",
        descrip: "Ex-esposa traicionera de Birdperson",
        last_connection: "11:40",
        avatar: "https://rickandmortyapi.com/api/character/avatar/276.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "16:00",
                texto: "Tammy, ¿tenés un momento para hablar del proyecto?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "16:01",
                texto: "Solo si es rápido. No me gusta perder el tiempo.",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "16:02",
                texto:
                    "Estoy armando la estructura de datos para la app, quiero tu opinión.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "16:03",
                texto: "Mientras no haya errores, no me interesa mucho el cómo.",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "16:04",
                texto: "¿Querés que agregue seguridad extra? Como roles y permisos.",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "16:05",
                texto: "Por supuesto, no queremos que cualquier inútil meta mano.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "16:06",
                texto: "Estoy pensando en usar Firebase Rules para eso.",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "16:07",
                texto: "Perfecto, que sea infalible. No tolero fallos.",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "16:08",
                texto: "Entonces avanzo con eso y te aviso.",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "16:09",
                texto: "Bien, no me decepciones.",
                status: "visto",
            },
        ],
    },
    {
        id: 12,
        nombre: "Mr. Meeseeks",
        descrip: "¡Mira, soy Mr. Meeseeks!",
        last_connection: "10:20",
        avatar: "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "10:00",
                texto:
                    "Hola, ¿cómo estás? Espero que todo te vaya muy bien con ese proyecto en el que estabas trabajando la última vez que hablamos. ¿Ya lograste resolver esos problemas de implementación que mencionaste?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "10:01",
                texto: "Bien, ¿y vos?",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "10:02",
                texto:
                    "Todo bien, gracias por preguntar. Estoy bastante ocupado con este nuevo proyecto de React que involucra varios hooks personalizados y una integración compleja con Firebase para el manejo de estados en tiempo real.",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "10:03",
                texto: "¿Qué hacés?",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "10:04",
                texto:
                    "Estoy profundizando en React, específicamente en el patrón de diseño Compound Components que permite crear componentes más flexibles y reutilizables. Es realmente fascinante cómo mejora la organización del código.",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "10:05",
                texto: "¡Qué bueno!",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "10:06",
                texto:
                    "Sí, además estoy combinándolo con TypeScript para tener un mejor autocompletado y detección de errores en tiempo de desarrollo. La curva de aprendizaje fue un poco empinada al principio pero ahora vale totalmente la pena.",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "10:07",
                texto: "¿Es difícil?",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "10:08",
                texto:
                    "Al principio sí, especialmente la configuración inicial con Webpack y Babel para que todo funcione correctamente. Pero una vez que superas eso, la productividad aumenta exponencialmente.",
                status: "visto",
            },
            {
                id: 10,
                emisor: "YO",
                hora: "10:09",
                texto: "Pero después te acostumbrás.",
                status: "visto",
            },
            {
                id: 11,
                emisor: "OTRO",
                hora: "10:10",
                texto:
                    "Buenísimo. Yo estoy considerando migrar mi proyecto actual a TypeScript porque he tenido varios bugs que podrían haberse evitado con tipado estático. ¿Tienes algún recurso recomendado para empezar?",
                status: "visto",
            },
            {
                id: 12,
                emisor: "YO",
                hora: "10:11",
                texto: "¿Y vos qué hacés?",
                status: "visto",
            },
            {
                id: 13,
                emisor: "OTRO",
                hora: "10:12",
                texto:
                    "Estoy desarrollando un sistema de chat en tiempo real usando Socket.io junto con una API en Node.js. La parte más desafiante ha sido manejar los eventos de reconexión cuando hay problemas de red.",
                status: "visto",
            },
            {
                id: 14,
                emisor: "YO",
                hora: "10:13",
                texto: "¿De qué es?",
                status: "visto",
            },
            {
                id: 15,
                emisor: "OTRO",
                hora: "10:14",
                texto:
                    "Una plataforma educativa con funcionalidades de videollamadas integradas usando WebRTC. Estamos implementando características avanzadas como pizarra colaborativa y compartir pantalla.",
                status: "visto",
            },
            {
                id: 16,
                emisor: "YO",
                hora: "10:15",
                texto: "¡Yo también estoy haciendo algo así!",
                status: "visto",
            },
            {
                id: 17,
                emisor: "OTRO",
                hora: "10:16",
                texto:
                    "Qué coincidencia. Estaría genial colaborar en algún momento, podríamos compartir conocimientos sobre las mejores prácticas para optimizar el rendimiento de las conexiones en tiempo real.",
                status: "visto",
            },
            {
                id: 18,
                emisor: "YO",
                hora: "10:17",
                texto: "Después te muestro cómo va quedando.",
                status: "visto",
            },
            {
                id: 19,
                emisor: "OTRO",
                hora: "10:18",
                texto:
                    "Sería excelente. Podríamos incluso considerar hacer un meetup técnico para discutir arquitecturas escalables para aplicaciones en tiempo real, incluyendo patrones como CQRS y Event Sourcing que he estado investigando.",
                status: "visto",
            },
            {
                id: 20,
                emisor: "YO",
                hora: "10:19",
                texto:
                    "Estoy aplicando todo lo que aprendí esta semana sobre optimización de renders en React usando useMemo, useCallback y React.memo. La diferencia en performance es notable, especialmente en listas largas.",
                status: "visto",
            },
            {
                id: 21,
                emisor: "OTRO",
                hora: "10:20",
                texto: "¿Usás Vite o Create React App?",
                status: "visto",
            },
            {
                id: 22,
                emisor: "YO",
                hora: "10:21",
                texto:
                    "Definitivamente Vite. La velocidad de compilación es incomparable, especialmente cuando trabajas con proyectos grandes que tienen cientos de componentes. Además, la configuración por defecto ya incluye muchas optimizaciones modernas.",
                status: "visto",
            },
            {
                id: 23,
                emisor: "OTRO",
                hora: "10:22",
                texto: "Yo también empecé a usarlo. Muy ágil.",
                status: "visto",
            },
            {
                id: 24,
                emisor: "YO",
                hora: "10:23",
                texto: "¿Te gustaría integrar Firebase?",
                status: "visto",
            },
            {
                id: 25,
                emisor: "OTRO",
                hora: "10:24",
                texto: "Sí, lo estuve viendo para guardar los mensajes.",
                status: "visto",
            },
            {
                id: 26,
                emisor: "YO",
                hora: "10:25",
                texto: "Después podés probar subir imágenes también.",
                status: "visto",
            },
            {
                id: 27,
                emisor: "OTRO",
                hora: "10:26",
                texto: "Eso estaría buenísimo. ¿Es complicado?",
                status: "visto",
            },
            {
                id: 28,
                emisor: "YO",
                hora: "10:27",
                texto: "No tanto, si usás el storage de Firebase es sencillo.",
                status: "visto",
            },
            {
                id: 29,
                emisor: "OTRO",
                hora: "10:28",
                texto: "Perfecto, lo voy a probar esta semana.",
                status: "visto",
            },
            {
                id: 30,
                emisor: "YO",
                hora: "10:29",
                texto:
                    "Después lo subo a GitHub y te paso el link. Podemos crear una rama específica para experimentar con la integración de Firebase Authentication, Firestore Database y Storage, para tener un sistema completo de autenticación y almacenamiento.",
                status: "visto",
            },
        ],
    },
    {
        id: 13,
        nombre: "Jessica",
        descrip: "Crush de Morty en la escuela",
        last_connection: "08:50",
        avatar: "https://rickandmortyapi.com/api/character/avatar/180.jpeg",
        messages: [
            {
                id: 1,
                emisor: "YO",
                hora: "18:00",
                texto: "Hola Jessica, ¿viste la nueva app que estoy desarrollando?",
                status: "visto",
            },
            {
                id: 2,
                emisor: "OTRO",
                hora: "18:01",
                texto: "¿Esa que me mandaste? La vi, está súper cool.",
                status: "visto",
            },
            {
                id: 3,
                emisor: "YO",
                hora: "18:02",
                texto: "¿Te gustaría probarla y decirme qué te parece?",
                status: "visto",
            },
            {
                id: 4,
                emisor: "OTRO",
                hora: "18:03",
                texto: "Claro, pero solo si me dejás ser la primera en subir fotos 😏",
                status: "visto",
            },
            {
                id: 5,
                emisor: "YO",
                hora: "18:04",
                texto: "Jajaja, trato hecho. ¿Qué te parece la interfaz?",
                status: "visto",
            },
            {
                id: 6,
                emisor: "OTRO",
                hora: "18:05",
                texto: "Muy limpia y fácil de usar, me encanta el estilo minimalista.",
                status: "visto",
            },
            {
                id: 7,
                emisor: "YO",
                hora: "18:06",
                texto:
                    "Estoy pensando en agregar filtros para fotos, ¿te gustaría eso?",
                status: "visto",
            },
            {
                id: 8,
                emisor: "OTRO",
                hora: "18:07",
                texto: "Obvio, los filtros siempre hacen que todo se vea mejor 😘",
                status: "visto",
            },
            {
                id: 9,
                emisor: "YO",
                hora: "18:08",
                texto: "Perfecto, lo agrego para la próxima versión.",
                status: "visto",
            },
            {
                id: 10,
                emisor: "OTRO",
                hora: "18:09",
                texto:
                    "Avísame cuando esté listo, quiero ser la primera en probarlo otra vez.",
                status: "visto",
            },
        ],
    },
];
export const getContactList = () => {
    return contacts;
};

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact;
        }
    }
    return null;
};
