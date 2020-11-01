import { getRepository, Repository } from 'typeorm';
import Order from '@modules/orders/infra/typeorm/entities/Order';

import ISalesRepository from '@modules/orders/repositories/ISalesRepository';

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

  public async findAll(id: string): Promise<Order[]> {
    const orders = await this.ormRepository
      .createQueryBuilder('pedidos')
      .innerJoinAndSelect('pedidos.pedido_produtos', 'pedido_produto')
      .innerJoinAndSelect('pedido_produto.produto', 'produto')
      .where('produto.id_usuario = :id', { id })
      .getMany();

    return orders;
  }
}

export default SalesRepository;
