# 🎯 MASTER PROMPT: Clonar Sitios Web con Alta Fidelidad Visual

## 📌 Propósito del Prompt

Este prompt está diseñado para que cualquier LLM pueda clonar sitios web con **90-97% de similitud visual**, basado en la experiencia exitosa de clonar un sitio web de hotel de lujo. Incluye metodología probada, errores comunes a evitar, y decisiones críticas de arquitectura.

---

## 🎓 CONTEXTO DE APRENDIZAJE

### Proyecto Original
- **Tipo:** Sitio web de hotel de lujo (múltiples secciones, interactivo)
- **Resultado Final:** 97% de similitud visual
- **Tiempo Total:** ~10 horas
- **Iteraciones:** 3 fases mayores
- **Stack:** Next.js 16, TypeScript, Tailwind CSS, shadcn/ui
- **Componentes:** 10+ secciones complejas

### Lecciones Clave Aprendidas
1. ✅ **El análisis inicial exhaustivo ahorra 60% del tiempo de correcciones**
2. ✅ **Las librerías de UI profesionales (shadcn/ui) aceleran el desarrollo 3x**
3. ✅ **Los detalles visuales (glassmorphism, animaciones) generan el 40% de la similitud percibida**
4. ✅ **La estructura iterativa con documentación previene retrocesos**
5. ✅ **El responsive design debe ser simultáneo, no retrospectivo**

---

## 🚀 PROMPT PRINCIPAL

```markdown
# INSTRUCCIONES: Clonar Sitio Web con Alta Fidelidad Visual

## OBJETIVO
Clonar el sitio web [URL_ORIGINAL] con **mínimo 90% de similitud visual**, 
creando una réplica funcional, responsive y optimizada usando Next.js 16 
(App Router), TypeScript, Tailwind CSS y shadcn/ui.

## FASE 1: ANÁLISIS Y PLANIFICACIÓN (30% del tiempo)

### 1.1 Captura Visual Completa
- [ ] Abrir el sitio original en navegador con DevTools
- [ ] Tomar screenshots en 3 resoluciones:
  - Desktop: 1920x1080
  - Tablet: 768x1024
  - Mobile: 375x667
- [ ] Capturar estados hover de botones y cards
- [ ] Grabar video de interacciones (carousels, modals, animations)

### 1.2 Análisis Estructural
Crear documento de análisis con esta estructura:

**Por cada sección del sitio:**
```
## [NOMBRE DE SECCIÓN]

**Layout:**
- Tipo de grid/flexbox utilizado
- Número de columnas (desktop/tablet/mobile)
- Gaps y spacing específicos

**Elementos visuales:**
- Background (color, imagen, gradient, overlay)
- Bordes (radius, colors, widths)
- Sombras (box-shadow específicos)
- Efectos especiales (blur, glassmorphism, gradients)

**Tipografía:**
- Fuentes utilizadas (families)
- Tamaños por breakpoint (font-size en px)
- Pesos (font-weight)
- Line-heights y letter-spacing

**Colores exactos:**
- Extraer HEX codes con DevTools (Inspect > Computed)
- Anotar colores primarios, secundarios, acentos
- Variaciones hover/active

**Interactividad:**
- Hover effects (transform, color changes, etc.)
- Click behaviors
- Animaciones (duration, easing, delays)
- Scroll animations (fade-in, slide-up, etc.)

