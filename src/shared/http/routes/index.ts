
import { Router } from "express";
import productRouter from "../../../modules/products/routes/routes.products";

const routes = Router();

// acessando /product, poderemos executar get, post, put e delete 
routes.use('/product', productRouter);

export default routes;
