"use client"

import { useState, useTransition } from "react"
import { Form, Button } from "react-bootstrap"
import { useToast } from "@/hooks/use-toast"

async function submitLead(formData: FormData) {
  "use server"
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
    <Form
      action={(formData) =>
        startTransition(async () => {
          const res = await submitLead(formData)
          if (res.ok) {
            toast({ title: "Enviado", description: "Gracias, te contactaremos pronto." })
            setName(""); setEmail(""); setCompany(""); setMessage("")
          } else {
            toast({ title: "Error", description: "Intenta nuevamente", variant: "destructive" as any })
          }
        })
      }
    >
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name="name" required value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="tucorreo@empresa.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="company">
        <Form.Label>Empresa</Form.Label>
        <Form.Control name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" name="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} />
      </Form.Group>
      <Button type="submit" disabled={pending} variant="success">
        {pending ? "Enviando..." : "Enviar"}
      </Button>
    </Form>
  )
}
