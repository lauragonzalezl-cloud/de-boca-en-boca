// =========================================================================
// VARIABLES GLOBALES DE LA RED
// =========================================================================
let networkInstance = null;
let nodesDataset = null;
let edgesDataset = null;
let factorRespiracion = 0; 

// Variables globales de control para el carrusel del Lightbox
let imagenesLightboxActuales = [];
let indiceLightboxActual = 0;
let descripcionLightboxActual = "";

// NUCLEOS HISTORICOS
const nucleosHistoricos = [
    { id: "NUCLEO_2004", name: "2004 — Historia del Diseño Gráfico en Chile", tipo: "nucleo1" },
    { id: "NUCLEO_2025", name: "2025 — Re-edición y Actualización", tipo: "nucleo2" }
];

// =========================================================================
// DATASET COMPLETO DE DISEÑADORAS (EDICIÓN 1, 2 Y VERDES)
// =========================================================================
const datasetDisenadoras = [
    // --- EDICIÓN 1 (Naranja / Puentes) ---
    { id: "Ximena Del Campo", name: "Ximena Del Campo", edicion: 1, puente: false, hasEntrevista: false },
    { id: "Caterina di Girolamo", name: "Caterina di Girolamo", edicion: 1, puente: true, hasEntrevista: false },
    { id: "Isabel Baixas", name: "Isabel Baixas", edicion: 1, puente: true, hasEntrevista: false },
    { id: "Jessie Cintolesi", name: "Jessie Cintolesi", edicion: 1, puente: true, hasEntrevista: false },
    { id: "Lucía Wormald", name: "Lucía Wormald", edicion: 1, puente: true, hasEntrevista: false },
    { id: "Paula Caledón", name: "Paula Caledón", edicion: 1, puente: true, hasEntrevista: false },
    { id: "Pepa Foncea", name: "Pepa Foncea", edicion: 1, puente: true, hasEntrevista: false },
    { id: "Ximena Ulibarri", name: "Ximena Ulibarri", edicion: 1, puente: true, hasEntrevista: false },
    { id: "Ximena Ureta", name: "Ximena Ureta", edicion: 1, puente: true, hasEntrevista: false },
    
    // --- EDICIÓN 2 WITH INTERVIEWS (Rosadas) ---
    // 1. PAOLA IRAZÁBAL
    { 
        id: "Paola Irazábal", 
        name: "Paola Irazábal", 
        edicion: 2, 
        hasEntrevista: true, 
        universidad: "Diego Portales",
        egreso: "2008",
        residencia: "Madrid,España",
        areas: ["Diseño Gráfico", "Diseño Editorial", "Ilustración"],
        recomiendaA: ["Piedad Rivadeneira", "Julie Carles", "Alejandra Beckdorf", "Catalina Cumsille"],
        frase: "«Mi estudio es un estudio móvil.»",
        bio: "Diseñadora Gráfica especializada en diseño editorial, con un Máster en Edición e Industrias Editoriales y actualmente cursando un Doctorado en Bellas Artes en España. Hace 15 años fundó su estudio de diseño (Estudio PI), un espacio con un marcado enfoque ligado a la cultura y el patrimonio, desde donde desarrolla publicaciones, diseño gráfico y proyectos museográficos. Su trabajo se articula de manera muy humana entre la práctica profesional, la investigación y la docencia universitaria entre Chile y España, consolidando un camino de más de 150 publicaciones en colaboración con museos, instituciones culturales y artistas de Latinoamérica y Europa.",
        fotoFondo: "imagenes/paolairazabal.jpg", 
        descFotoPrincipal: "Paola Irazábal — Registro de estudio móvil. Envío digital, 22 de junio de 2026.",
        videos: {
            eje1: "videos/entrevistapaola.mp4",
            eje2: "videos/entrevistapaola.mp4",
            eje3: "videos/entrevistapaola.mp4",
            eje4: "videos/entrevistapaola.mp4"
        },
        obras: [
            { img: ["imagenes/paola1.jpg", "imagenes/paola1.1.jpg", "imagenes/paola1.2.jpg"], desc: "01. Nemesio Antúnez" },
            { img: ["imagenes/paola2.jpg", "imagenes/paola2.1.jpg", "imagenes/paola2.2.jpg"], desc: "02. Revista Museos Nº43" },
            { img: ["imagenes/paola3.jpg", "imagenes/paola3.1.jpg", "imagenes/paola3.2.jpg"], desc: "03. Ximena Cristi. Catálogo de Obra Razonada" },
            { img: ["imagenes/paola4.jpg", "imagenes/paola4.1.jpg", "imagenes/paola4.2.jpg"], desc: "04. Francisca Prieto" },
            { img: ["imagenes/paola5.jpg", "imagenes/paola5.1.jpg"], desc: "05. Vicente Huidobro y Joan Miró" },
            { img: ["imagenes/paola6.jpg", "imagenes/paola6.1.jpg", "imagenes/paola6.2.jpg"], desc: "06. Ojos que ven, Corazones que sienten" }
        ]
    },
    // 2. NICOLE CRISTI
    { 
        id: "Nicole Cristi", 
        name: "Nicole Cristi", 
        edicion: 2, 
        hasEntrevista: true, 
        universidad: "Católica", 
        egreso: "2011", 
        residencia: "Santiago, Chile", 
        areas: ["Investigación", "Antropología del Diseño", "Historia del Diseño"], 
        recomiendaA: ["Simoné Malacchini", "Rita Torres", "Camila Rios", "Josefina Vidal", "Katherine Mollenhauer", "Magdalena Cattan"],
        frase: "«Escribe aquí la frase destacada de Nicole...»", 
        bio: "Mamá, diseñadora de formación e investigadora especializada en teoría, estética y pensamiento crítico en torno al diseño, la cultura material y la antropología. Prontamente en su formación universitaria cruzó el diseño con los estudios de estética para profundizar en el mundo sensible, enlazando miradas desde el arte contemporanéo y la arqueología. Su trayectoria se ha construido de manera serpenteante y en espiral, consolidando un camino dedicado a la docencia universitaria y a la investigación con enfoque social. Su trabajo se articula desde una dimensión afectiva y política, donde busca comprender cómo las materialidades y los objetos median nuestras relaciones humanas y nos constituyen como sociedad, tanto en la intimidad del cuarto propio como en la construcción de los espacios públicos.",
        fotoFondo: "imagenes/nicolecristi.jpg", 
        descFotoPrincipal: "Nicole Cristi — Registro de espacio de trabajo, Campus Lo Contador UC. Fotografía de Laura González, 12 de junio de 2026.",
        videos: {
            eje1: "https://www.youtube.com/embed/SfJX4pik1Sw?si=6WJq5FgqhpytafdG",
            eje2: "https://www.youtube.com/embed/lIMZuJKF6nU?si=1L4ZyVuQBMTcBBsW",
            eje3: "https://www.youtube.com/embed/I-76ezJksrQ?si=uudLo9ML2LF1A6FZ",
            eje4: "https://www.youtube.com/embed/dzPIPrnrZFY?si=bGtIq8oVhfa3koq8"
        },
        obras: [
            { img: "imagenes/nicole-obra1.jpg", desc: "01. Publicación de Investigación" },
            { img: "imagenes/nicole-obra2.jpg", desc: "02. Archivo Histórico Visual" },
            { img: "imagenes/nicole-obra3.jpg", desc: "03. Registro de Exposición" },
            { img: "imagenes/nicole-obra4.jpg", desc: "04. Proyecto Editorial Colectivo" },
            { img: "imagenes/nicole-obra5.jpg", desc: "05. Ensayo Crítico Visual" },
            { img: "imagenes/nicole-obra6.jpg", desc: "06. Documentación Gráfica" }
        ] 
    },
    // 3. PERLA ARRUÉ
    { 
        id: "Perla Arrué", 
        name: "Perla Arrué", 
        edicion: 2, 
        hasEntrevista: true, 
        universidad: "Diego Portales",
        egreso: "2022", 
        residencia: "Santiago, Chile", 
        areas: ["Diseño Gráfico"],
        recomiendaA: [], 
        frase: "«Escribe aquí la frase destacada de Perla...»", 
        bio: "Diseñadora en Comunicación Visual por la Universidad de Santiago de Chile...", 
        fotoFondo: "imagenes/perlaarrue.jpg", 
        descFotoPrincipal: "Perla Arrué — Registro de espacio de trabajo en estudio personal. Fotografía de Laura González, 18 de junio de 2026.",
        videos: {
            eje1: "videos/perla-eje1.mp4",
            eje2: "videos/perla-eje2.mp4",
            eje3: "videos/perla-eje3.mp4",
            eje4: "videos/perla-eje4.mp4"
        }, 
        obras: [
            { img: "imagenes/perla1.jpg", desc: "01. Resistencia Textil" },
            { img: "imagenes/perla2.jpeg", desc: "02. Marcas, logotipos y símbolos de Julián Naranjo" },
            { img: "imagenes/perla3.jpg", desc: "03. Libro Oficina Larrea" },
            { img: "imagenes/perla4.png", desc: "04. Catálogo ODA" },
            { img: "imagenes/perla5.png", desc: "05. Carmela y La Alborada" },
            { img: "imagenes/perla6.png", desc: "06. Revista Grifo #45" }
        ] 
    },
    // 4. VICO GALLARDO
    { 
        id: "Vico Gallardo", 
        name: "Vico Gallardo", 
        edicion: 2, 
        hasEntrevista: true, 
        universidad: "Católica", 
        egreso: "2014", 
        residencia: "Santiago, Chile", 
        areas: ["Diseño Gráfico", "Diseño Editorial", "Diseño de Información"], 
        recomiendaA: ["Camila González", "Nicole Cristi", "Valeria Montt", "Renata Tesser", "Ángeles Briones", "Constanza Gaggero", "Constanza Diez"], 
        frase: "«El espacio tiene que poder contribuir a lo que tú estás haciendo y no ser un obstáculo»", 
        bio: "Diseñadora especializada en diseño editorial, tipografía y diseño de información. A lo largo de su trayectoria profesional, ha consolidado un profundo lazo con la literatura y la poesía, disciplinas que han trazado su camino y pasión por la creación de libros. Su enfoque concibe el diseño como una herramienta con la capacidad de conectar emocional y sensorialmente con las personas, facilitando la comprensión de contenidos complejos para influenciar positivamente en su entorno. Su práctica se centra en el valor de trabajar con la información y su impacto social, transformando los proyectos editoriales en legados materiales y tangibles construidos para la posteridad.", 
        fotoFondo: "imagenes/victoriagallardo.jpg", 
        descFotoPrincipal: "Vico Gallardo — Registro de espacio de trabajo en estudio personal. Fotografía de Laura González, 14 de junio de 2026.",
        videos: {
            eje1: "videos/vico-eje1.mp4",
            eje2: "videos/vico-eje2.mp4",
            eje3: "videos/vico-eje3.mp4",
            eje4: "videos/vico-eje4.mp4"
        }, 
        obras: [
            { img: ["imagenes/vico1.jpg", "imagenes/vico1.1.jpg", "imagenes/vico1.2.jpg"], desc: "01. Cocino con Plantas" },
            { img: ["imagenes/vico2.jpg", "imagenes/vico2.1.jpg"], desc: "02. Si lo puedes sentir, lo puedes sanar" },
            { img: ["imagenes/vico3.jpg"], desc: "03. Slow life" },
            { img: ["imagenes/vico4.jpg", "imagenes/vico4.1.jpg", "imagenes/vico4.2.jpg"], desc: "04. Épicas" },
            { img: ["imagenes/vico5.jpg"], desc: "05. Fragata Cochrane" },
            { img: ["imagenes/vico6.jpg"], desc: "06. La Ciencia Oscura" },
        ] 
    },

    // --- NODOS RECOMENDADOS CON ENTREVISTA COMPLETA (Verdes Destacadas) ---
    // JOSEFINA VIDAL
    { 
        id: "Josefina Vidal", 
        name: "Josefina Vidal", 
        edicion: 'verde', 
        recomendadaPor: "Nicole Cristi", 
        hasEntrevista: true, 
        universidad: "Católica",
        egreso: "2017", 
        residencia: "Londres, Inglaterra",
        areas: ["Investigación", "Historia del Diseño"],
        recomiendaA: [], 
        frase: "«Escribe aquí la frase de la entrevista...»",
        bio: "Escribe aquí su biografía basada en sus proyectos como Finding the She y Biografías de artesanías...",
        fotoFondo: "imagenes/jose.jpeg", 
        descFotoPrincipal: "Josefina Vidal — Registro de Espacio / Taller. Santiago, mayo de 2026.",
        videos: {
            eje1: "videos/josefina-eje1.mp4",
            eje2: "videos/josefina-eje2.mp4",
            eje3: "videos/josefina-eje3.mp4",
            eje4: "videos/josefina-eje4.mp4"
        },
        obras: [
            { img: ["imagenes/jose1.jpg", "imagenes/jose1.1.jpg", "imagenes/jose1.2.jpg"], desc: "01. Biografías de artesanías" },
            { img: ["imagenes/jose2.png", "imagenes/jose2.1.png"], desc: "02. They Weave and I Remember" },
            { img: ["imagenes/jose3.png", "imagenes/jose3.1.png", "imagenes/jose3.2.jpg"], desc: "03. Finding the She" },
            { img: ["imagenes/jose4.png", "imagenes/jose4.1.png", "imagenes/jose4.2.png"], desc: "04. Tiempo sin lluvia" },
            { img: ["imagenes/jose5.png", "imagenes/jose5.1.jpg", "imagenes/jose5.2.jpg"], desc: "05. x" },
            { img: ["imagenes/jose6.jpg", "imagenes/jose6.1.jpg", "imagenes/jose6.2.jpg"], desc: "06. x" },
        ]
    },
    // ALEJANDRA BECKDORF
    { 
        id: "Alejandra Beckdorf", 
        name: "Alejandra Beckdorf", 
        edicion: 'verde', 
        recomendadaPor: "Paola Irazábal", 
        hasEntrevista: true, 
        universidad: "Del Desarrollo",
        egreso: "2021", 
        residencia: "Santiago, Chile",
        areas: ["Diseño Gráfico"],
        recomiendaA: [], 
        frase: "«Escribe aquí la frase de la entrevista de Alejandra...»",
        bio: "Biografía de Alejandra Beckdorf...",
        fotoFondo: "imagenes/alebeckdorf.jpg", 
        descFotoPrincipal: "Alejandra Beckdorf — Registro de Espacio / Taller. 2026.",
        videos: {
            eje1: "videos/entrevistaalejandrabekkdorf-eje1.mp4",
            eje2: "videos/entrevistaalejandrabekkdorf-eje2.mp4",
            eje3: "videos/entrevistaalejandrabekkdorf-eje3.mp4",
            eje4: "videos/entrevistaalejandrabekkdorf-eje4.mp4"
        },
        obras: 
        [
            { img: "imagenes/alejandrabekkdorf1.jpg", desc: "01. Finding the She" },
            { img: "imagenes/alejandrabekkdorf2.jpg", desc: "02. Muestras Editoriales" }
        ]
    },
    // ARI GONZÁLEZ
    { 
        id: "Ari González", 
        name: "Ari González", 
        edicion: 'verde', 
        recomendadaPor: "Myrna Cisneros", 
        hasEntrevista: true, 
        universidad: "Católica",
        egreso: "2016", 
        residencia: "Santiago, Chile",
        areas: ["Docencia"],
        recomiendaA: [], 
        frase: "«Escribe aquí la frase de la entrevista de Ari...»",
        bio: "Biografía de Ari González...",
        fotoFondo: "imagenes/arigonzalez.jpg", 
        descFotoPrincipal: "Ari González — Registro de Espacio / Taller. 2026.",
        videos: {
            eje1: "videos/entrevistaari González-eje1.mp4",
            eje2: "videos/entrevistaari González-eje2.mp4",
            eje3: "videos/entrevistaari González-eje3.mp4",
            eje4: "videos/entrevistaari González-eje4.mp4"
        },
        obras: [
            { img: ["imagenes/ari1.jpg", "imagenes/ari1.1.jpg", "imagenes/ari1.2.jpg"], desc: "01. El Margen del Horizonte" },
            { img: ["imagenes/ari2.jpg", "imagenes/ari2.1.jpg", "imagenes/ari2.2.jpg"], desc: "02. El Paisaje Mineral Tiene el Cielo Celeste y Dos Montañas Blancas" },
            { img: ["imagenes/ari3.jpg", "imagenes/ari3.1.jpeg", "imagenes/ari3.2.jpeg"], desc: "03. Palabras Marchitas" },
            { img: ["imagenes/ari4.jpg", "imagenes/ari4.1.jpg", "imagenes/ari4.2.jpg"], desc: "04. Fosfeno" },
            { img: ["imagenes/ari5.png", "imagenes/ari5.1.jpg", "imagenes/ari5.2.jpg"], desc: "05. Los Nietos de Lautaro tomando el micrófono" },
            { img: ["imagenes/ari6.jpg", "imagenes/ari6.1.jpg", "imagenes/ari6.2.jpg"], desc: "06. 18 años La Fuente" },
        ]
    },
    
    // --- NODOS SIMPLES (Edición 2 - Rosadas sin entrevista) ---
    { id: "Alejandra Amenábar", name: "Alejandra Amenábar", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Ana Villagrán", name: "Ana Villagrán", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Andrea Estefanía", name: "Andrea Estefanía", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Ángeles Briones", name: "Ángeles Briones", edicion: 2, puente: false, hasEntrevista: false }, 
    { id: "Antonieta Lopez", name: "Antonieta Lopez", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Bernardita Brancoli", name: "Bernardita Brancoli", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Bernardita Espinoza", name: "Bernardita Espinoza", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Bianca Sartori", name: "Bianca Sartori", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Camila Muñoz", name: "Camila Muñoz", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Camila Rios", name: "Camila Rios", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Camila Vicencio", name: "Camila Vicencio", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Carola Ureta", name: "Carola Ureta", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Carolina Bórquez", name: "Carolina Bórquez", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Carolina Zañartu", name: "Carolina Zañartu", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Catalina Pérez", name: "Catalina Pérez", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Caterina Valenzuela", name: "Caterina Valenzuela", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Cecilia Durán", name: "Cecilia Durán", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Constanza Gaggero", name: "Constanza Gaggero", edicion: 2, puente: false, hasEntrevista: false }, 
    { id: "Consuelo Saavedra", name: "Consuelo Saavedra", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Daniela Escobar", name: "Daniela Escobar", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Daniela Quintana", name: "Daniela Quintana", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Fernanda Villalobos", name: "Fernanda Villalobos", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Francisca Toral", name: "Francisca Toral", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Gabriela Farías", name: "Gabriela Farías", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Gloria Barrios", name: "Gloria Barrios", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Inés Pichheti", name: "Inés Pichheti", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Isadora Diaz", name: "Isadora Diaz", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Isidora Val", name: "Isidora Val", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Javiera Oliva", name: "Javiera Oliva", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Jennifer King", name: "Jennifer King", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Jenny Abud", name: "Jenny Abud", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Josefina Bunster", name: "Josefina Bunster", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Julie Carles", name: "Julie Carles", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Karin Gildemeister", name: "Karin Gildemeister", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Kathryn Gillmore", name: "Kathryn Gillmore", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Loreto Pavez", name: "Loreto Pavez", edicion: 2, puente: false, hasEntrevista: false },
    { id: "María Cristina Adasme", name: "María Cristina Adasme", edicion: 2, puente: false, hasEntrevista: false },
    { id: "María Jesús Vial", name: "María Jesús Vial", edicion: 2, puente: false, hasEntrevista: false },
    { id: "María Pía Álvarez", name: "María Pía Álvarez", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Mariana Muñoz", name: "Mariana Muñoz", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Michelle Douglas", name: "Michelle Douglas", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Mila González", name: "Mila González", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Myrna Cisneros", name: "Myrna Cisneros", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Pamela Sthandier", name: "Pamela Sthandier", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Paulina Labarthe", name: "Paulina Labarthe", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Piedad Rivadeneira", name: "Piedad Rivadeneira", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Rita Sanino", name: "Rita Sanino", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Rita Torres", name: "Rita Torres", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Rosario Espinoza", name: "Rosario Espinoza", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Silvia Caracuel", name: "Silvia Caracuel", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Simoné Malacchini", name: "Simoné Malacchini", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Trinidad Guzmán", name: "Trinidad Guzmán", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Yazmín Jiménez", name: "Yazmín Jiménez", edicion: 2, puente: false, hasEntrevista: false },
    
    // --- NODOS RECOMENDADOS SIMPLES (Verdes sin entrevista) ---
    { id: "María Paz Morales", name: "María Paz Morales", edicion: 'verde', hasEntrevista: false, recomendadaPor: "Isadora Diaz" },
    { id: "Valentina Pizarro", name: "Valentina Pizarro", edicion: 'verde', recomendadaPor: "Isadora Diaz" },
    { id: "Andrea Torres", name: "Andrea Torres", edicion: 'verde', recomendadaPor: "Isadora Diaz" },
    { id: "Mara Soto Aguilar", name: "Mara Soto Aguilar", edicion: 'verde', recomendadaPor: "Myrna Cisneros" },
    { id: "Coto Mendoza", name: "Coto Mendoza", edicion: 'verde', recomendadaPor: "Myrna Cisneros" },
    { id: "Dora Sánchez", name: "Dora Sánchez", edicion: 'verde', recomendadaPor: "Rita Torres" },
    { id: "Liz Bravo", name: "Liz Bravo", edicion: 'verde', recomendadaPor: "Rita Torres" },
    { id: "Andrea Meza", name: "Andrea Meza", edicion: 'verde', recomendadaPor: "Rita Torres" },
    { id: "Catalina Cumsille", name: "Catalina Cumsille", edicion: 'verde', recomendadaPor: "Paola Irazábal" },
    { id: "Camila González", name: "Camila González", edicion: 'verde', recomendadaPor: "Vico Gallardo"},
    { id: "Valeria Montt", name: "Valeria Montt", edicion: 'verde', recomendadaPor: "Vico Gallardo" },
    { id: "Renata Tesser", name: "Renata Tesser", edicion: 'verde', recomendadaPor: "Vico Gallardo" },
    { id: "Constanza Diez", name: "Constanza Diez", edicion: 'verde', recomendadaPor: "Vico Gallardo" },
    { id: "Katherine Mollenhauer", name: "Katherine Mollenhauer", edicion: 'verde', recomendadaPor: "Nicole Cristi" },
    { id: "Magdalena Cattan", name: "Magdalena Cattan", edicion: 'verde', recomendadaPor: "Nicole Cristi" }
];

// =========================================================================
// ESCUCHADOR DOM PRINCIPAL (INICIALIZACIÓN UNIFICADA)
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const btnDescubrir = document.getElementById('btn-descubrir');
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const pantallaRed = document.getElementById('pantalla-red');
    const btnRestaurarRed = document.getElementById('btn-restaurar-red');

    if (btnDescubrir) {
        btnDescubrir.addEventListener('click', () => {
            pantallaInicio.style.opacity = '0';
            setTimeout(() => {
                pantallaInicio.classList.add('oculto');
                pantallaRed.classList.remove('oculto');
                inicializarRedObsidianEstatica(); 
                cargarFiltrosAutomaticos();
                
                document.getElementById("filtro-universidad")?.addEventListener("change", aplicarFiltros);
                document.getElementById("filtro-decada")?.addEventListener("change", aplicarFiltros);
                document.getElementById("filtro-area")?.addEventListener("change", aplicarFiltros);
                
                actualizarContadorRecomendadas();
            }, 1200); 
        });
    }

    if (btnRestaurarRed) {
        btnRestaurarRed.addEventListener('click', () => {
            restaurarEstadoOriginalRed();
        });
    }

    // Limpiador de filtros interactivo
    document.getElementById("btn-limpiar-filtros")?.addEventListener("click", () => {
        document.getElementById("filtro-universidad").value = "";
        document.getElementById("filtro-decada").value = "";
        document.getElementById("filtro-area").value = "";

        if (nodesDataset) {
            datasetDisenadoras.forEach(d => {
                if (nodesDataset.get(d.id)) {
                    nodesDataset.update({ id: d.id, hidden: false });
                }
            });
        }
    });

    // Controladores del Lightbox Global
    const lightbox = document.getElementById('lightbox-global');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target.id === 'lightbox-global' || e.target.className === 'cerrar-lightbox') {
                lightbox.classList.add('oculto');
            }
        });
    }

    document.getElementById('btn-lightbox-prev')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (imagenesLightboxActuales.length > 1) {
            indiceLightboxActual = (indiceLightboxActual - 1 + imagenesLightboxActuales.length) % imagenesLightboxActuales.length;
            actualizarContenidoLightbox();
        }
    });

    document.getElementById('btn-lightbox-next')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (imagenesLightboxActuales.length > 1) {
            indiceLightboxActual = (indiceLightboxActual + 1) % imagenesLightboxActuales.length;
            actualizarContenidoLightbox();
        }
    });

    // Controlador Unificado de Pestañas de Ficha Lateral (Perfil / Cápsulas / Proyectos)
