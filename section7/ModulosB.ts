// ? inportar exportar modulos

// import { nombre } from "./Modulos";
// console.log(nombre);

// ? mas tipos de importaciones

// import { mostrar, Humano } from "./ModulosA";

// const humano: Humano = { nombre: "Humano" };

// mostrar();
// console.log(humano);

// ? exportacion por defecto

import Persona from "./ModulosA";

const person = new Persona("nombre", 23, 34);
person.mostrar()
