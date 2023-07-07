import type { AllowedSchema } from 'express-json-validator-middleware';

export const tagSchema: AllowedSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    name: {
      type: 'string',
    },
  },
};
