import { Request, Response } from "express";
import { classToClass } from "class-transformer";
import CreateSessionsService from "../services/CreateSessionsService";

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, senha } = req.body;

    const createSession = new CreateSessionsService();

    const user = await createSession.execute({ email, senha });

    return res.json(classToClass(user));
  }
}
