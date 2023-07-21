// import Router from '@koa/router'
// import fetch from 'node-fetch'
// import { load } from 'cheerio'
// import _ from "lodash";
// import {parseJSON} from "../utils/javscript";
//
// const router = new Router()
//
// router.get('/search/:keyword', async (ctx) => {
//   const keyword = encodeURIComponent(ctx.params.keyword)
//   const url = `https://www.qixin.com/search?key=${keyword}`
//   const options = {
//     "headers": {
//       'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0',
//       'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
//       'Upgrade-Insecure-Requests': '1',
//       'Sec-Fetch-Dest': 'document',
//       'Sec-Fetch-Mode': 'navigate',
//       'Sec-Fetch-Site': 'same-origin',
//       'Sec-Fetch-User': '?1',
//       'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//       'upgrade-insecure-requests': '1',
//       'Referer': 'https://www.qixin.com/',
//       'Referrer-Policy': 'strict-origin-when-cross-origin',
//     },
//     "method": "GET"
//   }
//   const response = await fetch(url, options)
//   const cookie = getRealCookie(response)
//   const html = await response.text()
//   const $ = load(html)
//   const asyncJsUrl = $('script[src^="/web/async-js/"]').attr('src')
//   let jsText
//   console.log(asyncJsUrl)
//   if (asyncJsUrl) {
//     jsText = await fetchAsyncJs(`https://www.qcc.com${asyncJsUrl}`, url, cookie)
//   } else {
//     jsText = $('script').not('[src]').last().html() || ''
//   }
//   console.log(jsText)
//   jsText = handleJsText(jsText)
//   const companies = _.get(parseJSON(jsText), 'search.searchRes.Result') || []
//   ctx.body = {
//     status: '200',
//     result: companies.map((item: any) => ({
//       name: item.Name,
//       keyNo: item.KeyNo,
//       avatar: item.ImageUrl
//     }))
//   }
//
//
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
// export default router
