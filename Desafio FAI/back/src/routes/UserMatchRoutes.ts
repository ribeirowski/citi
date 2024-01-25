import { Router } from 'express';
import auth from '../middlewares/auth';
import { UserMatchController } from '../controllers';

const userMatchRouter = Router();

userMatchRouter.route('/')
    .post(
        UserMatchController.create,
    );

userMatchRouter.route('/')
    .get(
        UserMatchController.readAll,
    );

userMatchRouter.route('/:userId/:matchId')
    .get(
        UserMatchController.read,
    );

userMatchRouter.route('/search/user/:userId')
    .get(
        UserMatchController.readUser,
    );

userMatchRouter.route('/search/match/:matchId')
    .get(
        UserMatchController.readMatch,
    );

userMatchRouter.route('/:userId/:matchId')
    .patch(
        UserMatchController.update,
    );

userMatchRouter.route('/:userId/:matchId')
    .delete(
        UserMatchController.delete,
    );

export default userMatchRouter;