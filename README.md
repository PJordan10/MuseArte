
# 🖼️ MuseArte - Museo Virtual de Arte Moderno

MuseArte es una aplicación web ligera construida con **Node.js**, **Express** y **Pug** que simula un museo virtual de arte moderno.  
Su contenido está embebido directamente en el código mediante objetos estáticos, sin base de datos.  
Este proyecto fue desarrollado como parte de una práctica académica.

---

## ✨ Características

- Navegación fluida entre secciones: Inicio, Galería, Detalle de Obra y Acerca de.
- Galería con 10 obras ficticias de arte moderno.
- Visualización de detalles individuales para cada obra.
- Middleware personalizado que registra cada visita y su hora exacta.
- Estilo visual que refuerza la experiencia de estar en un museo.
- Preparado para despliegue en Vercel.

---

## 🚀 Instalación, ejecución y despliegue

### ✅ Requisitos previos

- Tener instalado **Node.js** (v14 o superior): [https://nodejs.org](https://nodejs.org)
- Tener instalado **npm** (ya viene con Node.js)
- Tener una cuenta en **GitHub**
- Tener una cuenta en **Vercel** [https://vercel.com](https://vercel.com)

### 🧱 Clonar el proyecto

```bash
git clone https://github.com/TU_USUARIO/musearte.git
cd musearte
```

### 📦 Instalar dependencias

```bash
npm install
```

### ▶️ Ejecutar en desarrollo

```bash
npm run dev
```

Visita en tu navegador:
```
http://localhost:3000
```

---

### 🌐 Subir el proyecto a GitHub

1. Si no has iniciado git:
   ```bash
   git init
   git add .
   git commit -m "Primer commit: MuseArte"
   ```

2. Crea un repositorio en GitHub (sin README ni `.gitignore`)

3. Conecta tu repositorio remoto:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/musearte.git
   git push -u origin main
   ```

---

### 🚀 Desplegar en Vercel

1. Entra a [https://vercel.com](https://vercel.com) y crea un nuevo proyecto.
2. Elige el repositorio `musearte`.
3. Configura:
   - **Framework**: Other
   - **Build Command**: (vacío)
   - **Install Command**: `npm install`
   - **Output Directory**: (vacío)
4. Asegúrate de tener este archivo en tu raíz:

#### `vercel.json`
```json
{
  "version": 2,
  "builds": [
    { "src": "index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "index.js" }
  ]
}
```

5. Haz clic en **Deploy** y espera unos segundos.
6. Vercel te dará un enlace como:
```
https://musearte.vercel.app
```

---

## 🛤️ Estructura del Proyecto

```
musearte/
├── index.js              # Entrada principal
├── routes/
│   └── main.js           # Rutas Express
├── views/                # Plantillas Pug
│   ├── layout.pug
│   ├── index.pug
│   ├── galeria.pug
│   ├── obra.pug
│   └── acerca.pug
├── public/               # Archivos estáticos
│   ├── css/style.css
│   └── img/
├── vercel.json           # Configuración de despliegue
└── README.md             # Este archivo
```

---

## 👨‍🎨 Autor

Proyecto creado por **Jordan Javier Porras Gómez**  
Materia: JavaScript - Práctica Parcial 2  
Universidad: [Nombre de tu institución]

---

## 📄 Licencia

Este proyecto es de uso académico y no comercial.  
Las imágenes utilizadas pertenecen a sus respectivos autores o fueron generadas para fines educativos.
