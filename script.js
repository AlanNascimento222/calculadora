const caixa = document.getElementById("inputButton")
const numeroDigitado = [0]
const igual = document.getElementById("button-=")

//arrumando array

for (i = 1; i <= 9; i++) {
    numeroDigitado.push(0)
}

//recebendo valor e adcionando ao array

for (i = 1; i <= 9; i++) {
    numeroDigitado[i] = document.getElementById(`button-${i}`)
}

//escolhendo o algoritmo para o calculo

function algoritmoCalcu() {

}

function resultado() {
    if(caixa.value.includes("+")){
        const numeros = caixa.value.split("+")
        const n1 = Number(numeros[0])
        const n2 = Number(numeros[1])
        caixa.value = n1 + n2
    } else if(caixa.value.includes("-")){
        const numeros = caixa.value.split("-")
        const n1 = Number(numeros[0])
        const n2 = Number(numeros[1])
        caixa.value = n1 - n2
    }  else if(caixa.value.includes("*")){
        const numeros = caixa.value.split("*")
        const n1 = Number(numeros[0])
        const n2 = Number(numeros[1])
        caixa.value = n1 * n2
    }  else if(caixa.value.includes("/")){
        const numeros = caixa.value.split("/")
        const n1 = Number(numeros[0])
        const n2 = Number(numeros[1])
        caixa.value = n1 / n2
    } 
}


//botoes funcionando

function inserir(n1) {
    caixa.value += n1
    Number(caixa.value)
}

function apagar() {
    caixa.value = ""
}