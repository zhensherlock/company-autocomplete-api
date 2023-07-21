// import Router from '@koa/router'
// import fetch from 'node-fetch'
// import { load } from 'cheerio'
// import { getVariable } from '../utils/javscript'
//
// const router = new Router()
//
// router.get('/search/:keyword', async (ctx) => {
//   const keyword = encodeURIComponent(ctx.params.keyword)
//   const url = `https://www.qixin.com/search?key=${keyword}`
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
//       "Referer": "https://www.qixin.com/",
//       "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": null,
//     "method": "GET"
//   }
//   const response = await fetch(url, options)
//   const html = await response.text()
//   const $ = load(html)
//   let scriptHtml = $('script').last().html()
//   if (!scriptHtml) {
//     return
//   }
//   scriptHtml = scriptHtml.replace('$components=(window.$components||[]).concat(', '')
//     .replace(')||$components', '')
//   console.log(scriptHtml)
//   // scriptHtml
// })
//
// router.get('/logo/:id', async (ctx) => {
//   ctx.body = `qxb logo ${ctx.params.id}`
// })
//
// export default router
