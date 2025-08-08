export type GlossaryEntry = {
  term: string
  definition: string
  aka?: string[]
}

export const glossary: Record<string, GlossaryEntry> = {
  "sla": {
    term: "SLA (Service Level Agreement)",
    definition: "Compromiso formal de niveles de servicio (por ejemplo, disponibilidad, tiempos de respuesta y resolución) acordados entre proveedor y cliente.",
    aka: ["Acuerdo de Nivel de Servicio"],
  },
  "kpi": {
    term: "KPI (Key Performance Indicator)",
    definition: "Indicador clave que mide el desempeño frente a objetivos; orienta decisiones y priorización.",
    aka: ["Indicador Clave de Rendimiento"],
  },
  "okr": {
    term: "OKR (Objectives and Key Results)",
    definition: "Marco de objetivos con resultados clave medibles que alinean estrategia y ejecución.",
  },
  "sre": {
    term: "SRE (Site Reliability Engineering)",
    definition: "Práctica de ingeniería para operar sistemas confiables mediante SLO/SLI, automatización y gestión de incidentes.",
  },
  "slo": {
    term: "SLO (Service Level Objective)",
    definition: "Objetivo específico de nivel de servicio (p. ej., 99,9% de disponibilidad mensual).",
  },
  "sli": {
    term: "SLI (Service Level Indicator)",
    definition: "Métrica que cuantifica el comportamiento de un servicio (latencia, errores, disponibilidad, etc.).",
  },
  "mttr": {
    term: "MTTR (Mean Time To Recovery)",
    definition: "Tiempo promedio de recuperación desde que ocurre un incidente hasta su resolución.",
  },
  "rag": {
    term: "RAG (Retrieval‑Augmented Generation)",
    definition: "Técnica que enriquece respuestas de un modelo con recuperación de conocimiento relevante y trazable.",
  },
  "llm": {
    term: "LLM (Large Language Model)",
    definition: "Modelo de lenguaje de gran tamaño entrenado para comprender y generar lenguaje natural.",
  },
  "zero-trust": {
    term: "Zero Trust",
    definition: "Modelo de seguridad que asume cero confianza implícita; verifica continuamente identidad y contexto.",
  },
  "iam": {
    term: "IAM (Identity and Access Management)",
    definition: "Gestión centralizada de identidades, autenticación, autorización y gobierno de accesos.",
  },
  "mfa": {
    term: "MFA (Multi‑Factor Authentication)",
    definition: "Autenticación que requiere múltiples factores (algo que sabes, tienes, eres).",
  },
  "finops": {
    term: "FinOps",
    definition: "Práctica para optimizar costos de nube con colaboración entre finanzas, ingeniería y negocio.",
  },
  "idp": {
    term: "IDP (Internal Developer Platform)",
    definition: "Plataforma interna que estandariza herramientas y flujos para acelerar la entrega segura.",
  },
  "ci-cd": {
    term: "CI/CD",
    definition: "Integración y entrega continua: automatiza build, pruebas, despliegues y retroalimentación.",
  },
  "sast": {
    term: "SAST",
    definition: "Análisis estático de seguridad de código; detecta vulnerabilidades antes de ejecutar.",
  },
  "dast": {
    term: "DAST",
    definition: "Análisis dinámico de seguridad durante la ejecución; identifica vulnerabilidades en tiempo de ejecución.",
  },
  "canary": {
    term: "Canary Release",
    definition: "Estrategia de despliegue gradual a un subconjunto de usuarios para reducir riesgo.",
  },
  "feature-flags": {
    term: "Feature Flags",
    definition: "Conmutadores para activar/desactivar funcionalidades sin redeploy.",
  },
  "data-lake": {
    term: "Data Lake",
    definition: "Repositorio que almacena datos en crudo a gran escala para analítica y ML.",
  },
  "etl-elt": {
    term: "ETL/ELT",
    definition: "Extracción, transformación y carga de datos; ELT aplica transformación en destino.",
  },
  "mlops": {
    term: "MLOps",
    definition: "Prácticas para operacionalizar modelos ML con calidad, monitoreo y versionado.",
  },
  "observability": {
    term: "Observabilidad",
    definition: "Capacidad de inferir el estado interno de un sistema a partir de logs, métricas, trazas y eventos.",
  },
  "devex": {
    term: "DevEx (Developer Experience)",
    definition: "Experiencia de desarrolladores: herramientas, flujos y cultura que impactan productividad y calidad.",
  },
  "sd-wan": {
    term: "SD‑WAN",
    definition: "Red de área amplia definida por software para optimizar y orquestar conectividad.",
  },
  "sase": {
    term: "SASE",
    definition: "Arquitectura que combina redes y seguridad en servicios cloud para acceso seguro.",
  },
  "edge": {
    term: "Edge Computing",
    definition: "Procesamiento cercano a la fuente de datos para baja latencia y resiliencia.",
  },
  "lorawan": {
    term: "LoRaWAN",
    definition: "Protocolo de red de baja potencia y largo alcance para IoT.",
  },
  "5g": {
    term: "5G",
    definition: "Quinta generación de redes móviles con mayor ancho de banda y menor latencia.",
  },
  "dr": {
    term: "DR (Disaster Recovery)",
    definition: "Estrategia y procesos para recuperar servicios ante desastres con RTO/RPO definidos.",
  },
}
