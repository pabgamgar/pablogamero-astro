---
title: "Aprendizajes de publicar mi primera app – Dibs"
description: "Lecciones aprendidas creando y publicando mi primera aplicación móvil"
date: 2026-01-10
tags: ["desarollo de apps", "lecciones", "publicar"]
draft: false
---

¿Sabes cuando ves vídeos e incluso vas programando a la vez y todo parece tan fácil desde el diseño hasta la publicación de un producto? Siempre he aprendido construyendo mis propias ideas de producto, y viendo una mezcla de estos vídeos para aprender a programarlas, **me ha llevado 3 años publicar mi primera app**. No porque tardara tanto en crear una, sino porque simplemente seguía creando y creando, pero nunca publicando. Esta es la razón por la que hoy me alegra escribir sobre el primer producto que he lanzado, Dibs.

[Esta](/images/developer-folder.webp) es una foto de todos los proyectos que he empezado en los últimos 3 años.

Este 2026 voy con una idea en mente: **construir, compartir, aprender, repetir**. Porque si nunca compartimos nuestro trabajo, nunca aprenderemos a hacer mejor trabajo.

Así que, hablemos de la app.

## ¿De dónde vino la idea?

Como muchos desarrolladores, construyo cosas que resuelven mis propios problemas, por pequeños o tontos que sean. La historia es tan simple como lo siguiente: me di cuenta de que olvidaba que tenía deudas amistosas con gente, o que ellos las tenían conmigo. Incluso mis padres me piden algo de dinero de vez en cuando cuando lo necesitan y no tienen tiempo para ir a un cajero a sacarlo.

Cuando empecé a buscar una app que pudiera gestionar esto, nada de lo que vi me llamó realmente la atención. Las apps que encontré estaban diseñadas para gestionar deudas más grandes como préstamos y deudas de tarjetas de crédito, o parecían hechas en los 2000 y no tenían ninguna funcionalidad aparte de introducir la deuda.

## ¿Cuál fue el proceso?

Después de decidir que crearía la app que no podía encontrar, cogí el diseño de una de esas apps que empecé y nunca publiqué ni terminé, y empecé a apuntar una [lista de cosas](/images/dibs-list.webp) que quería incluir en la app.

Luego hice un boceto rápido en Figma (empezar a programar sin una idea mínima del diseño es una pérdida de tiempo) y empecé a desarrollarla. No acabó exactamente igual que el diseño pero bastante parecido.

![Boceto de Dibs](/images/dibs-mockup.webp)

Como ya había construido algunas apps con Flutter, y por la simplicidad de esta, el desarrollo en sí no llevó tanto tiempo, solo el suficiente para estar contento con el resultado (lo que por supuesto significaba que seguiría haciendo cambios y ajustes durante las siguientes 3 semanas después de que supuestamente estuviera terminada). Mi principal obstáculo fueron las notificaciones de recordatorio, que no había hecho antes.

Para mi sorpresa, la etapa difícil fue la publicación de la app. Nunca pensé que el proceso de revisión de la App Store sería tan tedioso la primera vez. Piden una página web, que tuve que desarrollar, tuve que crear capturas de pantalla atractivas y la configuración de pagos era un laberinto. Por supuesto esto significó que envié la app a revisión 6 veces antes de que fuera aceptada.

Para los que se lo pregunten, los principales problemas que tuve fueron:

- Tener una in-app purchase dentro de la app pero no crearla en App Store Connect
- Pequeños bugs
- Poner un enlace a buymeacoffee.com –que era 100% opcional y estaba en ajustes– que aparentemente no está permitido
- El botón de compra dentro de la app no funcionaba en iPad

Acabé eliminando completamente las compras dentro de la app. Lo añadiré de nuevo si veo que la app consigue muchos usuarios o para futuras funcionalidades que añada.

Lo que haría diferente es lanzar la app solo con la funcionalidad principal, compartirla, y dejar que los usuarios decidan qué funcionalidades debería añadir. Basándome en eso tendría más fácil decidir cómo monetizar realmente la app.

## Conclusiones y próximos pasos

Ha pasado una semana desde que la app fue publicada y para mi sorpresa, ha sido descargada 30 veces sin que la haya promocionado más allá de un post en LinkedIn.

![Captura de App Store Connect de Dibs](/images/dibs-appstoreconnect.webp)

Ahora bien, estos datos también muestran que aunque mi app llama la atención de algunas personas y deciden probarla, la app no tiene retención. Curiosamente, así es exactamente como la app está pensada para usarse. La gente la abre cuando la necesita, no de forma habitual.

Aparte de pequeños ajustes y cambios que ya he encontrado usando la app yo mismo (esto es mi perfeccionismo hablando), el siguiente paso que voy a dar para esta app es añadir un tablero de funcionalidades en su página web y dejar que los usuarios añadan las funcionalidades que querrían que la app tuviera.

En general, ¡bastante buen comienzo de año en mi opinión!
