function sumar (idNum1, idNum2){
    console.log("Sumar");
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 + num2;
    console.log(respuesta);

    /*Para poner valor dentro de un contenido se usa innerText */
    document.getElementById("idResultado").innerText = respuesta;
}

function restar (idNum1, idNum2){
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 - num2;
    console.log(respuesta);

    /*Para poner valor dentro de un contenido se usa innerText */
    document.getElementById("idResultado").innerText = respuesta;
}

function multiplicar (idNum1, idNum2){
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 * num2;
    console.log(respuesta);

    /*Para poner valor dentro de un contenido se usa innerText */
    document.getElementById("idResultado").innerText = respuesta;
}

function dividir (idNum1, idNum2){
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 / num2;
    console.log(respuesta);

    /*Para poner valor dentro de un contenido se usa innerText */
    document.getElementById("idResultado").innerText = respuesta;
}

/*La declaracion de las funciones dependen del context en la que esten
S una funcion sera referenciada desde fuera, si una funcion va a ser 
llamada o manejada solo desde una pagina se declara como la segunda, caso 
contrario, Abra que hacerlo de manera generica o en forma general siempre
que estas se busquen en distintos lugares */ 

/*
function sumar (){
    var num1 = document.getElementById("idNumero1").value;
    var num1 = document.getElementById("idNumero2").value;
}

*/




