import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="font-semibold">South Developers Chile SpA</div>
            <p className="text-sm text-muted-foreground">
              Soluciones superiores en tecnología, IA, nube, ciberseguridad, IoT, drones y software a la medida.
            </p>
          </div>
          <div>
            <div className="font-semibold">Empresa</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about">Quiénes somos</Link></li>
              <li><Link href="/services">Servicios</Link></li>
              <li><Link href="/products">Productos</Link></li>
              <li><Link href="/store">Tienda</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="#">Términos y condiciones</Link></li>
              <li><Link href="#">Política de privacidad</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contacto</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Santiago, Chile</li>
              <li><a href="mailto:contacto@southdevelopers.cl">contacto@southdevelopers.cl</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} South Developers Chile SpA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
