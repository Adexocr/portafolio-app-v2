Portafolio Profesional Interactivo

Esta es una aplicación móvil desarrollada con React Native y Expo que funciona como un portafolio profesional interactivo. Permite navegar por un perfil personal y una lista de proyectos simulados, con vista de detalle para cada uno.

Proyecto realizado para el curso Programación para Dispositivos Móviles (TPA-4001) — Tecnológico de Costa Rica.

Tecnologías utilizadas
React Native
Expo (SDK 54)
React Navigation (Bottom Tabs + Native Stack)
Expo Linear Gradient
@expo/vector-icons (Ionicons)

Características principales

Navegación combinada: Tab Navigator (Inicio / Proyectos) con un Stack Navigator anidado dentro de la pestaña de Proyectos.
Pantalla de Inicio: perfil con foto, biografía corta, lista de tecnologías, y un interruptor de modo oscuro/claro (implementado con useState).
Pantalla de Proyectos: lista desplazable (FlatList) con tarjetas de proyectos, cada una con imagen, descripción corta y etiquetas de tecnología.
Pantalla de Detalle: al tocar un proyecto, se navega a una vista con descripción completa, rol desempeñado, duración y tecnologías usadas.
Datos de proyectos simulados (sin conexión a base de datos), definidos localmente en el código.

Estructura del proyecto
portafolio-app-v2/
├── App.js
├── assets/
│   └── images/
│       ├── avatar.jpeg
│       ├── proyecto1.jpeg
│       ├── proyecto2.jpeg
│       └── proyecto3.jpeg
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── ProjectsScreen.js
│   │   └── ProjectDetailScreen.js
│   ├── components/
│   │   └── ProjectCard.js
│   ├── data/
│   │   └── projects.js
│   └── navigation/
│       └── AppNavigator.js
└── package.json

Instalación y ejecución

Requisitos previos

Node.js (versión LTS)
La app Expo Go instalada en un dispositivo Android, o un emulador configurado con Android Studio

Nota sobre la versión de Expo Go: este proyecto usa Expo SDK 54. Asegurese de tener la versión de Expo Go correspondiente a ese SDK (la disponible en Play Store al momento de este proyecto coincide con SDK 54).

Pasos

Clone el repositorio:
bash
   git clone https://github.com/Adexocr/portafolio-app-v2.git
   cd portafolio-app-v2
Instale las dependencias:
bash
   npm install
Inicie el servidor de desarrollo:
bash
   npx expo start
Escanee el código QR con la app Expo Go desde tu celular, o presioná a en la terminal para abrir en un emulador de Android.

Pantallas
Pantalla	Descripción
Inicio	Perfil personal con foto, biografía, tecnologías y toggle de modo oscuro
Proyectos	Lista desplazable de proyectos con tarjetas (imagen + descripción corta)
Detalle de Proyecto	Información ampliada del proyecto seleccionado: rol, duración, descripción y tecnologías


Autor

Kevin Hidalgo Barrantes