**Imágenes:**
- Rutas y nombres de archivos
- Dimensiones reales
- Aspect ratios
- Object-fit utilizado
```

### 1.3 Identificar Componentes Reutilizables
Lista todos los patrones repetidos:
- Botones (variantes)
- Cards (tipos diferentes)
- Forms (inputs, selects)
- Carousels/Sliders
- Modals/Dialogs
- Navigation patterns

### 1.4 Priorización con MoSCoW
**Must Have (Crítico para similitud):**
- [Lista elementos que definen la identidad visual]

**Should Have (Importante pero no crítico):**
- [Lista mejoras visuales secundarias]

**Could Have (Nice to have):**
- [Lista micro-animaciones, easter eggs]

**Won't Have (Fuera de scope):**
- [Lista funcionalidades back-end no visibles]

## FASE 2: SETUP Y ARQUITECTURA (10% del tiempo)

### 2.1 Inicializar Proyecto Next.js
```bash
npx create-next-app@latest proyecto-clone --typescript --tailwind --app --no-src-dir
cd proyecto-clone
```

### 2.2 Instalar Dependencias Críticas
```bash
# shadcn/ui setup
npx shadcn@latest init

# Componentes base necesarios (adaptar según análisis)
npx shadcn@latest add button card input badge carousel separator aspect-ratio

# Librerías adicionales comunes
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install embla-carousel-autoplay  # Solo si hay carousels con autoplay
```

### 2.3 Configurar Sistema de Diseño en globals.css

**CRÍTICO:** Extraer variables del sitio original primero

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colores extraídos del sitio original */
    --primary: [HEX del color principal];
    --secondary: [HEX del color secundario];
    --accent: [HEX del acento (ej: gold)];
    
    /* Tipografía fluid (responsive automático) */
    --font-heading: [Fuente de headings];
    --font-body: [Fuente de body];
  }
  
  body {
    @apply font-body text-base leading-relaxed;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-semibold;
  }
  
  h1 {
    font-size: clamp(2.5rem, 5vw + 1rem, 5rem);
  }
  
  h2 {
    font-size: clamp(2rem, 4vw + 0.5rem, 3.5rem);
  }
  
  h3 {
    font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
  }
}

@layer utilities {
  /* Glassmorphism (muy común en sitios modernos) */
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  /* Transiciones globales suaves */
  * {
    @apply transition-colors duration-300;
  }
  
  /* Animaciones de scroll (implementar con Intersection Observer) */
  .fade-in-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .fade-in-up.in-view {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 2.4 Estructura de Carpetas
```
/proyecto-clone
├── app/
│   ├── layout.tsx          # Layout principal con fuentes
│   ├── page.tsx            # Homepage que importa todos los componentes
│   └── globals.css         # Sistema de diseño
├── components/
│   ├── ui/                 # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── Navbar.tsx          # Componentes custom del sitio
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   └── ...
├── lib/
│   ├── utils.ts            # Utilidades (cn helper)
│   └── hooks/
│       └── useInView.ts    # Hook para scroll animations
└── public/
    └── images/             # Assets optimizados
```

## FASE 3: IMPLEMENTACIÓN ITERATIVA (50% del tiempo)

### 3.1 Metodología de Desarrollo
**IMPORTANTE:** Desarrollar sección por sección, NO todo de una vez.

**Por cada sección:**

1. **Crear componente base**
```tsx
export default function [NombreSeccion]() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Contenido */}
      </div>
    </section>
  )
}
```

2. **Implementar estructura HTML semántica**
- Usar tags correctos: `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- IDs para anchor navigation: `<section id="about">`

3. **Aplicar estilos base (layout y spacing)**
```tsx
// Ejemplo de grid responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
```

4. **Agregar contenido (textos e imágenes)**
- Usar `next/image` para optimización automática
- Mantener textos originales (copy exacto)

5. **Refinar estilos visuales**
- Colors exactos
- Borders y radius
- Shadows
- Hover effects

6. **Agregar interactividad**
- Hover states
- Click handlers
- Animaciones CSS

7. **Optimizar responsive**
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Testing en DevTools

8. **Verificar en navegador**
- Comparar lado a lado con original
- Ajustar hasta 95%+ similitud

### 3.2 Componentes Críticos Comunes

#### Navbar con Glassmorphism
```tsx
"use client"
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-md" 
        : "bg-transparent"
    )}>
      {/* Nav content */}
    </nav>
  )
}
```

