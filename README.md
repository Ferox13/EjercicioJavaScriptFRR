# Juego de Encontrar Parejas

**Autor:** Fernando Rodríguez Rodríguez

Este proyecto es una implementación del clásico juego de encontrar parejas, desarrollado en JavaScript. El juego consiste en descubrir pares de números enteros en un tablero. A continuación, se describen las características principales, instrucciones de uso y personalización del juego.

---

## Características del Juego

- **Tablero inicial:** 12 casillas (6 parejas de números del 1 al 6).
- **Distribución aleatoria:** Los números se distribuyen al azar en las casillas al inicio de cada partida.
- **Interfaz gráfica:** 
  - Nombre del juego y del autor en la parte superior.
  - Tablero de casillas en el centro.
  - Contador de intentos y parejas restantes a la izquierda.
  - Selector de dificultad a la derecha.
- **Selector de dificultad:** 
  - Tres niveles predefinidos con filas y columnas fijas.
  - Opción de personalizar el número de filas y columnas, asegurando que el total de casillas sea par.

---

## Reglas del Juego

1. **Comenzar partida:**
   - Selecciona una dificultad y pulsa el botón `Seleccionar dificultad`.
   - El tablero se generará con el número de filas y columnas seleccionadas.
   - Si el número de casillas no es par, se mostrará un mensaje de error.

2. **Mecánica de juego:**
   - Al pulsar dos casillas:
     - Si los valores son diferentes:
       - Se muestra un mensaje de fallo.
       - Las casillas se ocultan nuevamente tras 1 segundo.
     - Si los valores son iguales:
       - El contador de parejas restantes disminuye.
       - Se muestra un mensaje de acierto y las casillas permanecen descubiertas.
   - En ambos casos, el contador de intentos incrementa.

---

## Requisitos

- **Lenguaje:** JavaScript
- **Frameworks o Librerías:** Ninguna (opcional si se desea extender).
- **Navegador Web:** Compatible con cualquier navegador moderno.

---

## Personalización

1. **Estilos:** 
   - Puedes modificar los estilos de la interfaz gráfica según prefieras, asegurando que sea funcional y usable.
2. **Niveles de dificultad:**
   - Personaliza el tamaño del tablero seleccionando el número de filas y columnas.

---
