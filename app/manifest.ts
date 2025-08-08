import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'South Developers Chile SpA',
    short_name: 'SouthDevs',
    description: 'Soluciones tecnológicas superiores en IA, nube, ciberseguridad, IoT, drones y software a la medida.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0b0f0e',
    theme_color: '#0ea5a4',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
