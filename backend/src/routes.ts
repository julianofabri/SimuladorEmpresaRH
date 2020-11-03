import { Router } from 'express';
import EnterpriseController from './controllers/EnterprisesController';
import ProvidersController from './controllers/ProvidersController';

const routes = Router();

routes.post('/enterprises', EnterpriseController.create);
routes.get('/enterprises', EnterpriseController.index);

routes.post('/providers', ProvidersController.create);
routes.get('/providers', ProvidersController.index);
routes.get('/providers/show', ProvidersController.show);
export default routes;