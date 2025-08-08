"use client"

import { useCart } from "./cart-context"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function CartSheet() {
  const { open, setOpen, items, remove, clear, total } = useCart()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full sm:w-[420px]">
        <SheetHeader>
          <SheetTitle>Carrito</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex h-[70vh] flex-col">
          <ScrollArea className="flex-1 pr-3">
            {items.length === 0 ? (
              <div className="text-sm text-stone-500">Tu carrito está vacío.</div>
            ) : (
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item.id} className="flex gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded border border-stone-200 bg-stone-50">
                      <Image
                        src={item.image || "/placeholder.svg?height=128&width=128&query=producto"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="text-xs text-stone-500">Cantidad: {item.qty}</div>
                      <div className="mt-1 text-sm font-semibold">${(item.price * item.qty).toLocaleString()}</div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => remove(item.id)} className="text-stone-600 hover:text-stone-900">
                      Quitar
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </ScrollArea>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <div className="text-stone-600">Total</div>
            <div className="text-base font-semibold">${total.toLocaleString()}</div>
          </div>
          <div className="mt-3 flex gap-2">
            <Button className="flex-1 bg-stone-900 hover:bg-stone-800" disabled={items.length === 0}>
              Proceder al pago
            </Button>
            <Button variant="outline" onClick={clear} disabled={items.length === 0}>
              Vaciar
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
