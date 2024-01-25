import { Router } from 'express';

import UserRouter from './UserRoutes';
import AuthRouter from './AuthRoutes';
import FileRouter from './FileRoutes';
import MatchRouter from './MatchRoutes';
import UserMatchRouter from './UserMatchRoutes';

const router = Router();

router.use('/user', UserRouter);
router.use('/sessions', AuthRouter);
router.use('/file', FileRouter);
router.use('/match', MatchRouter);
router.use('/user-match', UserMatchRouter);
router.route('/').get((_, res) => {
  res.status(200).send('Made with 💚 and &lt; &#x0002F; &gt; by CITi');
});

export default router;
