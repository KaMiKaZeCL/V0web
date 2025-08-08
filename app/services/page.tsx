import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { servicesCatalog } from "@/lib/data"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <Badge variant="secondary" className="rounded-full">Catálogo de Servicios</Badge>
          <h1 className="text-3xl md:text-4xl font-semibold mt-3">Expertise de punta a punta</h1>
          <p className="text-muted-foreground mt-2">Un universo de capacidades para acelerar tu negocio</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesCatalog.map((s) => (
            <Card key={s.name} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">{s.icon}{s.name}</CardTitle>
                <CardDescription>{s.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  {s.offers.map((o) => (<li key={o}>{o}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
