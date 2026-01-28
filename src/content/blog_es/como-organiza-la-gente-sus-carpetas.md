---
title: "¿Cómo organiza la gente sus carpetas?"
description: "¿De qué forma manejan la organización de información en carpetas otras personas para proyectos y documentación de larga duración?"
date: 2026-01-28
tags: ["webapp", "publicar"]
project: "folderssh"
draft: false
---

¿Alguna vez te has preguntado cómo estructura otra gente sus carpetas? Yo sí – probablemente porque cambio mi estructura de vez en cuando y nunca estoy completamente satisfecho.

A lo largo de los años me he encontrado con varios planteamientos: El método PARA del Segundo Cerebro por Tiago Forte, dividir por objetivos, por tipo de archivos, jerarquías profundas... todas tienen sentido, hasta que no lo tienen.

El problema principal, en mi opinión, es que las carpetas son inherentemente lineales. Un archivo normalmente pertenence a más de un contexto: dos proyectos, un proyecto y un área, material de referencia y trabajo activo. ¿Cúal es la solución? ¿Duplicar el archivo? ¿Utilizar symlinks? ¿Elegir una carpeta y acordarte más tarde que está ahí?

Aún no he encontrado la respuesta, y eso es un debate para otro día. Lo sí quería, y podía soluciones, es ver cómo otras personal se organizan.

Por esta razón he desarrollado una web simple donde se pueden compartir, ver y descargar estructuras de carpetas, así cómo votarlas, guardarlas en favoritos e inspirarte.

# El proceso

Este proyecto estaba claramente enfocado a un MVP. ChatGPT ha ayudado al principio a definir qué debería tener el MVP, cómo presentar la información, y qué _no_ debería aparecer en una primera versión. Una vez que esto quedó claro, el resto era ejecución.

Encendí el ordenador, elegí un tech stack y me puse manos a la obra con las bases del proyecto. Primero necesitaba una galería simple mostrando las estructuras de carpetas, un nombre, y una descripción corta. A partir de ahí, añadí algunas funcionalidades más como la de votación, guardar en favoritos y descargar la estructura fácilmente.

Por otra parte estaba la segunda cara de la moneda: publicar una estructura propia. Esto ha sido más complicado. Sigue siendo un poco tedioso. No tengo problema con eso. Es parte de todos los MVP: crear la funcionalidad, publicarlo, conseguir feedback, iterar.

# La tecnología detrás del proyecto

Como se trataba de un proyecto limitado, lo utilicé como excusa para probar algo nuevo. Opté por Vite en lugar de NextJS, mi opción habitual para sitios web dinámicos, y, sinceramente, la velocidad y la simplicidad me han parecido interesantes.

Para la autenticación y la base de datos he utilizado Supabase, que encaja perfectamente para un MVP inicial. El esquema es tan simple y aburrido como parece: una tabla para las estructuras de carpetas, otra para los votos y otra para los favoritos. Eso es todo.

Para el alojamiento, por supuesto, me decidí por Vercel, simplemente porque elimina las fricciones, perfecto para una v1.

# ¿Y ahora qué?

Ya está publicado. Lo he compartido. Ahora estoy viendo qué hace la gente con él.

Si no tiene éxito, no pasa nada. Si se convierte en una pequeña colección de sistemas de carpetas realmente útiles, para mí ya es un triunfo.

Dejo aquí el enlace por si te pica la curiosidad:
https://folders-sh.vercel.app/
