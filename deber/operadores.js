const Leer = require('prompt-sync')()
const Escribir = Escribir
class Selectivos{
    diagramaDeFlujo(){
        //declarar e inicializar variables	
	let a,b,c,resultado
	a = 10;b = 20;c = 0
//	ingresar variables
     c=parseInt( Leer ("Digite un numero: "))
//calcular	
	resultado = a + b + c
//presentar	
	Escribir.log ("el resultado es:",resultado)
   
    }
//ejercicio 2
     principal(){
 	//delarar varibales
     let num, resultado 
     //ingresar varibale
     num = parseInt( Leer ("Digite un numero: "))
     //proceso
     resultado = parseInt( Math.random(num))
     //presentar
     Escribir.log ("El resultado es: ", resultado)
}
//ejercio 3
    operadoresAritmeticos(){
        //declarar varibales
	let numero1,numero2,suma
	//ingresar variables
	numero1= parseFloat( Leer ("Digite un numero: "))
	numero2= parseFloat( Leer (" Digite otro numero: "))
	//calcular
	suma = numero1 + numero2
	//presentar
	Escribir.log ("el resultado es: ",suma)
    }
    //ejercicio4
    operadoresLogicos(){
	let a, b, c, resultado
	a =10;b=15;c=20
    resultado = (a<b) && (b<c)
	Escribir.log (resultado)
    }
    operadoresRelacionales(){
        //declarar varibales
	let a,b,c,resultado 
	//inicializar variables
	a =10;b=20;c=30
	//calcular
	resultado = a + b >= c
	//presentar 
	Escribir.log ("El resultado es: ",resultado)
    }
    //ejercicio5
    programa1(){
        	//delcarar e inicializar variables
	let a,b,resultado
	a = 10;b=0
	//ingresar variable
	b=parseFloat( Leer ("digite un numero:"))
	//calcular
	resultado = a + b
	//presentar
	Escribir.log ("el resultado es: ",resultado)

    }
}

let selectivos = new Selectivos()
selectivos.diagramaDeFlujo()
//selectivos.principal()
//selectivos.operadoresAritmeticos()
//selectivos.operadoresLogicos()
//selectivos.operadoresRelacionales()
// selectivos.programa1()