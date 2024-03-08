# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript

//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina!
- ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** O que o código a seguir faz?

```javascript
let numero = 1;
while (numero <= 10){
    if (numero % 2 === 0){
        console.log(numero);
    }
    numero++;
}
```


Escolha a opção que responde corretamente:

ALTERNATIVA CORRETA É A LETRA A

X) Imprime os números pares de 1 a 10.

b) Imprime os números ímpares de 1 a 10.

c) Imprime os números pares de 2 a 10.

d) Imprime os números ímpares de 2 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

```javascript
class Veiculo {
    constructor(marca){
        this.marca = marca;
    }
}

class Carro extends Veiculo{
    ligar(){
        console.log("Carro ligado!");
    }
}

let carro = new Carro("Toyota");

carro.ligar();
```

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

ALTERNATIVA CORRETA É A LETRA A

X) let carro = new Carro("Toyota");

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

______

**3)** Qual é o valor de resultado após a execução deste código?

```javascript
let resultado = 0;
for (let i = 10; i >= 0; i -= 2){
    if (i === 4){
        continue;
    }
    if (i === 6){
        break;
    }

    resultado += i;

}

console.log(resultado);
```

Escolha a opção que responde corretamente: ALTERNATIVA CORRETA É A LETRA A

X) 18

B) 16

C) 14

D) 12

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

ALTERNATIVA CORRETA É A LETRA A

X) ![Uma imagem](assets/ex04_1.PNG)

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

ALTERNATIVA CORRETA É A LETRA A

X) ![Uma imagem](assets/ex05_1.PNG)

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

______

**6)** Observe o código abaixo:

```javascript
class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        return `Olá, meu nome é ${this.name}.`;
    }
}

const person1 = new Person("João");
const person2 = new Person("Maria");

console.log(person1.greet() + " " + person2.greet());
```
Qual será a saída do código acima?

ALTERNATIVA A

X) "Olá, meu nome é João. Olá, meu nome é Maria."

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

```javascript
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
```

______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

```javascript
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
```

______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!


```javascript
class SomadorDeNotas{

    notaFinal = 0;

    adicionarNota(nota){
        this.notaFinal += nota;    
    }

    verTotal(){
        console.log("A sua nota final é: " + this.notaFinal);
    }
}

let somador = new SomadorDeNotas();

somador.adicionarNota(50);
somador.adicionarNota(100);

somador.verTotal();
```

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

```javascript
class Funcionario{
    constructor(nome, idade, salarioBase){
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    calcularSalario(){
        this.salarioBase *= 1.5;
        console.log("o salário é: " + this.salarioBase);
    }
}

class Professor extends Funcionario{
    constructor(nome, idade, salarioBase, disciplina, horas){
        super(nome, idade, salarioBase);
        this.disciplina = disciplina;
        this.horas = horas;
    }

    calcularSalario(){
        this.salarioBase *= (this.horas/10);
        console.log("o salário é: " + this.salarioBase);
    }
}

let prof1 = new Professor("Carlos", 23, 1000, "História", 20);
let prof2 = new Professor("Mariazinha", 45, 1500, "Matemática", 30);

prof1.calcularSalario();
prof2.calcularSalario();
```
