let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let valorA = document.getElementById("numeroA").value;
    let valorB = document.getElementById("numeroB").value;
    let valorC = document.getElementById("numeroC").value;

    if (valorA === "" || valorB === "" || valorC === "") {
        resultado.innerText = "Completa los tres números.";
        resultado.className = "mensaje error";
        return;
    }

    let numeroA = Number(valorA);
    let numeroB = Number(valorB);
    let numeroC = Number(valorC);

    if (numeroA === numeroB && numeroB === numeroC) {
        resultado.innerText = "Los tres números son iguales.";
    } else if (numeroA >= numeroB && numeroA >= numeroC) {
        resultado.innerText = `El número mayor es ${numeroA}.`;
    } else if (numeroB >= numeroA && numeroB >= numeroC) {
        resultado.innerText = `El número mayor es ${numeroB}.`;
    } else {
        resultado.innerText = `El número mayor es ${numeroC}.`;
    }

    resultado.className = "mensaje exito";
});
