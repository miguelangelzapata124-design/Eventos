let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", validarRegistro);

function validarRegistro(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let edadTexto = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value.trim();
    let clave = document.getElementById("clave").value;
    let confirmar = document.getElementById("confirmar").value;

    if (nombre === "") {
        resultado.innerText = "Escribe tu nombre.";
        resultado.className = "mensaje error";
        return;
    }

    if (edadTexto === "") {
        resultado.innerText = "Escribe tu edad.";
        resultado.className = "mensaje error";
        return;
    }

    let edad = Number(edadTexto);

    if (edad % 1 !== 0 || edad < 18 || edad > 100) {
        resultado.innerText = "La edad debe ser un número entero entre 18 y 100.";
        resultado.className = "mensaje error";
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        resultado.innerText = "Escribe un correo válido.";
        resultado.className = "mensaje error";
        return;
    }

    if (clave === "") {
        resultado.innerText = "Escribe tu contraseña.";
        resultado.className = "mensaje error";
        return;
    }

    if (confirmar !== clave) {
        resultado.innerText = "Las contraseñas no coinciden.";
        resultado.className = "mensaje error";
        return;
    }

    resultado.innerText = `Registro exitoso. Bienvenido(a), ${nombre}.`;
    resultado.className = "mensaje exito";
}
