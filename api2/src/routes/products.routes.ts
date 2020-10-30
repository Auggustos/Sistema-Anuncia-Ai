import { Router } from 'express';
import { getRepository } from 'typeorm';

import multer from 'multer';
import uploadConfig from '../config/upload';
import ListProductsService from '../services/ListProductsService';
import CreateProductService from '../services/CreateProductService';
import ensureAuhenticated from '../middlewares/ensureAuthenticated';

const productsRouter = Router();
const upload = multer(uploadConfig);
productsRouter.post(
  '/',
  ensureAuhenticated,
  upload.single('imagem'),
  async (request, response) => {
    try {
      if (request.user.perfil === 0) {
        throw new Error('Você não é um vendedor');
      }

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
  }
);

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
