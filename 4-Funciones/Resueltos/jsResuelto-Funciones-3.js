/*
4)Crear un programa que tenga una función que calcule el área tanto de rectángulos
como de triángulos, para ello, la función debe recibir 3 argumentos:
	◦ “flagTriangulo” : si recibe “true” se indica que es un triangulo, si recibe “false” se
	indica que es un rectangulo.
	◦ “base” : valor de la base del triangulo o rectángulo.
	◦ “altura” : valor de la altura del triangulo o rectángulo.
*/
function Mostar()
{
	function calculoArea (flagTriangulo, base, altura) 
	{
		var calculo;	
		
		if(flagTriangulo == 1) 
		{
			calculo = (base * altura) / 2;
			alert("El area del triangulo es: " + calculo + " cm.");
		} 
		else
		{
			calculo = (base * altura);
			alert("El area del rectangulo es: " + calculo + " cm.");
		} 

		return calculo;
	}

	var calculo;
	var f;
	var b;
	var h;

	f = prompt("Para calcular el area de un triangulo ingrese 1, de un rectangulo 2");

	if(f != 1 && f != 2)
	{
		alert("El numero ingresado es incorrecto, por favor elija un valor de 1 o 2");
	} 
	else 
	{
		b = prompt("Ingrese valor de la base en cm");
		h = prompt("Ingrese valor de la altura en cm"); 
		
		calculo = calculoArea(f , b , h);
	}
}
