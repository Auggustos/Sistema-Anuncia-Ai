import { Router } from 'express';
import fs from 'fs';
import multer from 'multer';
import sharp from 'sharp';
import uploadConfig from '@config/upload';
import ListProductsService from '@modules/products/services/ListProductsService';
import CreateProductService from '@modules/products/services/CreateProductService';
import ensureAuhenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { container } from 'tsyringe';

const productsRouter = Router();
const upload = multer(uploadConfig);
productsRouter.post(
  '/',
  ensureAuhenticated,
  upload.single('imagem'),
  async (request, response) => {
    const { id, perfil } = request.user;
    const { descricao, preco, id_usuario, quantidade, nome } = request.body;

    const createProduct = container.resolve(CreateProductService);

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
  }
);

productsRouter.get('/', async (request, response) => {
  const listProducts = container.resolve(ListProductsService);

  const products = await listProducts.execute();

  return response.json(products);
});

export default productsRouter;
