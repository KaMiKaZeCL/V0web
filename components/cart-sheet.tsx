"use client"

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "./cart-provider"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CartSheet() {
  const { open, closeCart, items, removeItem, total, clear } = useCart()

  return (
    <Sheet open={open} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent side="right" className="w-96">
        <SheetHeader>
          <SheetTitle>Tu Carrito</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          {items.length === 0 && <div className="text-sm text-muted-foreground">Tu carrito está vacío.</div>}
          {items.map((i) => (
            <div key={i.id} className="flex gap-3">
              <Image src={i.image || "/placeholder.svg"} alt={i.name} width={80} height={80} className="rounded-md object-cover border" />
              <div className="flex-1">
                <div className="font-medium">{i.name}</div>
                <div className="text-sm text-muted-foreground">Cantidad: {i.qty}</div>
                <div className="text-sm mt-1">${(i.price * i.qty).toLocaleString()}</div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => removeItem(i.id)}>Quitar</Button>
            </div>
          ))}
        </div>
        <SheetFooter className="mt-6 grid gap-2">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Total</div>
            <div className="font-semibold">${total.toLocaleString()}</div>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700" disabled={items.length === 0}>Proceder al pago</Button>
          <Button variant="outline" onClick={clear} disabled={items.length === 0}>Vaciar carrito</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
