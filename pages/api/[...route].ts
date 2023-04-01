import { Hono } from 'hono'
import { handle } from 'hono/nextjs'

export const config = {
  runtime: 'edge',
}

const app = new Hono()

app.use(async (_, next) => {
  console.log('middleware 1 start')
  await next()
  console.log('middleware 1 end')
})




app.get('/hello', (c:any) => {
  return c.json({
    message: 'Hello from Hono!',
  })
})

app.get('/products', (c:any) => {
  return c.json({
    message: 'products route is here',
  })
})


app.get('/is', (c:any) => {
  const {cat} = c.req.query()
  console.log('???', c?.req?.query().cat)
  console.log('query', cat)
  return c.json({
    message: `is ${cat}`,
  })
})



export default handle(app, '/api')
