/*
4) Crear un programa que imprima los números de 0 a 100 indicando en cada uno de ellos
si el número es divisible por 3 o no.
*/
function Mostar()
{
	var numero1;
	var numero2;
	var resto;

	numero2 = 3;

	for(numero1 = 0 ; numero1 <= 100 ; numero1++)
	{
		resto = numero1 % numero2;
		console.log("numero:" + numero1);

		if (resto == 0)	
		{
			console.log("Numero divisible por tres");
		} 
		else 
		{
			console.log("Numero no divisible por tres");
		}//if (resto == 0)	
	}//for(numero1 = 0 ; numero1 <= 100 ; numero1++)
	alert("El reultado se muestra por consola");
}
