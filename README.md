Bienvenidos todos a ✨Arcanum✨

Una aplicación web que combina la sabiduría ancestral del Tarot con el homenaje a las mujeres en la ciencia. Explora los 22 Arcanos Mayores mientras descubres científicas que han transformado nuestro mundo.


🌙 Características Principales

✨ Visualización Interactiva: Explora los 22 Arcanos Mayores con diseños coloridos
✨  Tributo Científico: Aprende sobre mujeres brillantes que han revolucionado la ciencia
✨ Diseño Responsivo: Interfaz optimizada para dispositivos móviles y desktop

🌙Tecnologías Utilizadas

Frontend: HTML5, CSS3, JavaScript (ES6+)
Estilos: CSS Grid, Flexbox, Animaciones CSS
Iconografía: Símbolos del tarot y elementos científicos
Responsive Design: Mobile-first approach

🔧 Instalación y Uso

1. Clona el repositorio:
bashgit clone https://github.com/nicolegugu93/Arcanum
cd tarot-ciencia

2. Abre la aplicación
bash# Opción 1: Abrir directamente en el navegador
open index.html

# Opción 2: Usar un servidor local (recomendado)
python -m http.server 8000
# o con Node.js
npx serve .

🌙 Estructura del proyecto:

Arcanum/
├── node_modules/ # Dependencias del proyecto
├── public/ # Archivos estáticos accesibles públicamente
├── src/ # Código fuente principal de la aplicación
│ ├── assets/ # Recursos estáticos (imágenes, íconos, etc.)
│ ├── components/ # Componentes reutilizables
│ │ ├── TarotFooter.jsx
│ │ ├── TarotNav.jsx
│ ├── layout/ # Estructuras de diseño compartidas
│ │ └── Layout.jsx
│ ├── pages/ # Páginas principales de la aplicación
│ │ ├── CardDetail.jsx
│ │ ├── EchaTusCartas.jsx
│ │ └── TarotHome.jsx
│ ├── router/ # Configuración de rutas
│ │ └── Router.jsx
│ ├── services/ # Servicios y lógica de negocio
│ │ └── TarotServices.jsx
│ ├── style/ # Estilos específicos de componentes/páginas
│ │ ├── carddetail.css
│ │ ├── tarotcards.css
│ │ ├── tarotfooter.css
│ │ ├── tarotnav.css
│ │ └── Tarothome.css
│ ├── App.css # Estilos globales de App
│ ├── App.jsx # Componente principal de la aplicación
│ ├── index.css # Estilos generales
│ └── main.jsx # Punto de entrada de React

