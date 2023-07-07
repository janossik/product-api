import { Router } from 'express';
import { productController } from './product.controller';
import { validationMiddleware } from '~/middleware/validation.middleware';
import { productCreatedSchema, productUpdatedSchema } from '~/api/products/product.schema';
import { queryNameLimitOffsetSchema } from '~/schemas/query.schema';

const productRouter = Router();

productRouter.get('/:id', productController.read);

productRouter.get('', validationMiddleware({ query: queryNameLimitOffsetSchema }), productController.readAll);

productRouter.post('', validationMiddleware({ body: productCreatedSchema }), productController.create);

productRouter.put('/:id', validationMiddleware({ body: productUpdatedSchema }), productController.update);

productRouter.delete('/:id', productController.delete);

export default productRouter;
