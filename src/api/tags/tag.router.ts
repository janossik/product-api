import { Router } from 'express';
import { tagController } from './tag.controller.js';
import { validationMiddleware } from '~/middleware/validation.middleware';
import { tagSchema } from './tag.schema';

const tagRouter = Router();

tagRouter.get('/:id', tagController.read);

tagRouter.get('', tagController.readAll);

tagRouter.post('', validationMiddleware({ body: tagSchema }), tagController.create);

tagRouter.put('/:id', validationMiddleware({ body: tagSchema }), tagController.update);

tagRouter.delete('/:id', tagController.delete);

export default tagRouter;
