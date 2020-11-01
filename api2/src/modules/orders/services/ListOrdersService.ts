import Order from '@modules/orders/infra/typeorm/entities/Order';
import { injectable, inject } from 'tsyringe';
import IOrdersRepository from '../repositories/IOrdersRepository';

@injectable()
class ListOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  public async execute(
    perfil: number,
    id: string
  ): Promise<Order[] | undefined> {
    let orders;
    if (perfil === 0) {
      orders = await this.ordersRepository.findAll();
    } else if (perfil === 1) {
      orders = await this.ordersRepository.findAllSales(id);
    }

    return orders;
  }
}

export default ListOrdersService;
