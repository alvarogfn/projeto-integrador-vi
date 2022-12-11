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

export class NotFoundError extends HTTPError {
  constructor(message: string = "Cannot find this resource") {
    super(message, 404);
  }
}

export class ServerError extends HTTPError {
  constructor(message: string = "There is something broken with the server") {
    super(message, 500);
  }
}
