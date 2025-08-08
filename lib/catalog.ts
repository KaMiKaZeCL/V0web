import type { Product } from "@/components/product-card"

export type ProductWithSpecs = Product & {
  specs?: Record<string, string>
}

export const featuredProducts: ProductWithSpecs[] = [
  {
    id: "p1",
    name: "SD‑DroneX Pro",
    description: "Inspección industrial con visión computacional y autonomía avanzada.",
    price: 8999900,
    category: "Drones",
    image: "/industrial-drone-modern-plant.png",
    specs: {
      "Cámara": "48 MP, 4K",
      "Autonomía": "38 min",
      "Sensores": "Lidar + Térmico",
      "Resistencia": "IP54",
    },
  },
  {
    id: "p2",
    name: "SD‑IoT Edge Hub",
    description: "Gateway IoT seguro con 5G y Edge AI para análisis en sitio.",
    price: 1299990,
    category: "IoT",
    image: "/minimalist-iot-edge-device.png",
    specs: {
      "Conectividad": "5G / LoRa / Wi‑Fi",
      "CPU": "Quad‑core ARM",
      "Seguridad": "Secure Boot + TPM",
      "AI": "NPU 2 TOPS",
    },
  },
  {
    id: "p3",
    name: "Workstation Pro RTX",
    description: "GPU RTX, 128GB RAM, ideal para IA y renderizado.",
    price: 5499900,
    category: "Workstations",
    image: "/minimalist-professional-workstation.png",
    specs: {
      "CPU": "Intel Xeon",
      "GPU": "RTX 6000",
      "RAM": "128 GB",
      "Almacenamiento": "2 TB NVMe",
    },
  },
]

export const storeProducts: ProductWithSpecs[] = [
  ...featuredProducts,
  {
    id: "p4",
    name: "Servidor Rack 2U High‑Perf",
    description: "Dual CPU, 512GB RAM, NVMe, redundancia eléctrica.",
    price: 6599900,
    category: "Servidores",
    image: "/placeholder-p9nhc.png",
    specs: {
      "CPU": "2× Xeon",
      "RAM": "512 GB ECC",
      "Almacenamiento": "4× NVMe",
      "Energía": "PSU Redundante",
    },
  },
  {
    id: "p5",
    name: "Pantalla 34” Ultrawide",
    description: "IPS 3440×1440, USB‑C y KVM integrado.",
    price: 599990,
    category: "Pantallas",
    image: "/ultrawide-modern-office.png",
    specs: {
      "Panel": "IPS 34”",
      "Resolución": "3440×1440",
      "Puertos": "USB‑C / DP / HDMI",
      "Extras": "KVM integrado",
    },
  },
  {
    id: "p6",
    name: "SD‑Cloud Fabric",
    description: "Plataforma multi‑cloud con FinOps y gobernanza integrada.",
    price: 899000,
    category: "Software",
    image: "/minimalist-cloud-fabric-panel.png",
    specs: {
      "FinOps": "Cost dashboards",
      "Seguridad": "Policies as code",
      "Compliance": "Controles pre‑aprobados",
      "Despliegue": "IaC + GitOps",
    },
  },
  {
    id: "p7",
    name: "SD‑Contact AI",
    description: "Bots de atención con voz y analytics de conversaciones.",
    price: 599000,
    category: "Software",
    image: "/contact-center-ai-dashboard.png",
    specs: {
      "Canales": "Web, WhatsApp, Voz",
      "IA": "ASR/TTS + NLU",
      "Integración": "CRM / ERP",
      "Calidad": "Scoring & QA",
    },
  },
  {
    id: "p8",
    name: "Tablet Rugerizada 10”",
    description: "Resistente a golpes, IP68, ideal para terreno.",
    price: 799990,
    category: "Tablets",
    image: "/placeholder-2njmg.png",
    specs: {
      "Pantalla": "10”",
      "Protección": "IP68",
      "Batería": "8500 mAh",
      "Comunicación": "4G / Wi‑Fi",
    },
  },
]
