// cronometro.js

// 1. Define la fecha y hora objetivo para la cuenta regresiva
const fechaObjetivo = new Date('2025-08-27T23:59:59').getTime();


// 2. Función para actualizar el cronómetro cada segundo
function actualizarCronometro() {
  const ahora = new Date().getTime(); // Hora actual
  const diferencia = fechaObjetivo - ahora; // Diferencia en milisegundos

  if (diferencia <= 0) {
    // Cuando termina la cuenta regresiva
    document.querySelector('.cronometro').innerHTML = "¡Tiempo finalizado!";
    clearInterval(intervalo); // Detiene la actualización
    return;
  }

  // 3. Calcula días, horas, minutos y segundos restantes
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // 4. Muestra los valores en la página
  document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
  document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
  document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
  document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
}

// 5. Llama a la función al cargar la página y luego cada segundo
actualizarCronometro();
const intervalo = setInterval(actualizarCronometro, 1000);


const juegos = [
  {
    nombre: "ELDEN RING",
    precio: 69,
    consola: "PS4 & PS5",
    imagen: "img/elden.avif"
  },
  {
    nombre: "HOGWARTS LEGACY",
    precio: 35,
    consola: "PS4 & PS5",
    imagen: "img/howart.avif"
  },
  {
    nombre: "Call of Duty®: Black Ops 6",
    precio: 69,
    consola: "PS4 & PS5",
    imagen: "img/call6.avif"
  },
  {
    nombre: "Call of Duty Modern Warfare Remastered",
    precio: 45,
    consola: "PS4 & PS5",
    imagen: "img/callmorden.webp"
  }
];

const grid = document.getElementById('grid-ofertas');

