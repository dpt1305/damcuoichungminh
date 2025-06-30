import { PHONE_NUMBER_REGEX } from '@/constants/regex.constant';
import * as type from 'zod';

export const CreateRSVPBodySchema = type.object({
  name: type.string().min(1, { message: 'Vui lòng nhập tên của bạn' }),
  phoneNumber: type.string().regex(PHONE_NUMBER_REGEX, 'Số điện thoại không hợp lệ'),
  rsvpSelected: type.coerce.number({
    message: 'Vui lòng chọn bạn sẽ tham dự tiệc cưới tại nhà trai hay nhà gái',
  }),
  wish: type.string().optional(),
});

export type CreateRSVPBody = type.infer<typeof CreateRSVPBodySchema>;
