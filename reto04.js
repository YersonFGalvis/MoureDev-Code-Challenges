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
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
    }
    Cuadrado.prototype.CalcularArea = function () {
        return this.lado * this.lado;
    };
    return Cuadrado;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, largo) {
        this.ancho = ancho;
        this.largo = largo;
    }
    Rectangulo.prototype.CalcularArea = function () {
        return this.ancho * this.largo;
    };
    return Rectangulo;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.CalcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}());
var cuadrado = new Cuadrado(4);
var triangulo = new Triangulo(10, 5);
var rectangulo = new Rectangulo(5, 7);
var CalcularArea = function (figura) {
    return figura.CalcularArea();
};
console.log(CalcularArea(cuadrado));
console.log(CalcularArea(triangulo));
console.log(CalcularArea(rectangulo));
