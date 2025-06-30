export interface Response<T> {
  message?: string;
  data: T;
  total?: number;
}