#### Hero Section con Background Image
```tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="mb-6">Luxury Hotel Experience</h1>
        <p className="text-xl mb-8">Welcome to paradise</p>
        <Button size="lg">Book Now</Button>
      </div>
    </section>
  )
}
```

#### Cards con Hover Effects
```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function RoomCard({ room }) {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={room.image}
            alt={room.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle>{room.title}</CardTitle>
        <p className="text-muted-foreground mt-2">{room.description}</p>
        <Button className="mt-4 w-full">View Details</Button>
      </CardContent>
    </Card>
  )
}
```

#### Carousel (usando shadcn/ui)
```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function RoomsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {rooms.map((room, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <RoomCard room={room} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12" />
      <CarouselNext className="hidden md:flex -right-12" />
    </Carousel>
  )
}
```

#### Scroll Animations Hook
```tsx
// lib/hooks/useInView.ts
import { useEffect, useState, useRef } from 'react'

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (options.triggerOnce) {
          observer.disconnect()
        }
      }
    }, { threshold: options.threshold || 0.1 })
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [options.threshold, options.triggerOnce])
  
  return { ref, isInView }
}

// Uso en componente
export default function AnimatedSection() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  return (
    <section
      ref={ref}
      className={cn("fade-in-up", isInView && "in-view")}
    >
      {/* Content */}
    </section>
  )
}
```

## FASE 4: TESTING Y REFINAMIENTO (10% del tiempo)

### 4.1 Testing Responsive
```bash
# Abrir en DevTools y probar:
- iPhone SE (375px)
- iPad (768px)
- MacBook Pro (1440px)
- Full HD (1920px)
```

**Checklist por breakpoint:**
- [ ] Todo el contenido visible sin scroll horizontal
- [ ] Imágenes mantienen aspect ratio
- [ ] Texto legible (mínimo 16px en body)
- [ ] Botones táctiles (mínimo 44x44px)
- [ ] Spacing proporcional
- [ ] Navigation funcional

### 4.2 Comparación Visual Lado a Lado
1. Abrir sitio original en una ventana
2. Abrir clone en otra ventana
3. Alinear verticalmente
4. Comparar sección por sección:
   - ✅ Colores exactos
   - ✅ Spacing similar (±5px aceptable)
   - ✅ Tipografía comparable
   - ✅ Hover effects equivalentes
   - ✅ Layout idéntico

### 4.3 Performance Audit
```bash
# Lighthouse en DevTools
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90
```

**Optimizaciones comunes:**
- Usar `next/image` para todas las imágenes
- Lazy loading en secciones below-the-fold
- Minimizar JavaScript bundle
- Preload fuentes críticas

### 4.4 Console Verification
```
# Objetivo: 0 errores, 0 warnings críticos
- No 404s (imágenes, fuentes)
- No TypeScript errors
- No ESLint errors críticos
- LCP dentro de 2.5s
```

## 📋 CHECKLIST DE CALIDAD FINAL

### Visual (Objetivo: 95%+)
- [ ] Colors match exactamente (DevTools Color Picker)
- [ ] Typography sizes idénticos por breakpoint
- [ ] Spacing consistente (padding, margins, gaps)
- [ ] Borders y shadows replicados
- [ ] Hover effects equivalentes
- [ ] Animations smooth (300-500ms durations)
- [ ] Images aspect ratios correctos

### Funcional
- [ ] Todos los links funcionan
- [ ] Forms validados correctamente
- [ ] Navigation smooth scroll
- [ ] Mobile menu toggle funciona
- [ ] Carousels swipeable en móvil
- [ ] Modals abren/cierran correctamente

### Responsive
- [ ] Mobile (320px-640px): Layout apilado, touch-friendly
- [ ] Tablet (768px-1024px): Layout intermedio, 2-3 columnas
- [ ] Desktop (1280px+): Layout completo, max-width containers

