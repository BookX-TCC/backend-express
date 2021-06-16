import { NextFunction, Request, Response } from "express";
import { Secret, verify } from "jsonwebtoken";

import AppError from "@shared/errors/AppError";
import authConfig from "@config/auth";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT não encontrado");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret);

    console.log(decodedToken);

    const { sub } = decodedToken as ITokenPayload;

    req.user = {
      email: sub,
    };

    return next();
  } catch {
    throw new AppError("JWT inválido");
  }
}
