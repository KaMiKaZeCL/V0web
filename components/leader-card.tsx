import { Card } from "react-bootstrap"
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
    <Card className="h-100">
      <div className="ratio ratio-4x3">
        <Image
          src={leader.image || "/placeholder.svg"}
          alt={leader.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <Card.Body>
        <Card.Title className="h6 mb-1">{leader.name}</Card.Title>
        <div className="text-muted small">{leader.role}</div>
        <div className="small text-muted mt-2">
          <Quote size={16} className="me-1 text-success" /> {leader.quote}
        </div>
      </Card.Body>
    </Card>
  )
}
