"use client"

import { Card, Button } from "react-bootstrap"
import Image from "next/image"
import { useCart } from "./cart-provider"

type Product = {
  id: string
  name: string
  description: string
  image: string
  price: number
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <Card className="h-100">
      <div className="ratio ratio-16x9">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <Card.Title className="h6 mb-0">{product.name}</Card.Title>
          <div className="fw-semibold">${product.price.toLocaleString()}</div>
        </div>
        <Card.Text className="text-muted small mt-2">{product.description}</Card.Text>
        <Button
          variant="success"
          className="w-100 mt-2"
          onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, 1)}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  )
}
