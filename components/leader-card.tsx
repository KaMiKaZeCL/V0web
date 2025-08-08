import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Quote } from 'lucide-react'

export type Leader = {
  name: string
  role: string
  image: string
  quote: string
}

export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition">
      <CardContent className="p-0">
        <Image
          src={leader.image || "/placeholder.svg"}
          alt={leader.name}
          width={800}
          height={500}
          className="w-full aspect-[4/3] object-cover"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-lg">{leader.name}</CardTitle>
        <CardDescription>{leader.role}</CardDescription>
      </CardHeader>
      <div className="px-6 pb-6 text-sm text-muted-foreground">
        <Quote className="inline w-4 h-4 mr-1 text-emerald-600" aria-hidden /> {leader.quote}
      </div>
    </Card>
  )
}
