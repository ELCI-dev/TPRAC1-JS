/* 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
*/
//alert('Te doy la bienvenida a mi sitio web');
/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).*/
//document.write("Hello world");
/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
*/
/* let a = 3; let b = 5; let resultado = a + b; document.write("El resultado de " + a + " + " + b + " es " + resultado); */
/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder

*/
/*  let nombre= prompt("Escriba su nombre, por favor.")
document.write("Bienvenido/a " + nombre); */
/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/
/* let num, primerNumero = prompt("Escriba un número por favor"); let segundoNumero = prompt("Escriba otro número, por favor.");
let resultado2 = ("sumar", primerNumero + segundoNumero);
document.write("El resultado de sumar " +primerNumero+ " y " +segundoNumero+ " es "+ resultado2 );  */
/* 6.-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande*/
/* let num1, primerNumero1 = prompt("Escriba un número por favor"); let segundoNumero1 = prompt("Escriba otro número, por favor.");
if (primerNumero1 > segundoNumero1)
{document.write(primerNumero +" es mayor que " +segundoNumero)}
else {document.write(segundoNumero + " es mayor que "+ primerNumero)}
 */
/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande
*/
/* let numA = + (prompt("Ingrese el primer número"));
let numB = + (prompt("Ingrese el primer número"));
let numC = + (prompt("Ingrese el primer número"));
if((numA>numB)&& (numA>numB)){
    console.log(`El número mayor es ${num1}`);
} else if((numB>numC)&&(numB>numA)){
    console.log(`El número mayor es ${num2}`);
}else if ((numC>numA)&&(numC>numB)){
    console.log(`El número mayor es ${numC}`);
}else {
    console.log("Todos los nùmeros son iguales");
} */
/* 8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
 */
/* let numeroPedido = +(prompt("Ingrese el número para evaluar si es divisible por 2"));

if(numeroPedido % 2 === 0){
    document.write(`El número ${numeroPedido} es divisible por 2`);
} else {
    document.write(`El número ${numeroPedido} no es divisible por 2`);
}  */
/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo
Output: oauo */
//const textoIngresado = prompt("Ingrese el texto").trim();
 //.trim para quitar espacios en blanco
 //puedo poner aca textoIngresado = textoIngresado.toLowerCas() para pasar a minuscula la frase
 //charAt permite obtener el acracter en una posicion especifica
/* 
let vocales = "";

for (let i = 0; i< textoIngresado.length; i++){
    const caracter = textoIngresado.charAt(i).toLocaleLowerCase();

    if("aeiou".includes(caracter)){
        vocales += caracter;
    }
}
document.write(`Las vocales del texto son: ${vocales}`); */
/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 
input: 20
Output: El 20 es divisible por 2. */
/* let numej10 = parseInt(prompt("Ingrese un número"));
let divisor2 = 2;
let divisor3 = 3;
let divisor5 = 5;
let divisor7 = 7;

if(numej10 % divisor2 ===0 || numej10 % divisor3 ===0 ||numej10 % divisor5 ===0 ||numej10 % divisor7 ===0  ){
    document.write(`El número ${numej10} es divisible por 2, 3, 5, ó 7`)
} else document.write(`El número ${numej10} no es divisible por 2, 3, 5 ni por 7`); */
//Consulta, como rescato el numero por el cual sí se pudo dividir.
/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 
input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7. */

let numEj11 = parseInt(prompt("Ingrese un número"));

let divisores= [];
const divisoresPosibles = [2, 3, 5, 7];

if (numEj11 % 2 ===0){
    divisores.push (2);
}else if (numEj11 % 3 ===0){
    divisores.push (3);
} else if (numEj11 % 5 ===0){
    divisores.push (5);
} else if (numEj11 % 7 ===0){
    divisores.push (7);
}
    if (divisores.length > 0){
document.write(`El número ${numEj11} es divisible por ${divisores.join(', ')}.`);}
    else{ 
    document.write(`El numero ${numEj11} no es divisible por 2, 3, 5 ó 7`)}


