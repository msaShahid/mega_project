export default class AppSuccess<T extends object = {}> {

  public readonly status: number;
  public readonly message: string;
  public readonly data: T;
  public readonly success: boolean = true;

  /**
   * Create a successful response object.
   * @param message - success message
   * @param data - optional response payload (default: empty object)
   * @param status - HTTP status code (default: 200)
   */
  constructor(message: string, data: T = {} as T, status = 200) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
