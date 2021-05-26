import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
  user: IUser;
}

interface IUser {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  sexo: string;
  data_nasc: Date;
  telefone: string;
  end_cep: string;
  end_rua: string;
  end_num: string;
  end_cidade: string;
  end_bairro: string;
  end_uf: string;
}

class CreateUserService {
  public async execute({ user }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(user.email);

    if (emailExists) {
      throw new AppError("Email já utilizado");
    }

    const usuario = usersRepository.create(user);

    await usersRepository.save(usuario);
    return usuario;
  }
}

export default CreateUserService;
