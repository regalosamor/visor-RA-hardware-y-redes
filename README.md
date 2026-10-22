# Remix of Wonder World Classroom

# PROMPT MAESTRO: DESARROLLO DE XR FUSION EDU



Actúa como un ingeniero senior de software especializado en desarrollo frontend, HTML5, CSS3, JavaScript, Three.js, A-Frame, WebXR, realidad aumentada, realidad virtual, visualización 3D y tecnologías educativas.



Necesito desarrollar una aplicación web denominada:



**XR FUSION EDU – LABORATORIO INMERSIVO**



**Subtítulo:** Laboratorio de modelos 3D · RA · RV · Mediación con IA.



**Objetivo:** Crear una plataforma educativa, moderna, interactiva y visualmente impactante que permita a docentes y estudiantes cargar modelos tridimensionales, explorarlos en 3D, visualizarlos mediante realidad aumentada y realidad virtual, y diseñar experiencias pedagógicas interactivas.



## 1. ARQUITECTURA TECNOLÓGICA



Desarrolla una aplicación completa en un único archivo `index.html`, con HTML5, CSS3 y JavaScript integrados.



Tecnologías:

- HTML5 semántico y CSS3 responsivo.

- JavaScript ES6+ sin backend.

- Google model-viewer 4.1.0 para modelos GLB, interacción 3D y RA.

- A-Frame 1.8.0 para escenas inmersivas y RV.

- Three.js mediante las capacidades de A-Frame.

- WebXR para dispositivos compatibles.

- Web Speech API para narración.

- File API, Blob y URL.createObjectURL para modelos locales.

- Compatible con GitHub Pages, sin bases de datos ni autenticación.



No exigir claves API ni servicios de pago.



## 2. DISEÑO GRÁFICO PREMIUM



Crea una interfaz futurista, elegante, tecnológica y académica, inspirada en laboratorios de simulación 3D.



Paleta cromática:

- Azul profundo: #031426.

- Fondo oscuro: #020B15.

- Azul tecnológico: #00B7FF.

- Verde neón: #B6E800.

- Naranja energético: #FF7A1A.

- Blanco: #F7FBFF.

- Texto secundario: #A9C4D7.



Utiliza tarjetas con efecto glassmorphism, bordes sutilmente luminosos, degradados azules, botones modernos, animaciones suaves, iconografía vectorial, sombras elegantes y fondos con cuadrículas tecnológicas.



Tipografía Inter o sistema sans serif.



La interfaz debe aprovechar el espacio de pantalla y adaptarse a computadores, tabletas y celulares.



## 3. DISTRIBUCIÓN DE LA INTERFAZ



Organiza la aplicación en una cabecera superior y tres columnas principales.



### CABECERA



Mostrar:

- Logotipo vectorial tecnológico de XR Fusion.

- Título XR Fusion EDU.

- Subtítulo del laboratorio.

- Indicadores del estado 3D, RA y RV.

- Botón de diagnóstico de compatibilidad.

- Botón de ayuda.



### PANEL IZQUIERDO: BIBLIOTECA 3D



Contener:

- Zona de carga de archivos `.glb`.

- Botón para seleccionar varios archivos.

- Funcionalidad de arrastrar y soltar.

- Campo opcional para cargar modelos mediante URL pública HTTPS.

- Indicaciones sobre restricciones CORS.

- Catálogo de modelos cargados.

- Nombre, tamaño y procedencia de cada modelo.

- Selección de modelo activo.

- Eliminación de modelos incorporados.

- Indicador de cantidad de modelos.



Los modelos locales deben procesarse mediante Object URLs y liberar sus recursos cuando corresponda.



### PANEL CENTRAL: VISUALIZADOR INMERSIVO



Debe ser el protagonista visual de la aplicación.



Incluir tres modos de visualización:



**Modo 1: EXPLORAR 3D**



Implementar mediante `<model-viewer>`.



Permitir:

- Rotación manual de 360°.

- Zoom con ratón y gestos táctiles.

- Rotación automática activable y desactivable.

- Reproducción de animaciones disponibles.

- Restablecimiento de cámara.

- Control de escala.

- Pantalla completa.

- Sombras e iluminación realista.

- Indicador de carga y progreso.

- Mensajes de error cuando un modelo no pueda abrirse.



Cargar inicialmente el modelo de demostración Astronaut.glb de modelviewer.dev.



