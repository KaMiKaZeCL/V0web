"use client"

import { useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { experimental_taintUniqueValue } from "react"

async function submitLead(formData: FormData) {
  "use server"
  // Simulación de procesamiento en servidor
  const payload = Object.fromEntries(formData.entries())
  console.log("Nuevo lead:", payload)
  await new Promise((r) => setTimeout(r, 800))
  return { ok: true }
}

export default function ContactForm() {
  const [pending, startTransition] = useTransition()
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  return (
    <form
      action={(formData) =>
        startTransition(async () => {
          const res = await submitLead(formData)
          if (res.ok) {
            toast({ title: "Enviado", description: "Gracias, te contactaremos pronto." })
            setName(""); setEmail(""); setCompany(""); setMessage("")
          } else {
            toast({ title: "Error", description: "Intenta nuevamente", variant: "destructive" })
          }
        })
      }
      className="grid gap-4"
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="tucorreo@empresa.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Empresa</Label>
        <Input id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea id="message" name="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <Button type="submit" disabled={pending} className="bg-emerald-600 hover:bg-emerald-700">
        {pending ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  )
}