### Performance
- [ ] Lighthouse Performance >90
- [ ] LCP <2.5s
- [ ] No layout shifts (CLS <0.1)
- [ ] Images optimizadas (WebP, Next.js Image)

### Código
- [ ] TypeScript sin errores
- [ ] ESLint sin warnings críticos
- [ ] Componentes reutilizables extraídos
- [ ] Naming conventions consistentes
- [ ] Comments en código complejo

## 🚨 ERRORES COMUNES Y SOLUCIONES

### ERROR 1: "Navbar links no son visibles"
**Causa:** Color de texto igual al background
**Solución:**
```tsx
// MAL
<nav className="bg-[rgb(45,57,75)]">
  <a className="text-white">Link</a>  // Blanco sobre oscuro OK
</nav>

// BIEN - Si navbar es claro
<nav className="bg-white/95">
  <a className="text-indigo-600">Link</a>  // Oscuro sobre claro
</nav>
```

### ERROR 2: "Imágenes distorsionadas"
**Causa:** No especificar aspect-ratio o object-fit
**Solución:**
```tsx
// MAL
<Image src="..." fill />

// BIEN
<div className="relative aspect-[16/9]">
  <Image 
    src="..." 
    fill 
    className="object-cover"  // o object-contain según necesidad
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

### ERROR 3: "Fechas inválidas en date inputs"
**Causa:** Formato de fecha incorrecto
**Solución:**
```tsx
// MAL
<input type="date" defaultValue="2024-01-30" />  // Si hoy es 2025-11-04

// BIEN
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const tomorrowStr = tomorrow.toISOString().split('T')[0]

<input type="date" defaultValue={tomorrowStr} min={tomorrowStr} />
```

### ERROR 4: "Glassmorphism no se ve bien"
**Causa:** Valores de blur y opacity incorrectos
**Solución:**
```css
/* Glassmorphism efectivo */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);  /* 10-20% opacity */
  backdrop-filter: blur(10px);            /* 10-20px blur */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### ERROR 5: "Hover effects bruscos"
**Causa:** No especificar transition
**Solución:**
```tsx
// MAL
<Button className="hover:bg-yellow-500" />

// BIEN
<Button className="hover:bg-yellow-500 transition-all duration-300" />

// MEJOR (global en globals.css)
* {
  @apply transition-colors duration-300;
}
```

### ERROR 6: "Carousel no responsive"
**Causa:** No usar basis correcto
**Solución:**
```tsx
// MAL
<CarouselItem className="basis-1/3">

// BIEN
<CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
  {/* Mobile: 1 columna, Tablet: 2, Desktop: 3 */}
</CarouselItem>
```

### ERROR 7: "Scroll animations no se activan"
**Causa:** Intersection Observer no configurado correctamente
**Solución:**
```tsx
// Verificar threshold y triggerOnce
const { ref, isInView } = useInView({ 
  threshold: 0.1,      // Se activa cuando 10% es visible
  triggerOnce: true    // Solo se activa una vez
})
```

### ERROR 8: "Container muy estrecho/amplio"
**Causa:** Max-width incorrecto
**Solución:**
```tsx
// Analizar el original y usar el max-width exacto
// Común: max-w-7xl (1280px) o max-w-[1320px]
<div className="container mx-auto px-4 max-w-7xl">
```

### ERROR 9: "Padding inconsistente entre secciones"
**Causa:** Cada componente usa valores diferentes
**Solución:**
```tsx
// Estandarizar en globals.css o usar constante
section {
  @apply py-16 md:py-20 lg:py-28;
}

// O crear componente Section wrapper
export function Section({ children, className }) {
  return (
    <section className={cn("py-16 md:py-20 lg:py-28", className)}>
      {children}
    </section>
  )
}
```

