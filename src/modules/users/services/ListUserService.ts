import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UserRepository";


class ListUserService {
  
  public async execute(): Promise<User[]> {
   let  userRepository = getCustomRepository(UserRepository);
   const users = userRepository.find();
   return users;
  }
}

export default ListUserService;
