import Router from '@koa/router'
import fetch from 'node-fetch'

const router = new Router()

router.get('/search/:keyword', async (ctx) => {
  const keyword = encodeURIComponent(ctx.params.keyword)
  const url = `https://c.qcc.com/embed/api/company/getCompanyName?searchKey=${keyword}`
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Referer: 'https://c.qcc.com/'
    }
  }
  const response = await fetch(url, options)
  ctx.body = await response.json()
})

router.get('/logo/:id', async (ctx) => {
  const id = ctx.params.id
  const url = `https://image.qcc.com/logo/${id}.jpg`
  const options = {
    headers: {
      Referer: 'https://www.qcc.com/'
    }
  }
  const response = await fetch(url, options)

  if (response.ok) {
    const imageBuffer = await response.buffer()
    ctx.set('Content-Type', 'image/jpeg')
    ctx.body = imageBuffer
    return
  }

  const fallbackUrl = `https://image.qcc.com/auto/${id}.jpg`
  const fallbackResponse = await fetch(fallbackUrl, options)

  if (fallbackResponse.ok) {
    const imageBuffer = await fallbackResponse.buffer()
    ctx.set('Content-Type', 'image/jpeg')
    ctx.body = imageBuffer
    return
  }

  ctx.status = 404
  ctx.body = 'Image not found'
})

export default router
