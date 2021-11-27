import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Automobile from "../typeorm/entities/Automobile";
import AutomobileRepository from "../typeorm/repositories/AutomobileRepository";

interface IRequest {
    id: string
    ano: number;
    modelo: string;
    marca: string;     
}

class UpdateAutomobileService {
    
  public async execute({id, ano, modelo, marca}: IRequest): Promise<Automobile>{
    const automobileRepository = getCustomRepository(AutomobileRepository);
    const automobileExist = await automobileRepository.findOne(id);
    if (!automobileExist){
      throw new AppError(`Automóvel não existe`, 400);
    }
    const automobileName = await automobileRepository.findByName(modelo);
    if (automobileName){
      throw new AppError(`Já existe automóvel com este nome`, 400);
    }

    automobileExist.ano = ano;
    automobileExist.modelo = modelo;
    automobileExist.marca = marca;
    await automobileRepository.save(automobileExist);

    return automobileExist;
  }
}

export default UpdateAutomobileService;
