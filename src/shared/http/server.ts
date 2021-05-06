import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import cors from "cors";
import routes from "./routes";
import AppError from "@shared/errors/AppError";
import "@shared/typeorm";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get("/", (req, res) => {
  res.json({ salve: "alo" });
});

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
