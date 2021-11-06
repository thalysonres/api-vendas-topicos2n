import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

//vamos criar um tipo de dado
interface IRequest {
  name: string;
  quantity: number;
  price: number;
}

class CreateProductService {
  public async execute({name, quantity, price}: IRequest): Promise<Product> {
    //regra de negócio 1 -> não podemos inserir um produto que já existe
    const productRepository = getCustomRepository(ProductRepository);
    const productExists = await productRepository.findByName(name);
    if (productExists) {
      throw new AppError(`Já existe um produto com este nome cadastrado`, 400);
    }
    //podemos salvar no banco
    //cria produto
    const product = productRepository.create ({
      name, quantity, price
    })

    //salver no banco
    await productRepository.save(product);

    return product;
  }
}

export default CreateProductService;
