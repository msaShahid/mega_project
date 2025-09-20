export default class AppError extends Error {
  public status: number;
  public isOperational: boolean;

  constructor(message: string, status = 500, isOperational = true) {
    super(message);

    this.status = status;
    this.isOperational = isOperational;

    // Only keep proper stack trace if supported (V8 engines)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    // Set the prototype explicitly (necessary for extending built-ins in TypeScript)
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
