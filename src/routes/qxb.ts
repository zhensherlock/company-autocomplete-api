import Router from '@koa/router'

const router = new Router()

router.get('/search', async (ctx) => {
  ctx.body = 'qxb search'
})

router.get('/logo/:id', async (ctx) => {
  ctx.body = `qxb logo ${ctx.params.id}`
})

export default router