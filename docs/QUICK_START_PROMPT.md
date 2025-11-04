# ⚡ QUICK START PROMPT - Clonación Web Rápida

## 🎯 USO: Copiar y pegar este prompt a cualquier LLM

```
Necesito clonar el sitio web [URL] con alta fidelidad visual (90%+ similitud).

STACK REQUERIDO:
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

METODOLOGÍA (Basada en experiencia real de proyecto exitoso):

FASE 1 - ANÁLISIS (30% del tiempo):
1. Abrir [URL] y tomar screenshots en 375px, 768px, 1920px
2. Por CADA sección, documentar en formato tabla:
   - Layout (grid/flex, columnas)
   - Colores HEX exactos (usar DevTools Color Picker)
   - Tipografía (font-family, sizes, weights)
   - Spacing (padding, margins, gaps en px)
   - Efectos (shadows, blur, gradients)
   - Hover states
3. Identificar componentes reutilizables (buttons, cards, carousels)

FASE 2 - SETUP (10% del tiempo):
```bash
npx create-next-app@latest clone --typescript --tailwind --app
cd clone
npx shadcn@latest init
npx shadcn@latest add button card input badge carousel
npm install lucide-react embla-carousel-autoplay
```

FASE 3 - IMPLEMENTACIÓN (50% del tiempo):
Desarrollar sección por sección en este orden:
1. Navbar (fixed, glassmorphism si aplica)
2. Hero (background image, CTA buttons)
3. About/Features
4. Products/Services (usar carousel si es grid de 4+ items)
5. Testimonials (carousel con autoplay)
6. Blog/News
7. Footer

Por cada sección:
- Crear componente en /components/[Nombre].tsx
- HTML semántico con section/article/aside
- Estilos con Tailwind (mobile-first)
- Comparar visualmente con original
- Iterar hasta 95%+ match

FASE 4 - REFINAMIENTO (10% del tiempo):
1. Responsive testing (DevTools 375px, 768px, 1920px)
2. Agregar scroll animations:
```tsx
// lib/hooks/useInView.ts
import { useEffect, useState, useRef } from 'react'
export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (options.triggerOnce) observer.disconnect()
      }
    }, { threshold: options.threshold || 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, isInView }
}
```

3. Performance: Lighthouse >90
4. Zero console errors

ERRORES COMUNES A EVITAR (Experiencia real):
❌ No analizar antes de codear → 60% más correcciones
❌ Colores hardcoded en lugar de extraer HEX exactos
❌ Ignorar hover effects → Pérdida de 20% similitud
❌ No usar max-w-7xl en containers → Layout inconsistente
❌ Fechas inválidas en date inputs (usar fecha futura)
❌ Glassmorphism sin backdrop-blur → Efecto no se ve
❌ Carousels sin responsive basis → Roto en mobile
❌ Imágenes sin aspect-ratio → Distorsionadas

DECISIONES CRÍTICAS:
✅ Usar shadcn/ui para UI primitivos (ahorra 50% tiempo)
✅ Mobile-first con Tailwind breakpoints
✅ next/image con priority para hero images
✅ Fluid typography: clamp(2.5rem, 5vw, 5rem)
✅ Transition global: duration-300 en todos los hover
✅ Scroll animations: Intersection Observer + CSS transitions
✅ Container consistente: max-w-7xl en todas las secciones
✅ Padding uniforme: py-16 md:py-20 lg:py-28

CHECKLIST FINAL:
[ ] Visual match 95%+ (comparar lado a lado)
[ ] Responsive perfecto en 3 breakpoints
[ ] Todos los links/buttons funcionan
[ ] Carousels swipeable en mobile
[ ] Hover effects suaves (transition-all)
[ ] Zero console errors
[ ] Lighthouse Performance >90
[ ] Build sin TypeScript errors

RESULTADO ESPERADO:
- Similitud: 95-97%
- Tiempo: 10-12 horas
- Documentación: README + COMPARISON_ANALYSIS
```

---

## 📚 REFERENCIA RÁPIDA DE COMPONENTES

### Navbar con Scroll Effect
```tsx
"use client"
import { useState, useEffect } from 'react'
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      {/* Content */}
    </nav>
  )
}
```

### Hero con Background
```tsx
import Image from 'next/image'
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <Image src="/hero-bg.jpg" alt="" fill className="object-cover -z-10" priority />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container mx-auto px-4 max-w-7xl text-center text-white">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">Title</h1>
        <Button size="lg">Call to Action</Button>
      </div>
    </section>
  )
}
```

### Card con Hover
```tsx
import { Card, CardContent } from '@/components/ui/card'
export default function ServiceCard({ service }) {
  return (
    <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <CardContent className="p-6">
        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  )
}
```

### Carousel Responsive
```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
export default function ItemsCarousel({ items }) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {items.map((item, i) => (
          <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <ItemCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12" />
      <CarouselNext className="hidden md:flex -right-12" />
    </Carousel>
  )
}
```

### Glassmorphism CSS
```css
/* globals.css */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### Scroll Animations
```css
/* globals.css */
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in-up.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

```tsx
// Componente con animation
import { useInView } from '@/lib/hooks/useInView'
export default function AnimatedSection() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <section ref={ref} className={`fade-in-up ${isInView ? 'in-view' : ''}`}>
      {/* Content */}
    </section>
  )
}
```

---

## 🎯 RESUMEN DE DECISIONES CLAVE (Experiencia Real)

| Decisión | Razón | Impacto |
|----------|-------|---------|
| shadcn/ui | Ahorra 50% tiempo vs custom | 🔥🔥🔥 |
| Mobile-first | Previene refactors | 🔥🔥🔥 |
| Análisis 30% tiempo | Reduce correcciones 60% | 🔥🔥🔥 |
| Documentar análisis | No perder contexto entre sesiones | 🔥🔥 |
| Intersection Observer | Animations performantes | 🔥🔥 |
| Fluid typography clamp() | Responsive automático | 🔥🔥 |
| next/image | Optimización gratis | 🔥🔥 |
| Carousels embla | Swipe mobile nativo | 🔥 |
| CSS variables | Theme consistency | 🔥 |
| Container max-w-7xl | Layout profesional | 🔥 |

---

**Tiempo Total Estimado:** 10-12 horas  
**Similitud Esperada:** 95-97%  
**Basado en:** Proyecto real Luxury Hotel (Nov 2025)

---

## 📖 DOCUMENTACIÓN COMPLETA

Para el prompt completo con 1000+ líneas de detalles, errores específicos, 
y decisiones arquitectónicas profundas, ver: `MASTER_PROMPT_FOR_LLM.md`
