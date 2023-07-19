import Koa from 'koa'
import cors from '@koa/cors'
// import http from 'http'
// import https from 'https'
import router from './routes'

const app = new Koa()

router.get('/', (ctx) => {
  ctx.body = 'it is working'
})
// router.get('/proxy', async (ctx) => {
//   const { url } = ctx.query
//
//   if (typeof url !== 'string') {
//     ctx.throw(400, 'Missing URL parameter')
//   }
//
//   const protocol = (<string> url).startsWith('https') ? https : http
//
//   await new Promise((resolve, reject) => {
//     const proxyReq = protocol.request((<string> url), (proxyRes) => {
//       ctx.status = <number>proxyRes.statusCode
//       ctx.set(<{ [key: string]: string }> proxyRes.headers)
//       proxyRes.pipe(ctx.res)
//       ctx.res.on('close', resolve)
//     });
//
//     proxyReq.on('error', reject)
//     proxyReq.end()
//   })
// })

app.use(cors())
app.use(router.routes())

app.listen(3000, () => {
  console.log('server started on port 3000')
})
