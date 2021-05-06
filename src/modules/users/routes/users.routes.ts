import { Router } from "express";
import UsersController from "../controllers/UsersController";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get("/", usersController.index);
usersRouter.get("/:id", usersController.show);
usersRouter.post("/", usersController.create);

export default usersRouter;
