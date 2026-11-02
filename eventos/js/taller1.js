let formulario = document.getElementById("formTaller1");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let valor = document.getElementById("numero").value;

    if (valor === "") {
        resultado.innerText = "Escribe un número.";
        resultado.className = "mensaje error";
        return;
    }

    let numero = Number(valor);

    if (numero % 1 !== 0) {
        resultado.innerText = "Escribe un número entero.";
        resultado.className = "mensaje error";
        return;
    }

    if (numero % 2 === 0) {
        resultado.innerText = "El número es par.";
    } else {
        resultado.innerText = "El número es impar.";
    }

    resultado.className = "mensaje exito";
});