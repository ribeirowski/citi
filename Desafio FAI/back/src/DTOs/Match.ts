import { z } from 'zod';

export const Match = z.object({
  game: z
    .string()
    .nonempty({ message: 'O nome do game não pode ser vazio' }),
  link: z
    .string()
    .regex(/^https:\/\/.+$/i, { message: 'O link deve começar com "https://"' })
    .nonempty({ message: 'O link não pode ser vazio' }),
  local: z
    .string()
    .nonempty({ message: 'O local não pode ser vazio' }),
  description: z
    .string()
    .nonempty({ message: 'A descrição não pode ser vazia' }),
  date: z
    .string()
    .regex(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/, {message: 'A data deve estar no formato dd/mm/aaaa'})
    .nonempty({message: 'A data não pode ser vazia'}),
  time: z
    .string()
    .regex(/^[0-9]{2}:[0-9]{2}$/, {
      message: 'O horário deve estar no formato hh:mm',
    })
    .nonempty({ message: 'O horário não pode ser vazio' }),
});

export const UpdateMatch = Match.partial();
