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
        instagram: "@estudiopi",
        edicion: 2, 
        hasEntrevista: true, 
        universidad: "Diego Portales",
        egreso: "2008",
        residencia: "Madrid,España",
        areas: ["Diseño Gráfico", "Diseño Editorial", "Ilustración", "Docencia Universitaria"],
        recomiendaA: ["Piedad Rivadeneira", "Julie Carles", "Alejandra Beckdorf", "Catalina Cumsille"],
        frases: {
            eje1: "«En mi familia el tema del arte siempre ha estado muy presente. Mi papá y mi mamá son bastante amantes del arte y eso me lo inculcaron mucho tiempo, y yo creo que eso también es como parte de mis motivaciones con respecto al arte y al diseño.»",
            eje2: "«Partí de practicante y terminé siendo la coordinadora del área de diseño del centro cultural... Para mí fue súper enriquecedor, fue una escuela, crecí muchísimo... Fue muy bonito como ir creciendo, ir evolucionando e ir aprendiendo.»",
            eje3: "«Hace muchos años, mi trabajo tiene que ver con la movilidad: que yo me voy moviendo, que voy conociendo lugares diferentes... Mi estudio es un estudio móvil totalmente.»",
            eje4: "«Es súper importante tener ese feedback, no trabajar solo. El trabajar solo a veces te encapsula; el poder mirar más allá, el poder compartir ideas, el poder compartir... Hay que tener empatía con la gente que uno tiene alrededor también y trabajar en equipo.»"
        }, 
        bio: "Diseñadora Gráfica especializada en diseño editorial, con un Máster en Edición e Industrias Editoriales y actualmente cursando un Doctorado en Bellas Artes en España. Hace 15 años fundó su estudio de diseño (Estudio PI), un espacio con un marcado enfoque ligado a la cultura y el patrimonio, desde donde desarrolla publicaciones, diseño gráfico y proyectos museográficos. Su trabajo se articula de manera muy humana entre la práctica profesional, la investigación y la docencia universitaria entre Chile y España, consolidando un camino de más de 150 publicaciones en colaboración con museos, instituciones culturales y artistas de Latinoamérica y Europa.",
        fotoFondo: "imagenes/paolairazabal.jpg", 
        descFotoPrincipal: "Paola Irazábal — Registro de estudio móvil. Envío digital, 22 de junio de 2026.",
        videos: {
            eje1: "https://www.youtube.com/embed/JmvOUkWmGy0?si=44lHvWAppnjdZ8jC",
            eje2: "https://www.youtube.com/embed/tUtfjFbiJM4?si=AApPbpKtkyNSXj48",
            eje3: "https://www.youtube.com/embed/2gXrXbQgm2I?si=Dz32uTcvPj8Gebue",
            eje4: "https://www.youtube.com/embed/EJE0c8_Phsc?si=ccdiZxv1EhuJ5OxY"
        },
        duraciones: {
            eje1: "11:43 min",
            eje2: "14:23 min",
            eje3: "23:25 min",
            eje4: "12:47 min"
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
        instagram: "@nicolecristirojas",
        edicion: 2, 
        hasEntrevista: true, 
        universidad: "Católica", 
        egreso: "2011", 
        residencia: "Santiago, Chile", 
        areas: ["Investigación", "Docencia Universitaria", "Antropología del Diseño", "Historia del Diseño"], 
        recomiendaA: ["Simoné Malacchini", "Rita Torres", "Camila Rios", "Josefina Vidal", "Katherine Mollenhauer", "Magdalena Cattan"],
        frases: {
            eje1: "«Yo creo que siempre es un trabajo de insistencia, de querer, de tener una voluntad de querer trabajar también desde las autoras o desde las diseñadoras, porque si uno se mete a la bibliografía no es lo primero que uno encuentra.»",
            eje2: "«Yo me vinculo desde un lugar de mucha pasión con lo que hago; o sea, a mí me gusta mucho investigar y yo también tenía ganas de volver de mi posnatal a volver a hacer clases, a volver a vincularme con mis temas de investigación... Trabajo desde un goce, en el fondo me vinculo desde un goce. También tengo esa suerte.»",
            eje3: "«Para mí, en este momento, este espacio está jugando un rol súper importante porque pasa a ser un espacio mío, en el fondo, porque mi casa está también muy cruzada por la maternidad.»",
            eje4: "«El tomarnos en serio el diseño... Entendiendo su relevancia en nuestra sociedad actual, en nuestra creación de relaciones, en nuestra posibilidad de vincularnos con el medio, con el mundo, en el desarrollo de sensibilidades, es como tomarnos en serio nuestra disciplina.»"
        }, 
        bio: "Mamá, diseñadora de formación e investigadora especializada en teoría, estética y pensamiento crítico en torno al diseño, la cultura material y la antropología. En su formación cruzó el diseño con la estética para profundizar en el mundo sensible, enlazando miradas desde el arte contemporáneo y la arqueología. Su trayectoria, serpenteante y en espiral, se consolida en la docencia universitaria y la investigación con enfoque social. Su trabajo se articula desde una dimensión afectiva y política, buscando comprender cómo las materialidades y los objetos median nuestras relaciones humanas y nos constituyen como sociedad, tanto en la intimidad del cuarto propio como en la construcción de los espacios públicos.",
        fotoFondo: "imagenes/nicolecristi.jpg", 
        descFotoPrincipal: "Nicole Cristi — Registro de espacio de trabajo, Campus Lo Contador UC. Fotografía de Laura González, 12 de junio de 2026.",
        videos: {
            eje1: "https://www.youtube.com/embed/SfJX4pik1Sw?si=6WJq5FgqhpytafdG",
            eje2: "https://www.youtube.com/embed/lIMZuJKF6nU?si=1L4ZyVuQBMTcBBsW",
            eje3: "https://www.youtube.com/embed/I-76ezJksrQ?si=uudLo9ML2LF1A6FZ",
            eje4: "https://www.youtube.com/embed/dzPIPrnrZFY?si=bGtIq8oVhfa3koq8"
        },
        duraciones: {
            eje1: "6:50 min",
            eje2: "35:51 min",
            eje3: "6:35 min",
            eje4: "6:43 min"
        },
        obras: [
            { img: "imagenes/nicole1.jpg", desc: "01. Resistencia Gráfica" },
            { img: "imagenes/nicole2.jpg", desc: "02. Capítulos en libro \"El Afiche Político en Chile\"" },
            { img: ["imagenes/nicole3.jpg", "imagenes/nicole3.1.jpg", "imagenes/nicole3.2.jpg"], desc: "03. Curaduría Exposición \"Revueltas Gráficas\"" },
            { img: "imagenes/nicole4.jpg", desc: "04. Curaduría \"El cuerpo de la memoria\", Peltz Gallery, Londres" },
            { img: "imagenes/nicole5.jpg", desc: "05. Capítulo en \"Design For More-Than-Human Futures\"" },
            { img: "imagenes/nicole6.jpg", desc: "06. Co-editora History of Design, Techniques, and Technology, Revista Diseña" }
        ] 
    },
    // 3. PERLA ARRUÉ
    { 
        id: "Perla Arrué", 
        name: "Perla Arrué", 
        instagram: "@perla_port",
        edicion: 2, 
        hasEntrevista: true, 
        universidad: "Diego Portales",
        egreso: "2022", 
        residencia: "Santiago, Chile (pero la raíz siempre en Marchigüe, Sexta Región)", 
        areas: ["Diseño Editorial", "Diseño Gráfico", "Docencia Universitaria"],
        recomiendaA: ["Valentina Contreras", "Antonieta Lopez", "Pía Pulgar", "Camila Jouannet" ], 
        // REEMPLAZAMOS EL TEXTO ÚNICO POR ESTE OBJETO:
        frases: {
            eje1: "«Lo que sí me llamaba harto la atención era que no veía o no sentía que había como tanto conocimiento, tanta búsqueda de referentes, ya sean mujeres, pero también del mundo editorial.»",
            eje2: "«Es mucho mejor un proyecto cuando se trabaja con más personas, porque está mucho más enriquecido.»",
            eje3: "«Para mí era muy importante que, aunque sea un espacio chiquitito, fuese un espacio en donde yo pudiera tener mis cosas y sentir esa sensación cálida, como de casa, y una casa usable.»",
            eje4: "«Entender que el proceso es mucho más importante que el resultado... Es un aprendizaje y es lo que no se te va a terminar olvidando.»"
        }, 
        bio: "Diseñadora de formación y creadora visual guiada por la íntima convicción de que dar forma a un libro es un privilegio que conecta con el lector. Su práctica se despliega entre el diseño editorial, de información, visualización de datos y tipografía, colaborando con Latinotype, Estudio Vicencio y Ediciones Fulgor. Concibe la diagramación como un puente para transmitir conocimientos y emociones, visión que traslada a las aulas de la Universidad Diego Portales y la Universidad de Chile. Su portafolio destaca por proyectos como Carmela y La Alborada y la publicación Oficina Larrea (Premio Amster-Coré 2024), trayectoria docente que respalda con un diplomado con enfoque de género.", 
        fotoFondo: "imagenes/perlaarruee.jpg", 
        descFotoPrincipal: "Perla Arrué — Registro de espacio de trabajo. Envío digital, 5 de agosto de 2026.",
        videos: {
            eje1: "https://www.youtube.com/embed/u8rO0Hhx0rw?si=8rWzMPOrduvAaPc8",
            eje2: "https://www.youtube.com/embed/6R8UG4_dI4A?si=R79FLXAtXKUv7YiD",
            eje3: "https://www.youtube.com/embed/EtdvZYov80k?si=Qj70-x43MosB7-Ka",
            eje4: "https://www.youtube.com/embed/uNERN-zC3Sw?si=tPEAbbiQmz2oVmQj"
        }, 
        // Tiempos correspondientes a cada eje
        duraciones: {
            eje1: "8:25 min",
            eje2: "14:57 min",
            eje3: "11:43 min",
            eje4: "6:38 min"
        },
        obras: [
            { img: ["imagenes/perla1.jpg", "imagenes/perla1.1.jpg", "imagenes/perla1.2.jpg"], desc: "01. Marcas, logotipos y símbolos de Julián Naranjo" },
            { img: ["imagenes/perla2.jpg", "imagenes/perla2.1.jpg", "imagenes/perla2.2.jpg"], desc: "02. Libro Oficina Larrea" },
            { img: ["imagenes/perla3.jpg", "imagenes/perla3.1.png", "imagenes/perla3.2.png"], desc: "03. Resistencia Textil" },
            { img: ["imagenes/perla4.png", "imagenes/perla4.1.png", "imagenes/perla4.2.png"], desc: "04. Carmela y La Alborada" },
            { img: ["imagenes/perla5.png", "imagenes/perla5.1.png", "imagenes/perla5.2.png"], desc: "05. Cringe Gothic" },
            { img: ["imagenes/perla6.jpg", "imagenes/perla6.1.jpg", "imagenes/perla6.2.jpg"], desc: "06. Revista Grifo #45" }
        ] 
    },
    
    // 4. VICO GALLARDO
    { 
        id: "Victoria Gallardo", 
        name: "Victoria Gallardo", 
        instagram: "@fakeuniverse",
        edicion: 2, 
        hasEntrevista: true, 
        universidad: "Católica", 
        egreso: "2014", 
        residencia: "Santiago, Chile", 
        areas: ["Diseño Gráfico", "Diseño Editorial", "Diseño de Información"], 
        recomiendaA: ["Camila González", "Nicole Cristi", "Valeria Montt", "Renata Tesser", "Ángeles Briones", "Constanza Gaggero", "Constanza Diez"], 
        frases: {
            eje1: "«Lo mío es la tipografía, las letras, incluso en un sentido como la ‘siguiente capa’, que tiene algo similar a la poesía en el sentido de que no es solo lo que dices, sino cómo lo dices.»",
            eje2: "«Hay una diferencia considerable entre lo que uno piensa que va a hacer y cuando ya estás adentro haciéndolo.»",
            eje3: "«Que el escritorio se adapte a mí, más que tener que forzarme yo a adaptarme al escritorio.»",
            eje4: "«Reconocer que esta persona que es en mi vida personal también es la misma persona que hace, que existe en el mundo profesional: somos lo mismo. No va a haber otro cuerpo, no va a haber otra salud, no van a haber otros ojos... son los mismos.»"
        },         
        bio: "Diseñadora especializada en diseño editorial, tipografía y diseño de información. A lo largo de su trayectoria profesional, ha consolidado un profundo lazo con la literatura y la poesía, disciplinas que han trazado su camino y pasión por la creación de libros. Su enfoque concibe el diseño como una herramienta con la capacidad de conectar emocional y sensorialmente con las personas, facilitando la comprensión de contenidos complejos para influenciar positivamente en su entorno. Su práctica se centra en el valor de trabajar con la información y su impacto social, transformando los proyectos editoriales en legados materiales y tangibles construidos para la posteridad.", 
        fotoFondo: "imagenes/victoriagallardo.jpg", 
        descFotoPrincipal: "Vico Gallardo — Registro de espacio de trabajo en estudio personal. Fotografía de Laura González, 14 de junio de 2026.",
        videos: {
            eje1: "https://www.youtube.com/embed/ClyPXgizOgA?si=v--keESZL6Z__vwR",
            eje2: "https://www.youtube.com/embed/dhRhNu8PcYg?si=6luKNuwVjsrS12YV",
            eje3: "https://www.youtube.com/embed/ixI9eu4uTc8?si=QmvCemAQA7qMcb6J",
            eje4: "https://www.youtube.com/embed/R1bDeC6xLoQ?si=djMxPREmshHMayo9"
        }, 
        // Tiempos correspondientes a cada eje
        duraciones: {
            eje1: "34:38 min",
            eje2: "42:36 min",
            eje3: "21:20 min",
            eje4: "5:47 min"
        },
        obras: [
            { img: ["imagenes/vico1.png", "imagenes/vico1.1.png", "imagenes/vico1.2.png"], desc: "01. Cocino con plantas: Diseño editorial de cubierta e interior. Libro ganador Chile Diseño 2024." },
            { img: ["imagenes/vico2.png", "imagenes/vico2.1.png", "imagenes/vico2.2.png"], desc: "02. 80 años de Fernando Mayer: Diseño de cubierta (que contempló la elección material) y su interior." },
            { img: ["imagenes/vico3.png", "imagenes/vico3.1.png", "imagenes/vico3.2.png"], desc: "03. Mi hermano Arthur: Diseño editorial de cubierta, interior y desarrollo de collage ilustrativo." },
            { img: ["imagenes/vico4.png", "imagenes/vico4.1.png", "imagenes/vico4.2.png"], desc: "04. El ABC de PF: Diseño editorial interior y producción de contenido gráfico documental." },
            { img: ["imagenes/vico5.png", "imagenes/vico5.1.png", "imagenes/vico5.2.png"], desc: "05. Épicas: Diseño editorial de cubierta e interior, Desarrolo de iconos y Dirección de arte en Ilustraciones." },
            { img: ["imagenes/vico6.png", "imagenes/vico6.1.png", "imagenes/vico6.2.png"], desc: "06. Vegan Neighbor: Desarrollo de identidad y dirección gráfica." },
        ] 
    },

    // --- NODOS RECOMENDADOS CON ENTREVISTA COMPLETA (Verdes Destacadas) ---
    // JOSEFINA VIDAL
    { 
        id: "Josefina Vidal", 
        name: "Josefina Vidal",
        instagram: "@jfvidalm", 
        edicion: 'verde', 
        recomendadasPor: ["Nicole Cristi", "Rita Torres"],
        hasEntrevista: true, 
        universidad: "Católica",
        egreso: "2017", 
        residencia: "Londres, Inglaterra",
        areas: ["Investigación", "Historia del Diseño", "Diseño Editorial"],
        recomiendaA: [], 
        frase: "«Escribe aquí la frase de la entrevista...»",
        bio: "Investigadora, escritora y diseñadora de formación, con estudios de maestría y un doctorado en curso en Estudios Culturales en King’s College London. Su trayectoria se sitúa en la intersección entre la teoría del diseño, la cultura material y la escritura creativa como método para narrar historias. Desde 2017 investiga las prácticas textiles lideradas por mujeres en Chile, entendiendo sus formas de hacer como lecciones vivas de cuidado, resiliencia y pertenencia a la naturaleza. Autora de libros como Encontrar el ella (2022) y Biografías de artesanías (2025), su trabajo se despliega como un acto de atención hacia estas corporalidades y saberes, con la convicción profunda de que habitar y sostener estas prácticas es ya el comienzo de una transformación en las narrativas bajo las cuales vivimos.",
        fotoFondo: "imagenes/josefinavidal.jpg", 
        descFotoPrincipal: "Josefina Vidal — Registro de espacio de trabajo. Envío digital, 27 de julio de 2026.",
        videos: {
            eje1: "videos/josefina-eje1.mp4",
            eje2: "videos/josefina-eje2.mp4",
            eje3: "videos/josefina-eje3.mp4",
            eje4: "videos/josefina-eje4.mp4"
        },
        obras: [
            { img: ["imagenes/jose1.jpg", "imagenes/jose1.1.jpg", "imagenes/jose1.2.jpg"], desc: "01. Biografías de artesanías: mujeres creando en prisión y exilio 1973-1990" },
            { img: ["imagenes/jose2.png", "imagenes/jose2.1.png"], desc: "02. They Weave and I Remember: Chapter for the book Makin Kin: Plant series, published by Cthulhu books." },
            { img: ["imagenes/jose3.jpg", "imagenes/jose3.1.jpg", "imagenes/jose3.2.jpg"], desc: "03. Encontrar el ella: codiseñando una memoria feminista del Diseño" },
            { img: ["imagenes/jose4.png", "imagenes/jose4.1.png", "imagenes/jose4.2.png"], desc: "04. Tiempo sin lluvia" },
            { img: ["imagenes/jose5oficial.JPG", "imagenes/jose5.1.jpg"], desc: "05. Escribir una investigación-canasto: Siguiendo los gestos cesteriles entre mujeres tejedoras y la ñocha en Wadalafken" },
            { img: ["imagenes/jose6.jpg", "imagenes/jose6.1.jpg", "imagenes/jose6.2.jpg"], desc: "06. Moda al Paso" },
        ]
    },
    // ALEJANDRA BECKDORF
    { 
        id: "Alejandra Beckdorf", 
        name: "Alejandra Beckdorf", 
        instagram: "@alebeckdsgn",
        edicion: 'verde', 
        recomendadaPor: "Paola Irazábal", 
        hasEntrevista: true, 
        universidad: "Del Desarrollo",
        egreso: "2021", 
        residencia: "Santiago, Chile",
        areas: ["Diseño Gráfico", "Docencia Universitaria", "Branding"],
        recomiendaA: [], 
        frase: "«Escribe aquí la frase de la entrevista de Alejandra...»",
        bio: "Diseñadora gráfica de profesión, ha construido un camino impulsado por la curiosidad creativa, la ilustración y el amor por la estética. Desde sus inicios en 2016 y tras complementar sus estudios en México, Italia y España, ha profundizado en áreas como el branding, la moda y el marketing. Su trayectoria laboral abarca colaboraciones en la industria gráfica y papelera, pymes, fundaciones y educación superior, donde equilibra el trabajo en equipo con el pensamiento estratégico. Su propuesta busca generar sellos únicos mediante la tipografía, la imagen y el soporte, concibiendo el diseño como una práctica ética, consciente y respetuosa con el mensaje.",
        fotoFondo: "imagenes/alebeckdorf.jpg", 
        descFotoPrincipal: "Alejandra Beckdorf — Registro de espacio de trabajo. Envío digital, 5 de agosto de 2026.",
        videos: {
            eje1: "videos/entrevistaalejandrabekkdorf-eje1.mp4",
            eje2: "videos/entrevistaalejandrabekkdorf-eje2.mp4",
            eje3: "videos/entrevistaalejandrabekkdorf-eje3.mp4",
            eje4: "videos/entrevistaalejandrabekkdorf-eje4.mp4"
        },
        obras: [
            { img: ["imagenes/ale1.jpg", "imagenes/ale1.1.jpg", "imagenes/ale1.2.jpg"], desc: "01. Rebranding para uno de los principales medios digitales de Chile. Una identidad más sólida y dinámica, construida desde la “D” como eje del sistema, que conecta su trayectoria periodística con una experiencia contemporánea, análoga y digital." },
            { img: ["imagenes/ale2.jpg", "imagenes/ale2.1.jpg", "imagenes/ale2.2.jpg"], desc: "02. Una nueva identidad para conectar la tradición culinaria con una nueva generación. A partir de su icónica “C”, se construyó un sistema vivo y flexible inspirado en el gesto de emplatar, capaz de representar las distintas expresiones del nuevo Culinary." },
            { img: ["imagenes/ale3.jpg", "imagenes/ale3.1.jpg", "imagenes/ale3.2.jpg"], desc: "03. Una marca de alimentación para mascotas que vuelve a su origen más salvaje. Inspirada en la naturaleza del sur de Chile y en la trucha arcoíris como materia prima, Bayts construye un universo que conecta nutrición, territorio y naturaleza." },
            { img: ["imagenes/ale4.png", "imagenes/ale4.1.jpg", "imagenes/ale4.2.jpg"], desc: "04. Un rebranding construido desde el movimiento. La morfología de su botella, inspirada en una coctelera, dio origen a un sistema gráfico dinámico que transforma sus siete sabores en una identidad lista para agitarse y moverse." },
            { img: ["imagenes/ale5.jpg", "imagenes/ale5.1.jpg", "imagenes/ale5.2.jpeg"], desc: "05. Una nueva identidad para una comunidad de mujeres que hacen crecer grandes negocios. Un sistema enérgico y contemporáneo, donde colores atrevidos, tipografías bold y una nueva expresión del logo proyectan el poder, la actitud y el crecimiento de Fundadoras." },
            { img: ["imagenes/ale6.png", "imagenes/ale6.1.jpeg", "imagenes/ale6.2.jpeg"], desc: "06. Una identidad visual para entender una sociedad en constante movimiento. Un sistema modular transforma valores y datos complejos en un lenguaje visual claro y dinámico, capaz de representar cómo las personas transitan entre distintas formas de pensar." },
        ] 
    },
    // ARIBEL GONZÁLEZ
    { 
        id: "Aribel González", 
        name: "Aribel González", 
        instagram: "@ari.bit",
        edicion: 'verde', 
        recomendadasPor: ["Myrna Cisneros", "Karin Gildemeister"],
        hasEntrevista: true, 
        universidad: "Católica",
        egreso: "2016", 
        residencia: "Santiago, Chile",
        areas: ["Docencia Universitaria", "Diseño Editorial", "Branding", "Diseño de Información", "Ilustración"],
        recomiendaA: ["Piedad Rivadeneira", "Constanza Gaggero", "Francisca Alcalde", "Paulina Astudillo", "Antonieta Lopez", "Gracia Fernández"], 
        frases: {
            eje1: "«Más que las cosas funcionen perfectas y queden hermosas e increíbles, hay que hacer que funcionen nomás... porque hay que cumplir con las fechas.»",
            eje2: "«He estado en equipos muy femeninos; incluso en Sodimac la gerenta era mujer.»",
            eje3: "«Me gusta ordenadito: cada uno con su espacio, cada uno con su escritorio.»",
            eje4: "«Tiene que haber una obsesión, una pequeña obsesión... No sé, son tonteras, pero yo voy a librerías y lo primero que hago es buscar algo que me parezca atractivo, y lo primero que miro es el diseñador.»"
        },     
        bio: "Diseñadora gráfica y docente, con un interés profundo en la identidad y el diseño editorial como lenguaje. Su trayectoria transita entre la práctica independiente, la colaboración en estudios como Otros Pérez y la dirección gráfica del Festival Internacional de Fotografía de Valparaíso (FIFV), entrelazándose orgánicamente con la docencia universitaria en el Instituto Arcos, la Universidad Andrés Bello y la Universidad Diego Portales. En 2014 cofunda la editorial Buen Lugar junto a los fotógrafos Alejandro y Cristóbal Olivares, un espacio que consolida su cruce constante con la imagen y el libro como contenedor de memoria. Su trabajo —reconocido en certámenes como Premios Chile Diseño, FELIFA, Latin American Design Awards, POY LATAM y PhotoEspaña— se despliega desde el cuidado por el detalle y la sensibilidad visual, entendiendo las publicaciones y la gráfica no solo como soportes estéticos, sino como objetos capaces de conectar miradas, construir relatos y perdurar en el tiempo.",
        fotoFondo: "imagenes/aribelgonzalez.jpg", 
        descFotoPrincipal: "Aribel González — Registro de espacio de trabajo. Envío digital, 24 de julio de 2026.",
        videos: {
            eje1: "https://www.youtube.com/embed/OOWx_ri2iU0?si=lbGGYu3hFQDl2Sfd",
            eje2: "https://www.youtube.com/embed/G1TdY__Zd-k?si=4dz2p5uIz4ZAiUVq",
            eje3: "https://www.youtube.com/embed/DNOZES2B72o?si=012xsybpwfdIBTf2",
            eje4: "https://www.youtube.com/embed/n_r5qCEShdA?si=z_hfiiykRRIuLmCc"
        }, 
        // Tiempos correspondientes a cada eje
        duraciones: {
            eje1: "23:14 min",
            eje2: "17:12 min",
            eje3: "11:10 min",
            eje4: "7:13 min"
        },
        obras: [
            { img: ["imagenes/ari1.jpg", "imagenes/ari1.1.jpg", "imagenes/ari1.2.jpg"], desc: "01. Atlas de la historia abstracta y subjetiva de Chile, Alejandro Olivares. Editorial Buen Lugar, 2025." },
            { img: ["imagenes/ari2.jpg", "imagenes/ari2.1.jpg", "imagenes/ari2.2.jpg"], desc: "02. El cielo se ha vuelto rojo, Catalina Juger. Coedición Buen Lugar – Tacto, 2024." },
            { img: ["imagenes/ari3.jpg", "imagenes/ari3.1.jpg", "imagenes/ari3.2.jpg"], desc: "03. Predio, Javier Álvarez. Editorial Buen Lugar, 2022." },
            { img: ["imagenes/ari4.jpg", "imagenes/ari4.1.jpg", "imagenes/ari4.2.jpg"], desc: "04. Tú no sabes si vas a volver, Lilith Kraushaar. Editorial Cenfoto UDP, 2022." },
            { img: ["imagenes/ari5.jpg", "imagenes/ari5.1.png", "imagenes/ari5.2.png"], desc: "05. Festival Internacional de Fotografía de Valparaíso, 2024." },
            { img: ["imagenes/ari6.png", "imagenes/ari6.1.png", "imagenes/ari6.2.png"], desc: "06. Discusiones contemporáneas del diseño, Escuela de Diseño Universidad Diego Portales, 2025." },
        ]
    },
    
    // Pía Pulgar
    { 
        id: "Pía Pulgar", 
        name: "Pía Pulgar", 
        instagram: "@jornalera.cl",
        edicion: 'verde', 
        recomendadaPor: "Perla Arrué", 
        hasEntrevista: true, 
        universidad: "De Talca",
        egreso: "2013", 
        residencia: "Talca, Chile",
        areas: ["Branding", "Diseño Editorial", "Ilustración","Diseño Gráfico"],
        recomiendaA: [], 
        frase: "«Escribe aquí la frase de la entrevista de Pía...»",
        bio: "Diseñadora de productos de profesión y gráfica de corazón, Pía Pulgar desarrolla su práctica de manera independiente desde Talca. Su quehacer se despliega en el diseño de marcas, el mundo editorial y la ilustración, colaborando de cerca con microempresas, instituciones y proyectos del ámbito académico. En 2017 cofundó el estudio Vagabunda —que más tarde daría paso a estudio hacerhacer—, espacio desde el cual nació la guía iconográfica Talca Icónica (2020). Su trayectoria combina la gestión de proyectos locales con la exploración artística del bordado y la risografía, entrelazando el oficio, la identidad territorial y las artes gráficas desde una mirada íntima y expresiva.",
        fotoFondo: "imagenes/piapulgar.jpg", 
        descFotoPrincipal: "Pía Pulgar — Registro de espacio de trabajo. Envío digital, 11 de agosto de 2026.",
        videos: {
            eje1: "videos/entrevistapiapulgar-eje1.mp4",
            eje2: "videos/entrevistapiapulgar-eje2.mp4",
            eje3: "videos/entrevistapiapulgar-eje3.mp4",
            eje4: "videos/entrevistapiapulgar-eje4.mp4"
        },
        obras: [
            { img: ["imagenes/pia1.jpg", "imagenes/pia1.1.jpg", "imagenes/pia1.2.jpg"], desc: "01. La Noche de San Juan: Ilustración y diseño editorial, a partir de la investigación de rituales tradiciones campesinos se realizó una compilación inspirado en la Lira Popular." },
            { img: ["imagenes/pia2.jpg", "imagenes/pia2.1.jpg", "imagenes/pia2.2.jpg"], desc: "02. Cuaderno de Ideas Geniales: Libro de ejercicios creativos para niños y niñas sobre escritura y dibujo - Club de pequeños escritores y artistas -" },
            { img: ["imagenes/pia3.jpg", "imagenes/pia3.1.png", "imagenes/pia3.2.png"], desc: "03. Cancionero Nolfa Marín: Diseño editorial e ilustraciones para cancionero popular de Nolfa Marín, oriunda de Chillán." },
            { img: ["imagenes/pia4.jpg", "imagenes/pia4.1.jpg", "imagenes/pia4.2.jpg"], desc: "04. Packaging Plantae Foods: Diseño de packaging para fermented ch**se de la marca Plantae Foods, nuevo producto en base a la fermentación de trigo burgol." },
            { img: ["imagenes/pia5.jpg", "imagenes/pia5.1.jpg", "imagenes/pia5.2.jpg"], desc: "05. Talca Icónica: Libro de bolsillo que funciona como una guía iconográfica que facilita el recorrido y permite visitar lugares de la ciudad,  busca documentar la ciudad de Talca del año 2019." },
            { img: ["imagenes/pia6.jpeg", "imagenes/pia6.1.png", "imagenes/pia6.2.png"], desc: "06. Etiquetas Primates Tostadores: Diseño e ilustraciones para etiquetas de café de diferentes orígenes de la tostaduria y cafetería talquina" },
        ]
    },
    
    // --- NODOS SIMPLES (Edición 2 - Rosadas sin entrevista) ---
    { id: "Alejandra Amenábar", name: "Alejandra Amenábar", edicion: 2, puente: false, hasEntrevista: false, recomiendaA: 
        ["Catalina Pérez", "Piedad Rivadeneira", "Julie Carles" ] },
    { id: "Ana Villagrán", name: "Ana Villagrán", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Andrea Estefanía", name: "Andrea Estefanía", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Ángeles Briones", name: "Ángeles Briones", edicion: 2, puente: false, hasEntrevista: false }, 
    { id: "Antonieta Lopez", name: "Antonieta Lopez", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Bernardita Brancoli", name: "Bernardita Brancoli", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Bernardita Espinoza", name: "Bernardita Espinoza", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Bianca Sartori", name: "Bianca Sartori", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Camila Muñoz", name: "Camila Muñoz", edicion: 2, puente: false, hasEntrevista: false },
    { id: "Camila Rios", name: "Camila Rios", edicion: 2, puente: false, hasEntrevista: false, recomiendaA: 
        ["Jenny Abud", "Perla Arrué"] },
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
    { id: "Karin Gildemeister", name: "Karin Gildemeister", edicion: 2, puente: false, hasEntrevista: false, recomiendaA: 
        ["Daniela Escobar"] },
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
    { id: "Coto Mendoza", name: "Coto Mendoza", edicion: 'verde', recomendadasPor: ["Myrna Cisneros", "Camila Rios"] },
    { id: "Dora Sánchez", name: "Dora Sánchez", edicion: 'verde', recomendadaPor: "Rita Torres" },
    { id: "Liz Bravo", name: "Liz Bravo", edicion: 'verde', recomendadaPor: "Rita Torres" },
    { id: "Andrea Meza", name: "Andrea Meza", edicion: 'verde', recomendadaPor: "Rita Torres" },
    { id: "Catalina Cumsille", name: "Catalina Cumsille", edicion: 'verde', recomendadaPor: "Paola Irazábal" },
    { id: "Camila González", name: "Camila González", edicion: 'verde', recomendadasPor: ["Victoria Gallardo", "Pamela Sthandier"]},
    { id: "Valeria Montt", name: "Valeria Montt", edicion: 'verde', recomendadaPor: "Victoria Gallardo" },
    { id: "Renata Tesser", name: "Renata Tesser", edicion: 'verde', recomendadaPor: "Victoria Gallardo" },
    { id: "Constanza Diez", name: "Constanza Diez", edicion: 'verde', recomendadaPor: "Victoria Gallardo" },
    { id: "Katherine Mollenhauer", name: "Katherine Mollenhauer", edicion: 'verde', recomendadaPor: "Nicole Cristi" },
    { id: "Magdalena Cattan", name: "Magdalena Cattan", edicion: 'verde', recomendadaPor: "Nicole Cristi" },
    { id: "Valentina Contreras", name: "Valentina Contreras", edicion: 'verde', recomendadaPor: "Perla Arrué" },
    { id: "Camila Jouannet", name: "Camila Jouannet", edicion: 'verde', recomendadaPor: "Perla Arrué" },
    { id: "Paulina Astudillo", name: "Paulina Astudillo", edicion: 'verde', recomendadaPor: "Aribel González" },
    { id: "Francisca Alcalde", name: "Francisca Alcalde", edicion: 'verde', recomendadaPor: "Aribel González" },
    { id: "Gracia Fernández", name: "Gracia Fernández", edicion: 'verde', recomendadaPor: "Aribel González" },
    { id: "Consuelo Yávar", name: "Consuelo Yávar", edicion: 'verde', recomendadaPor: "Alejandra Amenábar" },
    { id: "Catalina Cortés", name: "Catalina Cortés", edicion: 'verde', recomendadaPor: "Alejandra Amenábar" }


];

