import { Bot, Cloud, Database, DrillIcon as Drone, Factory, Fingerprint, Globe2, Headphones, ShieldCheck, Smartphone, Wrench, Zap } from 'lucide-react'
import type { Leader } from "@/components/leader-card"

export const clients = [
  { name: "Cliente 1", logo: "/minimal-tech-logo-1.png" },
  { name: "Cliente 2", logo: "/minimal-tech-logo-2.png" },
  { name: "Cliente 3", logo: "/minimal-tech-logo-3.png" },
  { name: "Cliente 4", logo: "/minimal-tech-logo-4.png" },
  { name: "Cliente 5", logo: "/minimal-tech-logo-5.png" },
  { name: "Cliente 6", logo: "/minimal-tech-logo-6.png" },
]

export const servicesCatalog = [
  {
    name: "Agentes de IA",
    subtitle: "Copilotos, RAG, orquestación y evaluación",
    icon: <Bot className="w-4 h-4 text-violet-600" />,
    offers: [
      "Diseño y fine-tuning de LLMs",
      "RAG con evaluación y trazabilidad",
      "Agentes multi-paso y herramientas",
      "Observabilidad y guardrails de IA",
      "Integración con CRM/ERP y datos privados",
    ],
  },
  {
    name: "Drones y Robótica",
    subtitle: "Inspección, seguridad y logística",
    icon: <Drone className="w-4 h-4 text-violet-600" />,
    offers: [
      "Flotas y planificación de misiones",
      "Visión computacional (detección/análisis)",
      "Gemelos digitales y 3D mapping",
      "Cumplimiento DGAC y normativa",
      "Integración SCADA/OT e IoT",
    ],
  },
  {
    name: "IoT y Edge",
    subtitle: "Sensores, gateways y plataformas",
    icon: <Factory className="w-4 h-4 text-violet-600" />,
    offers: [
      "Diseño e implementación de redes LoRa/5G",
      "Edge AI y mantenimiento predictivo",
      "Telemetría y control en tiempo real",
      "Seguridad de dispositivos y firmware",
    ],
  },
  {
    name: "Ciberseguridad",
    subtitle: "Zero Trust y respuesta a incidentes",
    icon: <ShieldCheck className="w-4 h-4 text-violet-600" />,
    offers: [
      "Arquitectura Zero Trust y PAM",
      "SOC 24/7 y threat hunting",
      "Pentesting, Red Team y bug bounty",
      "Cumplimiento ISO 27001, PCI, NIST",
    ],
  },
  {
    name: "Nube y Plataformas",
    subtitle: "Multi-cloud, FinOps y SRE",
    icon: <Cloud className="w-4 h-4 text-violet-600" />,
    offers: [
      "Arquitecturas híbridas y containers",
      "IDP (Internal Developer Platform)",
      "Observabilidad end-to-end",
      "Resiliencia, DR y performance",
    ],
  },
  {
    name: "Datos y Analítica",
    subtitle: "Lagos de datos, MLOps y BI",
    icon: <Database className="w-4 h-4 text-violet-600" />,
    offers: [
      "Data mesh y gobernanza",
      "Pipelines ELT/CDC y catalogación",
      "MLOps y feature stores",
      "Cuadros de mando y self-service BI",
    ],
  },
  {
    name: "Desarrollo a Medida",
    subtitle: "SaaS, APIs y apps móviles",
    icon: <Smartphone className="w-4 h-4 text-violet-600" />,
    offers: [
      "Arquitectura hexagonal y DDD",
      "APIs escalables y event-driven",
      "Apps móviles nativas y PWA",
      "QA automatizado y performance",
    ],
  },
  {
    name: "Experiencia de Desarrolladores",
    subtitle: "Plataformas, CI/CD y seguridad",
    icon: <Wrench className="w-4 h-4 text-violet-600" />,
    offers: [
      "Backstage/Portales de dev",
      "Golden paths y plantillas",
      "SAST/DAST y políticas",
      "Speed + calidad con métricas DORA",
    ],
  },
  {
    name: "Contact Center y Chat",
    subtitle: "Omnicanal, bots y voz",
    icon: <Headphones className="w-4 h-4 text-violet-600" />,
    offers: [
      "Bots con IA y voz sintética",
      "Integración CRM y orquestación",
      "Analytics y QA de conversaciones",
      "IVR inteligente y autoservicio",
    ],
  },
  {
    name: "Identidad y Privacidad",
    subtitle: "IAM, MFA y privacidad diferencial",
    icon: <Fingerprint className="w-4 h-4 text-violet-600" />,
    offers: [
      "Gestión de identidades y accesos",
      "Autenticación adaptativa",
      "Privacidad y anonimización",
    ],
  },
  {
    name: "Conectividad Global",
    subtitle: "Redes SD-WAN, 5G y SASE",
    icon: <Globe2 className="w-4 h-4 text-violet-600" />,
    offers: [
      "Arquitectura SASE y SD-WAN",
      "Optimización WAN y QoS",
      "5G privado y edge computing",
    ],
  },
  {
    name: "Energía Inteligente",
    subtitle: "Smart grid, IoT y sostenibilidad",
    icon: <Zap className="w-4 h-4 text-violet-600" />,
    offers: [
      "Monitoreo y eficiencia energética",
      "Carga de vehículos eléctricos",
      "Sistemas fotovoltaicos inteligentes",
    ],
  },
]

