export class PessoaCreate 
{
    constructor(nome: string, idade: number, relato: string, imagem: string) {
        this.nome = nome;
        this.idade= idade;
        this.relato = relato;
        this.imagem = imagem; 
    }
    nome!: string;
    idade!: number;
    relato!: string;
    imagem!: string;
}