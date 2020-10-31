import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import UserRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

interface Request {
  nome: string;
  sobrenome: string;
  endereco: string;
  celular: string;
  email: string;
  usuario: string;
  senha?: string;
  perfil: number;
  pagamento_cartao: boolean;
}
class CreateUserService {
  public async execute({
    nome,
    sobrenome,
    endereco,
    celular,
    email,
    usuario,
    senha,
    perfil,
    pagamento_cartao,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { usuario },
    });

    const checkEmailExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Usuário já está sendo utilizado');
    }

    if (checkEmailExists) {
      throw new AppError('Email já está sendo utilizado');
    }

    const hashedPassword = await hash(senha, 8);
    const user = usersRepository.create({
      nome,
      sobrenome,
      endereco,
      celular,
      email,
      usuario,
      senha: hashedPassword,
      perfil,
      pagamento_cartao,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
