import { Router } from "express";

import sessionsRouter from "@modules/users/routes/sessions.routes";
import usersRouter from "@modules/users/routes/users.routes";
import booksRouter from "@modules/books/routes/books.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/books", booksRouter);

export default routes;
