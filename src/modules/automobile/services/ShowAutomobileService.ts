import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Automobile from "../typeorm/entities/Automobile";
import AutomobileRepository from "../typeorm/repositories/AutomobileRepository";

class ShowAutomobileService {
  public async execute(id: string): Promise<Automobile> {
    const automobileRepository = getCustomRepository(AutomobileRepository);
    const automobile = await AutomobileRepository.findOne(id);
    if(!automobile) {
      throw new AppError(`Automóvel não existe`, 400);
    }
    return automobile;
  }
}

export default ShowAutomobileService;
