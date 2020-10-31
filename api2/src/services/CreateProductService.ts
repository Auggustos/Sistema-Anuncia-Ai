import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Product from '../models/Product';

import uploadConfig from '../config/upload';

interface Request {
  descricao: string;
  preco: number;
  id_usuario: string;
  quantidade: number;
  nome: string;
  imagemFileName: string;
}
class CreateProductService {
  public async execute({
    descricao,
    preco,
    id_usuario,
    quantidade,
    nome,
    imagemFileName,
  }: Request): Promise<Product> {
    const productsRepository = getRepository(Product);

    const product = productsRepository.create({
      descricao,
      preco,
      imagem: imagemFileName,
      id_usuario,
      quantidade,
      nome,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