// =========================================================================
// ESCUCHADOR DOM PRINCIPAL (INICIALIZACIÓN UNIFICADA)
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Cambiamos 'btn-descubrir' por 'btn-explorar'
    const btnExplorar = document.getElementById('btn-explorar');
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const pantallaRed = document.getElementById('pantalla-red');
    const btnRestaurarRed = document.getElementById('btn-restaurar-red');

    if (btnExplorar) {
        btnExplorar.addEventListener('click', () => {
            // Transición suave de salida
            pantallaInicio.style.transition = 'opacity 1s ease';
            pantallaInicio.style.opacity = '0';
            
            setTimeout(() => {
                pantallaInicio.classList.add('oculto');
                pantallaRed.classList.remove('oculto');
                
                // Inicialización de la red y filtros
                inicializarRedObsidianEstatica(); 
                cargarFiltrosAutomaticos();
                
                document.getElementById("filtro-universidad")?.addEventListener("change", aplicarFiltros);
                document.getElementById("filtro-decada")?.addEventListener("change", aplicarFiltros);
                document.getElementById("filtro-area")?.addEventListener("change", aplicarFiltros);
                
                actualizarContadorRecomendadas();
            }, 1000); // 1 segundo para la animación de fade-out
        });
    }

    if (btnRestaurarRed) {
        btnRestaurarRed.addEventListener('click', () => {
            restaurarEstadoOriginalRed();
        });
    }

    // Limpiador de filtros interactivo optimizado para Proyecto de Título
    document.getElementById("btn-limpiar-filtros")?.addEventListener("click", () => {
        document.getElementById("filtro-universidad").value = "";
        document.getElementById("filtro-decada").value = "";
        document.getElementById("filtro-area").value = "";

        // Al usar esta función, limpias los filtros y además re-renderizas Vis.js con su estética original intacta
        restaurarEstadoOriginalRed();
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

    // A. Controlador de Pestañas de Ficha Lateral (Perfil / Cápsulas / Proyectos)
document.querySelectorAll('input[name="menu-disenadora"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const pestañaSeleccionada = e.target.value; 
        const videoDinamico = document.getElementById('video-dinamico');

        document.querySelectorAll('.tab-content').forEach(bloque => {
            bloque.classList.add('tab-oculto');
        });

        if (pestañaSeleccionada === 'biografia') {
            document.getElementById('contenido-biografia')?.classList.remove('tab-oculto');
            if (videoDinamico) { const currentSrc = videoDinamico.src; videoDinamico.src = ""; videoDinamico.src = currentSrc; }
        } else if (pestañaSeleccionada === 'taller') {
            document.getElementById('contenido-taller')?.classList.remove('tab-oculto');
        } else if (pestañaSeleccionada === 'portafolio') {
            document.getElementById('contenido-portafolio')?.classList.remove('tab-oculto');
            if (videoDinamico) { const currentSrc = videoDinamico.src; videoDinamico.src = ""; videoDinamico.src = currentSrc; }
        }
    });
}); // <--- AQUÍ SE CIERRA CORRECTAMENTE EL EVENTO DE LAS PESTAÑAS
// =========================================================================
    // CONTROLADORES PARA MODALES DE STATEMENT Y ESTADÍSTICAS
    // =========================================================================
    

    const btnEstadisticas = document.getElementById("btn-estadisticas");
    const modalEstadisticas = document.getElementById("modal-estadisticas");
    const btnCerrarEstadisticas = document.getElementById("btn-cerrar-estadisticas");

    

    // Abrir Estadísticas
    if (btnEstadisticas && modalEstadisticas) {
        btnEstadisticas.addEventListener("click", () => modalEstadisticas.classList.remove("oculto"));
    }
    // Cerrar Estadísticas
    if (btnCerrarEstadisticas && modalEstadisticas) {
        btnCerrarEstadisticas.addEventListener("click", () => modalEstadisticas.classList.add("oculto"));
    }

    // Cerrar si hacen clic fuera de la ventana (en el fondo oscuro)
    window.addEventListener("click", (e) => {
        if (e.target === modalStatement) modalStatement.classList.add("oculto");
        if (e.target === modalEstadisticas) modalEstadisticas.classList.add("oculto");
    });
