import { z } from 'zod';

export const UserMatch = z.object({
  userId: z
    .string()
    .nonempty({ message: 'O id do usuário não pode ser vazio' }),
  matchId: z
    .string()
    .nonempty({ message: 'O id do match não pode ser vazio' }),
});

export const UpdateUserMatch = UserMatch.partial();
