import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import isAuthenticated from "@shared/http/middlewares/isAuthenticated";
import BooksController from "../controllers/BooksController";

const booksRouter = Router();
const booksController = new BooksController();

booksRouter.use(isAuthenticated);

booksRouter.get("/user/:id", booksController.index);

booksRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  booksController.show,
);

booksRouter.post("/", booksController.create);

export default booksRouter;
