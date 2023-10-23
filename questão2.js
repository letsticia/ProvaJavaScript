// Prova de JavaScript - 23/10/2023 -- Questão 2

// Criando um objeto
let pessoa = {};

// pedindo para que o usuário digite
console.log("Insira os dados abaixo:")

// criando instancias para o objeto pessoa a partir de um prompt
pessoa.nome = prompt(" Nome: ")
pessoa.idade = parseInt(prompt("Idade: "))
pessoa.cidade = prompt("Cidade: ")
pessoa.uf = prompt("UF: ")
pessoa.bairro = prompt("Bairro: ")

// exibindo o objeto pessoa
console.log(pessoa);