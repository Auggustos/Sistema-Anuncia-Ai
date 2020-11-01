export class PedidoProduto {
    id: string;
    descricao: string;
    preco: number;
    imagem: string;
    id_usuario: string;
    quantidade: number;
    nome: string;
    criado_em: Date;
    atualizado_em: Date;
    deletado_em: Date;
    valor: number;
    constructor(id, descricao, preco, imagem, id_usuario, quantidade, nome, criado_em, atualizado_em, deletado_em) {
        this.id = id
        this.descricao = descricao
        this.preco = preco
        this.imagem = imagem
        this.id_usuario = id_usuario
        this.quantidade = quantidade
        this.nome = nome
        this.criado_em = criado_em
        this.atualizado_em = atualizado_em
        this.deletado_em = deletado_em
    }
}
