import { Router } from 'express';
import { productController } from './product.controller';
import { validationMiddleware } from '~/middleware/validation.middleware';
import { productCreatedSchema, productUpdatedSchema, queryProductSchema } from '~/api/products/product.schema';

const productRouter = Router();

productRouter.get('/:id', productController.read);

productRouter.get('', validationMiddleware({ query: queryProductSchema }), productController.readAll);

productRouter.post('', validationMiddleware({ body: productCreatedSchema }), productController.create);

productRouter.put('/:id', validationMiddleware({ body: productUpdatedSchema }), productController.update);

productRouter.delete('/:id', productController.delete);

export default productRouter;
