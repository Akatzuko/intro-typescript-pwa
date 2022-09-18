
let nombres:string[]=['mario','dario','juan']

console.log(nombres);

let datos:(boolean|number|string)[]=['mario','23',true,'Lopez']

console.log(datos);

datos.push(200);
datos.push('Mariano');
datos.push(false);

console.log(datos);

//-----------------------------------------
//otro tipo de crear arreglos
let arreglo: Array<number>=[1,2,3,4]

interface Alumno{
    matricula:String,
    nombre:string,
    edad:number,
    email:string,
    materias?:String[]
}

const alumno:Alumno={

    matricula :'19002283',
    nombre :'Juan Carlos',
    edad: 23,
    email:'gmail.com',
    materias: ['Ingles']
}