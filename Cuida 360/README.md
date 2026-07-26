# Cuida 360 — Maqueta Frontend

Maqueta HTML self-contained para la Fundación **Cuida 360**. Cuatro páginas
navegables con branding cálido, imágenes reales referenciales (Unsplash) y
todos los componentes listos para revisar con el cliente.

## Cómo abrir la maqueta

Doble clic en **`index.html`** — abre en cualquier navegador. No requiere
build, servidor ni instalación de dependencias.

Las 4 páginas se enlazan entre sí desde el navbar. Un banner oscuro arriba
recuerda que es maqueta con imágenes referenciales.

## Archivos

```
Cuida 360/
├── index.html        ← Home
├── donar.html        ← Donaciones
├── cursos.html       ← Cursos online
├── consultoria.html  ← Consultoría organizacional
├── theme.css         ← Sistema de diseño compartido
└── README.md         ← Este archivo
```

## Estructura por página

### 🏠 `index.html` — Home
1. Banner demo (referencial)
2. Navbar sticky con navegación completa
3. **Hero** — headline serif + collage de 3 polaroids con fotos de talleres
4. **Quiénes somos** — Camila, Carmen Gloria, Mónica con fotos reales
5. **Propósito** — 3 pilares (carga invisible / cuidar a quien cuida / herramientas)
6. **Próximos eventos** — 3 tarjetas de talleres con fecha, cupos e imágenes
7. **Cómo trabajamos** — 4 pasos sobre fondo azul acero
8. **🆕 Galería de talleres** — 7 imágenes tipo mosaico mostrando momentos reales
9. **Recursos y materiales** — 4 tarjetas de descarga
10. **Testimonios** — 3 quotes en serif
11. **FAQ** — acordeón
12. **Contacto** — formulario + WhatsApp + email
13. Footer + botón flotante WhatsApp

### 💛 `donar.html` — Donaciones
1. Hero cálido con CTA "Quiero donar"
2. **4 tarjetas de impacto** — números clave (mujeres acompañadas, cupos becados)
3. **Formulario interactivo** — toggle único/mensual, 6 montos preseleccionados + monto libre
4. **3 modos de aporte** — empresas / voluntariado / especie
5. **Transparencia** — desglose animado con barras de cómo se usan los aportes
6. **Testimonio grande** — quote destacado con foto real
7. **🆕 Historias de impacto** — 3 tarjetas con foto de dónde se ve el aporte real
8. Logos empresas donantes
9. FAQ de donantes
10. Footer

### 🎓 `cursos.html` — Cursos online
1. Hero con stats (12 cursos · +1.400 alumnas · 4,9 ★ · acceso ilimitado)
2. Filtros sticky (chips + buscador)
3. **6 tarjetas de curso** — cada una con foto real de portada, badge de nivel, meta (clases/duración/recursos), instructora con foto y precio
4. **Programa destacado** — Escuela de la Carga Invisible con imagen de fondo
5. **Cómo funciona** — 4 pasos
6. **Instructoras** — 3 fotos reales de Camila, Carmen Gloria, Mónica
7. FAQ
8. CTA final
9. Footer

### 🏢 `consultoria.html` — Consultoría organizacional
1. Hero + logos de organizaciones que han confiado
2. **4 servicios** — Diagnóstico / Talleres / Programa anual / Coaching a líderes (cada uno con duración, alcance y CTA)
3. **Metodología** — 4 fases con línea discontinua conectora
4. **🆕 Galería de intervenciones** — 6 fotos etiquetadas por cliente y proyecto
5. **Caso de éxito** — Colegio Los Robles con foto de fondo + 4 stats
6. **Formatos y valores** — 3 rangos de inversión referenciales
7. **Testimonios** — 2 quotes de organizaciones con foto
8. FAQ
9. **Agenda diagnóstico** — formulario largo (nombre / cargo / organización / tamaño / servicio interés / mensaje)
10. Footer

## Branding

| Token | Uso | Hex |
|---|---|---|
| `--salvia` | Accent primario, CTAs, links | `#7FA99B` |
| `--acero` | Info blocks, sección pasos | `#4A7C9D` |
| `--arena` | Fondo general | `#F5F2EB` |
| `--coral` | CTAs cálidas, acentos humanos | `#E08A80` |
| `--antracita` | Texto principal | `#2C2A29` |
| `--gris` | Texto secundario | `#6E6963` |

**Tipografías:** Playfair Display (títulos) + Inter (cuerpo), ambas desde Google Fonts.

## Imágenes referenciales

Todas las fotos vienen de [Unsplash](https://unsplash.com) — licencia libre
para uso, incluyendo comercial y sin atribución. Sirven **solo como
referencia visual** para que el cliente vea cómo quedaría la web con
contenido real.

Antes del lanzamiento, todas deben reemplazarse por:
- **Fotos del equipo real** (Camila, Carmen Gloria, Mónica) — retratos de
  fotógrafa profesional o iPhone en buena luz.
- **Fotos de talleres pasados** con consentimiento firmado de las
  participantes.
- **Fotos de intervenciones corporativas** con autorización de cada
  organización (Colegio Los Robles, Andes Salud, etc.).

Recomendación: sesión de fotos de 2-3 horas cubre todo el sitio.

## Lo que ya funciona en la maqueta

- ✅ Navegación completa entre las 4 páginas
- ✅ Sticky navbar + banner demo
- ✅ FAQ acordeón (todas las páginas)
- ✅ Filtros de chips (eventos, cursos)
- ✅ Toggle único/mensual + calculadora de monto (donar)
- ✅ Formularios con validación básica (contacto, agenda, donación)
- ✅ Animaciones reveal on scroll (IntersectionObserver)
- ✅ Botón flotante de WhatsApp
- ✅ Responsive mobile (breakpoints 500/720/860/900px)
- ✅ Respeta `prefers-reduced-motion`

## Lo que falta conectar antes de producción

- 🔌 Formularios → Formspree / Netlify Forms / backend propio
- 🔌 Botón "Aportar" → Webpay Plus (Transbank)
- 🔌 Botones "Inscribirme" (cursos) → plataforma LMS (Thinkific, Teachable, o custom)
- 🔌 Chips de filtro → lógica real de filtrado
- 🔌 Buscador de cursos → lógica de búsqueda
- 🔌 Números de WhatsApp (`+56 9 0000 0000`) → número real
- 🔌 Email `cuida360ltda@gmail.com` ya está configurado en `mailto:`
- 🔌 Enlaces a redes sociales (Instagram, Facebook) — pendiente de definir handles
- 🔌 PDFs de transparencia (memoria, balance, estatutos) — pendiente

## Siguientes pasos sugeridos

1. **Sesión de fotos** — retratos del equipo + registro de un taller real
2. **Copywriting final** — revisar y ajustar textos con el equipo (especialmente
   nombres de cursos, cupos y valores)
3. **Backend** — decidir stack (WordPress? Webflow? Astro custom?) para que
   el equipo pueda editar contenido sin intervención técnica
4. **Pasarela de pago** — cuenta de Transbank / MercadoPago
5. **SEO** — meta descriptions, sitemap, robots.txt, Open Graph images
# laboratorio-wisbly
