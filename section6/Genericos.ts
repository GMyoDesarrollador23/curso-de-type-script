// ? tipo any su problema es su solucion

// const nombre: string = "Gerardo";
// const edad: number = 45;
// const noSe:any = 34;

// ? funciones Genericas

// function mostrar(dato: string): string {
//    return dato;
// }
// console.log(mostrar("hola de nuevo"));

// function mostarGenerico<T>(dato: T): T {
//    return dato;
// }
// const d = mostarGenerico(true)
// d.valueOf
// console.log(mostarGenerico("hola generico"));

// ? Clases Genericas

// class Persona<T> {
//    nombre: string;
//    edad: T;

//    mostrar(dato: T): T {
//       return dato;
//    }
// }
// let obj = new Persona();

// console.log(obj.mostrar("nose"));

// ? interfaces Genericas

// interface Persona<T> {
//    nombre: T;
// }
// let obj: Persona<string> = { nombre: "string" };
// let num: Persona<number> = { nombre: 0 };


