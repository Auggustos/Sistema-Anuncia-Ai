import CreateOrderService from '@modules/orders/services/CreateOrderService';
import ListOrdersService from '@modules/orders/services/ListOrdersService';
import { Response, Request } from 'express';
import { container } from 'tsyringe';

export default class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listOrders = container.resolve(ListOrdersService);

    const orders = await listOrders.execute();

    return response.json(orders);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const id_usuario = request.user.id;
    const { status, pedido_produtos } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      id_usuario,
      status,
      pedido_produtos,
    });

    return response.json(order);
  }
}
