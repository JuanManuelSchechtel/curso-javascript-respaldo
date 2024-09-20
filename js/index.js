// if = sentencia que nos dice si una condicion se cumple

/*if(condicion){
    //la instruccion o lo que queremos que se devuelva

}
*/

//asignamos
let c, d, e, f;

//incializamos
c = 18;

/*
Operadores de comparacion o relacionales

= asignacion

== operador de igualdad (solo vamos a comparar valores y no el tipo de dato)

=== operador de igualdad pero estricto (va a compara valores y va a comparar el tipo de dato)

!= distinto

!== distinto estricto
*/

if(a =="18"){
    console.log("es un 18");
}

if(a === "18"){ // si le saco la comillas es verdadero y me da la primera condicion
    console.log("me devolves 18?");
}else{
    console.log("no va a funcionar porque no es igual el tipo de dato");
}

// cuantos años tengo

// cuando lleva el numero un punto flotante se usa parsefloat

let edad = parseInt( prompt("por favor ingresa tu edad para ingresar al boliche"))

/*
  mayor que o menor que 

  mayor  >(el numero es mayor al que se esta comparando)(no incluye)
   mayor e igual  >=(el numero es mayor e igual al que se esta comparando)(si lo incluye)
  menor < (el numero es menor al que se esta comparando)(no incluye)
  menor e igual <= (el numero es menor e igual al que se esta comparando)(si incluye)
 */

if(edad >= 18){
    console.log("el pibe puede entrar")
}else{
    console.log("el pibe no puede entrar");
}

// else if se usa cuando nosotros queremos comparar o hacer multiples condiciones

//notas de evaluacion

// 90 el examen es optimo

// 75 el examen es correcto

// 60 el examen es bajo

// -60 el examen esta desaprobado

let nota = parseInt(prompt("ingresa nota del alumno:"))

if(nota >= 90){
    console.log("el examen es optimo con " + nota)
}else if(nota >= 75){
    console.log("el examen es correcto con" + nota)
}else if(nota >= 60){
    console.log("el examen es bajo con" + nota)
}else{
    console.log("el examen esta desaprobado con" + nota)
}

/*
Operador Logico and &&
  Este operador va a devolver true, siempre y cuando las condiciones que se comparen
  sean verdaderas

  a     b     a && b
  true  true  true (se va a ejecutar)
  true  false false (no se va a ejecutar)
  false true  false (no se va a ejecutar)
  false false false (no se va a ejecutar)
*/

let edad2 = 25;

let tienelicencia = true;

// para que una persona pueda manejar debe ser mayor de edad y tener registro

if(edad >= 18 && tienelicencia === true){
    console.log("la persona puede manejar")
}else{
    console.log("la persona no puede manejar")
}

// operador OR se expresa || se va a ejecutar el bloque de codigo
// si al menos una condicion es verdadera

/*
  a     b     a || b
  true  true  true (se va a ejecutar)
  true  false true (se va a ejecutar)
  false true  true (se va a ejecutar)
  false false false (no se va a ejecutar)
*/

let nombre = "Juan";

let apellido = "Perez";

let edad3 = 25;

if(nombre === "Juan" || apellido === "Perez" || edad >= 18){
    console.log("La persona cumple con los criterios para llenar la encuesta")
}else{
    console.log("La persona no cumple con los criterios para llenar la encuesta")
}

// operador not
/*
 operador not !
 true => !true => false
 false => !false => true
*/

let camponombre = "";

if(!camponombre){
    console.log("el campo nombre esta vacio por favor completa el campo")
}else{
    console.log("el campo nombre esta completado")
}

// CLASE 3

/*
 ciclo por conteo

 -sabemos cuantas veces necesitamos que itere el codigo
 -usa algo llamado contador
 - el ejemplo clasico es el ciclo for

 ciclo por condicion

 -no sabemos cuantas veces se va a repetir, pero sabemos que si se cumple
 una condicion X frena.
-los ejemplos clasicos de los ciclos condicionales son el while y el do while.
 */

/*
ciclo por conteo

operadores importantes => incremento / decremento

cuando queremos incrementar algo => ++ => X + 1
cuando queremos decrementar algo => -- => X - 1

i ++ => post incremento el valor de la variable se va a incrementar dsp de que se utilize
la expresion actual
pre-incremento => ++i
*/

let x = 5;

let y = x++;

console.log(y);
console.log(x);

//preincremento

let a = 6;

let b = ++a;

console.log(b);

//ciclo for = nosotros le vamos a decir cuantas veces queremos que se ejecute
// ciclo por conteo

/*
posee 3 partes =>
    inicializacion (desde): nos va a dar la variable de control inicial. se expresa con una
    variable

    condicion (hasta): se verifica antes de cada iteracion, si la condicion es verdadera
    el ciclo continua, si es falsa termina

    actualizacion: es la parte donde se genera el incremento o decremento de la variable

    for(inicializacion ; condicion ; actualizacion)
*/

// vamos a imprimir 10 veces un mensaje

for(let i = 1; i <= 10; i++){
    console.log("se imprimio el mensaje", i);
}

// tabla de multiplicar

let tabladelcinco = 5;

for(let i = 1; i <= 10; i++){
    let resultado = tabladelcinco * i;

    console.log( tabladelcinco + " x " + i + " = " + resultado);
}

for(let i = 1; i <= 5; i++){

    // sentencia que se llama continue, se utiliza para saltar una iteracion 
    // y continua con la siguiente

    //sentencia break si se utiliza automaticamente se fren el bucle y se sale
    if( i === 3){
        continue;
    }
    console.log(i)

    //sentencia break si se utiliza automaticamente se fren el bucle y se sale
    if( i === 3){
        break;
    }
    console.log(i)
}

/*
while => es una estructura de control, que va a repetir un conjunto de intrucciones
mientras se cumpla una condicion especifica
while(condicion){
bloque de codigo a ejecutar}
 */
let contador = 1;
while( contador <=10){
    console.log("numero:" + contador);
    contador++
}

/*
do... while => se utiliza para ejecutar un bloque de codigo, al menos una vez y luego 
repetirlo mientras se cumpla una condicion especifica.

do{
//bloque de codigo a ejecutar
}while(condicion)
*/

let clave;
let intentos = 0;
const maxintentos = 3
do{
    clave = prompt('ingrese una clave');
    intentos ++;
    if(clave === 'clave123'){
        console.log("contraseña correcta")
        break;
    }
    if(intentos >= maxintentos){
        console.log("la cantidad de intentos se alcanzo")
        break;
    }
}while(true);

//while(clave !== 'clave123');
//alert("contraseña correcta")