---
title: "¿Cuánto deberías tener ahorrado para suscripciones?"
description: "¿De verdad sabes cuánto dinero debería haber en tu cuenta bancaria hoy para pagar todas tus suscripciones a tiempo?"
translationKey: "subscription-savings"
date: 2026-02-09
tags: ["desarollo de apps", "lecciones", "publicar"]
project: "submoney"
draft: false
---

Las suscripciones son cada vez más frecuentes, y pueden sumar una parte importante de nuestro dinero. Esto significa que dependemos de servicios externos y tenemos que pagarlos a tiempo, o perderemos nuestro almacenamiento, automatizaciones, herramientas, etc.

Ya es bastante trabajo llevar el control de todas las suscripciones que tenemos y cuándo se paga cada una, pero además necesitamos vigilar la cuenta bancaria a la que están vinculadas y asegurarnos de que siempre haya dinero suficiente para que puedan cobrarlas y no quedar en números negativos.

## Pero ya existen apps que rastrean suscripciones

Mi respuesta a esto es sí y no. Hay apps que pueden rastrear suscripciones, decirte cuánto _desperdicias_ cada mes o año en ellas. También hay apps que puedes conectar a tu banco y te muestran esos pagos recurrentes ocultos que quizá habías olvidado. Todo esto está bien, pero en mi caso lo único que quería era saber cuánto dinero debería tener mi cuenta bancaria en cualquier momento para poder pagar todas mis suscripciones a tiempo. Así que lo construí.

Desarrollé una app lo más minimalista posible, con las 3 funcionalidades principales que me gustan de otras apps:

- Vista de calendario de cuándo me van a cobrar
- Recordatorios el día del pago (y antes). Esto también ayuda a decidir si quieres cancelarla antes de volver a pagar
- Ver de un vistazo tu desperdicio anual en cada suscripción

Esas funciones, más algunas propias, dieron como resultado una app simple pero útil que ahora uso a diario para llevar el control de mis suscripciones y de mi cuenta bancaria.

## No todas las suscripciones son iguales

También me di cuenta de que algunas "suscripciones" (que en realidad son pagos recurrentes) no son iguales. Hay suscripciones que se pagan semanal/mensual/anualmente, pero también hay suscripciones que no tienen un día exacto de pago, por ejemplo: llenar el depósito del coche. Yo tengo un gasto medio de 38 €/mes en gasolina, pero a veces es el día 3, otras el 15; quizá ese mes apenas usé el coche y no tengo que repostar hasta el siguiente. Por eso añadí la posibilidad de _marcar como pagado_ cuando pagas para que tu pago recurrente se mueva con lo que realmente ocurre: cuando pago la gasolina, marco ese pago como pagado y la siguiente fecha se fija a un mes desde hoy.

Por otro lado, tenemos suscripciones que todavía no han empezado: los períodos de prueba. Las pruebas son algo complicado; siempre quieres recordar que tienes una antes de que termine, para poder decidir si continuar y pagarla, o cancelar antes de que te cobren. Para esto no he visto que ninguna de estas apps grandes tenga una función que ayude a gestionarlo; tienes que poner un recordatorio en otra app o acordarte por arte de magia justo a tiempo.

Por eso también añadí una forma de marcar cuando algo está en prueba y recordarte antes de que termine, dejándote elegir entre mantenerlo para seguirlo o eliminarlo porque no lo vas a usar.

## Conclusiones

Aunque hay muchas apps con las que la mía se solapa, sigo pensando que cada persona tiene su propia forma de hacer las cosas; esta es una de las razones por las que me encanta crear apps simples que resuelven mis propios problemas. Lo que quiero decir es esto: no dejes que el mar de "competidores" te haga dar la espalda a tus ideas; lo peor que puede pasar es que acabes con un producto que tú mismo usarás y con un problema menos del que preocuparte.

¡Sigue construyendo!
