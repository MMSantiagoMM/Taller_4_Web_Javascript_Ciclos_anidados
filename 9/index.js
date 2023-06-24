let Texto = document.getElementById("texto");
const Send = document.getElementById("send");

/* FOR */
/* Send.addEventListener("click", ()=>{
    let Num = document.getElementById("num").value;
    let Char = document.getElementById("char").value;

    for(let i = 1; i <= Num; i++){
        Texto.innerHTML += "<br>"
        for(let j = Num; j >= i; j--){
            Texto.innerHTML += Char;
        }
    }
}) */
/* WHILE */
Send.addEventListener("click",()=>{
    let Num = document.getElementById("num").value;
    let Char = document.getElementById("char").value;

    let i = 1
    while(i <= Num){
        Texto.innerHTML += "<br>" 
        let j = Num
        while(j >= i){
            Texto.innerHTML += Char
            j--
        }
        i++
    }
})