// B. Escuchar clicks en los botones de cápsulas (ejes) de forma independiente y eficiente
document.querySelectorAll('.btn-eje').forEach(boton => {
    boton.addEventListener('click', (e) => {
        const elBoton = e.target;
        const ejeSeleccionado = elBoton.getAttribute('data-eje');
        const videoDinamico = document.getElementById('video-dinamico');
        const contenedorDuracion = document.getElementById('duracion-video');
        
        // --- NUEVO: Traemos el elemento HTML de la frase ---
        const bloqueFrase = document.getElementById('frase-dinamica'); 
        // --------------------------------------------------
        
        document.querySelectorAll('.btn-eje').forEach(b => b.classList.remove('active'));
        elBoton.classList.add('active');

        // Cambia el texto de la duración dinámicamente
        if (contenedorDuracion && videoDinamico && videoDinamico.dataset.duraciones) {
            const todasLasDuraciones = JSON.parse(videoDinamico.dataset.duraciones);
            if (todasLasDuraciones[ejeSeleccionado]) {
                contenedorDuracion.innerText = `Duración: ${todasLasDuraciones[ejeSeleccionado]}`;
                contenedorDuracion.style.display = "block";
            } else {
                contenedorDuracion.style.display = "none";
            }
        }

        // --- NUEVO: Cambia la frase según el eje seleccionado ---
        if (bloqueFrase && videoDinamico && videoDinamico.dataset.frases) {
            const todasLasFrases = JSON.parse(videoDinamico.dataset.frases);
            if (todasLasFrases[ejeSeleccionado]) {
                bloqueFrase.innerText = todasLasFrases[ejeSeleccionado];
                bloqueFrase.style.display = "block";
            } else {
                bloqueFrase.innerText = ""; // Si este eje no tiene frase, se limpia
            }
        }
        // --------------------------------------------------------

        // Cambia el video de YouTube
        if (videoDinamico && videoDinamico.dataset.videos) {
            const todosLosVideos = JSON.parse(videoDinamico.dataset.videos);
            if (todosLosVideos[ejeSeleccionado]) {
                videoDinamico.src = todosLosVideos[ejeSeleccionado];
            }
        }
    });
});

    // Acción para el botón de cierre "X" del panel de la diseñadora
