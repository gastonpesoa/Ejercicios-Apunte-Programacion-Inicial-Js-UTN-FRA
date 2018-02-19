/*
1) Crear un programa que tenga una función que calcule el perímetro de una
circunferencia llamada “calcularPerimetro” y reciba el radio como argumento. Probar la
función con todos los valores de radios enteros entre 1 y 10 e imprimir los resultados
por pantalla.
*/
function Mostar()
{
	function calculoPerimetro (r)
	{
		var calculo;
		var PI;
		
		PI = 3.14;
		calculo = 2 * PI * r;

		return calculo;
	}//function calculoPerimetro (r)

	var contador;
	var calculo;

	for(contador = 0 ; contador <= 10 ; contador ++)
	{
		calculo = calculoPerimetro(contador);
		console.log("Calculo con radio " + contador + ": " + calculo);
	}//for(contador = 0 ; contador <= 10 ; contador ++)

	alert("Los resultados se muestran por consola.");
}
