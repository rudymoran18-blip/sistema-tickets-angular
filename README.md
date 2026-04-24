# Sistema de Tickets Angular

Aplicación web desarrollada en Angular para la gestión de tickets de soporte técnico. Permite asignar, filtrar, visualizar y cerrar tickets, simulando un flujo real de soporte.

---

## 🔗 Demo

👉 https://tickets-soporte-angular.netlify.app

---

## 🚀 Funcionalidades

- Asignación de tickets (evita duplicados)
- Filtros por categoría y prioridad
- Visualización de detalle de ticket
- Cierre de tickets
- Persistencia de datos con localStorage
- Navegación SPA con rutas dinámicas

---

## 🛠️ Tecnologías

- Angular
- TypeScript
- Bootstrap
- FontAwesome
- Netlify (deploy)
- GitHub (control de versiones)

---

## 🧠 Decisiones técnicas

- Se implementó arquitectura basada en **servicios (Services)** para manejar el estado
- Se manejó navegación con **Angular Router**
- Se resolvió problema de rutas en producción usando `netlify.toml`
- Se eliminó SSR para adaptar el proyecto a despliegue estático (SPA)

---


---

## 📦 Instalación

```bash
npm install
ng serve
