# Kuzcomed · Sitio web de muestra

Propuesta de rediseño para [kuzcomed.cl](https://kuzcomed.cl), desarrollada por **Sof.ia — Soluciones feat IA**.

Sitio estático (HTML, CSS y JavaScript, sin dependencias ni proceso de compilación), listo para publicarse en GitHub Pages.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Inicio: hero, datos prácticos, servicios, selector de especialidades y equipo |
| `medicos.html` | Equipo médico con filtro por especialidad |
| `nutricionistas.html` | Nutricionista clínica |
| `contacto.html` | Datos de contacto, mapa y formulario (demostración) |

## Estructura

```
├── index.html
├── medicos.html
├── nutricionistas.html
├── contacto.html
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/
        ├── logo.svg          (logo en vector, color)
        ├── logo-blanco.svg   (versión para fondos oscuros)
        └── favicon.svg
```

## Identidad visual

- **Colores del logo:** azul noche `#1F254B` y azul Kuzcomed `#5F89C7`.
- **Apoyo:** azul profundo `#3E6AAE` (botones y enlaces), niebla azul `#EEF3FA` (fondos), menta clínica `#E1EFEA` y coral `#E8835A` (solo para “Reserva tu cita”).
- **Tipografía:** Fraunces (títulos) y DM Sans (textos), vía Google Fonts. El logo está convertido a trazos, así que no depende de fuentes.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `kuzcomed-web`), público.
2. En el repositorio: **Add file › Upload files**, arrastra todo el contenido de esta carpeta (no la carpeta en sí, sino lo que hay dentro) y confirma con **Commit changes**.
3. Ve a **Settings › Pages**. En *Build and deployment*, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos el sitio queda en `https://<tu-usuario>.github.io/kuzcomed-web/`.

## Pendientes antes de producción

- **Fotos de los profesionales:** hoy se muestran monogramas. Para usar fotos, reemplaza el `<span class="monogram">` dentro de `.doc-photo` por `<img src="assets/img/fotos/nombre.jpg" alt="Nombre del profesional">`.
- **Reseña de la nutricionista:** texto marcado como “por completar”.
- **Descripciones de especialidades:** son textos generales de referencia; deben ser validados por el equipo médico.
- **Formulario de contacto:** valida los campos y muestra confirmación, pero no envía datos. Se puede conectar a un servicio como Formspree o a un backend propio.
- **Reservas:** todos los botones “Reserva tu cita” apuntan a la agenda actual en AgendaPro.
