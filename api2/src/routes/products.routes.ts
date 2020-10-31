import { Router } from 'express';
import { getRepository } from 'typeorm';

import multer from 'multer';
import sharp from 'sharp';
import uploadConfig from '../config/upload';
import ListProductsService from '../services/ListProductsService';
import CreateProductService from '../services/CreateProductService';
import ensureAuhenticated from '../middlewares/ensureAuthenticated';

const fs = require('fs');

const productsRouter = Router();
const upload = multer(uploadConfig);
productsRouter.post(
  '/',
  ensureAuhenticated,
  upload.single('imagem'),
  async (request, response) => {
    try {
      const { id, perfil } = request.user;
      const { descricao, preco, id_usuario, quantidade, nome } = request.body;

      const createProduct = new CreateProductService();

      const product = await createProduct.execute({
        id,
        perfil,
        descricao,
        preco,
        imagemFileName: request.file.filename,
        id_usuario,
        quantidade,
        nome,
      });

      sharp(request.file.path)
        .resize(300, 300, {
          kernel: sharp.kernel.nearest,
          fit: sharp.fit.fill,
          position: 'center',
          background: '#fff',
        })
        .toBuffer()
        .then(info => {
          fs.writeFileSync(request.file.path, info);
        })
        .catch(err => {
          console.log(err);
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
