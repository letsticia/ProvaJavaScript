// Prova de JavaScript - 23/10/2023 -- Questão 1

// Arrays que irão receber os numeros e os textos
let numeros = new Array()
let textos = new Array()

function RecebeTarefas() {
    // função que irá receber o valor do usuário

    // usando o prompt para que o usuário digite a tarefa
    let tarefas = prompt("Digite uma tarefa: (digite 0 para sair)");

    // retornando o que o usuário digitou
    return tarefas
}


function ExibeTarefas(tarefas){
    // função que exibirá o que o usuário digitou

    // mostrando no alert a tarefa que o usuário digitou
    alert("As tarefas estão disponíveis no console")

    // mostrando no console o que o usuário digitou
    console.log("To-do List:")


    for (let count = 0; count < tarefas.length; count++) {
        console.log(count + " " + tarefas[count])
    }
}

function AnalisaTarefas(input){
    // função que analisará o input que o usuário digitou
    

    // recebe o tipo do input
    tipoInput = typeof input

    // transformando em inteiro para analisar se existe somente número ou não
    let transfomaNumero = parseInt(input)

    // adicionando ao vetor correspondente de acordo com a comparação
    if (transfomaNumero === parseInt(input)) {
        numeros.push(input)
    } else {
        textos.push(input)
    }
}

// Loop que fará que o usuário insira tarefas até que ele digite 0
for (let index = 0; index <= 50; index++) {

    // recebe o input do usuário
    let digitado = RecebeTarefas()
    
    // analisando se o usuário digitou 0
    if (digitado == 0) {
        console.log("Programa encerrado")
        alert("Programa encerrado")
        break;
    }

    // Analisando o tipo do que o usuário digitou
    AnalisaTarefas(digitado)
}

// chamando a função de exibir tarefas
ExibeTarefas(textos)


console.log(textos)
console.log(numeros)
