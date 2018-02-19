/*
2) Crear un programa que tenga una función que calcule el máximo entre 3 números
enteros pasados como argumento y devuelva el mayor.
*/
function Mostar()
{
	function calculoMayor(x , y , z)
	{
		var calculo;
		
		if(x > y && x > z)
		{
			calculo = x;
		} 
		else
		{
			if(y > x && y > z)
			{
				calculo = y;
			} 
			else 
			{
				calculo = z;
			}//if(y > x && y > z)
		}//if(x > y && x > z) 
		
		return calculo;
	}//function calculoMayor(x , y , z)

	var calculo;
	var a;
	var b;
	var c;

	a = prompt("Ingrese el primer numero: ","0");
	b = prompt("Ingrese el segundo numero: ","0");
	c = prompt("Ingrese el tercer numero: ","0");

	calculo = calculoMayor(a , b , c);
	alert("El numero mayor es: " + calculo);
}
