import { EntityRepository, Repository } from "typeorm";
import Automobile from "../entities/Automobile";

@EntityRepository(Automobile)
class AutomobileRepository extends Repository<Automobile> {
  static findOne: any;

  public async findByName(modelo: string): Promise<Automobile | undefined> {
    const automobile = this.findOne({
      where: {
        modelo
      }
    })
    return automobile
  }
}

export default AutomobileRepository
