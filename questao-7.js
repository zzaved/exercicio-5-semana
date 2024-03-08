class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log("O nome do animal é: " + this.nome + " e sua idade é: " + this.idade);
    }

}

let cachorro = new Animal("Godofredo", 52);
let gato = new Animal("Adolfo", 1);

cachorro.descrever();
gato.descrever();