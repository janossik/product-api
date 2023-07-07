import { RequestHandler } from 'express';
import { productService } from './product.service';

export const productController: Record<string, RequestHandler> = {
  read: (req, res) => {
    const id = req.params.id;
    const data = productService.read(id);
    res.json(data);
  },
  readAll: (req, res) => {
    const data = productService.readAll(req.query);
    res.json(data);
  },
  create: (req, res) => {
    const data = productService.create(req.body);
    res.json(data);
  },
  update: (req, res) => {
    const id = req.params.id;
    const data = productService.update(id, req.body);
    res.json(data);
  },
  delete: (req, res) => {
    const id = req.params.id;
    const data = productService.remove(id);
    res.json(data);
  },
};
