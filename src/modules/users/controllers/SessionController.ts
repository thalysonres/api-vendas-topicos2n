import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";

class SessionController {
  public async create( req: Request, res: Response): Promise<Response>  {
    const createSessionService = new CreateSessionService();

    const { email, password } = req.body;

    const user = await createSessionService.execute({
      email, 
      password
    })
    return res.json(user);
  }
}

export default SessionController;
