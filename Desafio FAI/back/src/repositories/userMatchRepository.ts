import { Prisma, UserMatch } from '@prisma/client';
import prisma from '@database';

class UserMatchRepository {
  async create(data: Prisma.UserMatchCreateInput): Promise<UserMatch> {
    const userMatch = await prisma.userMatch.create({ data });
    return userMatch;
  }

  async findById(userId: string, matchId: string): Promise<UserMatch | null> {
    const userMatch = await prisma.userMatch.findUnique({ where: { userId_matchId: {userId, matchId} } });
    return userMatch;
  }

  async findByUserId(userId: string): Promise<UserMatch[] | null> {
    const userMatches = await prisma.userMatch.findMany({ where: { userId } });
    return userMatches;
  }

  async findByMatchId(matchId: string): Promise<UserMatch[] | null> {
    const userMatches = await prisma.userMatch.findMany({ where: { matchId } });
    return userMatches;
  }

  async update(userId: string, matchId: string, data: Prisma.UserMatchUpdateInput): Promise<UserMatch> {
    const userMatch = await prisma.userMatch.update({ where: { userId_matchId: {userId, matchId} }, data });
    return userMatch;
  }

  async delete(userId: string, matchId: string): Promise<UserMatch> {
    const userMatch = await prisma.userMatch.delete({ where: { userId_matchId: {userId, matchId} } });
    return userMatch;
  }

  async findAll(): Promise<UserMatch[]> {
    const userMatches = await prisma.userMatch.findMany();
    return userMatches;
  }
}

export default new UserMatchRepository();
