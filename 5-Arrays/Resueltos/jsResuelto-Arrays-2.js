/*
2) Crear un programa en donde el usuario ingresa números hasta que ingresa “-1”, en
dicho caso el programa termina e imprime el promedio de los números ingresados.
*/
function Mostar()
{
	function prom (a, b)
	{	
		var calculo;
		
		calculo = (a + 1) / (b - 1);

		return calculo;
	}

	var numeros;
	var suma;

	numeros = [];
	suma = 0;

	for(var i = 0; i !== -1; i++)
	{
		numeros[i] = prompt("Ingrese un valor:","0");

		numeros[i] = parseInt(numeros[i]);

		suma = suma + numeros[i];
		
		if(numeros[i] === -1)
		{
			var resultado;

			resultado = prom(suma, numeros.length);

			alert("El promedio es: " + resultado);
			
			break;
		}//if(numeros[i] === -1)
	}//for(var i = 0; i !== -1; i++)
}
