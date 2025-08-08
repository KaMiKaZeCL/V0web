import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { storeProducts } from "@/lib/catalog"
import type { ProductWithSpecs } from "@/lib/catalog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-context"

type Params = { params: { id: string } }

export default function ProductDetailPage({ params }: Params) {
  const product = storeProducts.find((p) => p.id === params.id) as ProductWithSpecs | undefined
  if (!product) return notFound()

  const related = storeProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-[16/11] overflow-hidden rounded-md border border-stone-200 bg-stone-100">
          <Image
            src={product.image || "/placeholder.svg?height=720&width=1080&query=producto"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-stone-500">{product.category}</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-2 max-w-prose text-stone-600">{product.description}</p>
          <div className="mt-4 text-lg font-semibold">${product.price.toLocaleString()}</div>
          <div className="mt-4 flex gap-3">
            <AddToCartButton product={product} />
            <Button asChild variant="outline" className="rounded-md border-stone-300">
              <Link href="/store">Ver más en Tienda</Link>
            </Button>
          </div>

          {product.specs && (
            <>
              <Separator className="my-6" />
              <div>
                <div className="text-sm font-semibold">Especificaciones</div>
                <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="flex items-start gap-3">
                      <dt className="w-36 shrink-0 text-xs font-medium uppercase tracking-wide text-stone-500">
                        {k}
                      </dt>
                      <dd className="text-sm text-stone-800">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <>
          <Separator className="my-12" />
          <div>
            <div className="flex items-end justify-between">
              <h2 className="text-xl font-semibold tracking-tight">Relacionados</h2>
              <Button asChild variant="ghost" className="rounded-md text-stone-800 hover:bg-stone-100">
                <Link href="/products">Ver todos →</Link>
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Card key={r.id} className="overflow-hidden border-stone-200">
                  <div className="relative aspect-[16/10] bg-stone-100">
                    <Image src={r.image || "/placeholder.svg"} alt={r.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-stone-500">{r.category}</div>
                    <div className="mt-2 text-sm font-semibold">${r.price.toLocaleString()}</div>
                    <div className="mt-3 flex gap-2">
                      <Button asChild variant="outline" className="rounded-md border-stone-300">
                        <Link href={`/products/${r.id}`}>Ver detalle</Link>
                      </Button>
                      <AddToCartButton product={r} variant="default" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

function AddToCartButton({ product, variant = "default" as "default" | "outline" }) {
  const { add } = useCart()
  return (
    <Button
      className={variant === "default" ? "rounded-md bg-stone-900 hover:bg-stone-800" : "rounded-md border-stone-300"}
      variant={variant}
      onClick={() => add({ id: product.id, name: product.name, price: product.price, image: product.image }, 1)}
    >
      Agregar al carrito
    </Button>
  )
}
