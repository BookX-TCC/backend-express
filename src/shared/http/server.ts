import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { errors } from "celebrate";

import routes from "./routes";
import AppError from "@shared/errors/AppError";
import "@shared/typeorm";
import uploadConfig from "@config/upload";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static(uploadConfig.directory));
app.use(routes);

app.use(errors());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "erro",
    message: "Erro interno do servidor",
  });
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000"),
);
