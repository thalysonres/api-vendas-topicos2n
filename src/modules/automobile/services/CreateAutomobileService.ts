import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Automobile from "../typeorm/entities/Automobile";
import AutomobileRepository from "../typeorm/repositories/AutomobileRepository";

interface IRequest {
  ano: number;
  modelo: string;
  marca: string;
}

class CreateAutomobileService {
  public async execute({ano, modelo, marca}: IRequest): Promise<Automobile> {

    const automobileRepository = getCustomRepository(AutomobileRepository);
    const automobileExists = await automobileRepository.findByName(modelo);
    if (automobileExists) {
      throw new AppError(`Já existe um automóvel com este nome cadastrado`, 400);
    }
    const automobile = automobileRepository.create ({
      ano, modelo, marca
    })
    await automobileRepository.save(automobile);

    return automobile;
  }
}

export default CreateAutomobileService;
