export class Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    id_usuario: number;
    quantidade: number;
    constructor(id, nome, descricao, preco, imagem, id_usuario, quantidade) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
        this.id_usuario = id_usuario;
        this.quantidade = quantidade;
    }
}
