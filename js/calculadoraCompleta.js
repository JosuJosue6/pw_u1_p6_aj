var numeroActual = 0;
var numeroFinal = 0;
var respuesta = 0;
var operador = "";

const colocarNumero = (numero) => {
    const display = document.getElementById('idDisplay');
    var numeroActual = display.textContent;
    if(numeroActual == "0" || numeroActual == ""){
        if (numero == '.'){
            display.innerText = "0"+numero;
            return;
        }
        display.innerText = numero;
        return;
    }else{
        display.innerText = numeroActual+numero;
    }
}

const limpiarDisplay = () => {
    const display = document.getElementById('idDisplay');
    display.innerText = "0";
}

const eliminarUltimo = () => {
    const display = document.getElementById('idDisplay');
    var numeroActual = display.textContent;
    display.innerText = numeroActual.slice(0, -1);
    if(display.textContent ==""){
        display.innerText = "0";
    }
}

const operacion = (operacion) => {
    const display = document.getElementById('idDisplay');
    numeroActual = parseFloat(display.textContent);
    switch(operacion){
        case '+':
            operador = '+';
            display.innerText = "";  
            break;
        case '-':
            operador = '-';
            display.innerText = "";
            break;
        case '*':
            operador = '*';
            display.innerText = "";
            break;
        case '/':
            operador = '/';
            display.innerText = "";
            break;
    }
}

const calcular = () => {
    const display = document.getElementById('idDisplay');
    numeroFinal = parseFloat(display.textContent);
    switch(operador){
        case '+':
            respuesta= numeroActual + numeroFinal;
            display.innerText = respuesta; 
            numeroActual = respuesta;
            break;
        case '-':
            respuesta = numeroActual - numeroFinal;
            display.innerText = respuesta;   
            break;
        case '*':
            respuesta = numeroActual * numeroFinal;
            display.innerText = respuesta;   
            break;
        case '/':
            if(numeroFinal == 0){
                display.innerText = "Error NaN";
                return;
            }
            respuesta = numeroActual / numeroFinal;
            display.innerText = respuesta;   
            break;
    }

}


