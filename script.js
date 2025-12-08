// ✅ Contador regresivo al 15/12/2025 a las 21:00 hs
const fechaEvento = new Date(2025, 11, 15, 21, 0, 0);

function actualizarContador() {
  const ahora = new Date().getTime();
  const distancia = fechaEvento - ahora;

  if (distancia < 0) {
    document.getElementById("tiempo").innerHTML = "🎉 ¡Hoy es el gran día! 🎉";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("tiempo").innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContador, 1000);
actualizarContador();


// ✅ Confirmación por WhatsApp
function confirmarAsistencia() {
  const nombre = document.getElementById("nombre").value.trim();

  if (nombre === "") {
    alert("Por favor escribí tu nombre 😊");
    return;
  }

  const mensaje = `Hola Facu! Soy ${nombre} y confirmo mi asistencia a tu cumpleaños! ¡Nos vemos! 🎉`;

  const numero = "5492284600624";
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(link, "_blank");
}
