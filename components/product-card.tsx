"use client"

import { Card, Button, Badge } from "react-bootstrap"
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
    <Card className="h-100 card-hover">
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
          <Badge bg="secondary">{product.category}</Badge>
        </div>
        <Card.Text className="text-muted small mt-2">{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="fw-semibold">{"$" + product.price.toLocaleString()}</div>
          <Button
            variant="primary"
            className="px-3"
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, 1)}
          >
            Agregar
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
