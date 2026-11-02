let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", calcular);

function calcular(event) {
    event.preventDefault();

    let valor1 = document.getElementById("primero").value;
    let valor2 = document.getElementById("segundo").value;
    let operacion = document.getElementById("operacion").value;

    if (valor1 === "" || valor2 === "") {
        resultado.innerText = "Escribe los dos números.";
        resultado.className = "mensaje error";
        return;
    }

    if (operacion === "") {
        resultado.innerText = "Selecciona una operación.";
        resultado.className = "mensaje error";
        return;
    }

    let numero1 = Number(valor1);
    let numero2 = Number(valor2);
    let total;

    if (operacion === "division" && numero2 === 0) {
        resultado.innerText = "No es posible dividir entre cero.";
        resultado.className = "mensaje error";
        return;
    }

    switch (operacion) {
        case "suma":
            total = numero1 + numero2;
            resultado.innerText = `${numero1} + ${numero2} = ${total}`;
            break;
        case "resta":
            total = numero1 - numero2;
            resultado.innerText = `${numero1} - ${numero2} = ${total}`;
            break;
        case "multiplicacion":
            total = numero1 * numero2;
            resultado.innerText = `${numero1} x ${numero2} = ${total}`;
            break;
        case "division":
            total = numero1 / numero2;
            resultado.innerText = `${numero1} / ${numero2} = ${total}`;
            break;
    }

    resultado.className = "mensaje exito";
}
