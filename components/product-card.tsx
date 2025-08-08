"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
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
    <Card className="overflow-hidden hover:shadow-lg transition">
      <CardContent className="p-0">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={800}
          height={500}
          className="w-full aspect-[16/9] object-cover"
        />
      </CardContent>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <div className="font-semibold">${product.price.toLocaleString()}</div>
        </div>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <div className="px-6 pb-6">
        <Button
          className="w-full bg-emerald-600 hover:bg-emerald-700"
          onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, 1)}
        >
          Agregar al carrito
        </Button>
      </div>
    </Card>
  )
}
