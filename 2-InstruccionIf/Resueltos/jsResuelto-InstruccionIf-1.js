/*
1) Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a
ambas. Comparar si “nota1” es mayor a “nota2” e imprimir el resultado de la
comparación.
*/
function Mostar() 
{
	var nota1;
	var nota2;
	var resultado;

	nota1 = prompt("Ingrese el valor de nota1");
	nota2 = prompt("Ingrese el valor de nota2");

	if(nota1 > nota2) 
	{
		resultado = nota1;
	} 
	else 
	{
		resultado = nota2;
	}//if(nota1 > nota2) 

	alert("La nota mayor es: " + resultado);
}
