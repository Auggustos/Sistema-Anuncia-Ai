import { getRepository, Repository } from 'typeorm';
import Order from '@modules/orders/infra/typeorm/entities/Order';

import ISalesRepository from '@modules/orders/repositories/ISalesRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Product from '@modules/products/infra/typeorm/entities/Product';

class SalesRepository implements ISalesRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async findById(id: string): Promise<Order | undefined> {
    const product = await this.ormRepository.findOne({
      where: { id },
      relations: ['usuario'],
    });

    return product;
  }

  public async findAll(): Promise<Order[]> {
    const orders = await this.ormRepository.find({
      relations: ['pedido_produtos', 'pedido_produtos.produto'],
    });

    return orders;
  }

  public async findAllSales(id: string): Promise<Order[]> {
    const orders = await this.ormRepository.find({
      relations: ['pedido_produtos', 'pedido_produtos.produto'],
      where: {
        'pedido_produto.id_usuario': { id_usuario: id },
      },
    });

    return orders;
  }

  public async create(orderData: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(orderData);

    await this.ormRepository.save(order);

    order.pedido_produtos.forEach(async elem => {
      await this.ormRepository.manager.decrement(
        Product,
        { id: elem.id_produto },
        'quantidade',
        elem.quantidade
      );
    });

    return order;
  }

  public async save(order: Order): Promise<Order> {
    return this.ormRepository.save(order);
  }

  public async delete(order: Order): Promise<Order> {
    return this.ormRepository.softRemove(order);
  }
}

export default SalesRepository;
