/*
3) Las puntuaciones de las películas se clasifican en:
	◦ 0 : mala
	◦ 1 : regular
	◦ 2 : buena
	◦ 3 : muy buena
	◦ 4 : excelente
Definir una variable llamada “puntuacion” y cargarla con un valor de 0 a 4. Imprimir la
clasificación de la película según el valor numérico.
*/
function Mostar()
{
	var puntuacion;
	puntuacion = prompt("Ingrese un valor de 0 a 4");

	if(puntuacion < 0 || puntuacion > 4)
	{
		alert("Numero fuera de los valores, vuelva a ingresar");
	} 
	else 
	{
		switch(puntuacion) 
		{
			case "0":
				alert("Mala");
				break;
			case "1":
				alert("Regular");
				break;
			case "2":
				alert("Buena");
				break;
			case "3":
				alert("Muy buena");
				break;
			case "4":
				alert("Excelente");
				break;
		}//switch(puntuacion) 
	}//if(puntuacion < 0 || puntuacion > 4)
}