juegos.forEach(juego => {
  // Mensaje personalizado SOLO con el nombre del juego
  const mensaje = `Hola Valhalla Quest, deseo adquirir el juego *${juego.nombre}*`;
  const urlWhatsapp = `https://api.whatsapp.com/send/?phone=51929672602&text=${encodeURIComponent(mensaje)}`;

  grid.innerHTML += `
    <div class="carta-juego">
      <div class="oferta">
        <span>${juego.consola}</span>
      </div>
      <div class="container-imagen">
        <img src="${juego.imagen}" class="img-juego" alt="${juego.nombre}">
      </div>
      <div class="nombre-juego">
        <span>${juego.nombre}</span>
      </div>
      <div class="precio-juego">
        <span>S/. ${juego.precio}</span>
      </div>
      <a class="btn-comprar" href="${urlWhatsapp}" target="_blank">
        Comprar
      </a>
    </div>
  `;
});
const juegosAgosto = [
  { nombre: "ARK: Survival Ascended", precio: 55, consola: "PS4 & PS5", imagen: "img/ark.jpg" },
  { nombre: "Monster Hunter Wilds", precio: 109, consola: "PS4 & PS5", imagen: "img/monsterhunter.jpg" },
  { nombre: "The Crew Motorfest", precio: 39, consola: "PS4 & PS5", imagen: "img/thecrew.jpg" },
  { nombre: "Resident Evil 4", precio: 39, consola: "PS4 & PS5", imagen: "img/re4.jpg" },
  { nombre: "Resident Evil 4 Remake Trilogy", precio: 75, consola: "PS4 & PS5", imagen: "img/re4trilogy.avif" },
  { nombre: "Guilty Gear: Strive", precio: 39, consola: "PS4 & PS5", imagen: "img/guiltygear.avif" },
  { nombre: "Lote Crash Bandicoot™: N. Sane Trilogy + CTR Nitro-Fueled", precio: 49, consola: "PS4 & PS5", imagen: "img/crashctr.jpg" },
  { nombre: "Lote Triple Juego de Crash™ + Spyro™", precio: 69, consola: "PS4 & PS5", imagen: "img/crashspyro.jpg" },
  { nombre: "Crash™ Team Racing Nitro-Fueled", precio: 29, consola: "PS4 & PS5", imagen: "img/crashracing.jpg" },
  { nombre: "Warhammer 40,000: Darktide", precio: 69, consola: "PS4 & PS5", imagen: "img/warhammer.avif" },
  { nombre: "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS", precio: 65, consola: "PS4 & PS5", imagen: "img/naruto.jpg" },
  { nombre: "Horizon Forbidden West Complete Edition", precio: 89, consola: "PS4 & PS5", imagen: "img/horizon.jpg" },
  { nombre: "Five Nights at Freddy's: Security Breach", precio: 39, consola: "PS4 & PS5", imagen: "img/fnaf.jpg" },
  { nombre: "DRAGON BALL XENOVERSE 2", precio: 39, consola: "PS4 & PS5", imagen: "img/dbxenoverse2.jpg" },
  { nombre: "Crash Bandicoot™: La trilogía", precio: 29, consola: "PS4 & PS5", imagen: "img/crashtrilogy.jpg" },
  { nombre: "FAR CRY®6 Gold Edition", precio: 39, consola: "PS4 & PS5", imagen: "img/farcry6.jpg" },
  { nombre: "Persona 3 Reload", precio: 59, consola: "PS4 & PS5", imagen: "img/persona3.jpg" },
  { nombre: "BLEACH Rebirth of Souls", precio: 79, consola: "PS4 & PS5", imagen: "img/bleach.jpg" },
  { nombre: "Marvel’s Spider-Man: Miles Morales Definitive Edition", precio: 59, consola: "PS4 & PS5", imagen: "img/milesmorales.jpg" },
  { nombre: "NINJA GAIDEN Master Collection", precio: 49, consola: "PS4 & PS5", imagen: "img/ninjagaiden.jpg" },
  { nombre: "A Quiet Place: The Road Ahead", precio: 49, consola: "PS4 & PS5", imagen: "img/aquietplace.jpg" },
  { nombre: "Lords of the Fallen Deluxe Edition", precio: 55, consola: "PS4 & PS5", imagen: "img/lordsofthefallen.jpg" },
  { nombre: "Call of Duty®: Black Ops III - Zombies Chronicles Deluxe", precio: 75, consola: "PS4 & PS5", imagen: "img/codbo3zombies.jpg" },
  { nombre: "Teenage Mutant Ninja Turtles: The Cowabunga Collection", precio: 35, consola: "PS4 & PS5", imagen: "img/tmnt.jpg" },
  { nombre: "God of War Digital Deluxe Edition", precio: 35, consola: "PS4 & PS5", imagen: "img/gowdeluxe.jpg" },
  { nombre: "SUPER BOMBERMAN R 2", precio: 55, consola: "PS4 & PS5", imagen: "img/bomberman.jpg" },
  { nombre: "Battlefield™ 2042", precio: 35, consola: "PS4 & PS5", imagen: "img/bf2042.jpg" },
  { nombre: "Call of Duty®: Black Ops 4 - Digital Deluxe", precio: 75, consola: "PS4 & PS5", imagen: "img/codbo4.jpg" },
  { nombre: "Sifu Deluxe Edition", precio: 39, consola: "PS4 & PS5", imagen: "img/sifu.jpg" }
];




const gridAgosto = document.getElementById('grid-ofertas-agosto');

juegosAgosto.forEach(juego => {
  const mensaje = `Hola Valhalla Quest, deseo adquirir el juego *${juego.nombre}*`;
  const urlWhatsapp = `https://api.whatsapp.com/send/?phone=51929672602&text=${encodeURIComponent(mensaje)}`;
  gridAgosto.innerHTML += `
    <div class="carta-juego">
      <div class="oferta">
        <span>${juego.consola}</span>
      </div>
      <div class="container-imagen">
        <img src="${juego.imagen}" class="img-juego" alt="${juego.nombre}">
      </div>
      <div class="nombre-juego">
        <span>${juego.nombre}</span>
      </div>
      <div class="precio-juego">
        <span>S/. ${juego.precio}</span>
      </div>
      <a class="btn-comprar" href="${urlWhatsapp}" target="_blank">
        Comprar
      </a>
    </div>
  `;
});


const beneficios = [
  {
    icono: '<i class="bi bi-lightning-charge-fill"></i>',
    numero: "1",
    titulo: "Entrega inmediata",
    texto: "Recibe tu juego minutos después de tu compra, sin esperas ni demoras."
  },
  {
    icono: '<i class="bi bi-piggy-bank-fill"></i>',
    numero: "2",
    titulo: "Ahorra hasta más de 50%",
    texto: "Precios exclusivos y descuentos que no encontrarás en otras tiendas."
  },
  {
    icono: '<i class="bi bi-controller"></i>',
    numero: "3",
    titulo: "Variedad asegurada",
    texto: "Encuentra los lanzamientos, clásicos y ediciones especiales en un solo lugar."
  }
];

