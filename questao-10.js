//criando a classe funcionário que irá armazenar o nome, idade e salarioBase daquele funcionário

class Funcionario{
    constructor(nome, idade, salarioBase){
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

//a função calcular salário, como não há nenhum outro atributo que possa facilitar o nosso cálculo, o salário total é igual ao salário base

    calcularSalario(){
        let salarioTotal = salarioBase;
        console.log("O seu salário total é: " + salarioTotal);
    }
}

//criando a variável de salarioTotal fora da classe para ser utilizada em outro momento

//criando a classe professor e buscando herança da classe funcionário

class Professor extends Funcionario{
    //adicionamos novos atributos, como a disciplina que aquele professor leciona e as horas que ele trabalha
    constructor(nome, idade, salarioBase, disciplina, horas){
        //função super para resgatar os atributos da herança
        super(nome, idade, salarioBase);
        //registrando os novos atributos
        this.disciplina = disciplina;
        this.horas = horas;
    }
    //a função calcular salário recebe o número de horas que o profissional trabalha para dividir elas por 10 e multiplicar ao salário base do profissional
    //dessa forma, como exemplo, se um profissional trabalha 20 horas, seu salário base será multiplicado por 2. 
    calcularSalario(){
        this.salarioTotal = this.salarioBase;
        this.salarioTotal *= (this.horas/10);
        console.log("o salário de " + this.nome + " é " + this.salarioTotal + " pois o salário base do profissional é " + this.salarioBase + " e ele trabalha " + this.horas + " horas por semana!");
    }
}

//criando os dois professores e passando as informações sobre cada um
let prof1 = new Professor("Carlos", 23, 1000, "História", 20);
let prof2 = new Professor("Mariazinha", 45, 1500, "Matemática", 30);

//imprimindo os dados do salário de cada professor
prof1.calcularSalario();
prof2.calcularSalario();