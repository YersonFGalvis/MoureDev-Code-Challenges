/*
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const lorem = `Sint tempor laboris aliquip duis. Veniam id dolor ad officia enim id enim nostrud nulla sunt cupidatat 
velit. Ullamco sint ex excepteur qui aute. Culpa adipisicing cupidatat ullamco aute consectetur ut consectetur veniam 
pariatur ullamco.Qui labore commodo culpa esse esse qui nulla incididunt. Dolor dolore reprehenderit adipisicing ad 
irure consequat labore in qui dolore. Ipsum id incididunt id enim. Sit non ullamco ut aliqua occaecat exercitation deserunt 
est occaecat incididunt do non. Consectetur laboris nulla anim irure enim et aliquip cillum laborum excepteur id do. Magna 
nostrud eu et Lorem minim proident reprehenderit elit magna nisi voluptate 
fugiat.`

const countWords = (word: string) => {

    const arr: Array<string> = word.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ');
    let count: Object = {};
    arr.forEach(word => {
        if (typeof count[word] != "undefined") {
            count[word]++;
        }else{
            count[word] = 1;
        }
    })

    for(let c in count){
        console.log(`${c} appears ${count[c]} ${count[c]>1? 'times' : 'time'} `);
    }

}

countWords(lorem);

