import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUsersService";
import ShowUserService from "../services/ShowUserService";

export default class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUsers = new ListUserService();

    const users = await listUsers.execute();

    return res.json(users);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showUser = new ShowUserService();
    const user = await showUser.execute({ id });

    return res.json(user);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const {
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
    } = req.body;

    const createUser = new CreateUserService();
    const usuario = await createUser.execute({
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

    return res.json(usuario);
  }
}
