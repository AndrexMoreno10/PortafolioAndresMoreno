# Portafolio Andres Moreno — Contexto de Proyecto

## Stack
- **Framework:** Angular 17.3 con SSR (`@angular/ssr`, `provideClientHydration()`)
- **Estilos:** CSS puro por componente (sin Tailwind, sin SCSS)
- **Fuente:** Montserrat (Google Fonts), cargada en `header.component.css`
- **Íconos:** Font Awesome 6.5 (CDN en `header.component.html`)
- **Lenguaje:** TypeScript 5.4

## Diseño — Sistema de colores
| Token | Valor | Uso |
|-------|-------|-----|
| Background principal | `rgb(2 6 23)` | Fondo de todas las secciones |
| Accent / azul | `#38b6ff` | Botones, highlights, bordes activos |
| Texto principal | `#ffffff` | Títulos |
| Texto secundario | `#cbd5e1` | Subtítulos |
| Texto muted | `#94a3b8` | Descripciones, párrafos |
| Max-width contenedor | `1500px` | Centrado horizontal con `margin: 0 auto` |

## Convenciones de código
- Nomenclatura **BEM** en clases CSS: `.bloque__elemento--modificador`
- Un componente por sección de la página
- Cada componente tiene: `.html`, `.css`, `.ts`, `.spec.ts` y `.module.ts`
- Los `id` de sección siguen el patrón `#seccion-wrapper`
- **Animaciones de scroll:** usar `@HostListener('window:scroll')` sobre el host element + clase `:host.is-visible` en CSS — NO usar `IntersectionObserver` directo en Angular 17 SSR (causa problemas de hidratación)
- **Patrón de animación establecido:** añadir clase `is-visible` al host (`this.el.nativeElement.classList.add('is-visible')`) y apuntar con `:host.is-visible .elemento` en el CSS

## Estructura de componentes
```
src/app/
├── header/          ✅ Hecho
│   ├── Nav: Home | About Me | Services | Projects | Contact
│   └── NOTA: header.component.html tiene DOCTYPE/html/body de un prototipo previo
│         Angular lo renderiza igual; no tocar a menos que el usuario lo pida
│
├── hero/            ✅ Hecho
│   └── Foto + glow azul + título + botones CTA
│
├── services/        ✅ Hecho — ÚLTIMA SECCIÓN COMPLETADA
│   ├── 4 cards de servicios (grid 2×2)
│   ├── 3 planes de precio: Starter $400 | Pro $1,500 (featured+glow) | Agency $3,500
│   ├── CTA final "Hablemos"
│   └── Animación: @HostListener scroll → clase is-visible en host → CSS :host.is-visible
│
├── about/           ✅ Hecho — visual orbital animado (3 anillos CSS) + bio + 16 skill pills + CTA
├── projects/        ❌ Pendiente
└── contact/         ❌ Pendiente
```

## app.component.html — orden actual
```html
<app-header></app-header>
<app-hero></app-hero>
<app-services></app-services>
<!-- próximamente: <app-about>, <app-projects>, <app-contact> -->
```

## app.component.ts — imports actuales
```typescript
imports: [HeaderModule, HeroModule, ServicesModule, AboutModule]
```

## Próximas secciones a construir (en orden sugerido)
1. **About Me** (`#about-wrapper`) — quién es Andres, skills, stack tecnológico
2. **Projects** (`#projects-wrapper`) — proyectos destacados con cards (PedidoClaro, etc.)
3. **Contact** (`#contact-wrapper`) — formulario de contacto + redes sociales

## Lecciones aprendidas (NO repetir)
- ❌ No usar `IntersectionObserver` en elementos individuales con Angular 17 SSR — la hidratación rompe las referencias
- ❌ No poner `opacity: 0` inicial sin fallback garantizado — si el JS falla, la sección queda invisible
- ✅ Patrón correcto de animación scroll en Angular: `@HostListener` + `:host.is-visible` + `setTimeout` fallback de 2s

## Referencia visual
`/home/andres-moreno-dev/Documentos/pitch-deck-luxury-optics.html` — pitch deck con el estilo visual de referencia (animaciones, colores, tipografía).
