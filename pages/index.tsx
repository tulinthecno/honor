import { useEffect, useState } from 'react'

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
      const res = await fetch(`/api/is?cat=adidas`)  
      const { message } = await res.json()
      console.log('message:', message)
      setProductsMessage(message)
    }


    fetchData()
    fetchProducts()
  }, [])

  if (!productsMessage) return <p>Loading...</p>

  return <p>{productsMessage}</p>
}
