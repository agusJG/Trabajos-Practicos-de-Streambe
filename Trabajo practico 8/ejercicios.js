//Variables
//let uno = 15;
//let dos = uno;
//console.log(dos)


//Mi primera pagina con Javascript
//alert("hola querido visitante")
//let nombre;
//nombre = prompt("Introduce tu nombre");
//let edad;
//edad = prompt("Introduce tu edad")
//alert("Bienvenido/a " + nombre + "! " + "usted tiene " + edad + " anios de edad");


//mensaje con variables
//let nombre = "lautaro";
//let edad = "18 anios";
//let cumple = "2 de septiembre";
//let ciudad = "la plata";
//let ocupacion = "estudiante";
//let pasatiempos = "leer Manwhas";
//let parrafo = ("hola mi nombre es " + nombre + ", tengo" + edad + " de edad y mi cumple es el "+ cumple + ", vivo en " + ciudad + " y mi ocupacion actual es " + " y mi pasatiempo favorito es" + pasatiempos + ".");
//console.log(parrafo);


//cantidad de caracteres
//let texto;
//texto = prompt("introduce alguna palabra");
//const Cantexto = texto.length;
//console.log("La palabra/s tiene "+ Cantexto + " caracteres");


//calculadora de edad
//let edad = prompt("ingrese su edad...");
//edad = parseInt(edad);
//let diastotales = edad *365;
//alert("has vivido "+ diastotales+ " dias");


//Suma de valores
//let num1 = prompt("ingrese un numero...");
//let num2 = prompt("ingrese un segundo numero...");
//num1 = parseInt(num1,10);
//num2 = parseInt(num2,10);
//if (!isNaN(num1)&&!isNaN(num2)) {
//    let suma = num1 + num2;
//    alert("El resultado de la suma de ambos numeros es "+ suma);
//} else {
//    alert("por favor,ingresa numeros validos.");
//}console.log(suma);


//Calculador de abastecimiento de por vida
//let edad = 18;
//let edadMax = 30;
//let snackFav = "Galletitas";
//let snack = 1;
//let precioSnack = 1200;
//let aniosres = edadMax-edad;
//let snackTotal = aniosres*365*snack;
//let gasto = snackTotal*precioSnack;
//console.log("para llegar a los "+edadMax+" anios, necesitaras "+snackTotal+ " de tus snacksfavoritos y en total gastarias "+gasto+" pesos.");
//alert("para llegar a los "+edadMax+" anios, necesitaras "+snackTotal+ " de tus snacksfavoritos y en total gastarias "+gasto+" pesos.");


//Ejercicio 2, Vacaciones
let Vacaciones = 15;
let presupuesto = 300000;
let comidas;
let comidasTotal = 30;

let gastoMax = presupuesto/comidasTotal;

console.log("Podes gastar "+gastoMax+" en cada comida para que te alcance la plata durante los"+Vacaciones+"dias de viaje");
alert("Podes gastar "+gastoMax+" en cada comida para que te alcance la plata durante los"+Vacaciones+"dias de viaje");