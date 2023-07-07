import { Router } from 'express';
import productRouter from '~/api/products/product.router';
import tagRouter from '~/api/tags/tag.router';
import categoryRouter from '~/api/categories/category.router';

const api = Router();

api.use('/products', productRouter);
api.use('/tags', tagRouter);
api.use('/categories', categoryRouter);

export default api;
