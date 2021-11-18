import { Request, Response } from "express";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import CreateProductService from "../services/CreateProductService";
import UpdateProductService from "../services/UpdateProductService";
import DeleteProductService from "../services/DeleteProductService";

//observem que não há regra de negócios aqui, elas estão nos services para
export default class ProductController {
  //vai chamar o ListProductService
  public async index(req:Request, res:Response): Promise<Response> {
    const listProduct = new ListProductService();
    const products = await listProduct.execute();
    return res.json(products); //converte para JSON e retorna
  }

  //vai chamar o ShowProductService
  public async show(req:Request, res:Response): Promise<Response> {
    //recupera o id do produto que vem dentro dos parâmetros da URL
    const {id} = req.params;
    const showProduct = new ShowProductService();
    const product = await showProduct.execute(id);
    return res.json(product);
  }

  //vai chamar o CreateProductService
  public async create(req:Request, res:Response): Promise<Response> {
    //recupera os dados do produto que vem no corpo (body) da requisição
    const {name, quantity, price} = req.body;
    const createProduct = new CreateProductService();
    const product = await createProduct.execute({name, quantity, price});
    return res.json(product);
  }

    //vai chamar o UpdateProductService
    public async update(req: Request, res: Response): Promise<Response> {
      // recupera o id do produto que vem dentro dos parâmetros da URL
      const {id} = req.params;
       // recupera os dados do produto que vem no corpo (body) do requisição
       const {name, quantity, price} = req.body;
       const updateProduct = new UpdateProductService();
       const product = await updateProduct.execute({id, name, quantity, price});
      return res.json(product);
  }

  //vai chamar o ShowProductService
  public async delete(req:Request, res:Response): Promise<Response> {
    //recupera o id do produto que vem dentro dos parâmetros da URL
    const {id} = req.params;
    const deleteProduct = new DeleteProductService();
    await deleteProduct.execute(id);
    return res.json([]);
  }
}
