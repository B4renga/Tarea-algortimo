const Leer = require('prompt-sync')()
const Escribir = Escribir
class Selectivos{
    //ejercicio1:Escribir la sgte expresion en forma de expresion algoritmica
    principal(){
        //declarar e ingresar variables	
	let a,b,c,resultado 
	a= Leer("digite el valor de A: ")
	b= Leer ("Digite el valor de B: ")
	c= Leer ("Digite el valor de C: ")
//calcular	
	resultado = (-b + Math.sqrt(b * 2 - 4 * a * c)) / (2 * a)
//presentar	
	Escribir.log ("el resultado es: ",resultado)
    }
    //ejercicio2
    logica(){
        //declarar variables	
	let a,b,resultado
//ingresar variables	
	a=Leer ("Digite el valor de A: ")
	b=Leer ("Digite el valor de B:")
//calcular	
	resultado = 3+5*8<3 && (-6/3*4)+2<2 || (a>b)
	//presentar
	Escribir.log ("El resultado es: ",resultado)
    }
    //ejercicio3
    cambioVariables(){
        //declarar variables
	let a,b,aux
	//ingresar variables
	a= Leer ("Digite el valor de A:")
	b=Leer ("Digite el valor de B: ")
	//inicializar variables
	aux = a
	a = b
	b = aux
	//presentar 
    Escribir.log ("el nuevo valor de a es: ",a)
	Escribir.log ("el nuevo valor de b es: ",b)
	
    }
}
let selectivos = new Selectivos()
selectivos.principal()
//selectivos.logica()
// selectivos.cambioVariables()