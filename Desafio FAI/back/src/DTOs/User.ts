import { z } from 'zod';

export const User = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, { message: 'O nome deve conter apenas letras' })
    .nonempty({ message: 'O nome não pode ser vazio' }),
  username: z
    .string()
    .regex(/^[a-zA-Z0-9\s]+$/, { message: 'O username deve conter apenas letras e números' })
    .min(4, { message: 'O usuário deve ter no mínimo 4 caracteres' })
    .nonempty({ message: 'O username não pode ser vazio' }),
  email: z
    .string()
    .email({ message: 'Endereço de email inválido' })
    .nonempty({ message: 'O e-mail não pode ser vazio' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .nonempty({ message: 'A senha não pode ser vazia' }),
  likedGames: z
    .array(z.string())
    .optional(),
});

export const UpdateUser = User.partial();
