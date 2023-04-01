import { Hono } from 'hono'
import { handle } from 'hono/nextjs'

export const config = {
  runtime: 'edge',
}

const app = new Hono()

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




export default handle(app, '/api')
