let formulario=document.getElementById("formTaller2");
let resultado=document.getElementById("resultado");

formulario.addEventListener("submit",taller2);

function taller2(){
    event.preventDefault();
    let nota=parseFloat(document.getElementById("nota").value);
    let desempeno;
    let estado="aprovado";


    if(isNaN(nota)){
        resultado.innerText="escribe la nota"
        resultado.className="error"
        return
    }
    else if (nota<0 & nota>5){
        resultado.innerText="La nota debe estar entre 0.0 y 5.0."
        resultado.className="error"
        return
    }
    else if (nota>=4.5){
        desempeno="exelente";
    }
     else if (nota>=4){
        desempeno="Bueno";
    }
     else if (nota>=3){
        desempeno="aceptable";
    }
    else{
     desempeno="Insuficiente";
     estado="No aprovado";
    }
    resultado.innerText=`nota ${nota}: ${desempeno} ${estado}`;
    resultado.className="exito";

}




