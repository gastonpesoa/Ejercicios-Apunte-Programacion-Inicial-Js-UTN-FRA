/*
3) Crear un programa en donde el usuario ingresa 5 números. Al finalizar, el programa
imprime los números ordenados de mayor a menor.
*/
function Mostar()
{
	var numero;

	numero = [];

	for(var i = 0; i < 5; i++)
	{
		numero[i] = prompt("Ingrese un numero: ","0");

		numero[i] = parseInt(numero[i]);
	}

	alert("Los numeros ingresados son: "+ numero);

	function mayorMenor() 
	{
		var resultado;

		resultado = numero.sort(function(a, b){return b - a});

		console.log("Los numeros ordenados de mayor a menor son: " + resultado);
	}

	mayorMenor();

	alert("Los numeros ordenados se muestran por consola");
}

