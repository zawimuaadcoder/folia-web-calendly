# Folia — HubSpot y Calendly

Proyecto configurado para mantener el diseño original, enviar contactos a HubSpot y reservar una llamada en Calendly.

## Publicar en Netlify

1. Sube el contenido de esta carpeta a un repositorio de GitHub.
2. En Netlify, importa ese repositorio. `netlify.toml` configura la construcción y las funciones automáticamente.
3. Si ya tenías variables en Netlify, elimina los valores antiguos o pon `FOLIA_MODE=live`, `CRM_PROVIDER=hubspot` y `CALENDAR_URL=https://calendly.com/josemartinez31k/30min`. Vuelve a desplegar.
4. Haz un envío con tus datos y comprueba que llega a HubSpot. Abre la agenda y comprueba la disponibilidad.

Un proyecto nuevo no necesita variables para estos valores: ya vienen incorporados. Publica el proyecto completo: arrastrar únicamente `public/` o `dist/` a un alojamiento estático no instala las funciones.

## Recorrido

- Calculadora → formulario original → HubSpot → resultados → botón de auditoría → Calendly en otra pestaña.
- Contacto directo → formulario original → HubSpot → confirmación → elegir horario.
- El botón abre directamente https://calendly.com/josemartinez31k/30min, sin agenda incrustada.

La cuenta de HubSpot es `149430727` y el formulario es `97ba49d3-ce4d-4b1a-a503-6674f862e605`, identificados por el código facilitado (región eu1). Se conserva la integración mediante Forms API; no se añade un segundo formulario visual.

## Probar en tu ordenador

`npm run dev`: abre http://localhost:4173, en modo demostración, sin enviar contactos.

`preview.html`: vista previa local, también sin enviar contactos. La agenda de Calendly sí es real si decides abrirla.

`npm test`: pruebas automáticas. `npm run build`: genera `dist/` para Netlify.

## Estado de la comprobación

Pruebas locales con HubSpot simulado. No se han enviado datos de prueba a la cuenta ni se ha publicado la web. La comprobación real en HubSpot queda pendiente tras publicar.

La integración envía nombre (`firstname`), email (`email`) y teléfono (`phone`). El formulario de HubSpot debe admitir esos campos. Su configuración interna y los requisitos de consentimiento no se pueden verificar solo con el código de inserción. El diagnóstico completo y la nota requieren una propiedad adicional: ver `HUBSPOT.md`.

Los textos legales del proyecto siguen pendientes de completar con los datos del titular. Se pueden configurar enlaces definitivos mediante `PRIVACY_URL`, `LEGAL_URL` y `COOKIES_URL`.