export const productHighlights = [
  {
    id: "p1",
    name: "SD-DroneX Pro",
    category: "Drones",
    description: "Drone de inspección industrial con visión computacional y autonomía avanzada.",
    image: "/placeholder-eda11.png",
  },
  {
    id: "p2",
    name: "SD-IoT Edge Hub",
    category: "IoT",
    description: "Gateway IoT con seguridad reforzada, 5G y edge AI para análisis en sitio.",
    image: "/industrial-iot-edge-device.png",
  },
  {
    id: "p3",
    name: "SD-Agent Platform",
    category: "IA",
    description: "Plataforma para agentes de IA con herramientas, evaluación y observabilidad.",
    image: "/ai-agents-platform-panel.png",
  },
]

export const allProducts = [
  ...productHighlights,
  { id: "p4", name: "Servidor Rack 2U High‑Perf", category: "Servidores", description: "Dual CPU, 512GB RAM, NVMe, redundancia eléctrica.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p5", name: "Workstation Pro RTX", category: "Workstations", description: "GPU RTX, 128GB RAM, ideal para IA y renderizado.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p6", name: "Laptop 14” Ultraliviana", category: "Laptops", description: "Intel Evo, 16GB RAM, 1TB SSD, batería de larga duración.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p7", name: "Notebook 15” Empresarial", category: "Notebooks", description: "AMD/Intel, 32GB RAM, seguridad empresarial.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p8", name: "Tablet Rugerizada 10”", category: "Tablets", description: "Resistente a golpes, IP68, ideal para terreno.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p9", name: "Pantalla 34” Ultrawide", category: "Pantallas", description: "IPS 34”, 3440×1440, USB‑C y KVM integrado.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p10", name: "Impresora Láser A4 Dúplex", category: "Impresoras", description: "Dúplex automático, red gigabit, alto rendimiento.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p11", name: "Pods de Data Center", category: "Data Center", description: "Racks, enfriamiento, UPS y monitoreo integrado.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p12", name: "Partes y Piezas", category: "Partes y Piezas", description: "Memoria, SSD, fuentes, ventiladores, cables.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p13", name: "Tecnología Variada", category: "Tecnología", description: "Accesorios, periféricos, docking, hubs, etc.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p14", name: "SD-Cloud Fabric", category: "Nube", description: "Plataforma multi-cloud con FinOps y governance integrada.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p15", name: "SD-Vision Kit", category: "IA", description: "Kit de visión computacional para inspección y seguridad.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p16", name: "SD-Data Lake", category: "Datos", description: "Lago de datos gobernado con motores de consulta elásticos.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p17", name: "SD-Contact AI", category: "CX", description: "Bots de atención, voz y análisis de conversaciones.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p18", name: "SD-Dev Portal", category: "DevEx", description: "Portal de desarrolladores con golden paths y catálogos.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p19", name: "SD-Edge Mesh", category: "Redes", description: "Conectividad SASE/SD-WAN optimizada para sitios remotos.", image: "/placeholder.svg?height=500&width=900" },
  { id: "p20", name: "SD-Identity Shield", category: "Seguridad", description: "Gestión de identidades, MFA y protección de privacidad.", image: "/placeholder.svg?height=500&width=900" },
]

