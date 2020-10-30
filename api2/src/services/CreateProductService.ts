import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Product from '../models/Product';

interface Request {
  descricao: string;
  preco: number;
  imagem: string;
  id_usuario: string;
  quantidade: number;
  nome: string;
}
class CreateProductService {
  public async execute({
    descricao,
    preco,
    imagem,
    id_usuario,
    quantidade,
    nome,
  }: Request): Promise<Product> {
    const productsRepository = getRepository(Product);

    const product = productsRepository.create({
      descricao,
      preco,
      imagem,
      id_usuario,
      quantidade,
      nome,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
