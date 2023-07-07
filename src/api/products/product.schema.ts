import type { AllowedSchema } from 'express-json-validator-middleware';

export const productCreatedSchema: AllowedSchema = {
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

export const productUpdatedSchema: AllowedSchema = {
  type: 'object',
  additionalProperties: false,
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