document.querySelectorAll('input[name="menu-disenadora"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const pestañaSeleccionada = e.target.value; 
        const videoDinamico = document.getElementById('video-dinamico');

        document.querySelectorAll('.tab-content').forEach(bloque => {
            bloque.classList.add('tab-oculto');
        });

        if (pestañaSeleccionada === 'biografia') {
            document.getElementById('contenido-biografia')?.classList.remove('tab-oculto');
            // EL TIP: Al salir de la pestaña, guardamos el link actual y lo volvemos a poner limpio. 
            // Esto corta el video de YouTube de raíz para que no siga sonando de fondo.
            if (videoDinamico) { const currentSrc = videoDinamico.src; videoDinamico.src = ""; videoDinamico.src = currentSrc; }
        } else if (pestañaSeleccionada === 'taller') {
            document.getElementById('contenido-taller')?.classList.remove('tab-oculto');
            // Con YouTube, el video parte automáticamente si tu link de YouTube tiene habilitado el autoplay, 
            // ya no necesitamos usar videoDinamico.play()
        } else if (pestañaSeleccionada === 'portafolio') {
            document.getElementById('contenido-portafolio')?.classList.remove('tab-oculto');
            // EL TIP: Corta el sonido de YouTube al cambiar a portafolio
            if (videoDinamico) { const currentSrc = videoDinamico.src; videoDinamico.src = ""; videoDinamico.src = currentSrc; }
        }
    });
});

    // Acción para el botón de cierre "X" del panel de la diseñadora
    const botonCerrar = document.getElementById("btn-cerrar");
    if (botonCerrar) {
        botonCerrar.addEventListener("click", () => {
            document.getElementById("panel-disenadora").classList.add("panel-oculto");
            const video = document.getElementById("video-dinamico");
            if (video) {
                video.src = ""; // Apaga YouTube por completo al vaciar el src
            }
        });
    }

    // Escuchar clicks en los ejes multimedia de videos (Eje 1, Eje 2, etc)
