import type { AllowedSchema } from 'express-json-validator-middleware';

export const productSchema: AllowedSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['name', 'author', 'code'],
  properties: {
    name: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    code: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
  },
};
