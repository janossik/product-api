import { Validator } from 'express-json-validator-middleware';

const validator = new Validator({ allErrors: true });

export function mapErrors(errors: Parameters<typeof validator.ajv.errorsText>[0]) {
  console.log('Error:', JSON.stringify(errors));
  return validator.ajv.errorsText(errors);
}

export const validationMiddleware = validator.validate;
