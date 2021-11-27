import { getCustomRepository } from "typeorm";
import Automobile from "../typeorm/entities/Automobile";
import AutomobileRepository from "../typeorm/repositories/AutomobileRepository";

class ListAutomobileService {
  public async execute(): Promise<Automobile[]> {
    const automobileRepository = getCustomRepository(AutomobileRepository);
    const automobiles = await automobileRepository.find();
    return automobiles;
  }
}

export default ListAutomobileService;
