const Leer = require('prompt-sync')()
const Escribir = console
class Selectivos{
    ciclos1(){
     //ejercicio con el ciclo Hacer
     //definir variables
    let i 
    //ciclo hacer
    for ( i = 1; i <= 10; i += 1) {
        Escribir.log(i)
      }
 }
    ciclos2(){
    //definir e inicializar variables
	let i 
	i <- 1;
    //proceso
    while (i <= 10) {
        i = i + 1
        Escribir.log(i)
      }
 } 
    ciclos3(){
    //ejercicio de ciclo repetir hasta que 
   //declarar e inicializar variables	
	let i 
	i = 1
  //proceso del ciclo repetir-hasta que 
  do {
    Escribir.log(i)
    i = i + 1
  } while (i <= 10)


 }
    //ejercicio1:calcular la suma de los "n" primeros numeros
    ciclos4(){
    //declarar e inicializar variables	
	let N,suma, i 
    //ingresar variable	
    N=Leer("Digite la cantidad de numeros a sumarse: ")
    //proceso ciclo para 	
    suma = 0
    for ( i = 1; i <= N ; i += 1) {
        suma += i;
      }
    //presentar
    Escribir.log("la suma es: ",suma)  
 }
   //ejercicio2:se desea calcular independientemente la suma de los numeros pares e impares comprendidos entre 1 y 50 
   ciclos5(){
    //declarar e inicializar variables	
	let suma_pares,suma_impares,i 
	suma_pares = 0
	suma_impares = 0
   //proceso del ciclo hasta-hacer	
   for ( i = 2; i <= 49; i++) {
    if (i % 2 === 0) {
      suma_pares += i;
    } else {
      suma_impares += i;
    }
  }
 
 }
    //ejercicio3:leer 10 numeros e imprimir cuantos son positivos,cuantos son negativos y cuantos son neutros
    ciclos6(){
    //declarar e inicializar varibales	
	let num,i 
	let conteo_positivos,conteo_negativos,conteo_neutros
	conteo_positivos = 0
	conteo_negativos = 0
	conteo_neutros = 0
   //proceso ciclo hasta hacer	
   for ( i = 1; i <= 10; i++) {
    console.log(i + ". Digite un número: ");
     num = parseFloat(Leer());
  
    if (num === 0) {
      conteo_neutros++;
    } else if (num > 0) {
      conteo_positivos++;
    } else {
      conteo_negativos++;
    }
  }
    //presentar
	Escribir.log ("La cantidad de positivos es: ",conteo_positivos)
	Escribir.log ("la cantidad de negativos es: ",conteo_negativos)
	Escribir.log ("la cantidad de neutros es: ",conteo_neutros)

 }
   //ejercicio4:suponga que se tiene un conjunto de calificaciones de un grupo de 10 alumnos.Realizar un algoritmo
   //para calcular la calificacion promedio y la calificacion mas baja de todo el grupo
   ciclos7(){
    //declarar variables	
	let calificacion_promedio,calificacion_baja
	let calificacion,suma 
	let i 
    //inicializar variables	
	suma=0
	calificacion_baja = 99999
    //ciclo para hacer
    for ( i = 1; i <= 10; i++) {
        Escribir.log(i + ". Digite una calificación: ")
         calificacion = parseFloat(Leer())
      
        suma += calificacion
      
        if (calificacion < calificacion_baja) {
          calificacion_baja = calificacion
        }
      }
      //calculamos el promedio 
	calificacion_promedio = suma/10
	//presentar 
	Escribir.log ("La calificacion promedio es: ",calificacion_promedio)
	Escribir.log ("la calificacion mas baja es: ",calificacion_baja)
	
 }
    //ejercicio5:calcular el factorial de un numero mayor o igual a 0
    ciclos8(){
     //declara variables
	let num 
	let i,factorial 
    //ciclo repetir hasta que
    do {
        console.log("Digite un número: ");
        num = parseInt(Leer());
      } while (num < 0);
      
       i = 1
       factorial = 1
      
      while (i <= num) {
        factorial *= i;
        i++;
      }  
    }
    //ejercicio6:calcular la siguiente sumatoria de los "N" elementos:
    ciclos9(){
      //declarar variables
	let n_elementos 
	let i, suma 
	//ingresar variables
	n_elementos=Leer ("digite la cantidad de elementos a sumarse: ")
	//ingresar varibales
	i = 1 
	suma = 0
    while (i <= n_elementos) {
        suma += Math.pow(i, 2);
        i++;
      }
      //presentar
	Escribir.log ("la suma es: ",suma)
    }
    //ejercicio7:ingresar "n" enteros,visualizar la suma de los numeros pares de la lista,unatos numeros pares existen
    //y cual es el promedio de los numeros impares
    ciclos10(){
        //declarar varibales
	let n_elementos, i , num 
	let suma_pares,conteo_pares 
	let suma_impares,conteo_impares 
	let promedio 
	//ingresar varibales
	n_elementos=Leer("digite la cantidad de elementos a ingresar: ")
	//inicializar variables
	i = 1
	suma_pares = 0
	conteo_pares= 0
	suma_impares=0
	conteo_impares=0
	//calcular
    while (i <= n_elementos) {
        console.log(i + ". Digite un número: ");
         num = parseInt(Leer())
      
        if (num % 2 === 0) {
          // El número es par
          suma_pares += num
          conteo_pares++
        } else {
          // El número es impar
          suma_impares += num
          conteo_impares++
        }
        i++
      }
      if (conteo_pares === 0) {
        Escribir.log("No se han digitado números pares.")
      } else {
        Escribir.log("La suma de los números pares es:", suma_pares)
        Escribir.log("El conteo de los números pares es:", conteo_pares)
      }
      if (conteo_impares === 0) {
        Escribir.log("No se han digitado números impares.")
      } else {
         promedio = suma_impares / conteo_impares
        console.log("El promedio de los números impares es:", promedio)
      }
    }
    //ejercicio8:dada las horas trabajadas de 5 personas y la tarifa de pago calcular el salario, y la sumatoria de todos los salarios.
     ciclos11(){
        //declarar variables
	let num_trabajadores,i,tarifa_pago,suma_total,horas,salario 
	//ingresar variables 
	num_trabajadores=Leer  ("ingrese la cantidad de trabajadores: ")
	//inicializar variables
	i=1
	suma_total=0
	tarifa_pago=Leer("ingrese la tarifa: ")
	//proceso
    while (i <= num_trabajadores) {
        console.log("Ingrese las horas trabajadas del trabajador " + i + ":")
         horas = parseInt(Leer())
         salario = horas * tarifa_pago
        Escribir.log("El salario del trabajador " + i + " es: " + salario)
        suma_total += salario
        i++
      }
     }
}
let selectivos = new Selectivos()
selectivos.ciclos1()
// selectivos.ciclos2()
// selectivos.ciclos3()
// selectivos.ciclos4()
// selectivos.ciclos5()
//selectivos.ciclos6()
//selectivos.ciclos7()
//selectivos.ciclos8()
//selectivos.ciclos9()
//selectivos.ciclos10()
//selectivos.ciclos11()



