---
name: "Pubmefy"
title: "Curículums de investigadores ahora más fáciles que nunca"
description: "Pubmefy agiliza las actualizaciones de CV: simplemente introduce los PMIDs de tus artículos y obtén todos los detalles en segundos."
links:
  "Website": "https://pubmefy.vercel.app"
type: "Web App"
featured: false
active: true
stage: building
---

Pubmefy es una herramienta que estoy construyendo para reducir la fricción que enfrentan los investigadores al preparar y mantener sus CVs académicos para convocatorias de financiación.

La idea surgió de ver repetidamente el mismo problema: tiempo valioso gastado copiando, formateando y actualizando la misma información a través de diferentes sistemas, con un alto riesgo de errores pequeños pero costosos.

[foto]

## El problema

En muchos entornos de investigación, especialmente alrededor de convocatorias de financiación pública, se requiere que los investigadores presenten CVs en formatos muy específicos. Estos formatos a menudo cambian, están mal integrados con las herramientas existentes y requieren entrada de datos manual incluso cuando la información ya existe en otro lugar.

El resultado es:

- Trabajo repetitivo
- Inconsistencias entre documentos
- Estrés cerca de las fechas límite
- Tiempo gastado formateando en lugar de investigar

## Lo que construí

Pubmefy se centra en convertir datos de publicaciones existentes en información estructurada y reutilizable.

En su núcleo:

- Ingiere identificadores de publicaciones (como DOIs o PMIDs)
- Extrae y normaliza los metadatos relevantes
- Genera CVs en los formatos requeridos
- Automatiza pasos repetitivos en plataformas de envío oficiales cuando es posible

El alcance es intencionalmente estrecho. En lugar de tratar de cubrir cada flujo de trabajo posible, el objetivo es hacer un proceso específico y común más rápido y menos propenso a errores.

[foto]

## Lo que aprendí

- Estrechar el problema temprano es más valioso que agregar características más tarde
- Las restricciones específicas del dominio importan más que la elegancia técnica
- La automatización solo es útil cuando refleja cómo trabaja realmente la gente
- Los pequeños ahorros de tiempo se acumulan rápidamente en tareas administrativas recurrentes

## Estado actual

Pubmefy está actualmente _en desarrollo_.

El enfoque ahora mismo está en:

- Mejorar la fiabilidad de la extracción de datos
- Ajustar el flujo de trabajo principal
- Validar que el problema es lo suficientemente doloroso como para justificar una inversión continua

No hay prisa por expandirse más allá de lo que ya es útil.