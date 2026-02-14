# Demo WebMCP (Web Model Context Protocol)

Pequena web de ejemplo que expone herramientas de una app de tareas mediante `navigator.modelContext`.

## Que encontre sobre el estandar (estado al 13 de febrero de 2026)

- El repositorio oficial de incubacion esta en `webmachinelearning/webmcp`.
- En la lista publica de W3C WebML CG se anuncio (30 de septiembre de 2025) la aceptacion de una propuesta WebMCP como nuevo deliverable del grupo.
- La API sigue en fase de propuesta/incubacion; por eso la demo incluye deteccion de soporte y fallback de mensaje cuando no existe `navigator.modelContext`.

## Como ejecutar

1. Sirve esta carpeta con cualquier servidor local (necesario para `type="module"`):
   - `npx serve .`
   - o `python -m http.server 8080`
2. Abre `http://localhost:3000` (o el puerto que corresponda).

`localhost` cuenta como secure context, que es importante para APIs web modernas.

## Que implementa la demo

- Herramientas WebMCP:
  - `add_task`
  - `list_tasks`
  - `complete_task`
- Registro en tiempo de ejecucion con:
  - `modelContext.registerTool(...)` si esta disponible
  - o `modelContext.provideContext({ tools })` como alternativa
- UI local para ver el mismo estado de tareas y un panel de log.

## Archivos

- `index.html`: estructura de la pagina.
- `styles.css`: estilos responsive.
- `app.js`: estado de tareas y capa WebMCP.

## Fuentes

- https://github.com/webmachinelearning/webmcp
- https://lists.w3.org/Archives/Public/public-webmachinelearning/2025Sep/0028.html
