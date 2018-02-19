/*
2) Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a
ambas. Comparar si “nota1” es mayor a “nota2” imprimir el mensaje “Nota1 es mayor”
o “Nota2 es mayor” según el resultado de la comparación.
*/
function Mostar()
{
	var nota1;
	var nota2;

	nota1 = prompt("Ingrese el valor de nota1");
	nota2 = prompt("Ingrese el valor de nota2");

	if(nota1 > nota2) 
	{
		alert("Nota1 es mayor");	
	} 
	else 
	{
		alert("Nota2 es mayor");
	}
}
