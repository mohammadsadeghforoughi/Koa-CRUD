const Koa = require('koa')
const Router = require('koa-router')
var bodyParser = require('koa-body')();

const app = new Koa()
const router = new Router()



router.get('/', bodyParser,ctx => {
    ctx.status = 200
    ctx.body = "hello!! it's my fresh expreince of Koa"
})




app.use(router.routes())

app.listen(3000, () => {
    console.log('app listening on port 3000')
})