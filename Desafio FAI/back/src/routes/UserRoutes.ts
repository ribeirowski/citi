import { Router } from 'express';
import auth from '../middlewares/auth';
import { UserController } from '../controllers';

const userRouter = Router();

userRouter.route('/')
  .post(
    UserController.create,
  );

userRouter.route('/')
  .get(
    UserController.readAll,
  );

userRouter.route('/:userId')
  .get(
    UserController.read,
  );

userRouter.route('/username/:username')
  .get(
    UserController.readUsername,
  );

userRouter.route('/:userId')
  .patch(
    [auth],
    UserController.update,
  );

userRouter.route('/:userId')
  .delete(
    [auth],
    UserController.delete,
  );

export default userRouter;
