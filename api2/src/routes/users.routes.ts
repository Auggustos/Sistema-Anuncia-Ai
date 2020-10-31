import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const {
    nome,
    sobrenome,
    endereco,
    celular,
    email,
    usuario,
    senha,
    perfil,
    pagamento_cartao,
  } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    nome,
    sobrenome,
    endereco,
    celular,
    email,
    usuario,
    senha,
    perfil,
    pagamento_cartao,
  });

  delete user.senha;

  return response.json(user);
});

export default usersRouter;
