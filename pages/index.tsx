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
      const res = await fetch('/api/products')
      const { message } = await res.json()
      setProductsMessage(message)
    }


    fetchData()
    fetchProducts()
  }, [])

  if (!productsMessage) return <p>Loading...</p>

  return <p>{productsMessage}</p>
}
