let Num = document.getElementById("num");
let Texto = document.getElementById("texto")
const Send = document.getElementById("send");
//Digite un número (altura) y a partir de él cree una escalera de asteriscos o el carácter que desee; con esa altura
/* Send.addEventListener("click", ()=>{
    let Textoo = Texto;
    let Numb = Num.value
    for(let i = 1; i <= Numb; i++){
        Textoo.innerHTML += "<br>"
        for(let j = 1; j <= i; j++){
            Textoo.innerHTML += " * "
        }
    }
    
}) */

Send.addEventListener("click",()=>{
    let Number = Num.value;
    let i = 1;
    while(i <= Number){
        Texto.innerHTML += "<br>"
        let j = 1;
        while(j <= i){
            Texto.innerHTML += " * ";
            j++;
        }
        i++;
    }
})

