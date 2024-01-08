import Router from '@koa/router'
import fetch from 'node-fetch'

const router = new Router()

router.get('/search/:keyword', async (ctx) => {
  const url = `https://qcckyc.com/webapi/open/corp_search/searchFuzzy`
  const options = {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/json;charset=UTF-8",
      "pragma": "no-cache",
      "request-id": "186aacf9-0fc2-4bbb-b7d4-f555776c1924",
      "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "Hm_lvt_c4a1a975a49e210d351ec5b2b2730742=1703832657; Hm_lpvt_c4a1a975a49e210d351ec5b2b2730742=1704679719",
      "Referer": "https://qcckyc.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `{"searchKey":"${ctx.params.keyword}"}`,
    "method": "POST"
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
