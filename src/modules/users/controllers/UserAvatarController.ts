import { Request, Response } from "express";
import { classToClass } from "class-transformer";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

export default class UserAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const user = updateAvatar.execute({
      email: req.user.email,
      avatarFilename: req.file.filename,
    });

    return res.json(classToClass(user));
  }
}
