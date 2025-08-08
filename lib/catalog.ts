import type { Product } from "@/components/product-card"

export const featuredProducts: Product[] = [
  {
    id: "p1",
    name: "SD‑DroneX Pro",
    description: "Inspección industrial con visión computacional y autonomía avanzada.",
    price: 8999900,
    category: "Drones",
    image: "/industrial-drone-modern-plant.png",
  },
  {
    id: "p2",
    name: "SD‑IoT Edge Hub",
    description: "Gateway IoT seguro con 5G y Edge AI para análisis en sitio.",
    price: 1299990,
    category: "IoT",
    image: "/minimalist-iot-edge-device.png",
  },
  {
    id: "p3",
    name: "Workstation Pro RTX",
    description: "GPU RTX, 128GB RAM, ideal para IA y renderizado.",
    price: 5499900,
    category: "Workstations",
    image: "/minimalist-professional-workstation.png",
  },
]

export const storeProducts: Product[] = [
  ...featuredProducts,
  {
    id: "p4",
    name: "Servidor Rack 2U High‑Perf",
    description: "Dual CPU, 512GB RAM, NVMe, redundancia eléctrica.",
    price: 6599900,
    category: "Servidores",
    image: "/placeholder-p9nhc.png",
  },
  {
    id: "p5",
    name: "Pantalla 34” Ultrawide",
    description: "IPS 3440×1440, USB‑C y KVM integrado.",
    price: 599990,
    category: "Pantallas",
    image: "/ultrawide-modern-office.png",
  },
  {
    id: "p6",
    name: "SD‑Cloud Fabric",
    description: "Plataforma multi‑cloud con FinOps y gobernanza integrada.",
    price: 899000,
    category: "Software",
    image: "/minimalist-cloud-fabric-panel.png",
  },
  {
    id: "p7",
    name: "SD‑Contact AI",
    description: "Bots de atención con voz y analytics de conversaciones.",
    price: 599000,
    category: "Software",
    image: "/contact-center-ai-dashboard.png",
  },
  {
    id: "p8",
    name: "Tablet Rugerizada 10”",
    description: "Resistente a golpes, IP68, ideal para terreno.",
    price: 799990,
    category: "Tablets",
    image: "/placeholder-2njmg.png",
  },
]
