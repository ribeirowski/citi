import { Prisma, Match } from '@prisma/client';
import prisma from '../database';

class MatchRepository {
  async create(data: Prisma.MatchCreateInput): Promise<Match> {
    const match = await prisma.match.create({ data });
    return match;
  }

  async findById(id: string): Promise<Match | null> {
    const match = await prisma.match.findUnique({ where: { id } });
    return match;
  }

  async update(id: string, data: Prisma.MatchUpdateInput): Promise<Match> {
    const match = await prisma.match.update({ where: { id }, data });
    return match;
  }

  async delete(id: string): Promise<Match> {
    const match = await prisma.match.delete({ where: { id } });
    return match;
  }

  async findAll(): Promise<Match[]> {
    const matches = await prisma.match.findMany();
    return matches;
  }
}

export default new MatchRepository();
