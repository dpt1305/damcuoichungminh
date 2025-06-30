import { PASSWORD_REGEX } from '@/constants/regex.constant';
import * as type from 'zod';

export const LoginSchema = type.object({
  username: type.string().min(1, { message: 'Invalid username' }),
  password: type.string().regex(PASSWORD_REGEX, 'Invalid password'),
});

export type LoginBody = type.infer<typeof LoginSchema>;