### ERROR 10: "Build errors con import paths"
**Causa:** Imports relativos vs alias
**Solución:**
```json
// tsconfig.json - Verificar paths
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}

// Usar alias consistentemente
import { Button } from '@/components/ui/button'  // ✅
import { Button } from '../ui/button'            // ❌
```

## 📊 MÉTRICAS DE ÉXITO

### Similitud Visual
- **90-94%:** Muy bueno - Pequeños detalles difieren
- **95-97%:** Excelente - Casi indistinguible
- **98-100%:** Perfecto - Pixel-perfect (raramente necesario)

### Desarrollo Time
- **Análisis:** 3-4 horas (30%)
- **Setup:** 1 hora (10%)
- **Implementación:** 5-6 horas (50%)
- **Testing:** 1 hora (10%)
- **Total:** 10-12 horas para sitio complejo

### Documentación
Generar estos documentos durante el desarrollo:
1. **COMPARISON_ANALYSIS.md** - Análisis exhaustivo original vs clone
2. **IMPLEMENTATION_LOG.md** - Decisiones de arquitectura
3. **FIXES_APPLIED.md** - Errores encontrados y soluciones
4. **FINAL_SUMMARY.md** - Resumen ejecutivo con screenshots

## 🎯 DECISIONES DE ARQUITECTURA CRÍTICAS

### 1. Cuándo usar shadcn/ui vs Custom Components
**Usa shadcn/ui para:**
- Buttons, Cards, Inputs (UI primitivos)
- Carousels, Dialogs, Dropdowns (componentes complejos)
- Cualquier cosa con state management interno

**Crea custom para:**
- Layout sections específicas del sitio
- Componentes con lógica de negocio única
- Wrappers que combinan múltiples shadcn components

### 2. CSS-in-JS vs Tailwind
**Usa Tailwind para:**
- 95% de los estilos
- Responsive utilities
- Hover states
- Spacing y colors

**Usa CSS Module/styled solo para:**
- Animaciones keyframes complejas
- Estilos dinámicos basados en JavaScript
- Variables CSS que cambian en runtime

### 3. Server vs Client Components
```tsx
// Server Component (default) - Sin interactividad
export default function AboutSection() {
  return <section>Static content</section>
}

// Client Component - Con state, events, hooks
"use client"
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return <nav onClick={() => setIsOpen(!isOpen)}>...</nav>
}
```

### 4. Image Optimization Strategy
```tsx
// Hero/Above-fold images
<Image src="..." priority />  // Preload

// Below-fold images
<Image src="..." loading="lazy" />  // Lazy load

// Decorative images
<Image src="..." alt="" />  // Empty alt for decorative

// Content images
<Image src="..." alt="Descriptive text" />
```

### 5. Font Loading Best Practice
```tsx
// app/layout.tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',  // FOIT prevention
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

## 🔄 WORKFLOW ITERATIVO RECOMENDADO

### Iteración 1: Foundation (Día 1)
1. Setup proyecto + shadcn/ui
2. Implementar Navbar + Hero
3. Sistema de colores y tipografía
4. Primera comparación visual
**Objetivo:** 60-70% similitud

### Iteración 2: Content Sections (Día 2)
1. About + Rooms + Services
2. Testimonials + Blog + Footer
3. Responsive base implementado
4. Segunda comparación visual
**Objetivo:** 80-85% similitud

### Iteración 3: Polish & Interactions (Día 3)
1. Carousels funcionales
2. Hover effects refinados
3. Scroll animations
4. Glassmorphism y efectos avanzados
5. Tercera comparación visual
**Objetivo:** 90-95% similitud

### Iteración 4: Testing & Optimization (Día 4)
1. Responsive testing exhaustivo
2. Performance audit y fixes
3. Accessibility improvements
4. Final comparison + documentation
**Objetivo:** 95-97% similitud + production ready

## 💡 TIPS AVANZADOS

### 1. Extracción de Colores Exactos
```javascript
// En DevTools Console del sitio original
$$('*').forEach(el => {
  const bg = window.getComputedStyle(el).backgroundColor
  if (bg !== 'rgba(0, 0, 0, 0)') console.log(el.tagName, bg)
})
```

### 2. Comparación Visual Automatizada
```bash
# Instalar Percy para visual regression testing
npm install --save-dev @percy/cli @percy/puppeteer

