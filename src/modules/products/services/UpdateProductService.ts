import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface IRequest {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

class UpdateProductService {
  public async execute({id, name, quantity, price}: IRequest): Promise<Product> {
    //não podemos atualizar um produto que não existe
    const productRepository = getCustomRepository(ProductRepository);
    const productExist = await productRepository.findOne(id);
    if (!productExist) {
      throw new AppError(`Produto não existe`, 400);
    }
    //produto existe
    //será que o nome existe?
    const productName = await productRepository.findByName(name);
    if(productName) {
      throw new AppError(`Já existe produto com este nome`, 400);
    }
    //podemos atualizar
    productExist.name = name;
    productExist.quantity = quantity;
    productExist.price = price;
    await productRepository.save(productExist) //atualiza pois productExist tem id

    return productExist;
  }
}

export default UpdateProductService;
