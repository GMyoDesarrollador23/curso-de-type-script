// ? introduccion a las interfaces

// interface Persona {
//    nombre: string;
// }

// function caminar(persona: Persona): void {
//    console.log("la persona es " + persona.nombre);
// }

// let nuevaPersona = { nombre: "Gerardo" };
// caminar(nuevaPersona);

// ? parametros obcionales

// interface Persona {
//    altura: number;
//    peso: number;
//    nombre?: string;
// }

// function mostarPersona(persona: Persona): string {
//    let mediaPeso: number = persona.altura / persona.peso;
//    return persona.nombre
//-      ? `${persona.nombre} tiene una media de ${mediaPeso}`
//       : `la persona tiene una media de ${mediaPeso}`;
// }

// let persona = { altura: 2, peso: 120 };
// let persona2 = { altura: 2, peso: 120, nombre: "Gisel" };

// console.log(mostarPersona(persona));
// console.warn(mostarPersona(persona2));

// ? parametros de solo lectura

// interface Persona {
//    readonly nombre: string;
//    readonly apellido: string;
// }

// let persona: Persona = {
//    nombre: "Gerardo",
//    apellido: "Miranda",
// };
// console.log(persona);

// ? intercafes para funciones

// interface Generar {
//    (nombre: string, apellido: string, edad: number): void;
// }

// let funcionGenerar1: Generar;
// funcionGenerar1 = function (
//    nombre: string,
//    apellido: string,
//    edad: number
// ): void {
//    console.log({ nombre, apellido, edad });
// };

// funcionGenerar1("Gerardo", "Miranda", 25);
