import { Router } from "express";
import automobileRouter from "../../../modules/automobile/routes/routes.automobiles";
import productRouter from "../../../modules/products/routes/routes.products";
import sessionRouter from "../../../modules/users/routes/routes.session";
import userRouter from "../../../modules/users/routes/routes.user";

const routes = Router();

routes.use('/automobile', automobileRouter);
routes.use('/product', productRouter);
routes.use('/user', userRouter);
routes.use('/session', sessionRouter);

export default routes;
