/*Las funciones lambdas se usa con cons*/
const sumar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 + num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}

const restar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 - num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}

const multiplicar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 * num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}

const dividir = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 / num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}

function agregarElemento(){
    /*Dado que existen elementos que su contenido no es solo texto, si no mas bien otro
    elemento, usamos el innerHTML, aquellos lementos que en su contenido acepten otro elemento HTML */

    document.getElementById("idDivision").innerHTML = "<button>NUEVO</button>";
}


function quitarElemento(){
    document.getElementById("idDivision").innerHTML = "";

}

function conceptosJS(){
    /*TIPOS DE DATOS JS almacenan datos
        let
        var almacena datos modifiables, pero se lo esta ejando de usar
        pues let administra de mejor manera el espacio de memoria
        const: almanecen datos que no seran modificados
    
    */
   const IVA = 12;
   console.log(IVA);
   //IVA = 15;
   console.log(IVA);

   var name = "Josue";
    console.log(name);

    name = "Josu";
    console.log(name);

    let apellido = "Ocapana";
    console.log(apellido);
    apellido = "Quisaguano";
    console.log(apellido);
}