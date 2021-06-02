import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";

import authConfig from "@config/auth";
import AppError from "@shared/errors/AppError";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionsService {
  public async execute({ email, senha }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email/Senha incorretos", 401);
    }

    const confirmedPassword = await compare(senha, user.senha);

    if (!confirmedPassword) {
      throw new AppError("Email/Senha incorretos", 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.email,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default CreateSessionsService;