export const allStoreProducts = [
  // Hardware de computación
  { id: "s1", name: "Servidor Rack 2U High‑Perf", description: "Dual CPU, 512GB RAM, NVMe, redundancia.", price: 6599900, category: "Servidores", image: "/placeholder.svg?height=500&width=900" },
  { id: "s2", name: "Servidor Torre SMB", description: "Ideal para pymes, silencioso y eficiente.", price: 2199900, category: "Servidores", image: "/placeholder.svg?height=500&width=900" },
  { id: "s3", name: "Workstation Pro RTX", description: "RTX 6000, 128GB RAM, NVMe.", price: 5499900, category: "Workstations", image: "/placeholder.svg?height=500&width=900" },
  { id: "s4", name: "Laptop 14” Ultraliviana", description: "Intel Evo, 16GB RAM, 1TB SSD.", price: 1299990, category: "Laptops", image: "/placeholder.svg?height=500&width=900" },
  { id: "s5", name: "Notebook 15” Empresarial", description: "32GB RAM, seguridad empresarial.", price: 999990, category: "Notebooks", image: "/placeholder.svg?height=500&width=900" },
  { id: "s6", name: "Tablet Rugerizada 10”", description: "IP68, para terreno.", price: 799990, category: "Tablets", image: "/placeholder.svg?height=500&width=900" },
  { id: "s7", name: "Pantalla 34” Ultrawide", description: "IPS, USB‑C, KVM.", price: 599990, category: "Pantallas", image: "/placeholder.svg?height=500&width=900" },
  { id: "s8", name: "Impresora Láser A4 Dúplex", description: "Dúplex, red gigabit.", price: 349990, category: "Impresoras", image: "/placeholder.svg?height=500&width=900" },
  // Data Center y redes
  { id: "s9", name: "Pod Data Center Modular", description: "Racks + enfriamiento + UPS.", price: 25999990, category: "Data Center", image: "/placeholder.svg?height=500&width=900" },
  { id: "s10", name: "CPE SD‑WAN", description: "Conectividad SASE/SD‑WAN.", price: 499000, category: "Redes", image: "/placeholder.svg?height=500&width=900" },
  // Partes y piezas
  { id: "s11", name: "SSD NVMe 2TB", description: "PCIe 4.0, alta performance.", price: 199990, category: "Partes y Piezas", image: "/placeholder.svg?height=500&width=900" },
  { id: "s12", name: "Memoria RAM 32GB", description: "DDR5, 5600 MHz.", price: 129990, category: "Partes y Piezas", image: "/placeholder.svg?height=500&width=900" },
  // Software y plataformas
  { id: "s13", name: "SD-Agent Platform", description: "Plataforma agentes IA.", price: 599000, category: "Software", image: "/placeholder.svg?height=500&width=900" },
  { id: "s14", name: "SD-Cloud Fabric", description: "Multi-cloud + FinOps.", price: 899000, category: "Software", image: "/placeholder.svg?height=500&width=900" },
  // Existentes para compatibilidad
  { id: "s15", name: "Sensor LoRa Temp/Hum", description: "Sensor industrial LoRaWAN.", price: 149000, category: "IoT", image: "/placeholder.svg?height=500&width=900" },
  { id: "s16", name: "SD-Edge Mesh CPE", description: "CPE SASE/SD-WAN.", price: 499000, category: "Redes", image: "/placeholder.svg?height=500&width=900" },
]

export const leaders: Leader[] = [
  {
    name: "Valentina Rojas",
    role: "Chief Technology Officer",
    image: "/placeholder.svg?height=500&width=800",
    quote: "La tecnología debe entregar resultados concretos y medibles, con seguridad por diseño.",
  },
  {
    name: "Diego Muñoz",
    role: "Director de Ciberseguridad",
    image: "/placeholder.svg?height=500&width=800",
    quote: "Zero Trust y observabilidad total son pilares para proteger el negocio.",
  },
  {
    name: "Camila Fernández",
    role: "Head of AI & Data",
    image: "/placeholder.svg?height=500&width=800",
    quote: "IA responsable: impacto, confiabilidad y gobierno de datos.",
  },
  {
    name: "Javier Torres",
    role: "Director de Plataformas Cloud",
    image: "/placeholder.svg?height=500&width=800",
    quote: "Arquitecturas resilientes y FinOps para maximizar el valor.",
  },
  {
    name: "María Pérez",
    role: "Head of Robotics & IoT",
    image: "/placeholder.svg?height=500&width=800",
    quote: "Edge + IoT + IA: visibilidad y acción en tiempo real.",
  },
  {
    name: "Tomás González",
    role: "Director de Customer Experience",
    image: "/placeholder.svg?height=500&width=800",
    quote: "Experiencias simples, personalizadas y seguras.",
  },
]
