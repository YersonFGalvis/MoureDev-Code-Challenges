/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

IsPrimeNumber = (number) => {

    if (number <= 1) {
        return false;
    }

    for (let index = 2; index < number; index++) {
        if(number % index == 0){
            return false;  //if the number can be divided by other number diferent to 1 and itself, it is not prime
        }
        
    }

    return true;
}

for (let i = 0; i < 100; i++) {
    
    if(IsPrimeNumber(i)){
        console.log(i);
    }
}

