---
mode: 'agent'
description: 'Depura aplicaciones Next.js usando Chrome DevTools y Next.js DevTools de forma conjunta'
---

# Depuración con Chrome DevTools y Next.js DevTools

Depura el siguiente problema o funcionalidad en tu aplicación Next.js utilizando Chrome DevTools y Next.js DevTools de forma complementaria.

## Contexto del problema

**Problema a depurar:** ${input:problem:Describe el problema o la funcionalidad que necesitas depurar (ej: error de hidratación, problema de rendimiento, estado de componentes, etc.)}

**URL o ruta afectada:** ${input:url:URL o ruta de la página afectada (ej: /rooms, /booking)}

**Severidad:** ${input:severity:Alta / Media / Baja}

## Pasos a seguir

### 1. Preparación del entorno
- Asegúrate de tener Next.js DevTools instalado y configurado en tu proyecto
- Inicia el servidor de desarrollo: `pnpm dev`
- Abre Chrome DevTools (F12 o Cmd+Option+I / Ctrl+Shift+I)

### 2. Análisis con Next.js DevTools
- Usa Next.js DevTools para:
  - Inspeccionar el árbol de componentes React
  - Revisar el estado y props de los componentes
  - Identificar componentes que se re-renderizan innecesariamente
  - Analizar el tiempo de carga de cada componente

### 3. Análisis con Chrome DevTools
- Usa Chrome DevTools para:
  - Revisar la consola de errores y warnings
  - Inspeccionar la pestaña Network para verificar peticiones HTTP
  - Analizar el rendimiento con Performance Profiler
  - Revisar el almacenamiento (LocalStorage, SessionStorage, Cookies)
  - Inspeccionar elementos del DOM y aplicar cambios en tiempo real

### 4. Análisis conjunto
- Combina información de ambas herramientas:
  - Correlaciona los componentes re-renderizados (Next.js DevTools) con los eventos del Performance Profiler (Chrome DevTools)
  - Verifica si los errores de consola (Chrome DevTools) corresponden a componentes específicos (Next.js DevTools)
  - Analiza cómo las peticiones de red (Chrome DevTools) afectan el estado de los componentes (Next.js DevTools)

### 5. Solución y verificación
- Implementa las correcciones necesarias
- Verifica la solución usando ambas herramientas para confirmar que el problema se resolvió

## Salida esperada

Proporciona:
- Análisis detallado del problema usando ambas herramientas
- Capturas o evidencia de lo encontrado en cada herramienta
- Pasos específicos para reproducir el problema
- Solución propuesta con código si es necesario
- Verificación de que la solución funciona usando ambas herramientas

## Ejemplo de uso

**Problema:** "Los componentes se re-renderizan constantemente cuando cambio de página"

**Análisis sugerido:**
1. Next.js DevTools: Identificar qué componentes se re-renderizan y por qué
2. Chrome DevTools: Revisar Performance Profiler para ver el patrón de re-renders
3. Chrome DevTools: Verificar si hay listeners de eventos sin limpiar en la consola
4. Combinar: Correlacionar los re-renders con eventos de red o cambios de estado
5. Solución: Implementar memoización o corregir dependencias de useEffect

Usa ambos DevTools de forma complementaria para obtener una visión completa del problema.
