/*
4) Crear un programa en donde el usuario ingrese el nombre y el precio de 5 productos, al
finalizar, se listarán en pantalla el nombre y el precio de los productos, indicando con un
“*” el que posee el precio menor.
*/
function Mostar()
{
	function productos(nombre, precio)
	{
		this.nombre = nombre;
		this.precio = precio;
	}

	var primerProducto = new productos;
	var segundoProducto = new productos; 
	var tercerProducto = new productos; 
	var cuartoProducto = new productos; 
	var quintoProducto = new productos;

	var canasta = [primerProducto, segundoProducto, tercerProducto, cuartoProducto, quintoProducto];


	for(var i = 0; i < 5; i++) 
	{
		canasta[i].nombre = prompt("Ingrese el nombre del producto: ");  
		canasta[i].precio = prompt("Ingrese el precio del producto: ","0");

		canasta[i].precio = parseInt(canasta[i].precio);
	}

	var precios = [primerProducto.precio, segundoProducto.precio, tercerProducto.precio, 
		cuartoProducto.precio, quintoProducto.precio];

	function myArrayMin(arr) 
	{
	    return Math.min.apply(null, arr);
	}

	myArrayMin(precios) 

	for(var i = 0; i < 5; i++) 
	{
		if (canasta[i].precio == myArrayMin(precios)) 
		{
			console.log("Producto: " + canasta[i].nombre.toUpperCase() + ", Precio :" + canasta[i].precio + " '*'");
		} 
		else 
		{
			console.log("Producto: " + canasta[i].nombre.toUpperCase() + ", Precio :" + canasta[i].precio);
		}
	}
	
	alert("El listado se muestra por consola");
}
