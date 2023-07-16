let xValue
let yValue
let zValue = '';

const generateX = () => {
    xValue = Math.floor(Math.random() * 100)
    document.querySelector(".variables #x").innerText = `${xValue}`
    return xValue
};

const generateY = () => {
    yValue = Math.floor(Math.random() * 100)
    document.querySelector(".variables #y").innerText = `${yValue}`
    return yValue
};

const generateZ = () => {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    zValue = caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    document.querySelector(".variables #z").innerText = `${zValue}`

    return zValue
};

const resetVars = () => {
    document.querySelector(".variables #x").innerText = `***`
    document.querySelector(".variables #y").innerText = `***`
    document.querySelector(".variables #z").innerText = `*`
}

const btn1 = document.querySelector("main .resultSelection #one");
const btn2 = document.querySelector("main .resultSelection #two");
const btn3 = document.querySelector("main .resultSelection #three");
const btn4 = document.getElementById(four);
const btn5 = document.getElementById(five);
const btn6 = document.getElementById(six);
const btn7 = document.getElementById(seven);
const btn8 = document.getElementById(eight);
const btn9 = document.getElementById(nine);

btn1.addEventListener("click", () => {
    resetVars()
    alert("Hello World!")
});

btn2.addEventListener("click", () => {
    resetVars()
    generateX()
    generateY()
    let oneResult = xValue + yValue
    document.querySelector(".results .reply #replyText").innerText = `A soma da variável A + B é igual à: ${oneResult}`
});

btn3.addEventListener("click", () => {
    resetVars()
    generateZ()
    isNaN(zValue) ? (document.querySelector(".results .reply #replyText").innerText = `A variável nao é um número`) : (document.querySelector(".results .reply #replyText").innerText = `A variável é um número`)
});

btn4.addEventListener("click", myScript);
btn5.addEventListener("click", myScript);
btn6.addEventListener("click", myScript);
btn7.addEventListener("click", myScript);
btn8.addEventListener("click", myScript);
btn9.addEventListener("click", myScript);