import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import User from "@modules/users/typeorm/entities/User";

@Entity("books")
class Book {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  isbn: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  ano_pub?: number;

  @Column()
  descricao?: string;

  @Column()
  editora?: string;

  @Column()
  classificacao?: string;

  @Column()
  capa?: string;

  @Column()
  idioma?: string;

  @Column()
  genero?: string;

  @Column()
  disponibilidade: string;

  @ManyToOne(() => User, user => user.books)
  @JoinColumn({ name: "user_id" })
  user_id: number;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}

export default Book;
