import { ValidationError } from 'express-json-validator-middleware';
import { mapErrors } from '~/middleware/validation.middleware';
import { ErrorWithStatus } from '~/error/error-with-status';
import { NextFunction, Request, Response } from 'express';

// Removed _next from parameters, will cause express to not know that this is an error handler middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: Error | ErrorWithStatus | ValidationError, req: Request, res: Response, _next: NextFunction) => {
  const { message, stack = '' } = err;
  let statusCode = 500;
  let errors: undefined | string | string[];

  if (err instanceof ErrorWithStatus) {
    statusCode = err.status;
    errors = err.message;
  }

  const computedStack = process.env.NODE_ENV === 'development' ? stack.split('\n') : undefined;

  if (err instanceof ValidationError) {
    statusCode = 400;
    errors = mapErrors(Object.values(err.validationErrors)?.[0]);
  }

  console.error('\n[Error handler]:', err?.message);
  console.log(stack.split('\n').slice(1)?.join('\n'));

  res.status(statusCode).json({ message: message ? message : errors, stack: computedStack, errors });
};
