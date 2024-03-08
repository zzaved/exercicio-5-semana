class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log("O nome do animal é: " + this.nome + " e sua idade é: " + this.idade);
    }

}

class Gato extends Animal{
    constructor(nome, idade, cor){
        super(nome, idade);
        this.cor = cor;
    }

    descrever(){
        console.log("O nome do animal é: " + this.nome + " e sua idade é: " + this.idade + ", sua cor é: " + this.cor);
    }

    miar(){
        console.log("miau");
    }

}

let cachorro = new Animal("Godofredo", 52);
let gato = new Gato("Adolfo", 1, "Marrom");

cachorro.descrever();
gato.descrever();
gato.miar();