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
    const { user } = req.body;

    const createUser = new CreateUserService();
    const usuario = await createUser.execute({ user });

    return res.json(usuario);
  }
}
