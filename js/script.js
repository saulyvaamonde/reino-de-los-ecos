const frases = [

    "Las antiguas leyendas aún susurran entre los árboles...",
    
    "Cada sendero guarda un recuerdo olvidado.",
    
    "La magia nunca desapareció... solo esperaba ser encontrada.",
    
    "Todo reino necesita a alguien que escuche sus ecos.",
    
    "Los espíritus del bosque siempre encuentran a quien tiene un corazón noble.",
    
    "Más allá de las montañas, un reino espera despertar.",
    
    "No todos los héroes empuñan una espada; algunos devuelven la esperanza.",
    
    "Cada flor que vuelve a florecer cuenta una historia.",
    
    "Explora despacio. El Reino de los Ecos recompensa a los curiosos.",
    
    "El viento aún recuerda los nombres de los antiguos guardianes."
    
    ];
    
    const frase = document.getElementById("frase");
    
    let indice = 0;
    
    setInterval(() => {
    
    frase.classList.add("ocultar");
    
    setTimeout(() => {
    
    indice++;
    
    if(indice >= frases.length){
    
    indice = 0;
    
    }
    
    frase.textContent = `"${frases[indice]}"`;
    
    frase.classList.remove("ocultar");
    
    frase.classList.add("mostrar");
    
    },800);
    
    },5000);

    const musica = document.getElementById("musica");
    const boton = document.getElementById("btnConoce");

    boton.addEventListener("click", () => {
        musica.volume = 0.25;
        musica.play();
    });


    const hero = document.querySelector(".hero");
const fondo = document.querySelector(".parallax-layer");

hero.addEventListener("mousemove", (e)=>{
    if (!fondo) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    fondo.style.transform =
    `translate(${x}px, ${y}px) scale(1.08)`;
});

/*hojas efecto*/

const leavesContainer = document.querySelector(".leaves");

const images = [
    "imagenes/hojas1.webp",
    "imagenes/hojas2.webp",
    "imagenes/hojas3.webp"
];

function createLeaf() {
    if (!leavesContainer) return;

    const leaf = document.createElement("img");
    leaf.src = images[Math.floor(Math.random() * images.length)];
    leaf.classList.add("leaf");

    // Posición inicial y tamaño
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.width = (80 + Math.random() * 140) + "px";
    leaf.style.opacity = 0.45 + Math.random() * 0.55;

    // Animación
    leaf.style.animationName = "fall";
    leaf.style.animationDuration = (10 + Math.random() * 8) + "s";
    leaf.style.animationDelay = Math.random() * 2 + "s";
    leaf.style.animationTimingFunction = "linear";
    leaf.style.animationIterationCount = "1";
    leaf.style.animationFillMode = "forwards";
    leaf.style.willChange = "transform, opacity";

    leavesContainer.appendChild(leaf);

    leaf.addEventListener("animationend", () => {
        leaf.remove();
    });
}

// Crear una hoja cada 800 ms
setInterval(createLeaf, 800);


/*audio time*/

      const audio = document.getElementById("miMusica");
  const tiempoLimite = 30; 

  audio.addEventListener("timeupdate", function() {
    if (Math.floor(audio.currentTime) >= tiempoLimite) {
      audio.pause();
      audio.currentTime = 0; 
    }
  });



  const personajes = {

    lior:{
    
    titulo:"Lior",
    
    imagen:"imagenes/lior.webp",
    
    historia:"Un joven aventurero que despierta en Whisper Valley sin recordar su pasado. Su destino está unido al Reino de los Ecos.",
    
    habilidades:[
    "Exploración",
    "Espada ligera",
    "Resolver acertijos",
    "Empatía con los espíritus"
    ]
    
    },
    
    lumi:{
    
    titulo:"Lumi",
    
    imagen:"imagenes/lumi.webp",
    
    historia:"Una pequeña criatura nacida de la luz del bosque. Siempre acompaña a Lior.",
    
    habilidades:[
    "Iluminar caminos",
    "Curación",
    "Encontrar secretos",
    "Guiar al jugador"
    ]
    
    },
    
    mira:{
    
    titulo:"Mira",
    
    imagen:"imagenes/mira-bibliotecaria.webp",
    
    historia:"Guardiana de la Gran Biblioteca. Conserva todos los recuerdos del reino.",
    
    habilidades:[
    "Magia antigua",
    "Conocimiento",
    "Hechizos",
    "Descifrar manuscritos"
    ]
    
    },
    
    aldren:{
    
    titulo:"Aldren",
    
    imagen:"imagenes/alcalde.webp",
    
    historia:"El anciano alcalde del pueblo. Conoce todos los secretos de Whisper Valley.",
    
    habilidades:[
    "Sabiduría",
    "Consejos",
    "Misiones principales"
    ]
    
    },
    
    guardianBosque:{
    
    titulo:"Guardián del Bosque",
    
    imagen:"imagenes/guardian-del-bosque.webp",
    
    historia:"Protector eterno de los árboles ancestrales.",
    
    habilidades:[
    "Control de la naturaleza",
    "Invocar raíces",
    "Protección"
    ]
    
    },
    
    guardianRio:{
    
    titulo:"Guardián del Río",
    
    imagen:"imagenes/guardian-del-rio.webp",
    
    historia:"Un antiguo autómata creado para proteger el río sagrado.",
    
    habilidades:[
    "Control del agua",
    "Energía ancestral",
    "Defensa"
    ]
    
    }
    
    };