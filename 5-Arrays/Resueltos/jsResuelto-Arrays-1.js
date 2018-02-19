/*
1) Crear un programa en donde el usuario ingresa números y se guardan en un array. Al
ingresar “-1” se imprimirán los números ingresado junto con sus posiciones dentro del
array.
*/
function Mostar()
{
	var numero;
	numero = [];

	for(var i = 0; i !== -1; i++)
	{
		numero[i] = prompt("Ingrese un numero:","0");
		numero[i] = parseInt(numero[i]);

		if(numero[i] === -1)
		{
			for(var x = 0; x < numero.length; x++)
			{
				console.log("Numero " + x + ": " + numero[x]);
			}
			break;
		}//if(numero[i] === -1)
	}//for(var i = 0; i !== -1; i++)

	alert("Los resultados se muestran por consola.")
}
