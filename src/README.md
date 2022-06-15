# Informe académico entrega 2
Fecha de entrega: 29-nov-2021

## Construcción

Implementación de funciones principales (sin la necesidad de persistencia de datos):

Algunas de las características o incluso algunas funcionalidades se vieron fuera del alcance o innecesarias para el proyecto, lo omitido es lo siguiente:

### Funciones de perfil:
1. Dar de baja un usuario.
2. Editar banner (Directamente el usuario no tiene banner).

### Requerimientos de mercado
1. Mostrar NFT (Se omitio el mostrar informacion del NFT, ya que toda la información del NFT se puede ver desde la lista de NFTs, así como el comprar o vender).

### Requerimientos no funcionales
1. Seguridad y control de acceso (Omitida por ser innecesaria en este proyecto)

En algunos casos de uso se modifico el walktrough por comodidad, y son las siguientes:

### Agregar saldo
1. Cambian los pasos 5, 6 y 8, quedando 5 "Se despliega el formulario", 6 "Usuario hace click en ingresar monto" y el 8 "reset del formulario".

### Cambiar nombre y Cambiar contraseña
1. Se unieron ambos en un solo caso.
2. Se omite el paso 3 "Hacer click en modificar", al hacer click en Información ya despliega el formulario de actualización de datos.
3. No se realiza el paso 6 de Contraseña "Confirmación de contraseña"

### Comprar NFT
1. Solo se realiza el paso 3 con los casos alternativos alegados.

### Vender NFT
1. Se omite el paso 3 y 4.
2. Las ventas se realizan directamente en la libreria de NFTs comprados.

### Logout
1. Cambia solo el paso 4, que es "Se despliega formulario de login"

Configuración de plataforma tecnológica para desarrollo y producción:

Se utilizó un servidor de NodeJS con webpack 3 instalado, dependencias de material design y esLint a través de comandos npm install.

Documentación del uso de librerías externas (package.json)
### Dominio
|  Nombre |Version   |Razon   |
| ------------ | ------------ | ------------ |
| process | 0.11.10   | Requerido por webpack
| util| 0.12.4 |Requerido por webpack
|uuidv4| 6.2.13 | Utilizado para identificar cartas
|eslint| 8.17.0| Buenas practicas
|eslint-config-google| 0.14.0| Reglas de estandar de google

### Interfaz
|  Nombre |Version   |Razon   |
| ------------ | ------------ | ------------ |
| material/snackbar | 12.0.0  | Requerido por material
| material-components-web| 11.0.0 |Elementos graficos para interfaz 
|eslint | 8.17.0 | Buenas practicas de programacion
|eslint-config-google| 0.14.0| Reglas de estandar de google
"@babel/core"| "^7.13.16"| Utilizado por Webpack
"@babel/preset-env"| "^7.13.15"| Utilizado por Webpack
"autoprefixer"| "^10.2.5"| Utilizado por Webpack
"babel-loader"| "^8.2.2"| Utilizado por Webpack
"css-loader"| "^5.2.4"| Utilizado por Webpack
"extract-loader"| "^5.1.0"| Utilizado por Webpack
"file-loader"| "^6.2.0"| Utilizado por Webpack
"postcss-loader"| "^5.2.0"| Utilizado por Webpack
"sass"| "^1.32.11"| Utilizado por Webpack
"sass-loader"| "^11.0.1"| Utilizado por Webpack
"webpack"| "^5.36.0"| Server Packaging
"webpack-cli"| "^4.6.0"| Utilizado por Webpack
"webpack-dev-server"| "^3.11.2"| Utilizado por Webpack
       

## Interfaz de usuario

### Interfaz de usuario web / mobile (responsive)
Todas las interfaces fueron hechas de forma responsive para dispositivos de 600px de ancho hacia arriba, ejemplos:
Ejemplo 1 Login:
![plot](./imagenes/NFT%20Login.png)
![plot](./imagenes/NFT%20Login%20chico.png)

Ejemplo 2 Marketplace:
![plot](./imagenes/NFT%20Marketplace.png)
![plot](./imagenes/NFT%20Marketplace%20chico.png)


### Página única con navegación entre secciones
Demostracion de como toda la pagina esta escrita en un solo html, css y js:
![plot](./imagenes/Pantallas.gif)

### Implementación: Material Design Web Components
![plot](./imagenes/ejemplos%20material.png)
Aplicar un sistema de diseño y principios de usabilidad

### Cumplimiento de estándar de accesibilidad WCAG

### Seguir especificación de estilo
Utilizamos el plugin eslint a partir de la especificacion de estilo de google para toda la interfaz y el dominio

## Codificación
Se utilizo el IDE Visual studio code para la codificacion de la pagina web.

Se aplicaron los estandares de codificacion de google para javascript

Se utilizaron buenas practicas de OOP separando la logica (dominio) de la interfaz

## Test unitario

Test unitarios en Jest

100% cobertura en clases de dominio


| En la semana previa a la entrega se debe congelar el desarrollo (22-nov-2021).
A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y generación del informe académico.

## Test de sistema

Realizar test de sistema en un entorno separado del desarrollo

Generar casos de prueba aplicando técnica partición equivalente

Detallar sesiones de prueba exploratoria

## Reporte de issues

Se utilizo Github Issues para reportar, discutir y aceptar o rechazar nuevas funcionalidades del proyecto. [Link a Issues]( https://github.com/ORTFIS2022/obligatorio-Bonifacino-Cadenas-Caetano/issues?q=is%3Aissue)

![plot](./imagenes/issues1.png)

Se definieron diferentes label para cada issue, sea domino, interfaz,etc. 

tambien dependiendo el tipo (sea funcionalidad, bug, etc)
![plot](./imagenes/issues2.png)


Algunos issues quedaron abiertos dado a que eran funcionalidades complejas o bugs que no son criticos
![plot](./imagenes/issues3.png)


### Sumario de issues

|  Tipo |Total   |Cerrados   | Abiertos | Wontfix/Wont Implement
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Bug | 7   | 5 | 2 | 0
|Features| 3| 3| 0 | 1
| Dominio | 2 | 2 |0 |0


### Evaluación global de la calidad
A nuestro parecer, la calidad del codigo esta bien, quedadon algunos detalles por pulir que no afectan la funcionalidad pero si la organizacion del codigo pudiendo quedar mas simple o mas "modular".
Un claro ejemplo es el uso de Jquery, pero el mismo esta fuera del scope del proyecto



## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes
