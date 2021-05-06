import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  sexo: string;

  @CreateDateColumn()
  data_nasc: Date;

  @Column()
  telefone: string;

  @Column()
  end_cep: string;

  @Column()
  end_rua: string;

  @Column()
  end_num: string;

  @Column()
  end_cidade: string;

  @Column()
  end_bairro: string;

  @Column()
  end_uf: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default User;
