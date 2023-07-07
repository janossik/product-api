import type { AllowedSchema } from 'express-json-validator-middleware';
export const categorySchema: AllowedSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    name: {
      type: 'string',
    },
  },
};
