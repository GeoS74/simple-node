const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  console.log(ctx.headers)
  ctx.status = 200;
  ctx.body = 'hello i`m koa application'
})

app.listen(3000, (error) => {
  if(error){
    console.log(error.mesage)
    return;
  }
  console.log('server run at 3000')
})