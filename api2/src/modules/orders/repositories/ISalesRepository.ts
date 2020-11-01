import Order from '../infra/typeorm/entities/Order';
// - findByUser
// - createAndSave
export default interface ISalesRepository {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | undefined>;
  delete(order: Order): Promise<Order>;
}
