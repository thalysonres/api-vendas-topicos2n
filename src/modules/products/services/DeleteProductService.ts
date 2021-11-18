import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import ProductRepository from "../typeorm/repositories/ProductRepository";

class DeleteProductService {
  public async execute(id: string): Promise<void> {
    //não podemos remover um produto que não existe
    const productRepository = getCustomRepository(ProductRepository);
    const productExist = await productRepository.findOne(id);
    
    if (!productExist) {
      throw new AppError(`Produto não existe`, 400);
    }
    //podemos remover
    await productRepository.remove(productExist);
  }
}

export default DeleteProductService;
