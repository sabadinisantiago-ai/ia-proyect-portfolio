# Mi Portfolio Personal 🚀

¡Hola! Soy **Santiago Sabadini**, desarrollador de Bahía Blanca, Argentina. Este es el repositorio de mi portfolio profesional, construido con una arquitectura moderna que separa el backend del frontend y que fue diseñado íntegramente colaborando con un sistema de IA orquestador.

## 🏗️ La Arquitectura

Cuando arranqué este proyecto, tenía un requerimiento muy claro: quería actuar como **Director de Orquesta** supervisando agentes de IA especializados. Le pedí a la IA que dividiera el trabajo simulando tres roles:

1. **Subagente Backend**: Encargado de construir la API de datos.
2. **Subagente Frontend**: Encargado de la UI y el diseño.
3. **Subagente Supervisor**: Para hacer Quality Assurance (QA) visual navegando la web terminada de forma autónoma.

Decidimos usar el siguiente stack tecnológico para mantener todo rápido, moderno y escalable:

### Backend (Python + FastAPI)
Quería usar **Python**, ya que es uno de mis fuertes. 
- Usamos **FastAPI** porque es rapidísimo de levantar y documenta la API automáticamente.
- La información de mi portfolio (proyectos, experiencia, skills) vive en `backend/data.py` como un JSON. De esta forma, si mañana quiero agregar mi nuevo proyecto _GeoPlan_, solo edito un diccionario en ese archivo y la API sirve el cambio en el momento.

### Frontend (React + Vite)
Para la interfaz elegimos **React** levantado con Vite. 
- Me comunico con la API a través de un proxy configurado en `vite.config.js`.
- Todo el frontend está construido desde cero **sin librerías de componentes UI**.

### El Diseño: Estilo "Apple Pro" 🍎
Inicialmente la IA me propuso un diseño "minimalista oscuro". Estaba bueno, pero le pedí que lo llevara al siguiente nivel: _"Quiero algo más similar al estilo de Apple"_.

El agente Frontend rehizo todo el CSS adoptando el diseño **"Apple Pro"**:
- **Fondo Negro Puro** (`#000000`) y superficies gris oscuro (`#1d1d1f`).
- **Efecto de Cristal (Glassmorphism)**: Desenfoque profundo en la barra de navegación y tarjetas.
- **Botones y Bordes Píldora**: Radios grandes (18px a 24px) y animaciones tipo "spring" súper suaves al pasar el mouse por encima.
- **Tipografía Alta**: Simulamos el stack _San Francisco (SF Pro)_ de Apple usando _Inter_ para mantener esa legibilidad gigante y de alto contraste.

---

## 🛠️ Cómo correr este proyecto en tu máquina

Si querés ver el código en acción, necesitas levantar ambos entornos en paralelo. Asegurate de tener instalados **Python 3** y **Node.js**:

### 1. Levantar la API (Backend)
Abrí una terminal en la raíz del proyecto y ejecutá:
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --port 8000
```
*(Si vas a `http://localhost:8000/docs` podés ver el Swagger con todos mis datos).*

### 2. Levantar la Web (Frontend)
En otra terminal nueva:
```bash
cd frontend
npm install
npm run dev
```
La web va a estar corriendo hermosa en `http://localhost:5173`.

---