document.querySelectorAll('.btn-eje').forEach(boton => {
    boton.addEventListener('click', (e) => {
        const elBoton = e.target;
        const ejeSeleccionado = elBoton.getAttribute('data-eje');
        const videoDinamico = document.getElementById('video-dinamico');
        
        document.querySelectorAll('.btn-eje').forEach(b => b.classList.remove('active'));
        elBoton.classList.add('active');

        if (videoDinamico && videoDinamico.dataset.videos) {
            const todosLosVideos = JSON.parse(videoDinamico.dataset.videos);
            if (todosLosVideos[ejeSeleccionado]) {
                // Cambiamos el src al link embed de YouTube y listo, se carga e inicia solo
                videoDinamico.src = todosLosVideos[ejeSeleccionado];
            }
        }
    });
});
});

// =========================================================================
// INTERACTIVIDAD Y FUNCIONES LÓGICAS
// =========================================================================
function actualizarContadorRecomendadas() {
    const total = datasetDisenadoras.filter(d => d.edicion === "verde").length;
    const contador = document.getElementById("contador-recomendadas");
    if (contador) contador.textContent = total;
}

function cargarFiltrosAutomaticos(){
    const universidades = new Set();
    const decadas = new Set();
    const areas = new Set();

    datasetDisenadoras.forEach(d => {
        if(!d.hasEntrevista) return;
        if(d.universidad) universidades.add(d.universidad);
        if(d.egreso){
            const año = parseInt(d.egreso);
            if(!isNaN(año)){
                if(año <= 2010) decadas.add("2000-2010");
                else if(año <= 2020) decadas.add("2011-2020");
                else decadas.add("2021+");
            }
        }
        if(d.areas) d.areas.forEach(a => areas.add(a));
    });

    const uni = document.getElementById("filtro-universidad");
    const dec = document.getElementById("filtro-decada");
    const area = document.getElementById("filtro-area");

    if (uni && dec && area) {
        uni.innerHTML = '<option value="">Todas</option>';
        dec.innerHTML = '<option value="">Todas</option>';
        area.innerHTML = '<option value="">Todas</option>';

        [...universidades].sort().forEach(u => { uni.innerHTML += `<option>${u}</option>`; });
        [...decadas].sort().forEach(d => { dec.innerHTML += `<option>${d}</option>`; });
        [...areas].sort().forEach(a => { area.innerHTML += `<option>${a}</option>`; });
    }
}

