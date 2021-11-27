import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import AutomobileRepository from "../typeorm/repositories/AutomobileRepository";

class DeleteAutomobileService {
  public async execute(id: string): Promise<void> {

    const automobileRepository = getCustomRepository(AutomobileRepository);
    const automobileExist = await automobileRepository.findOne(id);
    
    if (!automobileExist) {
      throw new AppError(`Automóvel não existe`, 400);
    }
    await automobileRepository.remove(automobileExist);
  }
}

export default DeleteAutomobileService;
