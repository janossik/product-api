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
    tag_id: {
      type: 'number',
    },
    category_id: {
      type: 'number',
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
    tag_id: {
      type: 'number',
    },
    category_id: {
      type: 'number',
    },
  },
};

export const queryProductSchema: AllowedSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    tag: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    withCategories: {
      anyOf: [
        {
          type: 'boolean',
        },
        {
          type: 'string',
        },
      ],
    },
    withTags: {
      anyOf: [
        {
          type: 'boolean',
        },
        {
          type: 'string',
        },
      ],
    },
    limit: {
      anyOf: [
        {
          type: 'number',
        },
        {
          type: 'string',
        },
      ],
    },
    offset: {
      anyOf: [
        {
          type: 'number',
        },
        {
          type: 'string',
        },
      ],
    },
  },
};
