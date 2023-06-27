/* Cree un programa que permite registrar el número de compras que se venden cada día. pedir al usuario cuantos productos va a comprar y registrar el precio unitario, calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general. */

let compras = parseInt(prompt("Cuántos compras desea ingresar?"))
let totalGeneral = 0;
let contador = 0;
for(let i = 1; i <= compras; i++){
    let totalCompra = 0;
    document.write(`Cliente # ${i} <br>`)
    let productos = parseInt(prompt(`Ingrese la cantidad de productos para el cliente #${i} <br>`))
    for(let j = 1; j <= productos; j++){
        let precio = parseInt(prompt(`Ingrese el precio del producto #${j}`))
        document.write(`El precio del producto #${j} es de ${precio} <br>`)
        totalCompra += precio;
        contador++;
    }
    document.write(`El total de esta compra fue de ${totalCompra} <br> <br>`)
    totalGeneral += totalCompra;
}
document.write(`La cantidad de facturas del día fue de ${contador} <br> El valor general de las compras del día fue de ${totalGeneral}`);


