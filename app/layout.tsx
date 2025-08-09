import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import './brand.css'
import '@/lib/fa' // Font Awesome core CSS (config in lib/fa.tsx)
import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { CartProvider } from '@/components/cart-provider'

export const metadata: Metadata = {
  title: {
    default: 'South Developers Chile SpA',
    template: '%s | South Developers Chile SpA',
  },
  description:
    'Plataformas y servicios en IA, Nube, Ciberseguridad, IoT y software a medida. Enfoque moderno, resultados medibles y operación con SLAs.',
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  )
}
