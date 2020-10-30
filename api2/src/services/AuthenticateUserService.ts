import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../config/auth';

interface Request {
  usuario: string;
  senha: string;
}

interface Response {
  user: User;
  token: string;
}
class AuthenticateUserService {
  public async execute({ usuario, senha }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { usuario } });

    if (!user) {
      throw new Error('Combinação de usuário / senha inválido.');
    }

    // user.senha - senha criptografada
    // senha - senha não criptografada
    const passwordMatched = await compare(senha, user.senha);

    if (!passwordMatched) {
      throw new Error('Combinação de usuário / senha inválido.');
    }

    // Usuário autenticado - primeiro parametro payload informações
    // a serem enviadas e utilizadas no frontend
    // 2 parametro - chave secreta

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
