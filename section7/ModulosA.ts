// ? inportar exportar modulos

// export const nombre: string = "Gerardo";

// ? mas tipos de importaciones

// export interface Humano {
//    nombre: string;
// }

// export const mostrar = (): void => {
//    console.log("Mostar");
// };

// ? exportacion por defecto

class Persona {
   nombre: string;
   edad: number;
   altura: number;
   constructor(nombre_: string, edad_: number, altura_: number) {
      this.nombre = nombre_;
      this.edad = edad_;
      this.altura = altura_;
   }
   mostrar(): void {
      console.log(this.nombre);
   }
}

export default Persona;
