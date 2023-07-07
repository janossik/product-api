import type { AllowedSchema } from 'express-json-validator-middleware';

export const queryNameLimitOffsetSchema: AllowedSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: {
      type: 'string',
    },
    limit: {
      type: 'number',
    },
    offset: {
      type: 'number',
    },
  },
};
