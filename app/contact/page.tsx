import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactForm from "@/components/contact-form"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Contacto</h1>
            <p className="text-muted-foreground mt-2">
              Cuéntanos sobre tus objetivos. Te responderemos dentro de 1 día hábil.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="grid gap-4">
            <Image
              src={"/placeholder.svg?height=360&width=720&query=equipo%20de%20ventas%20y%20exito%20del%20cliente%20en%20tecnologia"}
              alt="Equipo comercial y de éxito del cliente"
              width={720}
              height={360}
              className="rounded-xl border object-cover"
            />
            <Image
              src={"/placeholder.svg?height=360&width=720&query=mapa%20santiago%20de%20chile%20oficina%20corporativa"}
              alt="Mapa de ubicación en Santiago"
              width={720}
              height={360}
              className="rounded-xl border object-cover"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
