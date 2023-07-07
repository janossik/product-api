import { Router } from 'express';
import { categoryController } from './category.controller';
import { categorySchema } from './category.schema';
import { validationMiddleware } from '~/middleware/validation.middleware';
import { queryNameLimitOffsetSchema } from '~/schemas/query.schema';

const categoryRouter = Router();

categoryRouter.get('/:id', categoryController.read);

categoryRouter.get('', validationMiddleware({ query: queryNameLimitOffsetSchema }), categoryController.readAll);

categoryRouter.post('', validationMiddleware({ body: categorySchema }), categoryController.create);

categoryRouter.put('/:id', validationMiddleware({ body: categorySchema }), categoryController.update);

categoryRouter.delete('/:id', categoryController.delete);

export default categoryRouter;
