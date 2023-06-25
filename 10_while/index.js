/* Cree un programa que permita registrar el número de compras que se venden cada día. pedir al usuario cuantos productos va a comprar y registrar el precio unitario, calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general. */
let totalGeneral = 0;
let registro = prompt("Desea ingresar un registro? si/no");
while (registro !== "no") {
    let cantidadProductos = parseInt(prompt("Cuántos productos desea comprar?"))
    let i = 1;
    let cont = 0;
    let totalventa=0;
    document.write(`<br>Cliente# ${i} <br> `)
    while (i <= cantidadProductos) {
        let precio = parseInt(prompt(`Cuál es el precio del producto ${i}`));
        document.write(`El producto ${i} cuesta: ${precio} <br>`)
        totalventa += precio;
        i++;
        cont++;
    }
    document.write(`El total de esta venta es de: ${totalventa} <br>`)
    totalGeneral += totalventa;
    
    document.write(`Este cliente compró ${cont} productos <br>`)
    registro = prompt("Desea ingresar un registro? si/no");
    
}
document.write(`<br>El total general de las ventas es de: ${totalGeneral}`)



