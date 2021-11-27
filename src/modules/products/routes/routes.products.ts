import { Router } from "express";
import isAuthenticated from "../../../shared/middleware/isAuthenticated";
import ProductController from "../controllers/ProductController";

//vamos utilizar a classe Router do express
let productRouter = Router();
let productController = new ProductController();

productRouter.get('/', isAuthenticated, productController.index);
productRouter.get('/:id', isAuthenticated, productController.show);
productRouter.post('/', isAuthenticated, productController.create);
productRouter.put('/:id', isAuthenticated, productController.update);
productRouter.delete('/:id', isAuthenticated, productController.delete);

export default productRouter;