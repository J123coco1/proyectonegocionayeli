// Realizar un programa que al ingresar el precio de un producto en dolares  realize la siguientes operaciones:
//  precio en dolares + 8% = resultado 
//  rasultado  * precio de dolar = precio en pesos
//  precio en pesos + 16% = precio total de  producto
// precio total de producto pesos + % de ganancia que se seleccione.

// valores a ingresar// valores variables // precio producto // ganancia requerida por producto
// valores fijos // 8% impuesto americano // 16% impuesto mexicano // precio dolar 


let impuestousa = 1.08;
let impuestomxn = 1.16;
let preciodlls = 20.00;
let isr = 1.025;

function operacion() {
   var Preciodlls = document.getElementById("preciodlls");
   var precioProducto = parseFloat(Preciodlls.value);

   var PorcentajeGanancias = document.getElementById("PorcentajeGanancias");
   var porcentajeGanancia = parseFloat(PorcentajeGanancias.value);

   let precioconimpuestousa = precioProducto * impuestousa;
   console.log("Precio con impuesto de EE.UU.: " + precioconimpuestousa);

   let preciomxn = precioconimpuestousa * preciodlls;
   console.log("Precio en MXN: " + preciomxn);

   let precioimpuestomxn = preciomxn * impuestomxn;
   console.log("Precio con impuesto de MXN: " + precioimpuestomxn);


   // Eliminé la línea que solicitaba el porcentaje de ganancia, ya que ya se obtiene como input
   // let porcentajeGanancia = prompt("Cuanto porcentaje desean agregar de ganancias:");

   let ganancia = 1 + porcentajeGanancia / 100;

   let preciofinal = precioimpuestomxn * ganancia;
   let precioconisr = preciofinal * isr;
   console.log("El precio final a dar el producto es: " + precioconisr.toFixed(2));
   alert("El precio final a dar el producto es: " + precioconisr.toFixed(2));
}
