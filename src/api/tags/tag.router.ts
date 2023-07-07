import { Router } from 'express';
import { tagController } from './tag.controller';
import { validationMiddleware } from '~/middleware/validation.middleware';
import { tagSchema } from './tag.schema';
import { queryNameLimitOffsetSchema } from '~/schemas/query.schema';

const tagRouter = Router();

tagRouter.get('/:id', tagController.read);

tagRouter.get('', validationMiddleware({ query: queryNameLimitOffsetSchema }), tagController.readAll);

tagRouter.post('', validationMiddleware({ body: tagSchema }), tagController.create);

tagRouter.put('/:id', validationMiddleware({ body: tagSchema }), tagController.update);

tagRouter.delete('/:id', tagController.delete);

export default tagRouter;
