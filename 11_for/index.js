/* Cree un programa que calcule el promedio de 3 notas para 3 alumnos */

for (let j = 1; j <= 3; j++) {
    let name = prompt("Ingrese el nombre del estudiante")
    let matter = prompt("Ingrese el nombre de la materia")
    let prom = 0;
    let sum = 0;
    document.write(`<br> El nombre del alumno es ${name} <br>`)
    document.write(`Materia: ${matter} <br>`)
    for (let i = 1; i <= 3; i++) {
        let notas = parseFloat(prompt(`Ingrese la nota ${i} del estudiante `))
        document.write(`la nota ${i} es de: ${notas} <br>`)
        sum+=notas;
    }
    prom = (sum / 3).toFixed(2)
    document.write(`El promedio es de: ${prom} <br>`)

}




