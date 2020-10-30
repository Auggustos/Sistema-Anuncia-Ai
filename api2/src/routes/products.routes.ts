import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateUserService from '../services/CreateUserService';

const productsRouter = Router();

productsRouter.post('/', async (request, response) => {
  try {
    return response.json({ ok: true });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default productsRouter;
