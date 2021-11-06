import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

class ShowProductService {
  public async execute(id: string): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);
    const product = await productRepository.findOne(id);
    if(!product) {
      throw new AppError(`Produto não existe`, 400);
    }
    return product;
  }
}

export default ShowProductService;
