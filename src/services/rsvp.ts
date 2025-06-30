import { client } from '@/config/axios';
import { CreateRSVPBody } from '@/schemas/rsvp/rsvp.schema';
import { Response } from '@/types/response';
import { IRSVP, IRSVPResponse } from '@/types/rsvp';

export async function getRsvp(): Promise<Response<IRSVPResponse>> {
  const { data } = await client.get('/rsvp');
  return data;
}

export async function rsvp(body: CreateRSVPBody): Promise<Response<IRSVP>> {
  const { data } = await client.post('/rsvp', body);
  return data;
}
