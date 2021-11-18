import { Router } from "express";
import ProductController from "../controllers/ProductController";

//vamos utilizar a classe Router do express
let productRouter = Router();
let productController = new ProductController();

productRouter.get('/', productController.index);
productRouter.get('/:id', productController.show);
productRouter.post('/', productController.create);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);

export default productRouter;