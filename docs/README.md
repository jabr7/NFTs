# Informe académico entrega 1
Fecha de entrega: 02-Mayo-2022

## Repositorio Git

Creación y uso de repositorios locales y remotos

Comandos Git ejecutados desde terminal y desde el IDE

## Versionado

Buenas prácticas de versionado

Uso de ramas separadas de 'main'

Resumen de commits y evolución del proyecto

## Elicitación

Evidencia de actividades de investigación
[link](investigacion/README.md)

Referencias a fuentes de información:
[link](investigacion/README.md)

Caracterización de usuarios: User Personas

Modelo conceptual del problema

## Especificación

Definición de requerimientos funcionales y no funcionales
### Requerimientos Funcionales
#### Requerimientos de perfil
1. Registro de usuario
2. Login con usuario y contraseña
	2.1 Chequeo de saldo
	2.2  Agregar saldo
	2.3 Cambio de nombre de Usuario
	2.4 Cambio de contraseña de Usuario
	2.5 Mostrar libreria de NFTs
    2.6 Mostrar lista de favoritos
	2.7 Logout
    2.8 Dar de baja usuario
    2.9 Editar Banner de usuario
#### Requerimientos de mercado
3. Mostrar NFTs
	3.1 Mostrar listado de NFTs disponibles
	3.2 Mostrar listado de NFTs por filtro
    3.3 Mostrar NFT
	3.4 Comprar NFT
	3.5 Vender NFT
	3.6 Dar like a un NFT
    3.7 Agregar a listas de favoritos del usuario
    3.8 Buscador de NFTs por nombre



### Requerimientos No Funcionales
#### Interfaz con el Usuario
Se solicita de parte del cliente la utilizacion de el tipo de letra `Roboto`, el uso de tipos de iconos filled,  el nombre de la aplicacion sea *NFTs*, y la paleta de colores del IU sea creada con  `Material.io`
#### Seguridad y Control de Acceso
El sistema mantiene un control de acceso estándar de Login en el cual pide
correo electrónico y contraseña al usuario.
Para mejorar la seguridad de los datos privados de nuestros clientes incorporamos
una encriptación punta a punta de la contraseña bajo el algoritmo SHA-2 de 512
bits.

## Casos de uso

### Registro de usuario
1. Usuario hace click en Registrarse.
2. Se despliega el formulario de resgitro de usuario.
3. Usuario ingresa sus datos.
4. Contraseñas no coinciden en la caja de contraseña y confirmación de contraseña, despliegue de mensaje de error y vuelve a 2.
5. Nombre no disponible, despliegue de mensaje de error y vuelve a 2.
6. Se despliega mensaje de resgistro exitoso.
7. Se despliega la ventana principal.

### Login usuario y contraseña
1. Usuario hace click en botón Login.
2. Se despliega el formulario de login.
3. Usuario ingresa sus datos de logeo.
4. Ingreso de Correo no valido, despliegue de mensaje de error y vuelve a 2.
5. Ingreso de Contraseña incorrecta, despliegue de mensaje de error y vuelve a 2.
6. Despliegue de mensaje de Login completado.
7. Se despliega de ventana principal.

### Chequeo de Saldo
1. Usuario hace click en botón Mi perfil.
2. Se despliega de ventana de Perfil de usuario.
3. Usuario hace click en botón My wallet.
4. Se despliega ventana My wallet con el saldo asociado al usuario.

### Agregar saldo
1. Usuario hace click en botón Mi perfil.
2. Se despliega ventana de Perfil de usuario.
3. Usuario hace click en botón My wallet.
4. Se despliega ventana My wallet con el saldo asociado al usuario.
5. Usuario hace click en botón Agregar saldo.
6. Se despliega el formulario de agregar saldo.
7. Mensaje de ingreso correcto.
8. Despliega ventana de Perfil de usuario.

