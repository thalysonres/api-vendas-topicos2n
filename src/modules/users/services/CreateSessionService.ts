import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionService {
  public async execute({email, password}: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);
    //verificar se o usuário existente
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new AppError(`Usuário/senha inválidos`, 400);
    }
    // usuário existe
    // senha está correta ? bcryptjs
    const senhaConfirmada = await compare(password, user.password);
    if (!senhaConfirmada) {
      throw new AppError(`Usuário/senha inválidos`, 400);
    }
    //senha correta
    //gerar o token para usuário com a chave privada
    const token = sign({}, 'sdjhauyihrfejdkhfu9rhnjdjdajirewdcb', {
      subject: user.id,
      expiresIn: '1d'
    });

    return {
      user, 
      token
    }
  }
}

export default CreateSessionService;