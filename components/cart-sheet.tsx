"use client"

import { Offcanvas, Button } from "react-bootstrap"
import { useCart } from "./cart-provider"
import Image from "next/image"

export default function CartSheet() {
  const { open, closeCart, items, removeItem, total, clear } = useCart()

  return (
    <Offcanvas show={open} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {items.length === 0 && <div className="text-muted small">Tu carrito está vacío.</div>}
        <div className="d-grid gap-3">
          {items.map((i) => (
            <div key={i.id} className="d-flex gap-3">
              <div className="flex-shrink-0">
                <Image
                  src={i.image || "/placeholder.svg"}
                  alt={i.name}
                  width={80}
                  height={80}
                  className="rounded border"
                />
              </div>
              <div className="flex-grow-1">
                <div className="fw-semibold">{i.name}</div>
                <div className="text-muted small">Cantidad: {i.qty}</div>
                <div className="small mt-1">${(i.price * i.qty).toLocaleString()}</div>
              </div>
              <div>
                <Button variant="link" size="sm" onClick={() => removeItem(i.id)}>
                  Quitar
                </Button>
              </div>
            </div>
          ))}
        </div>

        <hr />
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="text-muted">Total</div>
          <div className="fw-semibold">${total.toLocaleString()}</div>
        </div>
        <div className="d-grid gap-2">
          <Button variant="success" disabled={items.length === 0}>
            Proceder al pago
          </Button>
          <Button variant="outline-secondary" onClick={clear} disabled={items.length === 0}>
            Vaciar carrito
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
