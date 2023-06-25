let Container = document.getElementById("container");
const Send = document.getElementById("send");
Send.addEventListener("click",()=>{
    let Num = (document.getElementById("num").value);
    for(let i = 1; i <= Num; i++){
        let box = document.createElement("p")
        box.textContent = i
        box.classList.add("caja")
        Container.appendChild(box)
    }
})