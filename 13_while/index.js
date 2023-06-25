let registro = prompt("Desea ingresar la edad de un estudiante? si/no")
let cont_mayores = 0;
let cont_menores = 0;
/* Cree un programa que pida la edad a 10 estudiantes y determine cuántos son menores de edad y cuales son mayores de edad. */
while (registro !== "no") {
    let age = parseInt(prompt("Ingrese la edad del estudiante"))
    if(age >= 18){
        cont_mayores++;
    } else{
        cont_menores++;
    }
    registro = prompt("Desea ingresar la edad de un estudiante? si/no")
}
document.write(`La cantidad de estudiantes menores de edad son: ${cont_menores} <br> La cantidad de estudiantes mayores de edad son: ${cont_mayores}`)