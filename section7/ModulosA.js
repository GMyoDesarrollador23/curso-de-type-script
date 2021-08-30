"use strict";
// ? inportar exportar modulos
exports.__esModule = true;
// export const nombre: string = "Gerardo";
// ? mas tipos de importaciones
// export interface Humano {
//    nombre: string;
// }
// export const mostrar = (): void => {
//    console.log("Mostar");
// };
// ? exportacion por defecto
var Persona = /** @class */ (function () {
    function Persona(nombre_, edad_, altura_) {
        this.nombre = nombre_;
        this.edad = edad_;
        this.altura = altura_;
    }
    Persona.prototype.mostrar = function () {
        console.log(this.nombre);
    };
    return Persona;
}());
exports["default"] = Persona;
