import { Request, Response, NextFunction } from 'express';
import { MatchRepository } from '../repositories';
import { Match, UpdateMatch } from '../DTOs';

class MatchController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const matchData = Match.parse(req.body);

      const match = await MatchRepository.create(matchData);

      res.locals = {
        status: 201,
        message: 'Match created',
        data: match,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params;

      const match = await MatchRepository.findById(matchId);

      if (!match) {
        return next({
          status: 404,
          message: 'Match not found',
        });
      }

      res.locals = {
        status: 200,
        data: match,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const matches = await MatchRepository.findAll();

      if (!matches) {
        return next({
          status: 404,
          message: 'Matches not found',
        });
      }

      res.locals = {
        status: 200,
        data: matches,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params;
      const matchData = UpdateMatch.parse(req.body);

      const match = await MatchRepository.update(matchId, matchData);

      if (!match) {
        return next({
          status: 404,
          message: 'Match not found',
        });
      }

      res.locals = {
        status: 200,
        data: match,
        message: 'Match updated',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params;

      const match = await MatchRepository.delete(matchId);

      if (!match) {
        return next({
          status: 404,
          message: 'Match not found',
        });
      }

      res.locals = {
        status: 200,
        message: 'Match deleted',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new MatchController();
