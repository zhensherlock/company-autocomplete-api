import Router from '@koa/router';

import qccRouter from './qcc'
// import tycRouter from './tianyancha'
import qccOpenRouter from './qcc-open'
import qccKYCRouter from './qcc-global'
// import qxbRouter from './qxb'

const router = new Router()

router.use('/qcc', qccRouter.routes())
// router.use('/tyc', tycRouter.routes())
router.use('/qcc-open', qccOpenRouter.routes())
router.use('/qcc-global', qccKYCRouter.routes())
// router.use('/qxb', qxbRouter.routes())

export default router
