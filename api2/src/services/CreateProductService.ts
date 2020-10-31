import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Product from '../models/Product';

import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  perfil: number;
  descricao: string;
  preco: number;
  id_usuario: string;
  quantidade: number;
  nome: string;
  imagemFileName: string;
}
class CreateProductService {
  public async execute({
    id,
    perfil,
    descricao,
    preco,
    id_usuario,
    quantidade,
    nome,
    imagemFileName,
  }: Request): Promise<Product> {
    if (perfil === 0) {
      throw new AppError('Você não é um vendedor', 401);
    }

    if (!id) {
      throw new AppError('Você não está logado', 401);
    }
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
