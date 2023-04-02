import { Hono } from 'hono'
import { handle } from 'hono/nextjs'
import { poweredBy } from 'hono/powered-by'
import { logger } from 'hono/logger'
import { basicAuth } from 'hono/basic-auth'

export const config = {
  runtime: 'edge',
}

const app = new Hono()

app.use(async (c:any, next:any) => {
  console.log('middleware 1 start' , c.req.query()?.cat)
  const userAgent = c.req.header('token')
  console.log('header: ' + userAgent)
  if(c.req.query()?.cat === 'adidas')
  await next()
  else (
    console.log('ERRRRRRRRRORRRR')
  )
  console.log('middleware 1 end')
})


// app.use(
//   '/products/*',
//   basicAuth({
//     username: 'hono',
//     password: 'acoolproject',
//   })
// )


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

  // new Response({message:'Thank you for comming'})

  // return c.body('Thank you for comming')


  return c.json({
    message: `is ${cat}`,
  })

 

})



export default handle(app, '/api')
