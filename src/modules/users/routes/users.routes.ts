import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import UsersController from "../controllers/UsersController";
import isAuthenticated from "@shared/http/middlewares/isAuthenticated";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get("/", isAuthenticated, usersController.index);

usersRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  usersController.show,
);

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      sobrenome: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().required(),
      sexo: Joi.string().required(),
      data_nasc: Joi.date().required(),
      telefone: Joi.string().required(),
      end_cep: Joi.string().required(),
      end_rua: Joi.string().required(),
      end_num: Joi.number().required(),
      end_cidade: Joi.string().required(),
      end_bairro: Joi.string().required(),
      end_uf: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;
