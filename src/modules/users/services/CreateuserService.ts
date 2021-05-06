import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
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
  public async execute({
    nome,
    sobrenome,
    email,
    senha,
    sexo,
    data_nasc,
    telefone,
    end_cep,
    end_rua,
    end_num,
    end_cidade,
    end_bairro,
    end_uf,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError("Email já utilizado");
    }

    const user = usersRepository.create({
      nome,
      sobrenome,
      email,
      senha,
      sexo,
      data_nasc,
      telefone,
      end_cep,
      end_rua,
      end_num,
      end_cidade,
      end_bairro,
      end_uf,
    });

    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;
