import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Product from '../models/Product';

interface Request {
  descricao: string;
  preco: number;
  imagem: string;
  id_usuario: string;
  quantidade: number;
  nome: string;
}
class CreateUserService {
  public async execute({ descricao, preco, imagem }: Request): Promise<void> {
    /* const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { usuario },
    });

    const checkEmailExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Usuário já está sendo utilizado');
    }

    if (checkEmailExists) {
      throw new Error('Email já está sendo utilizado');
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

    await usersRepository.save(user); */
  }
}

export default CreateUserService;
