export class Cachorro implements Mamifero{
    raca: string;
    cor: string;
    nome: string;
    idade: number;
    lealdade: number;
    som:string = 'Au, au, auuu!!!';

    constructor(raca:string, cor:string, nome:string, idade:number, lealdade:number){
        this.raca = raca;
        this.cor = cor;
        this.nome = nome;
        this.idade = idade;
        this.lealdade = lealdade;
    }
    exibirNome(): string{
        return this.nome;
    };
    emitirSom(): string{
        return this.som;
    };

}