const gridBeneficios = document.getElementById('grid-beneficios');

beneficios.forEach(b => {
  gridBeneficios.innerHTML += `
    <div class="card-beneficio">
      <div class="top-beneficio">
        <div class="icono-beneficio">${b.icono}</div>
        <div class="numero-beneficio">${b.numero}</div>
      </div>
      <div class="titulo-beneficio">${b.titulo}</div>
      <div class="texto-beneficio">${b.texto}</div>
    </div>
  `;
});
const fotos = [
  'img/joker.avif', 'img/batman.avif', 'img/red2.avif', 'img/fornite.avif', 'img/perfil.png'
];

// Nombres y apellidos ficticios
const nombres = [
  "Carlos Herrera", "Javier Pérez", "José Flores", "Miguel Rivera", "Juan Ramírez",
  "Andrés Castro", "Luis Mendoza", "Raúl Guerrero", "Sergio Rojas", "Pedro Gutiérrez",
  "Mauricio Vargas", "Fernando López", "Ricardo Díaz", "Iván Romero", "Daniel Torres"
];

// Textos ficticios de venta
const textos = [
  "Todo excelente, entrega súper rápida y el juego funciona perfecto. ¡Gracias Valhalla Quest!",
  "Atención de primera y precios muy buenos. Compré 2 juegos y llegaron en minutos.",
  "Satisfecho con la compra, todo seguro y sencillo. ¡Recomiendo totalmente!",
  "Tenía dudas pero me ayudaron y recibí el código enseguida. ¡100% confiable!",
  "Nunca fue tan fácil tener mis juegos favoritos. Gran tienda.",
  "Ya es la tercera vez que compro y siempre cumplen. Recomendado.",
  "El descuento fue real, ahorré bastante. Todo perfecto.",
  "Me llegó mi juego para PS5 en menos de 10 minutos. ¡Top!",
  "El asesoramiento fue rápido y claro. Muy agradecido.",
  "Todo ok, compré desde provincia y llegó al toque.",
  "Tenía miedo de estafa pero aquí es seguro. Volveré a comprar.",
  "Lo recomiendo por precios y servicio, muy pro.",
  "Buen trato y confianza desde el inicio. Todo en orden.",
  "Compré para regalo y fue rapidísimo. Atención de lujo.",
  "Sin problemas, rápido y seguro. Muy recomendado."
];

const testimonios = Array.from({length: 15}).map((_,i) => ({
  nombre: nombres[i],
  foto: fotos[i%fotos.length],
  texto: textos[i],
}));

const testimoniosLista = document.getElementById('testimonios-lista');
testimonios.forEach(t => {
  testimoniosLista.innerHTML += `
    <div class="testimonio-card">
      <div class="stars">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
      </div>
      <img src="${t.foto}" class="testimonio-foto" alt="${t.nombre}">
      <div class="testimonio-nombre">${t.nombre}</div>
      <div class="testimonio-texto">${t.texto}</div>
    </div>
  `;
});

// Lógica del carrusel
let actual = 0; // primer testimonio visible
const cardsPerView = 3;
const total = testimonios.length;
const maxPos = total - cardsPerView;
const lista = document.getElementById('testimonios-lista');

function moverCarrusel(direccion) {
  actual += direccion;
  if (actual < 0) actual = 0;
  if (actual > maxPos) actual = maxPos;

  const card = lista.children[0];
  // Asegúrate que la card existe
  if(card){
    const gap = 24; // 1.5rem en px
    const cardWidth = card.offsetWidth;
    lista.style.transform = `translateX(-${actual * (cardWidth + gap)}px)`;
  }
}


// Listeners
document.getElementById('carrusel-izq').onclick = () => moverCarrusel(-1);
document.getElementById('carrusel-der').onclick = () => moverCarrusel(1);

// Opcional: Desactiva flechas al inicio/final
function actualizarFlechas() {
  document.getElementById('carrusel-izq').disabled = actual === 0;
  document.getElementById('carrusel-der').disabled = actual === maxPos;
}
setInterval(actualizarFlechas, 100);

window.addEventListener('resize', () => {
  const card = lista.children[0];
  const gap = 24; // 1.5rem
  if(card){
    const cardWidth = card.offsetWidth;
    lista.style.transform = `translateX(-${actual * (cardWidth + gap)}px)`;
  }
});