const botonCerrar = document.getElementById("btn-cerrar");
if (botonCerrar) {
    botonCerrar.addEventListener("click", () => {
        const panel = document.getElementById("panel-disenadora");
        if (panel) {
            panel.classList.add("panel-oculto");
            // --- NUEVO: Limpiamos los fondos al cerrar para que no se queden pegados ---
            panel.classList.remove('fondo-rosado', 'fondo-verde');
        }
        
        const video = document.getElementById("video-dinamico");
        if (video) {
            video.src = ""; // Apaga YouTube por completo al vaciar el src
        }
        // --- NUEVO: Hacemos reaparecer los botones superiores al cerrar el panel ---
        document.querySelector('.header-acciones-top')?.classList.remove('oculto-panel');
    });

}

   
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

    // 1. Si NO hay ningún filtro seleccionado (todos están en blanco/Opción por defecto)
    if (universidad === "" && decada === "" && area === "") {
        datasetDisenadoras.forEach(d => {
            if (nodesDataset.get(d.id)) {
                // Volvemos a mostrar absolutamente todo en el mapa
                nodesDataset.update({ id: d.id, hidden: false });
            }
        });
        return;
    }

    // 2. Si el usuario SÍ seleccionó al menos un filtro
    datasetDisenadoras.forEach(d => {
        const nodo = nodesDataset.get(d.id);
        if (!nodo) return;

        // Ocultamos a las que no tienen datos de entrevista
        if (!d.hasEntrevista) {
            nodesDataset.update({ id: d.id, hidden: true });
            return;
        }

        // Evaluamos si la diseñadora cumple con los filtros activos
        let visible = true;
        if (universidad !== "") visible = visible && d.universidad === universidad;
        if (decada !== "") {
            const año = parseInt(d.egreso);
            let grupo = año <= 2010 ? "2000-2010" : (año <= 2020 ? "2011-2020" : "2021+");
            visible = visible && grupo === decada;
        }
        if (area !== "") visible = visible && (d.areas && d.areas.includes(area));

        // Muestra u oculta según si cumple el criterio
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

    // --- 1. CONTEO DE RECOMENDACIONES POR DISEÑADORA ---
    const conteoRecomendaciones = {};

    datasetDisenadoras.forEach(d => {
        // Contamos menciones en lista 'recomiendaA'
        if (d.recomiendaA && Array.isArray(d.recomiendaA)) {
            d.recomiendaA.forEach(nombre => {
                conteoRecomendaciones[nombre] = (conteoRecomendaciones[nombre] || 0) + 1;
            });
        }
        // Contamos menciones en 'recomendadasPor' / 'recomendadaPor'
        const quienes = d.recomendadasPor || (d.recomendadaPor ? [d.recomendadaPor] : []);
        quienes.forEach(autora => {
            conteoRecomendaciones[d.id] = (conteoRecomendaciones[d.id] || 0) + 1;
        });
    });

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

        // --- 2. TAMAÑO DINÁMICO SEGÚN POPULARIDAD / RECOMENDACIONES ---
        const totalVotos = conteoRecomendaciones[disenadora.id] || 0;
        
        // Base: 8px secundarias, 28px con foto. Sumamos +4px por cada recomendación extra recibida.
        let sizeNodo = (disenadora.hasEntrevista ? 28 : 8) + (totalVotos * 4); 
        let sizeTexto = (disenadora.hasEntrevista ? 14 : 13) + Math.min(totalVotos, 4); // Crece un poco el texto

        let colorTexto = "rgba(255,255,255,0.45)"; 

        if (disenadora.edicion === 1) colorFondo = "#F8470C"; 
        else if (disenadora.edicion === 'verde') colorFondo = "#4AFF7A"; 

        if (disenadora.hasEntrevista) {
            shapeNodo = "circularImage"; 
            imageNodo = disenadora.fotoFondo; 
            colorTexto = "#ffffff";
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

        const estiloLinea = { 
            width: 1.5, 
            hoverWidth: 2.5, 
            selectionWidth: 3 
        };

        // =========================================================================
        // DIBUJO INTELIGENTE DE LÍNEAS (EDGES)
        // =========================================================================

        // 1. Conexiones a núcleos históricos
        if (disenadora.edicion === 1) {
            if (disenadora.puente) {
                lineasArray.push({ ...estiloLinea, from: "NUCLEO_2004", to: disenadora.id, color: { color: "rgba(248, 71, 12, 0.15)" } });
                lineasArray.push({ ...estiloLinea, from: "NUCLEO_2025", to: disenadora.id, color: { color: "rgba(240, 89, 130, 0.15)" } });
            } else {
                lineasArray.push({ ...estiloLinea, from: "NUCLEO_2004", to: disenadora.id, color: { color: "rgba(248, 71, 12, 0.15)" } });
            }
        } else if (disenadora.edicion === 2) {
            lineasArray.push({ ...estiloLinea, from: "NUCLEO_2025", to: disenadora.id, color: { color: "rgba(240, 89, 130, 0.15)" } });
        }

        // 2. Conexiones por Recomendación (detección inteligente de color)
        if (disenadora.recomiendaA && Array.isArray(disenadora.recomiendaA)) {
            disenadora.recomiendaA.forEach(nombreRecomendado => {
                const personaRecomendada = datasetDisenadoras.find(d => d.id === nombreRecomendado);

                if (personaRecomendada) {
                    let colorConexion = (personaRecomendada.edicion === 'verde') 
                        ? "rgba(74, 255, 122, 0.22)"  // Verde
                        : "rgba(240, 89, 130, 0.35)"; // Rosado

                    lineasArray.push({
                        ...estiloLinea,
                        from: disenadora.id,
                        to: personaRecomendada.id,
                        color: { color: colorConexion }
                    });
                }
            });
        }
        
        // 3. Soporte para recomendadas verdes
        if (disenadora.edicion === 'verde') {
            const quienes = disenadora.recomendadasPor || (disenadora.recomendadaPor ? [disenadora.recomendadaPor] : []);
            quienes.forEach(autora => {
                const yaExiste = lineasArray.some(l => l.from === autora && l.to === disenadora.id);
                if (!yaExiste) {
                    lineasArray.push({ 
                        ...estiloLinea, 
                        from: autora, 
                        to: disenadora.id, 
                        color: { color: "rgba(74, 255, 122, 0.22)" } 
                    });
                }
            });
        }
    });

    // Guardar los datos en la red
    nodesDataset = new vis.DataSet(nodosArray);
    edgesDataset = new vis.DataSet(lineasArray);

    const options = {
        physics: {
            enabled: true,
            solver: "forceAtlas2Based",
            forceAtlas2Based: { 
                gravitationalConstant: -180, // Duplica la repulsión para dar espacio a los textos
                centralGravity: 0.015,       // Permite que la red se expanda un poco más
                springLength: 220,          // Estira los enlaces entre nodos
                springConstant: 0.04,
                damping: 0.75,
                avoidOverlap: 1             // CLAVE: Activa el motor anti-solapamiento de Vis.js
            },
            stabilization: { 
                enabled: true, 
                iterations: 1200 
            }
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

function abrirPanelDisenadora(disenadora) {
    const panelDisenadora = document.getElementById('panel-disenadora');
    const fotoCabecera = document.getElementById('foto-horizontal-perfil');
    const bloqueFrase = document.getElementById('frase-dinamica');
    const indicadorColor = document.getElementById('indicador-color');
    const galeriaObras = document.getElementById('galeria-dinamica-obras');
    const videoDinamico = document.getElementById('video-dinamico');

    if (!panelDisenadora) return;
    
    // Ocultamos la barra superior al abrir cualquier perfil
    document.querySelector('.header-acciones-top')?.classList.add('oculto-panel');

    // GESTIÓN DE COLOR DE FONDO DINÁMICO
    panelDisenadora.classList.remove('fondo-rosado', 'fondo-verde');
    
    if (disenadora.edicion === 2) {
        panelDisenadora.classList.add('fondo-rosado');
    } else if (disenadora.edicion === 'verde') {
        panelDisenadora.classList.add('fondo-verde');
    }

    if (fotoCabecera && disenadora.fotoFondo) {
        fotoCabecera.src = disenadora.fotoFondo;
        const clonFoto = fotoCabecera.cloneNode(true);
        fotoCabecera.parentNode.replaceChild(clonFoto, fotoCabecera);
        clonFoto.addEventListener('click', () => {
            const pieCompleto = disenadora.descFotoPrincipal || `${disenadora.name} — Registro de Espacio / Taller`;
            abrirImagenEnLightbox(disenadora.fotoFondo, pieCompleto);
        });
    }

    // --- NOMBRE DE LA DISEÑADORA ---
    const partesNombre = disenadora.name.toUpperCase().split(' ');
    document.querySelector('.first-name').innerText = partesNombre[0] || "";
    document.querySelector('.last-name').innerText = partesNombre.slice(1).join(' ') || "";

    // =========================================================================
    // NUEVO: INYECCIÓN DINÁMICA DE INSTAGRAM BAJO EL NOMBRE
    // =========================================================================
    let elemIg = document.getElementById('instagram-disenadora');

    if (!elemIg) {
        elemIg = document.createElement('a');
        elemIg.id = 'instagram-disenadora';
        elemIg.target = '_blank';
        elemIg.rel = 'noopener noreferrer';
        elemIg.className = 'link-instagram-perfil';
        
        const nameLayout = document.querySelector('.name-layout');
        if (nameLayout) {
            nameLayout.insertAdjacentElement('afterend', elemIg);
        }
    }

    if (disenadora.instagram) {
        let handle = disenadora.instagram
            .replace('https://www.instagram.com/', '')
            .replace('https://instagram.com/', '')
            .replace('/', '');
        
        if (!handle.startsWith('@')) handle = '@' + handle;
        
        let url = disenadora.instagram.startsWith('http') 
            ? disenadora.instagram 
            : `https://instagram.com/${handle.replace('@', '')}`;
        
        elemIg.href = url;
        elemIg.innerHTML = `<svg class="icon-ig-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> ${handle}`;
        elemIg.style.display = 'inline-flex';
    } else {
        elemIg.style.display = 'none';
    }
    // =========================================================================

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
                    const proximaDisenadora = datasetDisenadoras.find(d => d.id === nom);
                    if (networkInstance) {
                        networkInstance.focus(nom, { scale: 1.35, animation: { duration: 1000 } });
                    }
                    if (proximaDisenadora && proximaDisenadora.hasEntrevista) {
                        setTimeout(() => { 
                            abrirPanelDisenadora(proximaDisenadora); 
                        }, 300);
                    } else {
                        panelDisenadora.classList.add('panel-oculto');
                        panelDisenadora.classList.remove('fondo-rosado', 'fondo-verde');
                        document.querySelector('.header-acciones-top')?.classList.remove('oculto-panel');
                    }
                });
                contenedorRecomienda.appendChild(linkRec);
            });
        } else {
            contenedorRecomienda.innerText = "Ninguna por ahora.";
        }
    }

    if (videoDinamico) {
        videoDinamico.dataset.videos = disenadora.videos ? JSON.stringify(disenadora.videos) : "";
        videoDinamico.dataset.duraciones = disenadora.duraciones ? JSON.stringify(disenadora.duraciones) : "";
        videoDinamico.dataset.frases = disenadora.frases ? JSON.stringify(disenadora.frases) : "";
        
        document.querySelectorAll('.btn-eje').forEach(btn => btn.classList.remove('active'));
        const primerBtn = document.querySelector('.btn-eje[data-eje="eje1"]');
        if (primerBtn) primerBtn.classList.add('active');

        const contenedorDuracion = document.getElementById('duracion-video');
        if (contenedorDuracion) {
            if (disenadora.duraciones && disenadora.duraciones.eje1) {
                contenedorDuracion.innerText = `Duración: ${disenadora.duraciones.eje1}`;
                contenedorDuracion.style.display = "block";
            } else {
                contenedorDuracion.style.display = "none";
            }
        }

        const bloqueFraseEje = document.getElementById('frase-dinamica');
        if (bloqueFraseEje) {
            if (disenadora.frases && disenadora.frases.eje1) {
                bloqueFraseEje.innerText = disenadora.frases.eje1;
                bloqueFraseEje.style.display = "block";
            } else {
                bloqueFraseEje.innerText = "";
            }
        }

        if (disenadora.videos && disenadora.videos.eje1) {
            videoDinamico.src = disenadora.videos.eje1;
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
// ==========================================
// CONTROLADOR DE LA LEYENDA COLAPSABLE
// ==========================================
(function() {
    const inicializarLeyenda = () => {
        const btnToggle = document.getElementById('btn-toggle-leyenda');
        const leyenda = document.getElementById('leyenda-red');
        const flecha = document.getElementById('flecha-leyenda');

        if (leyenda && btnToggle && flecha) {
            
            // ESCUCHAMOS EL CLIC EN TODA LA CAJA DE LA LEYENDA
            leyenda.addEventListener('click', (e) => {
                
                // CASO 1: Si está colapsada, cualquier clic en la barra la vuelve a abrir
                if (leyenda.classList.contains('colapsada')) {
                    leyenda.classList.remove('colapsada');
                    flecha.innerText = "▼"; // Flecha hacia abajo porque ahora está abierta
                    e.stopPropagation();    // Evita que el clic traspase e interactúe con el mapa de fondo
                } 
                
                // CASO 2: Si está abierta, solo se cierra si haces clic exactamente en el botón superior
                else if (e.target.closest('#btn-toggle-leyenda')) {
                    leyenda.classList.add('colapsada');
                    flecha.innerText = "▲"; // Flecha hacia arriba porque ahora está oculta
                    e.stopPropagation();
                }
            });
        }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", inicializarLeyenda);
    } else {
        inicializarLeyenda();
    }
    
})();
const btnStatement = document.getElementById('btn-statement');
const modalStatement = document.getElementById('modal-statement');
const btnCerrar = document.getElementById('btn-cerrar-modal');

btnStatement.addEventListener('click', () => {
    modalStatement.classList.remove('hidden');
});

btnCerrar.addEventListener('click', () => {
    modalStatement.classList.add('hidden');
});