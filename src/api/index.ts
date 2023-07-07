import { Router } from 'express';
import fs from 'fs';
import path from 'path';
const api = Router();

for (const apiName of fs.readdirSync(__dirname)) {
  const currentPath = path.join(__dirname, apiName);
  if (!fs.statSync(currentPath).isDirectory()) continue;
  for (const name of fs.readdirSync(currentPath)) {
    if (name.includes('router.ts') || name.includes('router.js')) {
      const router = require(path.join(currentPath, name))?.default;
      router && api.use(`/${apiName}`, router);
    }
  }
}

export default api;
