import Router from '@koa/router';

// import qccRouter from './qcc.ts'
// import tycRouter from './tianyancha.ts'
import qccOpenRouter from './qcc-open.js'
// import qxbRouter from './qxb.js'

const router = new Router()

// router.use('/qcc', qccRouter.routes())
// router.use('/tyc', tycRouter.routes())
router.use('/qcc-open', qccOpenRouter.routes())
// router.use('/qxb', qxbRouter.routes())

export default router