function aplicarFiltros(){
    const universidad = document.getElementById("filtro-universidad").value;
    const decada = document.getElementById("filtro-decada").value;
    const area = document.getElementById("filtro-area").value;

    if(!nodesDataset) return;

    datasetDisenadoras.forEach(d => {
        const nodo = nodesDataset.get(d.id);
        if (!nodo) return;

        if (!d.hasEntrevista) {
            nodesDataset.update({ id: d.id, hidden: false });
            return;
        }

        let visible = true;
        if (universidad !== "") visible = visible && d.universidad === universidad;
        if (decada !== "") {
            const año = parseInt(d.egreso);
            let grupo = año <= 2010 ? "2000-2010" : (año <= 2020 ? "2011-2020" : "2021+");
            visible = visible && grupo === decada;
        }
        if (area !== "") visible = visible && d.areas.includes(area);

        nodesDataset.update({ id: d.id, hidden: !visible });
    });
}

// =========================================================================
// CONFIGURACIÓN CONSTELACIÓN VIS.JS (ESTILO OBSIDIAN / AWWWARDS)
// =========================================================================
function inicializarRedObsidianEstatica() {
    const lienzo = document.getElementById('canvas-constelacion');
    if (!lienzo) return;

    const nodosArray = [];
    const lineasArray = [];

    // Dibujar núcleos históricos fijos
    nucleosHistoricos.forEach(nucleo => {
        let colNucleo = nucleo.tipo === "nucleo1" ? "#F8470C" : "#F05982";
        nodosArray.push({
            id: nucleo.id,
            label: nucleo.name,
            shape: "text", 
            mass: 15,
            font: { color: colNucleo, size: 16, face: "Montserrat", bold: true }
        });
    });

    // Mapear diseñadoras a nodos de la red gráfica
    datasetDisenadoras.forEach((disenadora) => {
        let shapeNodo = "dot";
        let imageNodo = undefined;
        let colorFondo = "#F05982"; 
        let sizeNodo = 8; 
        let colorTexto = "rgba(255,255,255,0.45)"; 
        let sizeTexto = 13;

        if (disenadora.edicion === 1) colorFondo = "#F8470C"; 
        else if (disenadora.edicion === 'verde') colorFondo = "#4AFF7A"; 

        if (disenadora.hasEntrevista) {
            shapeNodo = "circularImage"; 
            imageNodo = disenadora.fotoFondo; 
            sizeNodo = 28; 
            colorTexto = "#ffffff";
            sizeTexto = 14;
        }

        nodosArray.push({
            id: disenadora.id,
            label: disenadora.name,
            shape: shapeNodo,
            image: imageNodo,
            size: sizeNodo,
            color: { background: colorFondo, border: "rgba(255,255,255,0.2)", highlight: { background: "#ffffff", border: "#ffffff" } },
            font: { color: colorTexto, size: sizeTexto, face: "Montserrat" }
        });

        // Generar líneas de conexión dinámicas (Edges)
        if (disenadora.edicion === 1) {
            if (disenadora.puente) {
                lineasArray.push({ from: "NUCLEO_2004", to: disenadora.id, color: { color: "rgba(255, 74, 91, 0.18)" } });
                lineasArray.push({ from: "NUCLEO_2025", to: disenadora.id, color: { color: "rgba(240, 89, 130, 0.18)" } });
            } else {
                lineasArray.push({ from: "NUCLEO_2004", to: disenadora.id, color: { color: "rgba(255, 74, 91, 0.18)" } });
            }
        } else if (disenadora.edicion === 2) {
            lineasArray.push({ from: "NUCLEO_2025", to: disenadora.id, color: { color: "rgba(240, 89, 130, 0.18)" } });
        } else if (disenadora.edicion === 'verde') {
            lineasArray.push({ from: disenadora.recomendadaPor, to: disenadora.id, color: { color: "rgba(74, 255, 122, 0.25)" } });
        }
    });

    nodesDataset = new vis.DataSet(nodosArray);
    edgesDataset = new vis.DataSet(lineasArray);

    const options = {
        physics: {
            enabled: true,
            solver: "forceAtlas2Based",
            forceAtlas2Based: { gravitationalConstant: -75, centralGravity: 0.02, springLength: 160, springConstant: 0.05, damping: 0.7 },
            stabilization: { enabled: true, iterations: 1000 }
        },
        interaction: { hover: true, zoomView: true, dragView: true }
    };

    networkInstance = new vis.Network(lienzo, { nodes: nodesDataset, edges: edgesDataset }, options);

    // Congelar físicas tras estabilización para optimizar rendimiento
    networkInstance.on("stabilizationIterationsDone", () => {
        networkInstance.setOptions({ physics: false }); 
    });

    // Efecto de halo brillante (Aura) para diseñadoras destacadas
    networkInstance.on("beforeDraw", (ctx) => {
        factorRespiracion += 0.03;
        const escalaPulso = 1 + Math.sin(factorRespiracion) * 0.12; 
        const opacidadAura = 0.35 + Math.sin(factorRespiracion) * 0.10;

        datasetDisenadoras.forEach(disenadora => {
            if (disenadora.hasEntrevista) {
                const pos = networkInstance.getPositions([disenadora.id])[disenadora.id];
                if (pos) {
                    ctx.save();
                    const radioAura = 50 * escalaPulso; 
                    const degradado = ctx.createRadialGradient(pos.x, pos.y, 10, pos.x, pos.y, radioAura);
                    degradado.addColorStop(0, `rgba(255, 255, 255, ${opacidadAura})`);
                    degradado.addColorStop(0.4, `rgba(255, 255, 255, ${opacidadAura * 0.3})`);
                    degradado.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    ctx.fillStyle = degradado;
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, radioAura, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.restore();
                }
            }
        });
    });

    function renderBucleAnimacion() {
        if (networkInstance) networkInstance.body.emitter.emit("_requestRedraw");
        requestAnimationFrame(renderBucleAnimacion);
    }
    renderBucleAnimacion();

    networkInstance.on("click", (params) => {
        if (params.nodes.length > 0) {
            const nodoId = params.nodes[0];
            const clickeada = datasetDisenadoras.find(d => d.id === nodoId);
            if (clickeada && clickeada.hasEntrevista) {
                networkInstance.focus(nodoId, { scale: 1.35, animation: { duration: 1100, easingFunction: "easeInOutCubic" } });
                setTimeout(() => { abrirPanelDisenadora(clickeada); }, 350);
            }
        }
    });

    networkInstance.on("hoverNode", (p) => {
        const dObj = datasetDisenadoras.find(d => d.id === p.node);
        if (dObj && dObj.hasEntrevista) lienzo.style.cursor = "pointer";
    });
    networkInstance.on("blurNode", () => { lienzo.style.cursor = "default"; });
}

