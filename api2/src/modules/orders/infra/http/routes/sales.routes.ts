import { Router } from 'express';

import ensureAuhenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import SalesController from '../controllers/SalesController';

const salesRouter = Router();
const salesController = new SalesController();

salesRouter.use(ensureAuhenticated);
salesRouter.get('/', salesController.index);

export default salesRouter;
