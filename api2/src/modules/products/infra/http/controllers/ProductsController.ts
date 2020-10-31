import { Response, Request } from 'express';
import { container } from 'tsyringe';
import ListProductsService from '@modules/products/services/ListProductsService';
import CreateProductService from '@modules/products/services/CreateProductService';
import sharp from 'sharp';
import fs from 'fs';
import ShowProductService from '@modules/products/services/ShowProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
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

  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = container.resolve(ListProductsService);

    const products = await listProducts.execute();

    products.map(product => {
      const productOwnerWithoutPassword = product.usuario;
      delete productOwnerWithoutPassword.senha;
      return true;
    });

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProduct = container.resolve(ShowProductService);

    const product = await showProduct.execute(id);

    delete product.usuario.senha;

    return response.json(product);
  }
}