### Cambio de nombre de usuario
1. Usuario hace click en botón Mi perfil.
2. Se despliega ventana de Perfil de usuario.
3. Usuario hace click en Modificar datos de usuario.
4. Se despliega ventana de Modificar datos de usuario.
5. Usuario hace click en botón de Cambiar nombre
6. Se despliga formulario de Cambio de nombre.
7. Nombre no disponible, se despliega mensaje de error y vuelve al 4.
8. Se despliega mensaje de cambio de nombre exitoso.
9. Se despliega ventana de Perfil de usuario.

### Cambio de contraseña de usuario
1. Usuario hace click en botón Mi perfil.
2. Se despliega ventana de Perfil de usuario.
3. Usuario hace click en Modificar datos de usuario.
4. Se despliega ventana de Modificar datos de usuario.
5. Usuario hace click en botón de Cambiar contraseña.
6. Se despliga formulario de Cambio de contraseña.
7. Contraseñas no coinciden en caja de contraseña nueva y confirmación de contraseña nueva, se despliega mensaje de error y vuelve al 4.
8. Se despliega mensaje de cambio de contraseña exitoso.
9. Se despliega ventana de Perfil de usuario.

### Mostrar libreria de NFTs
1. Usuario hace click en botón Mi perfil.
2. Se despliega ventana de Perfil de usuario.
3. Se muestra las NFTs adquiridas.

### Mostrar lista de favoritos
1. Usuario hace click en botón Mi perfil.
2. Se despliega ventana de Perfil de usuario.
3. Usuario hace click en botón Mis favoritos.
4. Se despliga ventana de Favoritos y se muestran los NFTs marcados como favoritos.

### Logout
1. Usuario hace click en botón Mi perfil.
2. Se despliega ventana de Perfil de usuario.
3. Usuario hace click en botón Cerrar sesión.
4. Se despliega ventana principal.

### Dar de baja usuario
1. Usuario hace click en botón Mi perfil.
2. Se despliega ventana de Perfil de usuario.
3. Usuario hace click en Modificar datos de usuario.
4. Se despliega ventana de Modificar datos de usuario.
5. Usuario hace click en botón Cerrar cuenta.
6. Se despliega mensaje de confirmación.
7. Se despliega ventana principal.

### Editar Banner de usuario
1. Usuario hace click en botón Mi perfil.
2. Se despliega ventana de Perfil de usuario.
3. Usuario hace click en Modificar datos de usuario.
4. Se despliega ventana de Modificar datos de usuario.
5. Usuario hace click en botón de Cambiar banner.
6. Se despliga formulario de Cambio de banner.
8. Se despliega mensaje de cambio de banner exitoso.
9. Se despliega ventana de Perfil de usuario.

### Mostrar listado NFTs
1. Se valida si hay un filtro activo o no.
2. Se muestra el listado ordenado según el filtro.

###Mostrar NFT
1. Usuario hace click en la NFT deseada.
2. Se despliega la ventana con los datos de la NFT.

### Comprar NFT
1. Usuario hace click en la NFT deseada.
2. Se despliega la ventana con los datos de la NFT.
3. Usuario hace click en botón Comprar.
4. Saldo del usuario insuficiente para realizar la transacción, despliegue de mensaje de error y vuelve a 2.

### Vender NFT
1. Usuario hace click en botón Mi perfil.
2. Se despliega ventana de Perfil de usuario.
3. Usuario hace click en botón Vender NFT.
4. Se despliega formulario para la alta de la venta.
5. Se despliega mensaje de ingreso exitoso.

### Dar like a un NFT
1. Usuario hace click en botón con forma de corazón en el NFT deseado.
2. Aumenta el contador de likes.

### Agregar a listas de favoritos del usuario
1. Usuario hace click en botón con forma de estrella en el NFT deseado.
2. Se agrega NFT a la lista de favoritos.

### Buscador de NFTs por nombre
1. Usuario hace click en el buscador.
2. Usuario ingresa el nombre.
3. Se despliega el listado de NFTs que coinciden con el nombre.




[Bocetos de IU](./bocetosiu/)

Se utiliza la aplicacion Marvel para el boceto de las diferentes paginas de la UI ([Marvel](https://marvelapp.com/))

## Validación y verificación

Verificar la especificación

Validar la solución con personas no involucradas en el proyecto

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes