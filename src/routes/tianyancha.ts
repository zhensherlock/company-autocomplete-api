// import Router from '@koa/router'
// import fetch from 'node-fetch'
// import { load } from 'cheerio'
// import { getVariable } from '../utils/javscript'
//
// const router = new Router()
//
// router.get('/search/:keyword', async (ctx) => {
//   const keyword = encodeURIComponent(ctx.params.keyword)
//   const url = `https://www.tianyancha.com/search?key=${keyword}`
//   const options = {
//     "headers": {
//       "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//       "accept-language": "zh-CN,zh;q=0.9",
//       "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"macOS\"",
//       "sec-fetch-dest": "document",
//       "sec-fetch-mode": "navigate",
//       "sec-fetch-site": "same-origin",
//       "sec-fetch-user": "?1",
//       "upgrade-insecure-requests": "1",
//       "Referer": "https://www.tianyancha.com/",
//       "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": null,
//     "method": "GET"
//
//     // "headers": {
//     //   "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
//     //   "Upgrade-Insecure-Requests": "1",
//     //   "Sec-Fetch-Dest": "document",
//     //   "Sec-Fetch-Mode": "navigate",
//     //   "Sec-Fetch-Site": "same-origin",
//     //   "Sec-Fetch-User": "?1"
//     // },
//     // "referrer": "https://www.tianyancha.com/",
//     // "method": "GET",
//     // "mode": "cors"
//   }
//   const response = await fetch(url, options)
//   const html = await response.text()
//   const $ = load(html)
//   const scriptHtml = $('script').not('[src]').last().html()
//   if (!scriptHtml) {
//     return
//   }
//   // getVariable(scriptHtml)
//
// })
//
// router.get('/logo/:id', async (ctx) => {
//   const id = ctx.params.id
//   const url = `https://image.qcc.com/logo/${id}.jpg`
//   const options = {
//     headers: {
//       Referer: 'https://www.qcc.com/'
//     }
//   }
//   const response = await fetch(url, options)
//
//   if (response.ok) {
//     const imageBuffer = await response.buffer()
//     ctx.set('Content-Type', 'image/jpeg')
//     ctx.body = imageBuffer
//     return
//   }
//
//   const fallbackUrl = `https://image.qcc.com/auto/${id}.jpg`
//   const fallbackResponse = await fetch(fallbackUrl, options)
//
//   if (fallbackResponse.ok) {
//     const imageBuffer = await fallbackResponse.buffer()
//     ctx.set('Content-Type', 'image/jpeg')
//     ctx.body = imageBuffer
//     return
//   }
//
//   ctx.status = 404
//   ctx.body = 'Image not found'
// })
//
// export default router
