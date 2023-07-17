let xValue
let yValue
let zValue

const btn1 = document.querySelector("main .resultSelection #one");
const btn2 = document.querySelector("main .resultSelection #two");
const btn3 = document.querySelector("main .resultSelection #three");
const btn4 = document.querySelector("main .resultSelection #four");
const btn5 = document.querySelector("main .resultSelection #five");
const btn6 = document.querySelector("main .resultSelection #six");
const btn7 = document.querySelector("main .resultSelection #seven");
const btn8 = document.querySelector("main .resultSelection #eight");
const btn9 = document.querySelector("main .resultSelection #nine");

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
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    zValue = chars.charAt(Math.floor(Math.random() * chars.length))
    document.querySelector(".variables #z").innerText = `${zValue}`
    return zValue
};

const generateType = () => {
    let randomType = [1, 2, "A", "B", true, false]
    let arrayCounter = randomType.length
    zValue = randomType[(Math.floor(Math.random() * arrayCounter))]
    document.querySelector(".variables #z").innerText = `${zValue}`
    return zValue
}

const resetVars = () => {
    document.querySelector(".variables #x").innerText = `***`
    document.querySelector(".variables #y").innerText = `***`
    document.querySelector(".variables #z").innerText = `*`
    document.querySelector(".results .reply #replyText").innerText = `Resultado dos exercícios`
}

btn1.addEventListener("click", () => {
    resetVars()
    alert("Hello World!")
});

btn2.addEventListener("click", () => {
    resetVars()
    generateX()
    generateY()
    let sumResult = xValue + yValue
    document.querySelector(".results .reply #replyText").innerText = `A soma da variável A + B é igual à: ${sumResult}`
});

btn3.addEventListener("click", () => {
    resetVars()
    generateZ()
    isNaN(zValue) ? (document.querySelector(".results .reply #replyText").innerText = `A variável nao é um número`) : (document.querySelector(".results .reply #replyText").innerText = `A variável é um número`)
});

btn4.addEventListener("click", () => {
    resetVars()
    generateZ()
    isNaN(zValue) ? (document.querySelector(".results .reply #replyText").innerText = `A variável é uma string`) : (document.querySelector(".results .reply #replyText").innerText = `A variável nao é uma string`)
});

btn5.addEventListener("click", () => {
    resetVars()
    generateType()
    typeof zValue == "boolean" ? (document.querySelector(".results .reply #replyText").innerText = `A variável é um Boolean`) : (document.querySelector(".results .reply #replyText").innerText = `A variável nao é um Boolean`)
});

btn6.addEventListener("click", () => {
    resetVars()
    generateX()
    generateY()
    let subResult = xValue - yValue
    document.querySelector(".results .reply #replyText").innerText = `A subtraçao da variável - B é igual à: ${subResult}`
});

btn7.addEventListener("click", () => {
    resetVars()
    generateX()
    generateY()
    let divResult = (xValue / yValue).toFixed(2)
    document.querySelector(".results .reply #replyText").innerText = `A divisao da variável A / B é igual à: ${divResult}`
});

btn8.addEventListener("click", () => {
    resetVars()
    generateX()
    let moduleResult = xValue % 2
    moduleResult == 0 ? document.querySelector(".results .reply #replyText").innerText = `É um número par` : document.querySelector(".results .reply #replyText").innerText = `Não é um número par`
});

btn9.addEventListener("click", () => {
    resetVars()
    generateX()
    let moduleResult = xValue % 2
    moduleResult != 0 ? document.querySelector(".results .reply #replyText").innerText = `É um número ímpar` : document.querySelector(".results .reply #replyText").innerText = `Não é um número ímpar`
});