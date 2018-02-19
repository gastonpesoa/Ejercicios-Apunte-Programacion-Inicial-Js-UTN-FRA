/*
4) Crear un programa que defina 5 variables llamadas “a”,“b”...“e” y una sexta variable
llamada “promedio”. Cargar las 5 variables con valores y calcular el promedio de los
mismos. Imprimir el resultado por pantalla.
*/
function Mostar()
{
	var a; 
	var b;
	var c; 
	var d;
	var e; 
	var suma;
	var promedio;

	a = prompt("Ingrese el valor de la variable a: ","0");
	b = prompt("Ingrese el valor de la variable b: ","0");
	c = prompt("Ingrese el valor de la variable c: ","0");
	d = prompt("Ingrese el valor de la variable d: ","0");
	e = prompt("Ingrese el valor de la variable e: ","0");

	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);
	d = parseInt(d);
	e = parseInt(e);

	suma = (a + b + c + d + e);
	promedio = suma / 5;
	 
	alert("El promedio de los valores ingresados es: " + promedio);
}
