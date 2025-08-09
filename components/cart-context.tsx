"use client"

import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  qty: number
}

type CartContextType = {
  items: CartItem[]
  add: (item: Omit<CartItem, "qty">, qty?: number) => void
  remove: (id: string) => void
  clear: () => void
  total: number
  open: boolean
  setOpen: (o: boolean) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sd_cart_v1")
      if (raw) setItems(JSON.parse(raw))
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("sd_cart_v1", JSON.stringify(items))
    } catch {}
  }, [items])

  const add = useCallback((item: Omit<CartItem, "qty">, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === item.id)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + qty }
        return next
      }
      return [...prev, { ...item, qty }]
    })
    setOpen(true)
  }, [])

  const remove = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items])

  const value = useMemo(() => ({ items, add, remove, clear, total, open, setOpen }), [items, add, remove, clear, total, open])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
