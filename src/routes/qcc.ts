import Router from '@koa/router'
import fetch from 'node-fetch'
import { load } from 'cheerio'
import { parseJSON } from '../utils/javscript'
import _ from 'lodash'

const router = new Router()

router.get('/search/:keyword', async (ctx) => {
  const keyword = encodeURIComponent(ctx.params.keyword)
  const url = `https://www.qcc.com/web/search?key=${keyword}`
  const options = {
    'headers': {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0',
      'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-User': '?1',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'upgrade-insecure-requests': '1',
      'Referer': 'https://www.qcc.com/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    'method': 'GET'
  }
  const response = await fetch(url, options)
  const cookie = getRealCookie(response)
  const html = await response.text()
  const $ = load(html)
  const asyncJsUrl = $('script[src^="/web/async-js/"]').attr('src')
  let jsHtml
  if (asyncJsUrl) {
    jsHtml = await fetchAsyncJS(`https://www.qcc.com${asyncJsUrl}`, url, cookie)
  } else {
    jsHtml = $('script').not('[src]').last().html() || ''
  }
  const companies = _.get(parseJSON(jsHtml), 'search.searchRes.Result') || []
  ctx.body = {
    status: '200',
    result: companies.map((item: any) => ({
      name: item.Name,
      keyNo: item.KeyNo,
      avatar: item.ImageUrl
    }))
  }
})

const fetchAsyncJS = async (url: string, referer: string, cookie: string) => {
  const options = {
    'headers': {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0',
      'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-User': '?1',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'upgrade-insecure-requests': '1',
      'Referer': referer,
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cookie': cookie,
      'credentials': 'include'
    },
    'method': 'GET'
  }
  const response = await fetch(url, options)
  const text = await response.text()
  return text
    .replace('window.__INITIAL_STATE__=', '')
    .replace(';(function(){var s;(s=document.currentScript||document.scripts[document.scripts.length-1]).parentNode.removeChild(s);}());', '')
}

const getRealCookie = (response: any) => {
  const cookieStr = response.headers.get('set-cookie')
  if (!cookieStr) {
    return ''
  }
  const cookies = cookieStr.split(',').map((item: string) => {
    return item.split(';')[0]
  })
  return cookies.join(';')
}

export default router
