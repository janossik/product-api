import { RequestHandler } from 'express';
import { productService } from './product.service';

export const productController: Record<string, RequestHandler> = {
  read: async (req, res) => {
    const id = req.params.id;
    const data = await productService.read(id);
    res.json(data);
  },
  readAll: async (req, res) => {
    const data = await productService.readAll({ ...req.query, withCategories: Boolean(req.query?.addCategories), withTags: Boolean(req.query?.addTags) });
    res.json(data);
  },
  create: async (req, res) => {
    const data = await productService.create(req.body);
    res.json(data);
  },
  update: async (req, res) => {
    const id = req.params.id;
    const data = await productService.update(id, req.body);
    res.json(data);
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const data = await productService.remove(id);
    res.json(data);
  },
};
