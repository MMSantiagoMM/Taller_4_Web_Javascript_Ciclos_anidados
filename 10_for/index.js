/* Cree un programa que permite registrar el número de compras que se venden cada día. pedir al usuario cuantos productos va a comprar y registrar el precio unitario, calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general. */

let Cantidad = parseInt(prompt("Cuántos productos desea ingresar para este cliente? \n Si no desea ingresar productos presione cancelar"));
let totalPrecios = 0;
let cont = 0;
for (let i = 1; i <= Cantidad; i++) {
    let totalCompra = 0;
    document.write("Cliente# " + i + "<br>")
    document.write("Este cliente compró " + Cantidad + " productos" + "<br>")
    for (let j = 1; j <= Cantidad; j++) {
        let Precios = parseInt(prompt("Precio del producto: " + j))
        document.write("El valor de producto # " + j + " es de: " + Precios + "<br>")
        totalCompra+= Precios
    }
    totalPrecios+=totalCompra;
    document.write("El precio total de la compra de este cliente es de: " + totalCompra + " <br> <br> <br>")
    Cantidad = parseInt(prompt("Cuántos productos desea ingresar para este cliente? \n Si no desea ingresar productos presione cancelar"));
    cont++;
}
document.write("Al final del día se hicieron " + cont + " compras" + "<br>")
document.write("El total general de las ventas del día fueron de: " + totalPrecios)


