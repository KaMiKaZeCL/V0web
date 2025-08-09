"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "./cart-context"

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  return (
    <Card className="group h-full overflow-hidden border-stone-200">
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <Image
          src={product.image || "/placeholder.svg?height=600&width=900&query=producto"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-base font-semibold">{product.name}</CardTitle>
        <div className="text-xs uppercase tracking-wider text-stone-500">{product.category}</div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-sm text-stone-600">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-sm font-semibold">${product.price.toLocaleString()}</div>
        <Button
          variant="outline"
          className="rounded-md border-stone-300"
          onClick={() => add({ id: product.id, name: product.name, price: product.price, image: product.image }, 1)}
        >
          Agregar
        </Button>
      </CardFooter>
    </Card>
  )
}
