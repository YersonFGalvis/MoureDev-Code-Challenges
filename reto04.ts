/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */



interface Figura {

    CalcularArea: () => number;

}

interface Triangulo extends Figura {
    base: number;
    altura: number;
}

interface Cuadrado extends Figura {
    lado: number;
}

interface Rectangulo extends Figura {
    largo: number;
    ancho: number;
}

class Cuadrado implements Cuadrado {
    constructor(public lado: number) { }

    CalcularArea() {
        return this.lado * this.lado
    }
}

class Rectangulo implements Rectangulo {
    constructor(public ancho: number, public largo: number) { }

    CalcularArea() {
        return this.ancho * this.largo
    }
}

class Triangulo implements Triangulo {
    constructor(public base: number, public altura: number) { }

    CalcularArea() {
        return (this.base * this.altura) / 2
    }
}

const cuadrado = new Cuadrado(4);
const triangulo = new Triangulo(10, 5);
const rectangulo = new Rectangulo(5, 7);

const CalcularArea = (figura: Figura) => {

    return figura.CalcularArea();

}

console.log(CalcularArea(cuadrado));
console.log(CalcularArea(triangulo));
console.log(CalcularArea(rectangulo));