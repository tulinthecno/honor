import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [message, setMessage] = useState()
  const [productsMessage, setProductsMessage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello')
      const { message } = await res.json()
      setMessage(message)
    }


    const fetchProducts = async () => {
      // /api/query/mohammed
      // {headers:{'token':'maher'}}
      const res = await fetch(`/api/is?cat=adidas`  , {headers:{'token':'maher'}} )  
      const { message } = await res?.json()
      console.log('message:', message)
      setProductsMessage(message)
    }


    fetchData()
    fetchProducts()
  }, [])

  if (!productsMessage) return <p>Loading... hello three</p>

  return <p>{productsMessage}</p>
}
