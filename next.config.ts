import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formatos modernos de imagen (en orden de preferencia)
    formats: ["image/avif", "image/webp"],

    // Calidades configuradas para evitar warnings
    qualities: [75, 85, 90, 100],

    // Tamaños de imagen para diferentes dispositivos
    // Estos tamaños se usan para generar el srcset en imágenes responsive
    deviceSizes: [
      640, // Mobile pequeño
      750, // Mobile grande
      828, // Tablet pequeño
      1080, // Tablet / Desktop pequeño
      1200, // Desktop medio
      1920, // Desktop grande
      2048, // Desktop 2K
      3840, // Desktop 4K
    ],

    // Tamaños para imágenes más pequeñas (iconos, thumbnails, etc.)
    imageSizes: [
      16, // Favicon
      32, // Iconos pequeños
      48, // Iconos
      64, // Avatares pequeños
      96, // Avatares
      128, // Thumbnails pequeños
      256, // Thumbnails
      384, // Imágenes pequeñas en grid
    ],

    // Tiempo mínimo de caché (en segundos)
    // Las imágenes optimizadas se cachean por este tiempo mínimo
    minimumCacheTTL: 60,

    // Calidad de imagen por defecto (1-100)
    // Puedes sobrescribir esto en cada componente Image con la prop quality
    // No hay una opción global, pero el default de Next.js es 75

    // Si necesitas usar imágenes remotas, agrega:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //   },
    // ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
