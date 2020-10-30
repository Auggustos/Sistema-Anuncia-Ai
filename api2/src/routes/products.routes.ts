import { Router } from 'express';
import { getRepository } from 'typeorm';

import ListProductsService from '../services/ListProductsService';
import CreateProductService from '../services/CreateProductService';

const productsRouter = Router();

productsRouter.post('/', async (request, response) => {
  try {
    const {
      descricao,
      preco,
      imagem,
      id_usuario,
      quantidade,
      nome,
    } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      descricao,
      preco,
      imagem,
      id_usuario,
      quantidade,
      nome,
    });

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

productsRouter.get('/', async (request, response) => {
  try {
    const listProducts = new ListProductsService();

    const products = await listProducts.execute();

    return response.json(products);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default productsRouter;
