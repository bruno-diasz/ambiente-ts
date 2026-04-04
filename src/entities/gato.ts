export class Gato implements Mamifero{
    raca: string;
    cor: string;
    nome: string;
    idade: number;
    som: string = 'Miau, miau, miau!!!'
    numeroDeVidas:number = 7;

    constructor(raca:string, cor:string, nome:string, idade:number){
        this.raca = raca;
        this.cor = cor;
        this.nome = nome;
        this.idade = idade;
    }

    exibirNome(): string{
        return this.nome;
    }
    emitirSom(): string{
        return this.som;
    };

}