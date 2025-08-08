import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50/60">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">South Developers Chile SpA</div>
            <p className="mt-2 max-w-sm text-sm text-stone-600">
              IA, Nube, Ciberseguridad, IoT y software a medida. Enfoque moderno, resultados medibles.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Empresa</div>
            <ul className="mt-2 space-y-1 text-sm text-stone-600">
              <li><Link href="/about" className="hover:text-stone-900">Quiénes somos</Link></li>
              <li><Link href="/services" className="hover:text-stone-900">Servicios</Link></li>
              <li><Link href="/products" className="hover:text-stone-900">Productos</Link></li>
              <li><Link href="/store" className="hover:text-stone-900">Tienda</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Contacto</div>
            <ul className="mt-2 space-y-1 text-sm text-stone-600">
              <li>Santiago, Chile</li>
              <li><a href="mailto:contacto@southdevelopers.cl" className="hover:text-stone-900">contacto@southdevelopers.cl</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-stone-500">
          <div>© {new Date().getFullYear()} South Developers Chile SpA</div>
          <div>Elegancia funcional, sin artificios.</div>
        </div>
      </div>
    </footer>
  )
}
