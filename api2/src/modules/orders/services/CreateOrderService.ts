import OrderProduct from '@modules/orders/infra/typeorm/entities/OrderProduct';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IRequest {
  id_usuario: string;
  status: number;
  pedido_produtos: OrderProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  public async execute({
    id_usuario,
    status,
    pedido_produtos,
  }: IRequest): Promise<Order> {
    const order = await this.ordersRepository.create({
      id_usuario,
      status,
      pedido_produtos,
    });

    await this.ordersRepository.save(order);

    return order;
  }
}

export default CreateOrderService;
