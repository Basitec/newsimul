let a = document.querySelector("#x")
let b = document.querySelector("#y")
let c = document.querySelector("#ans1")
let variable1 = document.querySelector("#variable1")
let variable2 = document.querySelector("#variable2")
let d = document.querySelector("#x2")
let e = document.querySelector("#y2")
let f = document.querySelector("#ans2")
let displayAns = document.querySelector("p")
let btn = document.querySelector("button")
btn.addEventListener("click",function () {
    let forA = a.value*e.value;
    let forB = b.value*d.value;
    let ground = forA-forB
    let x1 = c.value*e.value;
    let x2 = f.value*b.value;
    let xDeter = x1-x2;
    let forX = xDeter/ground;
    let y1 = c.value*d.value;
    let y2 = a.value*f.value;
    let yDeter = y2-y1;
    let forY = yDeter/ground;
    displayAns.innerHTML="The value of "+variable1.value+" is "+forX+" and the value of "+variable2.value+" is "+forY
})