import { client } from '@/config/axios';
import { LoginBody } from '@/schemas/auth/auth.schema';
import { Response } from '@/types/response';
import { ILoginResponse } from '@/types/user';

export async function login(body: LoginBody): Promise<Response<ILoginResponse>> {
  const { data } = await client.post('/auth/login', body);
  return data;
}