function filtrarRedPorArea(areaNombre) {
    if (!nodesDataset) return;
    document.getElementById('btn-restaurar-red')?.classList.remove('oculto');
    document.getElementById('panel-disenadora')?.classList.add('panel-oculto');

    datasetDisenadoras.forEach(disenadora => {
        const itemNodo = nodesDataset.get(disenadora.id);
        if (!itemNodo) return;

        const perteneceAArea = disenadora.areas && disenadora.areas.includes(areaNombre);

        if (perteneceAArea || disenadora.id === "Paola Irazábal") { 
            nodesDataset.update({
                id: disenadora.id,
                font: { color: "#ffffff", size: 22, face: "Montserrat", bold: true }
            });
        } else {
            nodesDataset.update({
                id: disenadora.id,
                font: { color: "rgba(255,255,255,0.06)", size: 9 },
                color: { background: "rgba(255,255,255,0.05)" }
            });
        }
    });
}

function restaurarEstadoOriginalRed() {
    document.getElementById('btn-restaurar-red')?.classList.add('oculto');
    if (networkInstance) {
        networkInstance.destroy();
        inicializarRedObsidianEstatica();
        cargarFiltrosAutomaticos(); 
    }
}

// =========================================================================
// GESTIÓN DEL PANEL LATERAL E INYECCIÓN DINÁMICA DE TEXTOS/PROYECTOS
// =========================================================================
function abrirPanelDisenadora(disenadora) {
    const panelDisenadora = document.getElementById('panel-disenadora');
    const fotoCabecera = document.getElementById('foto-horizontal-perfil');
    const bloqueFrase = document.getElementById('frase-dinamica');
    const indicadorColor = document.getElementById('indicador-color');
    const galeriaObras = document.getElementById('galeria-dinamica-obras');
    const videoDinamico = document.getElementById('video-dinamico');

    if (!panelDisenadora) return;

    if (fotoCabecera && disenadora.fotoFondo) {
        fotoCabecera.src = disenadora.fotoFondo;
        const clonFoto = fotoCabecera.cloneNode(true);
        fotoCabecera.parentNode.replaceChild(clonFoto, fotoCabecera);
        clonFoto.addEventListener('click', () => {
            const pieCompleto = disenadora.descFotoPrincipal || `${disenadora.name} — Registro de Espacio / Taller`;
            abrirImagenEnLightbox(disenadora.fotoFondo, pieCompleto);
        });
    }

    const partesNombre = disenadora.name.toUpperCase().split(' ');
    document.querySelector('.first-name').innerText = partesNombre[0] || "";
    document.querySelector('.last-name').innerText = partesNombre.slice(1).join(' ') || "";
    
    if (bloqueFrase) bloqueFrase.innerText = disenadora.frase || "";
    document.getElementById('biografia-dinamica').innerText = disenadora.bio || "";
    document.getElementById('meta-universidad').innerText = disenadora.universidad || "—";
    document.getElementById('meta-egreso').innerText = disenadora.egreso || "—";
    document.getElementById('meta-residencia').innerText = disenadora.residencia || "—";

    const contenedorAreas = document.getElementById('meta-areas');
    if (contenedorAreas) {
        contenedorAreas.innerHTML = "";
        if (disenadora.areas) {
            disenadora.areas.forEach(area => {
                const btnArea = document.createElement('span');
                btnArea.className = 'tag-area-link';
                btnArea.innerText = area;
                btnArea.addEventListener('click', () => filtrarRedPorArea(area));
                contenedorAreas.appendChild(btnArea);
            });
        }
    }

    const contenedorRecomienda = document.getElementById('meta-recomienda');
    if (contenedorRecomienda) {
        contenedorRecomienda.innerHTML = "";
        if (disenadora.recomiendaA && disenadora.recomiendaA.length > 0) {
            disenadora.recomiendaA.forEach((nom, index) => {
                const linkRec = document.createElement('span');
                linkRec.className = 'recomendada-node-link';
                linkRec.innerText = nom + (index < disenadora.recomiendaA.length - 1 ? ", " : "");
                linkRec.addEventListener('click', () => {
                    panelDisenadora.classList.add('panel-oculto');
                    if (networkInstance) networkInstance.focus(nom, { scale: 1.5, animation: { duration: 1000 } });
                });
                contenedorRecomienda.appendChild(linkRec);
            });
        } else {
            contenedorRecomienda.innerText = "Ninguna por ahora.";
        }
    }

    if (videoDinamico) {
        videoDinamico.dataset.videos = disenadora.videos ? JSON.stringify(disenadora.videos) : "";
        document.querySelectorAll('.btn-eje').forEach(btn => btn.classList.remove('active'));
        const primerBtn = document.querySelector('.btn-eje[data-eje="eje1"]');
        if (primerBtn) primerBtn.classList.add('active');

        if (disenadora.videos && disenadora.videos.eje1) {
            videoDinamico.src = disenadora.videos.eje1;
            // Se eliminó videoDinamico.load(); para evitar el error en el iframe
        } else {
            videoDinamico.src = "";
        }
    }

    if (galeriaObras) {
        galeriaObras.innerHTML = ""; 
        if (disenadora.obras && disenadora.obras.length > 0) {
            disenadora.obras.forEach(obra => {
                const imagenesProyecto = Array.isArray(obra.img) ? obra.img : [obra.img];
                const portadaVisible = imagenesProyecto[0];

                const itemObra = document.createElement('div');
                itemObra.className = 'obra-item';
                itemObra.innerHTML = `
                    <img class="img-obra-real" src="${portadaVisible}">
                    <p class="pie-foto">${obra.desc} ${imagenesProyecto.length > 1 ? `(+${imagenesProyecto.length - 1} imágenes)` : ''}</p>
                `;
                
                itemObra.addEventListener('click', () => {
                    abrirImagenEnLightbox(portadaVisible, obra.desc, imagenesProyecto);
                });
                galeriaObras.appendChild(itemObra);
            });
        }
    }

    if (indicadorColor) {
        indicadorColor.className = "dot";
        if (disenadora.edicion === 1) indicadorColor.classList.add('rojo-activo');
        if (disenadora.edicion === 2) indicadorColor.classList.add('rosado-activo');
        if (disenadora.edicion === 'verde') indicadorColor.classList.add('verde-activo');
    }

    const radioPerfil = document.getElementById('menu-biografia');
    if (radioPerfil) radioPerfil.checked = true;

    document.getElementById('contenido-biografia')?.classList.remove('tab-oculto');
    document.getElementById('contenido-taller')?.classList.add('tab-oculto');
    document.getElementById('contenido-portafolio')?.classList.add('tab-oculto');

    panelDisenadora.classList.remove('panel-oculto');
}

