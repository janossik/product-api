import { Router } from 'express';
import { categoryController } from './category.controller.js';
import { categorySchema } from './category.schema';
import { validationMiddleware } from '~/middleware/validation.middleware';

const categoryRouter = Router();

categoryRouter.get('/:id', categoryController.read);

categoryRouter.get('', categoryController.readAll);

categoryRouter.post('', validationMiddleware({ body: categorySchema }), categoryController.create);

categoryRouter.put('/:id', validationMiddleware({ body: categorySchema }), categoryController.update);

categoryRouter.delete('/:id', categoryController.delete);

export default categoryRouter;
