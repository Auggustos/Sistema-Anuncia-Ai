import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ensureAuhenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { container } from 'tsyringe';
import OrdersController from '../controllers/OrdersController';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.use(ensureAuhenticated);
ordersRouter.post('/', ordersController.create);
ordersRouter.get('/', ordersController.index);

export default ordersRouter;
