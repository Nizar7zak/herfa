import z from 'zod';

export const authSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'خانة البريد الإلكتروني مطلوبة' })
    .email({ message: 'البريد الإلكتروني غير صالح' }),
  name: z
    .string()
    .min(1, { message: 'خانة الاسم مطلوبة' })
    .min(8, { message: 'يجب أن يحتوي الاسم على 8 أحرف على الأقل' })
    .max(25),
  phone: z
    .string()
    .min(1, { message: 'خانة رقم الهاتف مطلوبة' })
    .min(8, { message: 'يجب أن يحتوي رقم الهاتف على 8 أحرف على الأقل' })
    .max(20),
  message: z
    .string()
    .min(1, { message: 'خانة محتوى الرسالة مطلوبة' })
    .max(500),
});
