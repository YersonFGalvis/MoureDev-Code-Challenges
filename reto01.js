/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const isAnagram = (p1 = '', p2 = '') => {
    const toLower1 = [];
    const toLower2 = [];
    let answer = true;

    if (p1.toLowerCase() === p2.toLowerCase()) {
        return false;
    }

    const arr1 = p1.split('').sort();
    const arr2 = p2.split('').sort();

    arr1.forEach(letter => {
        toLower1.push(letter.toLowerCase())
    });

    arr2.forEach(letter => {
        toLower2.push(letter.toLowerCase())
    });

    toLower1.forEach((a, index) => {
        if (a != toLower2[index]) {
            answer = false;
        }
    })

    return answer;
}

console.log(isAnagram('roma', 'remo'));
console.log(isAnagram('roma', 'amor'));
console.log(isAnagram('amor', 'amor'));

