import 'reflect-metadata';
import 'express-async-errors';
import AppError from '../errors/AppError';
// servidor http
import express, { NextFunction, Request, Response } from 'express';
// importar as rotas
import routes from './routes';
// cors -> permissão de acesso às rotas
import cors from 'cors';
// cria a conexão com o banco de dados
import './../typeorm';


// cria o servidor
const servidor = express();

// servidor vai utilizar o cors
servidor.use(cors());

// servidor vai converte valores do usuário para jSON
servidor.use(express.json());

// servidor reconhecendo a rota /product
servidor.use(routes);

//vamos configurar servidor para que erros sejam respondidos pelo AppError
servidor.use(
  (error:Error, req:Request, res:Response, next:NextFunction) => {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: 'error',
        message: error.message
      })
    }
    //erro não foi lançado pelo AppError en
    return res.status(500).json({
      status: 'error',
      message: 'Erro interno do servidor'
    })
  }
)

// sobe o servidor
servidor.listen(3333, () => {
  console.log(`Server up and running `);
})
