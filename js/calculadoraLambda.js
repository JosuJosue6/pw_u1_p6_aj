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

function agregarElemento() {
    /*Dado que existen elementos que su contenido no es solo texto, si no mas bien otro
    elemento, usamos el innerHTML, aquellos lementos que en su contenido acepten otro elemento HTML */

    document.getElementById("idDivision").innerHTML = "<button>NUEVO</button>";
}


function quitarElemento() {
    document.getElementById("idDivision").innerHTML = "";

}

function conceptosJS() {
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

    /*Declaracion de arreglos
        Cuando se declara un arreglo se lo hace en un tipo de dato constante

    */

    //Por buena practica, se usa const para una constante
    //para que el arreglo no se modifique por alguna otra cosa que no sea un arreglo
    //diasSemana = "dias" esto NO
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[2]);
    console.log(diasSemana[3]);
    console.log(diasSemana[5]);//En java no da un error si no da un undefined
    //En JS todo lo que no exista o tenga un valor null como en java, en JS es undefined
    diasSemana[5] = "Sabado"
    console.log(diasSemana[5]);

    //Guarda al final 
    diasSemana.push("Domingo");
    console.log(diasSemana);

    //Guarda al inicio
    diasSemana.unshift("dias: ");
    console.log(diasSemana);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);

    const numerosImpares = [1, 3, 5, 7, 9];
    console.log(numerosImpares);

    const numerosCompletos = numerosPares.concat(numerosImpares);
    console.log(numerosCompletos);

    //Sentencia for
    //recorre el arreglo de los dias de la semana
    for (const dia of diasSemana) {
        console.log(dia);
        //Sentencia de control if, la buena practica 
        //en JS es hacerlo con 3 iguales
        //repazar tabla de los operadores logicos!!!.**********************************************
        if (dia === "Viernes") {
            console.log("Por fin llego en fin de semana!!!.");
        }
    }

    if (diasSemana[8] === undefined) {
        console.log("No tiene valor...")
    } else {
        console.log("Si tiene valor.")
    }

    //MANEJO DE OBJETOS EN JS
    //Al escribir objetos en JS hacemos uso del formato Jason
    const estudiante = {

        nombre: "Josue",
        apellido: "Ocapana",
        edad: 23,
        genero: "Masculino",
        ciudadNacimiento: "Quito"

    }
    //Se declara como const pues este no se cambiara por otro objeto
    //Se le puede manipuar para visualizar y cambiar los valores
    console.log(estudiante);
    console.log(estudiante.nombre);

    estudiante.nombre = "Josu";
    console.log(estudiante);

    //Atributos compuestos (declarar un objeto con atributos complejos (otra clase))

    const profesor = {
        nombre: "JosuJosue",
        apellido: "OcapanaQuisaguano",
        edad: 24,
        ciudadNacimiento: "Quito",
        direccion: {
            callePrincipal: "Av. Siempre Viva",
            calleSecundaria: "Test OE6D",
            numeracion: "S37G-278",
            barrio: "Mariscal Sucre"
        }
    }

    console.log(profesor);
    console.log(profesor.direccion.barrio);
    profesor.direccion.barrio = "Test Nuevo Barrio";
    console.log(profesor);

    //Arreglos de objetos

    const estu1 = {

        nombre: "Daniel",
        apellido: "Tobar",
    }

    const estu2 = {

        nombre: "Daniel 2",
        apellido: "Tobar 2",
    }

    const estu3 = {

        nombre: "Daniel 3",
        apellido: "Tobar 3",
    }

    const estu4 = {

        nombre: "Daniel 4",
        apellido: "Tobar 4",
    }

    const estudiantes = [estu1, estu2, estu3, estu4];
    console.log("*************************************************************");
    console.log(estudiantes);
    console.table(estudiantes);

    console.log(estudiantes[1]);
    console.log(estudiantes[1].apellido);
    estudiantes[1].apellido = "Testa cambiar apellido";
    console.table(estudiantes);

    const profesores = [{
        nombre: "Test 1",
        apellido: "Test 1",
        edad: 24
    },
    {
        nombre: "Test 2",
        apellido: "Test 2",
        edad: 24
    }
    ]

    console.table(profesores);


    //usar elementos de mi arreglo, el pop saca elementos de un arreglo
    //lo tomamos y lo eliminamos en este caso (el ultimo)

    var prof = profesores.pop();
    console.log(prof);
    console.table(profesores);

    //Desestructuracion 
    //De arreglos

    const diasSemana2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    //se pone un alias a cada posicion del elemento
    //se puede hacer con menos elementos pero es preferible con todos
    const [dia1, dia2, dia3, dia4, dia5] = diasSemana2;
    console.log(dia2);

    console.table(diasSemana2);

    const [d1, d2, d3, d4, d5] = ["Lunes - 1", "Martes - 2", "Miercoles - 3", "Jueves - 4", "Viernes - 5"];
    console.log(d2);
    console.log(d5);

    //DE OBJETOS 

    const vehiculo = {
        marca: "Toyota",
        modelo: "Prius",
        anio: 2018
    }

    //se usa llaves y se pone los nombres de los atributos que deseo desestructurar
    const { anio, marca } = vehiculo;
    console.log(marca);
    console.log(anio);

    const {modelo} ={
        marca:"FORD",
        modelo:"Edge",
        anio:2020
    }

    console.log(modelo);
    
    //Desestructuracion de un objeto que tenga un atributo compuesto
    //atributos principales y del subobjeto

    const estu = {
        nombre: "Test Ejer",
        apellido : "Apellido ejer",
        edad : 24,
        direc :{
            callePrincipal :"Calle Test",
            calleSecundaria: "calle Sec",
            numeracion: "S37G-278"
        }
    }

    //En dos pasos
    /*const {nombre, direc} =estu;
    console.log(nombre);

    const {callePrincipal} = direc;
    console.log(callePrincipal);*/

    //En un solo paso 
    const {nombre, direc:{callePrincipal}} = estu;
    console.log(nombre);
    console.log(callePrincipal);


    //TAREA****************************************************

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia == "Viernes") {
            console.log("Por fin llego en fin de semana!!!.");
        }
    }

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia != "Viernes") {
            console.log("Aun no llega el fin de semana!!! :c.");
        }
    }

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia !== "Viernes") {
            console.log("No es fin de semana!!!.");
        }
    }
    for (const dia of diasSemana) {
        console.log(dia);
        if (dia == "Viernes") {
            console.log("Por fin llego en fin de semana!!!.");
        }
    }
}