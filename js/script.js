var input  = document.querySelector('.input');

var uno = document.querySelector('.uno');
var dos = document.querySelector('.dos');
var tres = document.querySelector('.tres');
var cuatro= document.querySelector('.cuatro');
var cinco = document.querySelector('.cinco');
var seis = document.querySelector('.seis');
var siete = document.querySelector('.siete');
var ocho = document.querySelector('.ocho');
var nueve = document.querySelector('.nueve');
var entre = document.querySelector('.entre');
var por = document.querySelector('.por');
var mas = document.querySelector('.mas');
var menos = document.querySelector('.menos');
var punto = document.querySelector('.punto');
var cero = document.querySelector('.cero');
var igual = document.querySelector('.igual');

var numbersbloque = document.querySelector('.bloque1__Calculadora__caja1__cajas');
var numbers= document.querySelectorAll('.bloque1__Calculadora__caja1__cajas--box');

var inputTxt = '';


uno.addEventListener('click', function(){
    inputTxt += '1'
    input.value = inputTxt;
})
dos.addEventListener('click', function(){
    inputTxt += '2'
    input.value = inputTxt;
})
tres.addEventListener('click', function(){
    inputTxt += '3'
    input.value = inputTxt;
})
cuatro.addEventListener('click', function(){
    inputTxt += '4'
    input.value = inputTxt;
})
cinco.addEventListener('click', function(){
    inputTxt += '5'
    input.value = inputTxt;
})
seis.addEventListener('click', function(){
    inputTxt += '6'
    input.value = inputTxt;
})
siete.addEventListener('click', function(){
    inputTxt += '7'
    input.value = inputTxt;
})
ocho.addEventListener('click', function(){
    inputTxt += '8'
    input.value = inputTxt;
})
nueve.addEventListener('click', function(){
    inputTxt += '9'
    input.value = inputTxt;
})
cero.addEventListener('click', function(){
    inputTxt += '0'
    input.value = inputTxt;
})
punto.addEventListener('click', function(){
    inputTxt += '.'
    input.value = inputTxt;
})
///realizar operaciones en el input
entre.addEventListener('click', function(){
    if(!inputTxt.includes('/')){
        inputTxt += '/'
        input.value = inputTxt;  
    } 
    
})
por.addEventListener('click', function(){
    if(!inputTxt.includes('x')){
        inputTxt += 'x'
        input.value = inputTxt;  
    } 
   
})

//input suma
mas.addEventListener('click', function(){
    if(!inputTxt.includes('+')){
        inputTxt += '+'
        input.value = inputTxt;  
    } 
})
//input menos
menos.addEventListener('click', function(){
    if(!inputTxt.includes('-')){
        inputTxt += '-'
        input.value = inputTxt;  
    } 
})

//boton igual
igual.addEventListener('click', function(){
    if(inputTxt.includes('+')){
        let arregloSuma = inputTxt.split('+');
        let resultado = parseFloat(parseFloat(arregloSuma[0]) + parseFloat(arregloSuma[1]))
        inputTxt = String(resultado);
        input.value= inputTxt;
            
    }else if(inputTxt.includes('-')){
        let arregloSuma = inputTxt.split('-');
        let resultado = parseFloat(parseFloat(arregloSuma[0]) - parseFloat(arregloSuma[1]))
        inputTxt = String(resultado);
        input.value= inputTxt;
    }else if(inputTxt.includes('x')){
        let arregloSuma = inputTxt.split('x');
        let resultado = parseFloat(parseFloat(arregloSuma[0]) * parseFloat(arregloSuma[1]))
        inputTxt = String(resultado);
        input.value= inputTxt;
    }else if(inputTxt.includes('/')){
        let arregloSuma = inputTxt.split('/');
        let resultado = parseFloat(parseFloat(arregloSuma[0]) / parseFloat(arregloSuma[1]))
        inputTxt = String(resultado);
        input.value= inputTxt;
        }
    inputTxt='';
})

