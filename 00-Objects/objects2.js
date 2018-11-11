
function Carro(modelo, marca, dono) {
    this.modelo = modelo;
    this.marca = marca;
    this.dono = dono;
}

function Pessoa(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
}


var morreCedo = new Pessoa("Nilton", 22, "Quebra galho");
var meuCarro = new Carro("Uno", "Fiat", morreCedo);

console.log(`O ${meuCarro.dono.nome} tem um ${meuCarro.modelo}`);


