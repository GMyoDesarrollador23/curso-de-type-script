"use strict";
// ? inportar exportar modulos
exports.__esModule = true;
// import { nombre } from "./Modulos";
// console.log(nombre);
// ? mas tipos de importaciones
// import { mostrar, Humano } from "./ModulosA";
// const humano: Humano = { nombre: "Humano" };
// mostrar();
// console.log(humano);
// ? exportacion por defecto
var ModulosA_1 = require("./ModulosA");
var person = new ModulosA_1["default"]("nombre", 23, 34);
person.mostrar();
