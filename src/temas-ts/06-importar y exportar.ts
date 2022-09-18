import { calcularIVA2, Producto } from "./05-desestructura-funcion";

const tiendaProductos:Producto[]=[
    {
        desc:'Telefono1',
        precio:4444 
    },
    {
        desc:'Tablet2',
        precio:2222
    },
    {
        desc:'Tablet3',
        precio:3444
    },
];
const [total1, iva1]=calcularIVA2(tiendaProductos);
console.log(`Total: ${total1} \n IVA: ${iva1}`);