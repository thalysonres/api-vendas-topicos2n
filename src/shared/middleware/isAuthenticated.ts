import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { verify } from "jsonwebtoken";

export default function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
  //recuperar o token informado pelo usuário
  let authHeaders = req.headers.authorization

  if (!authHeaders) { //frontend não informou o token
    throw new AppError(`Token não está presente`, 400);
  }
  //frontend informou o token
  //Beared sdjhauyihrfejdkhfu9rhnjdjdajirewdcb
  let [, token] = authHeaders.split(' ');
  //verificar se o token é valido 
  try {
    let verifiedToken = verify(token, 'sdjhauyihrfejdkhfu9rhnjdjdajirewdcb');
    return next(); // passa pra frente, entra na rota
  }
  catch {
    throw new AppError(`Token inválido`, 400);
  }

}
