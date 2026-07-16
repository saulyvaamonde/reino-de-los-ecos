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
    leaf.style.width = (20 + Math.random() * 35) + "px";
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