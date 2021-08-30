// ? introduccion a las funciones

// function sumar(a: number, b: number): number {
//    return a + b;
// }

// const suma: number = sumar(1, 3);
// const suma2: number = sumar(6, 2);
// console.log(suma);
// console.log(suma2);

// ? tipo de funciones

// function mostrar(e: string): void {
//    console.log(e);
// }

// const mostrar2 = (e: string): void => {
//    console.log(e);
// };

// mostrar('fincion 1e');
// mostrar2('funcion 2e');

// ? parametros obcionales

// const obcionales = (
//    nombre: string,
//    apellido: string,
//    edad?: number
// ) => {
//    edad
//-      ? console.log({ nombre, apellido, edad })
//       : console.log({ nombre, apellido });
// };

// obcionales("Gerardo", "Miranda", 32);

// ? pasar parametros por defecto

// const mostrar = (
//    nombre: string,
//    apellido: string,
//    edad: number = 25
// ): string => {
//    return `${nombre} ${apellido} ${edad}`;
// };

// console.log(mostrar("Gerardo", "Miranda"));
// console.log(mostrar("Jonh", "Doe", 26));

// ? parametros Rest

// const cartasDePostres = (
//    postre: string,
//    ...frutas: string[]
// ): void => {
//    console.log(`el postre es ${postre} y tiene ${frutas}`);
// };

// cartasDePostres(
//    "pastel",
//    " fruta 1",
//    " fruta 2",
//    " fruta 3",
//    " fruta 4",
//    " fruta 5"
// );
