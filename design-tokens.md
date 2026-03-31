# Design Tokens — ClimaEco Aerotermia Madrid

> *Estado: Ejecutado · Usado para: climaecoaerotermia.es · Categoría: Aerotermia*

> Extraído del Bloque 4 (Output 4.4.1 y 4.4.2). Fuente de verdad visual para toda la construcción.

## Colores

| Token | Variable | Valor HEX |
| :--- | :--- | :--- |
| Color Primario (Azul Marino) | `primary` | `#003a5c` |
| Color Acento / CTAs (Naranja) | `accent` | `#ff5b34` |
| Color Secundario (Azul Claro) | `secondary` | `#0093c9` |
| Color Fondo | `background` | `#ffffff` |
| Color Texto | `text` | `#333333` |

## Tipografía

| Elemento | Familia | Tamaño | Peso | Line-height |
| :--- | :--- | :--- | :--- | :--- |
| H1 | Montserrat | 48px | 400 | 1.15 |
| H2 | Montserrat | 32px | 600 | 1.25 |
| Body | Montserrat | 18px | 400 | 29px |

## Componentes

| Elemento | Valor |
| :--- | :--- |
| Border-radius (cards/botones) | `4px` (ligero, modernizado desde 0px original) |
| Padding botones | `15px 30px` |
| Botones | Sólido, sin sombra pronunciada |

## Layout-Map (Output 4.4.2)

### Homepage
1. Hero — 1 col, **fondo imagen full-width** con caja azul oscuro `#003a5c` superpuesta
2. Servicios Destacados — Grid 3 cols, fondo blanco `#ffffff`
3. Why Choose Us — Flex 2 cols (texto + img), fondo azul claro `#0093c9` o blanco
4. Testimonios — Block 1 col, fondo blanco `#ffffff`
5. Recursos/Guías — Grid 2 cols, **fondo primario `#003a5c`**
6. Footer

### Service Page
1. Hero Servicio — 1 col, **fondo imagen full-width** con caja azul oscuro superpuesta
2. Intro Servicio — Flex 2 cols (texto + img), fondo blanco
3. Beneficios — Block 1 col, fondo azul claro
4. Detalles Técnicos — Flex 2 cols, fondo blanco
5. Marcas — Grid 4 cols, fondo azul claro
6. CTA Final — Flex 1 col centrado, naranja `#ff5b34`
7. Footer

### Location Page
1. Hero Local — 1 col, **fondo imagen full-width** con caja azul oscuro superpuesta
2. Servicios en la Zona — Grid 3 cols
3. Zonas de Cobertura — 2 cols
4. Testimonios Locales — Block 1 col
5. CTA Final
6. Footer

### GeoArticle
1. Hero Artículo — 1 col, **fondo oscuro `#003a5c`**
2. Contenido Principal — Layout lectura, max-width prose
3. CTA Integrado — Bloque destacado
4. Artículos Relacionados — Grid 2 cols
5. Footer

## Reglas críticas de aplicación en CSS

- El Hero SIEMPRE tiene fondo oscuro (`#003a5c`) con texto blanco — NUNCA fondo blanco
- Los botones primarios son naranja `#ff5b34` con texto blanco
- Los botones secundarios/outline son borde `#003a5c` con texto `#003a5c`
- La sección de Guías/Recursos tiene fondo `#003a5c` con texto blanco
- Las cards de servicios tienen borde sutil, sin sombra pronunciada
- Fuente: Montserrat en todo el sitio (Google Fonts)
