const Leer = require('prompt-sync')()
const Escribir = Escribir
class Selectivos{
//ejercicio1:calcular la cantidad de segundos que estan incluidos en el numero de horas,minutos y segundos   
//ingresados por el usuario   
    secuenciales1(){
        //declarar variables
	let horas,minutos,seg 
	let horas_Seg,minutos_seg, total_seg 
	//ingresar variables
	horas=Leer ("digite las horas: ")
    minutos=Leer ("digite los minitos: ")
	seg=Leer ("digite la cantidad de segundos: ")
	//inicializar varibales
	horas_Seg = horas * 3600
	minutos_seg = minutos * 60
	total_seg = horas_Seg + minutos_seg + seg
	//presentar
	Escribir.log ("Los segundos equivalentes son: ",total_seg)
    }
    //ejercicio2:hacer un programa para ingresar el radio de un circulo y se eporte su area
    //y la longitud de la circunferencia
    //area=pi*radio^2
    //longitud=2*pi*radio
    secuenciales2(){
        //declara variables
	let radio,area,lon 
	//ingresar variables
	radio= Leer ("digite el valor del radio: ")
	//calcular
	area = Math.PI * radio**2
	lon = 2 * Math.PI * radio
	//presentar
	Escribir.log ("el area es:",area)
	Escribir.log ("la longitud es:",lon)
    }
    //ejercicio3:un maestro desea saber que porcentaje de hombres y que porcentaje de mujeres
    //y hombres hay en un grupo de estudiantes
    secuenciales3(){
     //declarar variables
	let num_hombres, num_mujeres 
	let total_estudiantes 
	let porcentajeH, porcentajeM 
	//ingresar variables
	num_hombres=Leer ("digite el numero de hombres:")
	num_mujeres=Leer ("digite el numero de mujeres:")
	//calcular
	total_estudiantes = num_hombres + num_mujeres
	porcentajeH = num_hombres / total_estudiantes * 100
	porcentajeM = num_mujeres / total_estudiantes * 100
	//presentar 
	Escribir.log ("el porcentaje de hombres es:", porcentajeH,"%")
	Escribir.log ("el porcentaje de mujeres es:",porcentajeM,"%")
    }
     //ejercicio4:un profesor prepara tres cuestionarios para una evaluacion final
     //A,B,C. se sabe que se tarda 5 minutos en revisar el cuestionario A,
     //8 en revisar el custionario B y 6 en el C. la cantidad de examenes de cada
     //tipo se entran por teclado.¿cuantas horas se tardara en
     //revisar todas las evaluaciones?
     secuenciales4(){
        //declarar varibales
	let cantidadA, cantidadB,cantidadC
	let tiempoA,tiempoB,tiempoC 
	let tiempo_total 
	let horas,minutos 
	//ingresar variables
	cantidadA=Leer ("digite la cantidad de cuestionarios A:")
	cantidadB=Leer ("digite la cantidad de cuestionarios B:")
    cantidadC=Leer ("digite la cantidad de cuestionarios C:")
	//calcular los minutos que se taradra por cada custionario
	tiempoA = cantidadA * 5
	tiempoB = cantidadB * 8
	tiempoC = cantidadC * 6
	//calculamos el tiempo total que le toma revisar los cuestionarios
	tiempo_total = tiempoA + tiempoB + tiempoC
	//calculamos las horas y minutos 
	horas = Math.trunc ((tiempo_total / 60))
	minutos = tiempo_total % 60;
	//presentar
	Escribir.log (" se tardara ",horas," horas y ",minutos," minutos ")
	
	
    }
    //ejercicio5:una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente
    //desea saber cuanto debera pagar finalmente por su compra
    secuenciales5(){
        //declarar varibales
	let precio,descuento,precio_final
	//ingresar variables
	precio=Leer ("Digite el precio a pagar: ")
	//calcular
	descuento = precio*0.15
	precio_final = precio - descuento
	//presentar
	Escribir.log ("el precio a pagar es de ",precio_final)
    }
    //ejercicio6:un alumno desea saber cual sera su calificacion final en la materia de algoritmos.
    //dicha calificacion se compone de los siguientes porcentajes:
    //55 mod del promedio se sus tres calificaciones parciales
    //30 mod de la calificacion del examen final
    //15 mod de la calificacion de un trabajo final
    secuenciales6(){
        	//declarar variables
	let parcial1,parcial2,parcial3,promedioP,notasParcial 
	let examen_final,notaExamen 
	let notaTrabajo,trabajoFinal
	let notaFinal 
	//ingresar variables 
	parcial1,parcial2,parcial3= Leer ("digite las 3 notas de los parciales: ")
	//calcular promedio 
	promedioP = parcial1+parcial2+parcial3/3
	notasParcial = promedioP*0.55
	examen_final=Leer ("digita la nota del examen final: ")
	notaExamen = examen_final*0.3
	notaTrabajo=Leer ("digite la nota del trabajo final: ")
	//calcular nota del trabajo final 
	trabajoFinal = notaTrabajo*0.15
	//calcular la nota final
	notaFinal = notasParcial + notaExamen + trabajoFinal
	//presentar 
	Escribir.log ("la calificacion final es:",notaFinal)
    }
   
}
let selectivos = new Selectivos()
selectivos.secuenciales1()
//selectivos.secuenciales2()
//selectivos.secuenciales3()
//selectivos.secuenciales4()
//selectivos.secuenciales5()
//selectivos.secuenciales6()
