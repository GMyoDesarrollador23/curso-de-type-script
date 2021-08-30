// ? introduccion a las clases en ts
// ? nuestra primera clase

// class Veiculo {
//    marca: string;
//    fecha: string;
//    puertas: number;

//    constructor(
//       marca_: string,
//       fecha_: string,
//       puertas_: number
//    ) {
//       this.marca = marca_;
//       this.fecha = fecha_;
//       this.puertas = puertas_;
//    }

//    acelerar(): void {
//       console.log("estoy aceleranda");
//    }
//    frenara(): void {
//       console.log("estoy frenando");
//    }
// }

// const coche = new Veiculo("ford", "2002", 4);

// console.log(coche);
// coche.frenara();
// console.log(coche.acelerar);;

// ? herenca entre clases

// class Padre {
//    nombre: string;
//    edad: number;

//    constructor(nombre_: string, edad_: number) {
//       this.nombre = nombre_;
//       this.edad = edad_;
//    }

//    mostrarNombre() {
//       console.log(this.nombre);
//    }
// }

// class Hijo extends Padre {
//    apellido: string;

//    constructor(
//       _nombre: string,
//       _edad: number,
//       _apellido: string
//    ) {
//       super(_nombre, _edad);
//       this.apellido = _apellido;
//    }

//    mostrarNombreHijo(): void {
//       console.log(this.nombre);
//    }
// }

// const nuevoHijo = new Hijo("Gerardo", 25, "Miranda");

// nuevoHijo.mostrarNombre()
// nuevoHijo.mostrarNombreHijo()

// ? modificadores publicos

// class Animal {
//    nombre: string;
//    tamanio: number;

//    constructor(nombre_: string, tamanio_: number) {
//       this.nombre = nombre_;
//       this.tamanio = tamanio_;
//    }

//    public moverse(): void {
//       console.log("Me estoy moviendo");
//    }
// }

// const obj = new Animal('sertiente', 2)

 // ? modificadores privados

// class Animal {
//    private nombre: string;
//    private tamanio: number;

//    constructor(nombre_: string, tamanio_: number) {
//       this.nombre = nombre_;
//       this.tamanio = tamanio_;
//    }

//    public moverse(): void {
//       console.log("Me estoy moviendo");
//    }
// }
// const obj = new Animal("sertiente", 2);

 // ? modificadores protegidos

 
// class Animal {
//    protected nombre: string;
//    protected tamanio: number;

//    constructor(nombre_: string, tamanio_: number) {
//       this.nombre = nombre_;
//       this.tamanio = tamanio_;
//    }

//    public moverse(): void {
//       console.log("Me estoy moviendo");
//    }
// }
// const obj = new Animal("sertiente", 2);

// obj.