**Modo 2: REALIDAD AUMENTADA**



Permitir visualizar el modelo en el entorno físico del usuario mediante un dispositivo compatible.



Utilizar model-viewer con los modos WebXR, Scene Viewer y Quick Look, según las capacidades del dispositivo.



Mostrar un botón destacado: ACTIVAR CÁMARA RA.



Comprobar HTTPS, disponibilidad de RA y condiciones de compatibilidad.



Si el dispositivo no admite RA, informar claramente y conservar el modo 3D.



No simular una experiencia de RA cuando el navegador no la soporte.



**Modo 3: LABORATORIO DE REALIDAD VIRTUAL**



Implementar una escena mediante A-Frame.



Diseñar un laboratorio futurista que contenga:

- Ambiente tridimensional azul oscuro.

- Piso tecnológico.

- Plataforma circular iluminada.

- Anillos luminosos azules y verdes.

- Modelo 3D seleccionado colocado sobre la plataforma.

- Iluminación ambiental, direccional y puntual.

- Cámara de navegación.

- Controles WASD.

- Controles de mirada y láser cuando estén disponibles.

- Compatibilidad con visores WebXR.



Incorporar los botones ENTRAR CON VISOR y VOLVER A 3D.



Crear un componente personalizado `fit-gltf` que ajuste las dimensiones y centre el modelo cargado.



Crear otro componente `spin-model` para controlar la rotación automática.



## 4. PANEL DERECHO: MEDIACIÓN DIDÁCTICA



Incluir tres pestañas:



### PESTAÑA A: ACTIVIDAD



Permitir configurar:

- Título de la experiencia.

- Área de conocimiento.

- Nivel educativo.

- Objetivo de aprendizaje.



Áreas:

Informática, ciencias naturales, matemáticas, salud, historia, arte, ingeniería y formación docente.



Niveles:

Educación inicial, básica, media, técnica y superior.



Incorporar una tarjeta denominada:



**MISIÓN XR: MIRAR COMO INVESTIGADOR**



La misión seguirá cuatro etapas:



1. OBSERVAR: examinar el modelo desde diferentes ángulos.

2. SEÑALAR: identificar características relevantes.

3. EXPLICAR: relacionar las características con conceptos académicos.

4. TRANSFERIR: aplicar lo aprendido a una situación nueva.



Mostrar una barra de progreso interactiva y permitir marcar las etapas completadas.



Agregar:

- Botón GENERAR RETO.

- Botón DESCARGAR FICHA.



La ficha descargable debe contener los datos de la actividad y sus objetivos.



### PESTAÑA B: PUNTOS DE INTERÉS



Crear un sistema de anotaciones interactivas sobre los modelos 3D.



Permitir:

- Escribir el texto de un punto.

- Activar el modo FIJAR PUNTO.

- Hacer clic sobre la superficie del modelo.

- Calcular la posición tridimensional del punto.

- Mostrar un marcador circular naranja.

- Visualizar una anotación al interactuar con el marcador.

- Enumerar las anotaciones.

- Eliminar puntos individuales.

- Limpiar todas las anotaciones.



Cada modelo conservará sus propias anotaciones durante la sesión.



Incorporar una sección de atribución:



- Nombre del modelo.

- Autor.

- Licencia.

- URL de origen.

- Botón GUARDAR ATRIBUCIÓN.



Recordar que los modelos descargados de Sketchfab deben utilizarse respetando las condiciones de licencia correspondientes.



### PESTAÑA C: INTELIGENCIA ARTIFICIAL



Crear un COPILOTO PEDAGÓGICO SIN API.



No conectar directamente con servicios externos de inteligencia artificial.



El sistema debe construir prompts educativos a partir de la información diligenciada por el profesor.



Permitir seleccionar el tipo de apoyo:

- Secuencia antes-durante-después.

- Preguntas socráticas.

- Rúbrica de desempeño.

- Adaptaciones basadas en DUA.

- Caso o simulación profesional.



Duraciones:

20, 35, 50 y 90 minutos.



Incluir:

- Botón CREAR PROMPT DIDÁCTICO.

- Área para visualizar el prompt generado.

- Botón COPIAR PROMPT.

- Botón ESCUCHAR.



El prompt generado debe considerar el modelo seleccionado, objetivos de aprendizaje, área, nivel educativo y duración.



