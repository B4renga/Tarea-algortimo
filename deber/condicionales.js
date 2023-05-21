const Leer = require('prompt-sync')()
const Escribir = console
class Selectivos{
    //ejercicio1:Ingrese un numero entero y reporta si es par o impar
    condicionales1(){
        //declarar variables
	let num 
    //ingresar varibale	
        num=Leer("digite un numero: ")
    //definir proceso	
    if (num %2==0  ){
        Escribir.log("el numero",num,"es par")
    }else{
        Escribir.log("el numero",num,"es impar")
    }
    }    
    //ejercicio2: determinar si un alumno aprieba o reprueba un curso, sabiendo que aprobara si su promedio
    // de tres calificaciones es mayor o igual a 70;reprueba caso contraio.
       condicionales2(){
        //declarar variables	
	let nota1,nota2,nota3 
	let promedio 
    //ingresar varibales	
	nota1,nota2,nota3=Leer("digite sus tres calificaciones: ")
    //calcular	
	promedio = (nota1+nota2+nota3)/3
    if(promedio>=70){
        //presentar
        Escribir.log("el alumno esta aprobado con: ",promedio)
    }else{
        Escribir.log("El alumno no esta aprobado con: ",promedio)
    }
	
       } 
    //ejercicio3:en un almacen se hace un 20 mod de descuento a los clientes uya compra supere
    //los $100.¿cual sera la cantidad que pagara una persona por su compra?
    condicionales3(){
        //declarar variables
	let compra 
	let descuento,precio_final 
	//ingresar variables
	compra=Leer ("digite la cantidad a pagar: ")
	//calcular
    if(compra>=100){
        descuento=compra*0.2
    }else{
        descuento=0
    }
    precio_final=compra-descuento
    Escribir.log("el precio a pagar es: ",precio_final)
    }
   //ejercicio4: leer 2 numeros;si son iguales que los multiplique,si el primero es
   //mayor que el segundo que los reste y si no que los sume.
   condicionales4(){
    //declarar variables
	let num1,num2,resultado 
	//ingresar variables
	num1=Leer (" digite un numuero: ")
    num2=Leer  ("digite un numero: ")
	//calcular
    if(num1=num2){
        resultado=num1*num2
    }else{
        if(num1>num2){
            resultado=num1-num2
        }else{
            resultado=num1+num2
        }
    }
    //presentar
    Escribir.log("el resultado es: ",resultado)
   }
   //ejercicio5:eer tres numeros diferentes e imprimir el numero mayor de los tres 
   condicionales5(){
    //declarar variables
	let num1,num2,num3
	//ingresar variable
	num1=Leer("digite el primer numero : ")
    num2=Leer("digite el segundo numero: ")
    num3=Leer("digite el tercer numero: ")
	//calcular
    if (num1 > num2 && num1 > num3) {
       Escribir.log("El mayor es: ", num1)
      } else {
        if (num2 > num1 && num2 > num3) {
          Escribir.log("El mayor es: ", num2)
        } else {
          Escribir.log("El mayor es: ", num3)
        }
      }
   }
   //ejercicio6:una fruteria ofrece manzanas con descuento segun
   //0-2=0%;2.01-5=10%;5.01=15%;10.01e en adelante=20%;
   //determinar cunato pagara una persona que compre manzanas en la fruteria
   condicionales6(){
    //delcarar varibales
	let precioK,kilos,precioI 
	let descuento,precio_final 
	//ingresar variables
	precioK=Leer ("cuanto cuesta el kilo de manzanas: ")
	kilos=Leer ("cuantos kilos de manzana a comprado: ")
	//calcular
	precioI = precioK * kilos
    
   if (kilos >= 0 && kilos <= 2) {
    descuento = 0;
  } else {
    if (kilos >= 2.01 && kilos <= 5) {
      descuento = precioI * 0.1;
    } else {
      if (kilos >= 5.01 && kilos <= 10) {
        descuento = precioI * 0.15;
      } else {
        descuento = precioI * 0.2;
      }
    }
  }
  //calculamos el descuento 
	precio_final = precioI - descuento;
	//presentar
	Escribir.log ("el precio a pagar es: ",precio_final)

   }
   //ejercicio7:elaborar un programa que me muestre los dias de las semanas cuando ingrese los siete primeros numeros
   condicionaes7(){
        let dia=0
        dia=Leer("ingrese numero de dia:")
        dia=parseInt(dia)
        if(dia==1){
            Escribir.log("Lunes")
        }else if (dia==2){
            Escribir.log("Martes")
        }else if (dia==3){
            Escribir.log("Miercoles")
        }else if (dia==4){
            Escribir.log("Jueves")
        }else if (dia==5){
            Escribir.log("viernes")
        }else if (dia==6){
            Escribir.log("sabado")
        }else if (dia==7){
            Escribir.log("Domingo")
        }else if (dia>7){
            Escribir.log("No existe dia de la semana para ese numero")
        }
    }
    //ejercicio8:elaborar un programa que me muestre el significado de aniversario de cada decada hasta los 60
   condicionales8(){
    //declarar variable
    //declarar variable
	let decada 
	//ingresar varibale
	decada = Leer ('digite una decada:')
	//proceso
    switch (decada) {
        case 10:
          Escribir.log("Bodas de ojalata")
          break
        case 20:
          Escribir.log("Bodas de porcelana")
          break
        case 30:
          Escribir.log("Bodas de perlas")
          break
        case 40:
          Escribir.log("Bodas de rubí")
          break
        case 50:
          Escribir.log("Bodas de oro")
          break
        case 60:
          Escribir.log("Bodas de diamante")
          break
        default:
          Escribir.log("Decada no existente")
          break
      }
   }
   //ejercicio9:hacer un programa que tenga un menu con las siguientes opciones:
   //1.-elevar un numero a potencia x
   //2.-sacar raiz cuadrada de un numero
   //3.-salir
   condicionales9(){
    //declarar variables
	let opcion 
	//ingresar variables
	Escribir.log ("menu")
	Escribir.log ("1. elevar un numero a una potencia x")
	Escribir.log ("2. sacar la raiz cuadrada de un numero")
	Escribir.log ("3.salir")
	opcion=Leer ("digite una opcion")
	//proceso
    switch (opcion) {
        case 1:
          var num, pot, resultado
          Escribir.log("Digite un número:")
          num = parseFloat(Leer())
          Escribir.log("Digite la potencia:")
          pot = parseFloat(Leer())
          resultado = Math.pow(num, pot)
          Escribir.log("El resultado es:", resultado)
          break
        case 2:
          var num, resultado
          Escribir.log("Digite un número:")
          num = parseFloat(Leer())
          resultado = Math.sqrt(num)
          Escribir.log("La raíz es:", resultado)
          break
        default:
          Escribir.log("Esa opción no está disponible en el menú")
          break
      }

   }
	


}
        
let selectivos = new Selectivos()
selectivos.condicionales1()
//selectivos.condicionales2() 
//selectivos.condicionales3()  
//selectivos.condicionales4()
//selectivos.condicionales5()
//selectivos.condicionales6()
//selectivos.condicionaes7()
//selectivos.condicionales8()
//selectivos.condicionales9()
       