// LÓGICA INTERNA CARRUSEL LIGHTBOX
function abrirImagenEnLightbox(rutaImg, textoPie, todasLasImagenes = []) {
    const lightbox = document.getElementById('lightbox-global');
    if (lightbox) {
        imagenesLightboxActuales = todasLasImagenes.length > 0 ? todasLasImagenes : [rutaImg];
        indiceLightboxActual = imagenesLightboxActuales.indexOf(rutaImg);
        if (indiceLightboxActual === -1) indiceLightboxActual = 0;
        descripcionLightboxActual = textoPie || "";

        actualizarContenidoLightbox();
        lightbox.classList.remove('oculto');
    }
}

function actualizarContenidoLightbox() {
    const imgTarget = document.getElementById('img-lightbox-src');
    const captionTarget = document.getElementById('caption-lightbox');
    const btnPrev = document.getElementById('btn-lightbox-prev');
    const btnNext = document.getElementById('btn-lightbox-next');

    if (imgTarget && captionTarget) {
        imgTarget.src = imagenesLightboxActuales[indiceLightboxActual];
        const total = imagenesLightboxActuales.length;
        if (total > 1) {
            captionTarget.innerText = `${descripcionLightboxActual} — [Foto ${indiceLightboxActual + 1} de ${total}]`;
            if (btnPrev) btnPrev.style.display = "block";
            if (btnNext) btnNext.style.display = "block";
        } else {
            captionTarget.innerText = descripcionLightboxActual;
            if (btnPrev) btnPrev.style.display = "none";
            if (btnNext) btnNext.style.display = "none";
        }
    }
}