## 5. NARRACIÓN EDUCATIVA



Utilizar Web Speech API para narrar instrucciones y actividades.



Agregar un botón de audio en el panel pedagógico.



La narración deberá reproducir el título de la misión, las indicaciones y el objetivo de aprendizaje.



Gestionar correctamente navegadores sin soporte de síntesis de voz.



## 6. VENTANA INICIAL DE BIENVENIDA



Al ingresar a la aplicación, mostrar una ventana modal elegante con el título:



**EL OBJETO QUE CAMBIA DE REALIDAD**



Texto introductorio:



"Un mismo modelo puede ser observado en una pantalla, situado sobre una mesa o recorrido desde dentro. El reto no es identificar cuál tecnología impresiona más, sino cuál ayuda mejor a aprender".



Incorporar tres roles:



OBSERVADOR: encontrar detalles que una imagen plana no revela.



CONECTOR: relacionar los detalles con conceptos académicos.



CRÍTICO: justificar cuándo conviene utilizar 3D, RA, RV u otra alternativa accesible.



Pregunta detonadora:



"Si la tecnología desapareciera, ¿qué aprendizaje debería permanecer?"



Agregar los botones:

- EXPLORAR PRIMERO.

- INICIAR CON EL MODELO.



## 7. DIAGNÓSTICO DE COMPATIBILIDAD



Desarrollar una ventana modal que informe:



- Si existe una conexión segura HTTPS.

- Si la aplicación está incrustada en otra página.

- Si el dispositivo permite utilizar RA.

- Si existe compatibilidad con RV.

- Estado del modelo seleccionado.



Cuando alguna capacidad no esté disponible, mostrar una explicación técnica comprensible y una alternativa funcional.



## 8. INTERACTIVIDAD Y ESTADO



Implementar una estructura de estado centralizada en JavaScript para administrar:

- Modo de visualización.

- Modelo activo.

- Biblioteca de modelos.

- Anotaciones.

- Datos de atribución.

- Estado de rotación y animación.

- Avance de la misión.

- Compatibilidad XR.



Crear funciones independientes para importar modelos, seleccionarlos, eliminarlos, cambiar el modo de visualización, manejar anotaciones, exportar fichas y generar prompts educativos.



Utilizar mensajes emergentes para confirmar las acciones del usuario.



Incorporar accesibilidad mediante etiquetas ARIA, navegación por teclado, indicadores de foco y respeto por la preferencia de movimiento reducido.



## 9. DISEÑO RESPONSIVO



En escritorio, utilizar una interfaz de tres columnas.



En tabletas, reorganizar los paneles sin reducir excesivamente el visualizador.



En celulares:

- Mostrar primero el visor 3D.

- Ubicar después la biblioteca.

- Finalmente, mostrar el panel pedagógico.

- Adaptar controles táctiles.

- Mantener botones suficientemente grandes.

- Evitar desplazamiento horizontal.

- Garantizar buena legibilidad.



## 10. CALIDAD Y RESTRICCIONES



La aplicación debe:

- Funcionar sin backend.

- Ser compatible con GitHub Pages.

- Utilizar archivos GLB locales y URLs públicas compatibles.

- Contar con tratamiento de errores.

- Liberar recursos creados mediante Object URLs.

- Evitar llamadas a APIs privadas.

- Proteger la interfaz frente a la inserción de HTML no confiable.

- Funcionar en navegadores modernos.

- Mantener una alternativa 3D cuando RA o RV no estén disponibles.



No utilizar componentes decorativos que impidan observar los modelos.



## 11. ENTREGABLE FINAL



Genera el código fuente completo, funcional y autocontenido en un único archivo `index.html`.



No entregues pseudocódigo, fragmentos incompletos ni botones sin funcionalidad.



Incluye todos los estilos CSS, los componentes visuales, las funciones JavaScript y los eventos necesarios.



El resultado debe tener calidad de producto educativo universitario, una interfaz visual excepcional y un enfoque centrado en el aprendizaje experiencial.



**Principio pedagógico del proyecto:**



"La tecnología inmersiva tiene sentido cuando permite observar, comprender, explicar y aplicar conocimientos que serían difíciles de explorar por otros medios".



Desarrolla la aplicación completa, preparada para ejecutar, probar y publicar en GitHub Pages.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/97992b7e-f9e7-4f31-b71f-781d1f1da6c2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
