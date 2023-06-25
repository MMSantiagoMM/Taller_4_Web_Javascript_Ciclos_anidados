let registro = prompt("Desea ingresar un registro? si/no")

while(registro != "no"){
    let name = prompt("Ingrese el nombre del estudiante ")
    let matter = prompt("Ingrese la materia")
    let sum = 0;
    let prom = 0;
    let i = 1;
    document.write(`El nombbre del estudiante es: ${name} <br>`)
    document.write(`La materia es: ${matter}<br>`)
    while(i <= 3){
        let notas = parseFloat(prompt(`Ingrese la nota ${i} del estudiante`))
        document.write(`la nota # ${i} es de ${notas}<br>`);
        sum += notas;
        i++;
    }
    prom = (sum/3).toFixed(2);
    document.write(`El promedio del estudiante es de ${prom} <br><br>`)
    registro = prompt("Desea ingresar un registro? si/no")
}