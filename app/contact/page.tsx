import { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Conversemos sobre tus objetivos y tiempos.",
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>
      <p className="mt-2 max-w-prose text-stone-600">
        Cuéntanos sobre tus objetivos. Te responderemos dentro de 1 día hábil.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert("Gracias. Te contactaremos pronto.")
        }}
        className="mt-6 space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" name="name" required className="rounded-md border-stone-300" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required className="rounded-md border-stone-300" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Empresa</Label>
          <Input id="company" name="company" className="rounded-md border-stone-300" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea id="message" name="message" required className="min-h-[140px] rounded-md border-stone-300" />
        </div>
        <Button type="submit" className="rounded-md bg-stone-900 hover:bg-stone-800">
          Enviar
        </Button>
      </form>
    </section>
  )
}
