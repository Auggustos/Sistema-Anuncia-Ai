import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column('type') => quando vazio o tipo padrão é string (varchar)
  // CTRL + SPACE mostra os tipos disponiveis.
  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  endereco: string;

  @Column()
  celular: string;

  @Column()
  email: string;

  @Column()
  usuario: string;

  @Column()
  senha: string;

  @Column()
  perfil: string;

  @Column('boolean')
  pagamento_cartao: boolean;
}

export default User;
