import { Router } from 'express';
import auth from '../middlewares/auth';
import { MatchController } from '../controllers';

const matchRouter = Router();

matchRouter.route('/')
  .post(
    MatchController.create,
  );

matchRouter.route('/')
  .get(
    MatchController.readAll,
  );

matchRouter.route('/:matchId')
  .get(
    MatchController.read,
  );

matchRouter.route('/:matchId')
  .patch(
    [auth],
    MatchController.update,
  );

matchRouter.route('/:matchId')
  .delete(
    [auth],
    MatchController.delete,
  );

export default matchRouter;
