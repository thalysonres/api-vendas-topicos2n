import { Router } from "express";
import isAuthenticated from "../../../shared/middleware/isAuthenticated";
import AutomobileController from "../controllers/AutomobileController";

let automobileRouter = Router();
let automobileController = new AutomobileController();

automobileRouter.get('/', isAuthenticated, automobileController.index);
automobileRouter.get('/:id', isAuthenticated, automobileController.show);
automobileRouter.post('/', isAuthenticated, automobileController.create);
automobileRouter.put('/:id', isAuthenticated, automobileController.update);
automobileRouter.delete('/:id', isAuthenticated, automobileController.delete);

export default automobileRouter;