export class HTTPError extends Error {
  public readonly code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export class BadRequestError extends HTTPError {
  constructor(message: string = "Cannot access this resource") {
    super(message, 400);
  }
}

export class ForbiddenResourceError extends HTTPError {
  constructor(message: string = "Cannot access this resource") {
    super(message, 401);
  }
}

export class UnprocessableEntityError extends HTTPError {
  constructor(message: string = "Cannot process your request") {
    super(message, 422);
  }
}
