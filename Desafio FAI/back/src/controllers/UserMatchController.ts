import { Request, Response, NextFunction } from 'express';
import { UserMatchRepository } from '../repositories';
import { UserMatch } from '../DTOs';

class UserMatchController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userMatchData = UserMatch.parse(req.body);

      const existeUser = await UserMatchRepository.findById(
        userMatchData.userId,
        userMatchData.matchId,
      );
      
      if (existeUser){
        return next({
          status: 400,
          message: 'UserMatch already exists',
        });
      }

      const userMatch = await UserMatchRepository.create(userMatchData);

      res.locals = {
        status: 201,
        message: 'UserMatch successfully created',
        data: userMatch,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, matchId } = req.params;

      const userMatch = await UserMatchRepository.findById(userId, matchId);

      if (!userMatch) {
        return next({
          status: 404,
          message: 'UserMatch not found',
        });
      }

      res.locals = {
        status: 200,
        data: userMatch,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const userMatch = await UserMatchRepository.findByUserId(userId);

      if (!userMatch) {
        return next({
          status: 404,
          message: 'UserId not found',
        });
      }

      res.locals = {
        status: 200,
        data: userMatch,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params;

      const userMatch = await UserMatchRepository.findByMatchId(matchId);

      if (!userMatch) {
        return next({
          status: 404,
          message: 'UserMatch not found',
        });
      }

      res.locals = {
        status: 200,
        data: userMatch,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const userMatches = await UserMatchRepository.findAll();

      if(!userMatches){
        return next({
          status: 404,
          message: 'UserMatches not found',
        });
      }

      res.locals = {
        status: 200,
        data: userMatches,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const userMatches = await UserMatchRepository.findByUserId(userId);

      if (!userMatches) {
        return next({
          status: 404,
          message: 'UserMatch not found',
        });
      }

      res.locals = {
        status: 200,
        data: userMatches,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getByMatcheId(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params;

      const userMatches = await UserMatchRepository.findByMatchId(matchId);

      if (!userMatches) {
        return next({
          status: 404,
          message: 'UserMatch not found',
        });
      }

      res.locals = {
        status: 200,
        data: userMatches,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, matchId } = req.params;
      const userMatchData = UserMatch.parse(req.body);

      const userMatch = await UserMatchRepository.update(userId, matchId, userMatchData);

      if (!userMatch) {
        return next({
          status: 404,
          message: 'UserMatch not found',
        });
      }

      res.locals = {
        status: 200,
        data: userMatch,
        message: 'UserMatch updated',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
  
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, matchId } = req.params;

      const userMatch = await UserMatchRepository.delete(userId, matchId);

      if (!userMatch) {
        return next({
          status: 404,
          message: 'UserMatch not found',
        });
      }

      res.locals = {
        status: 200,
        message: 'UserMatch deleted',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new UserMatchController();
