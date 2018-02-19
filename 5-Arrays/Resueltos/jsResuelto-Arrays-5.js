/*
5) Crear un programa que contenga una función capaz de recibir un array de números
como argumento, y devuelva un array invertido. Por ejemplo, si el array de entrada es
[3,7,2] el array de salida es [2,7,3].
*/
function Mostar()
{
	function arrayInvertido(array) 
	{
		return array.reverse();
	}

	var ar;

	ar = [];

	for(var i = 0; i < 3; i++) 
	{	
		ar[i] = prompt("Ingrese un numero: ", "0");

		ar[i] = parseInt(ar[i]);
	}

	arrayInvertido(ar);

	alert(ar);

}
