import type { AllowedSchema } from 'express-json-validator-middleware';

export const queryNameLimitOffsetSchema: AllowedSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: {
      type: 'string',
    },
    limit: {
      type: ['string', 'number'],
    },
    offset: {
      type: ['string', 'number'],
    },
  },
};
