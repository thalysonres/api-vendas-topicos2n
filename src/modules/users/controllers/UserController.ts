import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";

class UserController {
  
  public async index(req: Request, res: Response): Promise<Response> {

    let listUserService = new ListUserService();
    let users = await listUserService.execute();
    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {

    let createUserService = new CreateUserService();
    //obter os dados do usuário
    let { name, email, password} = req.body;
    let user = await createUserService.execute({
      name, 
      email,
      password
    });
    return res.json(user);
  }
}

export default UserController;