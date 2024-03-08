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