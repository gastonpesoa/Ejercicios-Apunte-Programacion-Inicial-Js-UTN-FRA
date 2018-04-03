//
//  main.c
//  TP_I_Laboratorio_I
//
//  Created by Gaston Pesoa on 30/03/18.
//  Copyright (c) 2018 Gaston Pesoa. All rights reserved.
//

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "funciones.h"

void getString(char mensaje[], char input[]);
int esNumerico(char str[]);
int getStringNumeros(char mensaje[], char input[]);

int suma(int x, int y);
int resta(int x, int y);
float division(float x, float y);
int multiplicacion(int x, int y);
long long int factorial(int x);

int main()
{
    char seguir = 's';
    int opcion = 0;
    
    int primerOperando = 0;
    int segundoOperando = 0;
    int operacion = 0;
    float operacionDivision = 0;
    long long int operacionFactorial;
    
    char auxiliarOpcionString[50];
    char auxiliarPrimerOperandoStr[50];
    char auxiliarSegundoOperandoStr[50];
    
    while (seguir == 's')
    {
        printf("\n1- Ingresar 1er operando (A=%d)\n", primerOperando);
        printf("2- Ingresar 2do operando (B=%d)\n", segundoOperando);
        printf("3- Calcular la suma (A+B)\n");
        printf("4- Calcular la resta (A-B)\n");
        printf("5- Calcular la division (A/B)\n");
        printf("6- Calcular la multiplicacion (A*B)\n");
        printf("7- Calcular el factorial (A!)\n");
        printf("8- Calcular todas las operaciones\n");
        printf("9- Salir\n");
        
        if(!getStringNumeros("\nIngrese la opcion: ", auxiliarOpcionString))
        {
            printf("\nLA OPCION DEBE SER NUMERICA\n");
        }
        
        opcion = atoi(auxiliarOpcionString);
        
        switch(opcion)
        {
            case 1:
                
                if(!getStringNumeros("\nIngrese el primer operando: ", auxiliarPrimerOperandoStr))
                {
                    printf("\nEL OPERANDO DEBE SER NUMERICO\n");
                    break;
                }
                primerOperando = atoi(auxiliarPrimerOperandoStr);
                break;
                
            case 2:
                
                if(!getStringNumeros("\nIngrese el segundo operando: ", auxiliarSegundoOperandoStr))
                {
                    printf("\nEL OPERANDO DEBE SER NUMERICO\n");
                    break;
                }
                segundoOperando = atoi(auxiliarSegundoOperandoStr);
                break;
                
            case 3:
                
                operacion = suma(primerOperando, segundoOperando);
                break;
                
            case 4:
                
                operacion = resta(primerOperando, segundoOperando);
                break;
                
            case 5:
                
                operacionDivision = division((float)primerOperando, (float)segundoOperando);
                break;
                
            case 6:
                
                operacion = multiplicacion(primerOperando, segundoOperando);
                break;
                
            case 7:
                
                operacionFactorial = factorial((long long int)primerOperando);
                break;
                
            case 8:
                
                operacion = suma(primerOperando, segundoOperando),
                            resta(primerOperando, segundoOperando),
                            multiplicacion(primerOperando, segundoOperando);
                            operacionFactorial = factorial((long long int)primerOperando);
                
                operacionDivision = division(primerOperando, segundoOperando);
                
                break;
                
            case 9:
                
                seguir = 'n';
                break;
        }
    }
    
    return 0;
}

/**
 * \brief Solicita un texto al usuario y lo devuelve
 * \param mensaje es el mensaje a ser mostrado
 * \param input Array donde se cargara el texto ingresado
 * \return void
 *
 */

void getString(char mensaje[], char input[])
{
    printf("%s", mensaje);
    scanf("%s", input);
}

/**
 * \brief Verifica si el valor recibido es numerico
 * \param str Array con la cadena a ser analizada
 * \return 1 si es numerico, 0 si no lo es
 *
 */

/**
 * \brief Verifica si el valor recibido es numerico
 * \param str Array con la cadena a ser analizada
 * \return 1 si es numerico, 0 si no lo es
 *
 */

int esNumerico(char str[])
{
    int i = 0;
    while(str[i] != '\0')
    {
        if(str[i] < '0' || str[i] > '9')
        {
            return 0;
        }
        i++;
    }
    return 1;
}

/**
 * \brief Solicita un texto al usuario y lo devuelve
 * \param mensaje es el mensaje a ser mostrado
 * \param input Array donde se cargara el texto ingresado
 * \return 1 si el texto contiene solo numeros
 *
 */

int getStringNumeros(char mensaje[], char input[])
{
    char auxiliar[256];
    getString(mensaje, auxiliar);
    if(esNumerico(auxiliar))
    {
        strcpy(input, auxiliar);
        return 1;
    }
    return 0;
}

/**
 * \brief Recibe los dos operandos y los suma
 * \param x 1er operando
 * \param y 2do operando
 * \return Resultado de la suma
 */

int suma(int x, int y)
{
    int resultado;
    resultado = x + y;
    printf("\nSUMA\n");
    printf("\nEl resultado de la suma es: %d\n", resultado);
    return resultado;
}

/**
 * \brief Recibe los dos operandos y los resta
 * \param x 1er operando
 * \param y 2do operando
 * \return Resultado de la resta
 */

int resta(int x, int y)
{
    int resultado;
    resultado = x - y;
    printf("\nRESTA\n");
    printf("\nEl resultado de la resta es: %d\n", resultado);
    return resultado;
}

/**
 * \brief Recibe los dos operandos, verifica que el divisor sea distinto de 0, y los divide
 * \param x 1er operando
 * \param y 2do operando
 * \return Resultado de la division
 */

float division(float x, float y)
{
    float resultado;
    if (y == 0)
    {
        resultado = printf("\nMATH ERROR. Ingrese un divisor distinto de 0.\n");
    }
    else
    {
        resultado = x / y;
        printf("\nDIVISION\n");
        printf("\nEl resultado de la division es: %.4f\n", resultado);
    }
    return resultado;
}

/**
 * \brief Recibe los dos operandos y los multiplica
 * \param x 1er operando
 * \param y 2do operando
 * \return Resultado de la multiplicacion
 */

int multiplicacion(int x, int y)
{
    int resultado;
    resultado = x * y;
    printf("\nMULTIPLICACION\n");
    printf("\nEl resultado de la multiplicacion es: %d\n", resultado);
    return resultado;
}

/**
 * \brief Recibe el 1er operando y calcula el factorial
 * \param x 1er operando
 * \return Factorial del 1er operando
 */

long long int factorial(int x)
{
    long long int resultado = 1;
    int i;
    if (x < 35)
    {
        for (i = 1; i <= x; i++)
        {
            resultado *= i;
        }
        printf("\nFACTORIAL\n");
        printf("\nEl factorial de %d es: %lld\n", x, resultado);
    }
    else
    {
        printf("\nMATH ERROR. El valor del operando, a calcular el factorial, debe ser menor a 35.\n");
    }
    return resultado;
}