# Capturar snapshots
npx percy snapshot http://localhost:3000
npx percy snapshot https://original-site.com

# Comparar automáticamente
npx percy compare
```

### 3. Debugging Responsive Issues
```css
/* Agregar temporalmente en globals.css */
* {
  outline: 1px solid red !important;
}

/* Ver breakpoints activos */
body::before {
  content: 'XS';
  position: fixed;
  top: 0;
  right: 0;
  background: red;
  color: white;
  padding: 0.5rem;
  z-index: 9999;
}

@media (min-width: 640px) {
  body::before { content: 'SM'; background: orange; }
}

@media (min-width: 768px) {
  body::before { content: 'MD'; background: yellow; color: black; }
}

@media (min-width: 1024px) {
  body::before { content: 'LG'; background: green; }
}

@media (min-width: 1280px) {
  body::before { content: 'XL'; background: blue; }
}
```

### 4. Performance: Preload Critical Assets
```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="preload" href="/fonts/custom-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 5. Smooth Scroll con CSS
```css
/* globals.css */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Height of fixed navbar */
}

/* O con JavaScript para más control */
<Link 
  href="#about"
  onClick={(e) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }}
>
```

## 📝 TEMPLATE DE DOCUMENTACIÓN

### COMPARISON_ANALYSIS.md
```markdown
# Análisis Comparativo: Original vs Clone

## Resumen Ejecutivo
- URL Original: [...]
- Fecha Análisis: [...]
- Similitud Objetivo: 95%

## Sección por Sección

### 1. Navbar
**Original:**
- Background: [color/opacity/blur]
- Height: [px]
- Logo: [descripción]
- Links: [estilos]
- Hover: [efectos]

**Clone:**
- [Descripción implementación]

**Diferencias:**
- [Lista diferencias críticas]

**Plan de Acción:**
- [ ] [Corrección 1]
- [ ] [Corrección 2]

[Repetir para cada sección...]
```

### IMPLEMENTATION_LOG.md
```markdown
# Log de Implementación

## [Fecha] - Sesión 1: Setup
- ✅ Proyecto inicializado
- ✅ shadcn/ui configurado
- ✅ Componentes: Button, Card, Input instalados
- ⚠️ Issue: [descripción] → Solucionado con [...]

## [Fecha] - Sesión 2: Navbar + Hero
- ✅ Navbar con sticky behavior
- ✅ Hero con background image
- ❌ Glassmorphism no perfecto → Pendiente refinar

[Continuar por sesión...]
```

## 🎓 CONCLUSIÓN

Este prompt incorpora **10+ horas de experiencia real** clonando un sitio complejo, 
condensadas en una metodología repetible. La clave del éxito es:

1. **Análisis exhaustivo inicial** (no saltear esta fase)
2. **Desarrollo iterativo** con comparaciones frecuentes
3. **Documentación continua** para no perder contexto
4. **Testing en múltiples breakpoints** desde el inicio
5. **Refinamiento obsesivo** de los últimos 5-10% de similitud

**Resultado esperado:** 95-97% de similitud visual en 10-12 horas para sitios complejos.

---

## 📎 RECURSOS ADICIONALES

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Next.js 15 App Router Guide](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WebPageTest](https://www.webpagetest.org) - Performance testing
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Automated audits

```

---

**Version:** 1.0  
**Basado en:** Proyecto Luxury Hotel Clone (Nov 2025)  
**Mantenido por:** Experiencia real de clonación exitosa  
**Licencia:** Open source - Usar libremente con atribución
