"use client"

import { Card, Button, Badge, OverlayTrigger, Tooltip, Popover } from "react-bootstrap"
import Image from "next/image"
import { useCart } from "./cart-provider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faCircleInfo } from "@fortawesome/free-solid-svg-icons"

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

  const pop = (
    <Popover id={`pop-${product.id}`}>
      <Popover.Header as="h3" className="h6 mb-0">{product.name}</Popover.Header>
      <Popover.Body className="small">
        {product.description}
      </Popover.Body>
    </Popover>
  )

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
          <Card.Title className="h6 mb-0 d-flex align-items-center gap-2">
            {product.name}
            <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={pop}>
              <span role="button" aria-label="Más info">
                <FontAwesomeIcon icon={faCircleInfo} className="text-secondary" />
              </span>
            </OverlayTrigger>
          </Card.Title>
          <Badge bg="secondary">{product.category}</Badge>
        </div>
        <Card.Text className="text-muted small mt-2">{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="fw-semibold">{"$" + product.price.toLocaleString()}</div>
          <OverlayTrigger placement="top" overlay={<Tooltip id={`tip-add-${product.id}`}>Agregar al carrito</Tooltip>}>
            <Button
              variant="primary"
              className="px-3 d-inline-flex align-items-center gap-2"
              onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, 1)}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              <span>Agregar</span>
            </Button>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Card>
  )
}
