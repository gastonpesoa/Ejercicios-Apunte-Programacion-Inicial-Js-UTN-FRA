/*
5) Indicar la diferencia en los siguientes programas. ¿Se comportan de igual forma? En el
caso de no ser así, indicar la diferencia y la forma de corregirlos para que ambos se
comporten de forma equivalente.

Programa 1

var numero;
numero = 5;

while (numero > 0){

	console.log("numero:"+numero);
	numero--;

}

Programa 2

var numero;
numero = 5;

while (true){

	console.log("numero:"+numero);
	numero--;

	if(numero < 0){

		break;
	}
}
*/
function Mostar()
{
	alert("Funciona!!");
}