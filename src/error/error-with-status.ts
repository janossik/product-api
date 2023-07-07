export class ErrorWithStatus extends Error {
  public status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.status = status;
  }
}
