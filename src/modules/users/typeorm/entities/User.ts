import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude, Expose } from "class-transformer";

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
  @Exclude()
  senha: string;

  @Column()
  @Exclude()
  sexo: string;

  @CreateDateColumn()
  @Exclude()
  data_nasc: string;

  @Column()
  @Exclude()
  telefone: string;

  @Column()
  @Exclude()
  end_cep: string;

  @Column()
  @Exclude()
  end_rua: string;

  @Column()
  @Exclude()
  end_num: string;

  @Column()
  @Exclude()
  end_cidade: string;

  @Column()
  @Exclude()
  end_bairro: string;

  @Column()
  @Exclude()
  end_uf: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  @Expose({ name: "avatar_url" })
  getAvatarUrl(): string | null {
    if (!this.avatar) {
      return null;
    }

    return `http://localhost:3000/files/${this.avatar}`;
  }
}

export default User;
