import { categoryService } from './category.service.js';
import { RequestHandler } from 'express';

export const categoryController: Record<string, RequestHandler> = {
  read: async (req, res) => {
    const id = req.params.id;
    const data = await categoryService.read(id);
    res.json(data);
  },
  readAll: async (req, res) => {
    const data = await categoryService.readAll(req.query);
    res.json(data);
  },
  create: async (req, res) => {
    const data = await categoryService.create(req.body);
    res.json(data);
  },
  update: async (req, res) => {
    const id = req.params.id;
    const data = await categoryService.update(id, req.body);
    res.json(data);
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const data = await categoryService.remove(id);
    res.json(data);
  },
};
