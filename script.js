
function canjearCupon() {
    const textoMensaje = document.getElementById("mensajeCupon");
    textoMensaje.innerHTML = "🎉 ¡CUPÓN CANJEADO CON ÉXITO! Tómale captura y cóbrale a tu hermano Inmediatamente. 🚀";
    lanzarConfeti();
}

function mostrarMensajeSecreto() {
    const caja = document.getElementById("cajaMensajeSecreto");
    const boton = document.getElementById("btnMensaje");

    if (caja.style.display === "none") {
        caja.style.display = "block";
        boton.innerText = "Ocultar Mensaje";
        boton.style.background = "#334155";
        lanzarConfeti();
    } else {
        caja.style.display = "none";
        boton.innerText = "Revelar Mensaje Oculto";
        boton.style.background = "#ff007f";
    }
}

let reproduciendo = false;
function toggleMusica() {
    const audio = document.getElementById("audioCumple");
    const btn = document.getElementById("btnMusica");

    if (!reproduciendo) {
        audio.play();
        btn.innerText = "⏸️ Pausar Melodía";
        btn.style.background = "#ff007f";
        btn.style.color = "white";
        reproduciendo = true;
    } else {
        audio.pause();
        btn.innerText = "🎵 Reproducer Melodía de Cumpleaños";
        btn.style.background = "#00f2fe";
        btn.style.color = "#0b0f19";
        reproduciendo = false;
    }
}

function agregarComentario() {
    const nombre = document.getElementById("inputNombre").value.trim();
    const comentario = document.getElementById("inputComentario").value.trim();
    const lista = document.getElementById("listaComentarios");

    if (nombre === "" || comentario === "") {
        alert("¡Por favor completa tu nombre y mensaje antes de guardar!");
        return;
    }

    const nuevoDiv = document.createElement("div");
    nuevoDiv.className = "comentario-item";
    nuevoDiv.innerHTML = `<strong>${nombre}:</strong> <p style="margin: 5px 0 0 0; color: #e2e8f0;">${comentario}</p>`;

    lista.prepend(nuevoDiv); 

    document.getElementById("inputNombre").value = "";
    document.getElementById("inputComentario").value = "";
    lanzarConfeti();
}

function lanzarConfeti() {
    const contenedor = document.getElementById("confetti-container");
    const colores = ["#00f2fe", "#ff007f", "#ffde59", "#38ef7d", "#9b51e0"];

    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement("div");
        confeti.className = "confetti-piece";
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
        confeti.style.width = (Math.random() * 8 + 6) + "px";
        confeti.style.height = (Math.random() * 8 + 6) + "px";

        contenedor.appendChild(confeti);

        setTimeout(() => {
            confeti.remove();
        }, 3500);
    }
}
function actualizarContadorHermandad() {
    const fechaInicio = new Date("2000-10-12T00:00:00");
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const días = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const años = Math.floor(días / 365.25);
    const díasRestantes = Math.floor(días % 365.25);
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    const elemento = document.getElementById("contadorHermandad");
    if (elemento) {
        elemento.innerHTML = `🔥 ${años} años, ${díasRestantes} días, ${horas} horas y ${minutos} min desde que llegó el más pro.`;
    }
}

setInterval(actualizarContadorHermandad, 1000);
actualizarContadorHermandad();

let totalAbrazos = 0;
function sumarAbrazo() {
    totalAbrazos++;
    document.getElementById("contadorAbrazos").innerText = totalAbrazos;
    lanzarConfeti(); 
}

let modoFiestaActivo = false;

function cambiarTemaFiesta() {
    modoFiestaActivo = !modoFiestaActivo;
    const btn = document.getElementById("btnFiesta"); 
    const body = document.body;

    if (modoFiestaActivo) {
        if (btn) {
            btn.innerText = "🍌 Volver al Modo Normal";
            btn.style.background = "#00f2fe";
        }
        body.classList.add("fiesta-tropical-activa");

        lanzarConfetiContinuo();
    } else {
        if (btn) {
            btn.innerText = "✨ Activar Modo Fiesta Tropical";
            btn.style.background = "#ffde59";
        }
        body.classList.remove("fiesta-tropical-activa");
    }
}

function lanzarConfetiContinuo() {
    if (!modoFiestaActivo) return;
    lanzarConfeti();
    setTimeout(lanzarConfetiContinuo, 2000); 
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
