import { AxiosError } from 'axios';

export class RefreshTokenError extends AxiosError {
  constructor() {
    super();
  }
}
