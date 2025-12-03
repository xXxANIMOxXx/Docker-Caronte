// JavaScript muy básico para el portfolio

// Botón "Contáctame" que hace scroll hasta el formulario
const btnContacto = document.getElementById("btn-contacto");
const seccionContacto = document.getElementById("contacto");

if (btnContacto && seccionContacto) {
    btnContacto.addEventListener("click", () => {
        seccionContacto.scrollIntoView({ behavior: "smooth" });
    });
}

// Manejo sencillo del envío del formulario (solo front, sin backend)
const formContacto = document.getElementById("form-contacto");
const mensajeEstado = document.getElementById("mensaje-estado");

if (formContacto) {
    formContacto.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita recargar la página

        // Valores del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            mensajeEstado.textContent = "Por favor, completa todos los campos.";
            mensajeEstado.style.color = "red";
            return;
        }

        // Aquí podrías enviar los datos a un backend con fetch()
        // Por ahora solo mostramos un mensaje de éxito
        mensajeEstado.textContent = "¡Gracias por tu mensaje, te responderé pronto!";
        mensajeEstado.style.color = "green";

        // Limpiar formulario
        formContacto.reset();
    });
}
