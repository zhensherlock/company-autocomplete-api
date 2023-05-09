import Router from '@koa/router';

import qccRouter from './qcc'
import qxbRouter from './qxb'

const router = new Router()

router.use('/qcc', qccRouter.routes())
router.use('/qxb', qxbRouter.routes())

export default router