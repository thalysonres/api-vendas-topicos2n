import { Request, Response } from "express";
import ListAutomobileService from "../services/ListAutomobileService";
import ShowAutomobileService from "../services/ShowAutomobileService";
import CreateAutomobileService from "../services/CreateAutomobileService";
import UpdateAutomobileService from "../services/UpdateAutomobileService";
import DeleteAutomobileService from "../services/DeleteAutomobileService";

export default class AutomobileController {

  public async index(req:Request, res:Response): Promise<Response> {
    const listAutomobile = new ListAutomobileService();
    const automobiles = await listAutomobile.execute();
    return res.json(automobiles); 
  }

  public async show(req:Request, res:Response): Promise<Response> {
    const {id} = req.params;
    const showAutomobile = new ShowAutomobileService();
    const automobile = await showAutomobile.execute(id);
    return res.json(automobile);
  }

  public async create(req:Request, res:Response): Promise<Response> {
    const {ano, modelo, marca} = req.body;
    const createAutomobile = new CreateAutomobileService();
    const automobile = await createAutomobile.execute({ano, modelo, marca});
    return res.json(automobile);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
      const {ano, modelo, marca} = req.body;
      const updateAutomobile = new UpdateAutomobileService();
      const automobile = await updateAutomobile.execute({id, ano, modelo, marca});
    return res.json(automobile);
  }

  public async delete(req:Request, res:Response): Promise<Response> {
    const {id} = req.params;
    const deleteAutomobile = new DeleteAutomobileService();
    await deleteAutomobile.execute(id);
    return res.json([]);
  }
}
