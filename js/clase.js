// VARIABLES
const nameuser = "Luis Fernando";
var x = "valor";
let y = "valor";

let a = 20;
let b = 2.7;
let string = "hola";
let number = "023456789";
let boolean_uno = false;
let bolean_two = true;
let array = [1,2,3,5,4];
let array_string = ["lunes","martes","miercoles","jueves","viernes"];

// OPERADORES ARITMETICOS: + - / * % 
let suma = 1+5+a;
let resta = 1-5-a;
let multi = 1*5*a;
let divi = 1/5/a;
let module = 10%2;
let elev = 5^2;
console.log(" - " + suma + " - " + resta + " - " + multi + " - " + divi + " - " + module + " - " + elev );

// OPERADORES DE COMPARACION = / == / === / <> / >= / <= / < / >

// OPERADORES LOGICOS AND && / OR || /

if(10>2){
    for(let i=0; i>array_string.length;i++){
        console.log(array_string[i]);
    }
}

let j = 5;
let k = 10;
while(k>=j){
    console.log("entra");
    j++
    break
}