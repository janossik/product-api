import { tagService } from './tag.service';
import type { RequestHandler } from 'express';

export const tagController: Record<string, RequestHandler> = {
  read: async (req, res) => {
    const id = req.params.id;
    const data = await tagService.read(id);
    res.json(data);
  },
  readAll: async (req, res) => {
    const data = await tagService.readAll(req.query);
    res.json(data);
  },
  readWithProduct: async (req, res) => {
    const id = req.params.id;
    const data = await tagService.readWithProduct(id);
    res.json(data);
  },
  readAllWithProducts: async (req, res) => {
    const data = await tagService.readAllWithProducts(req.query);
    res.json(data);
  },
  create: async (req, res) => {
    const data = await tagService.create(req.body);
    res.json(data);
  },
  update: async (req, res) => {
    const id = req.params.id;
    const data = await tagService.update(id, req.body);
    res.json(data);
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const data = await tagService.remove(id);
    res.json(data);
  },
};
