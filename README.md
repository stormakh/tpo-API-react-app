# tpo-API-react-app
TPO para la materia de Aplicaciones Interactivas 3ro UADE
Proyecto con el Front realizado con REACT + Vite y Tailwind CSS + Shadcn para el estilado.
Recuerden de correr npm install para que se ejecute correctamente el proyecto, Harry.

&nbsp;
# Introducción al Proyecto
Decidimos crear un e-commerce para una tienda de ropa en este caso, la cual cumplirá con los siguientes requerimientos detallados en el proyecto:

### Gestión de Usuarios:
- Registro de usuarios como compradores y vendedores (debe solicitar un nombre de usuario, mail, contraseña, nombre y apellido). 
- Autenticación de usuarios mediante usuario y contraseña (login). 
-  Administración de cuentas de usuario, incluyendo la asignación de permisos.

### Catálogo de Productos:
- Visualización de productos disponibles con fotografía y precio. 
- Búsqueda y filtrado de productos por categoría, precio, etc. -
- Al seleccionar algunos de los productos, dirigirá al detalle del mismo donde se visualizará la imagen del producto junto a su descripción. 
- Opción para añadir productos al carrito de compras.  En caso de que el producto no tenga stock, deberá estar indicado y no se podrá agregarlo al carrito.

### Carrito de Compras:
- Gestión del carrito de compras, con la posibilidad de agregar, eliminar o modificar productos. 
- Realizar el checkout del carrito con el correspondiente cálculo automático del total de la compra. -
- Una vez realizado el checkout (sin procesamiento de pago), se descontará el stock de dicho producto. Se deberá validar si cuenta con el stock correspondiente.

### Gestión de Productos:
- Los usuarios registrados como vendedores podrán realizar el alta de una publicación de un producto adjuntando una o más fotos del producto. 
- En dicha publicación deberá adjuntar la descripción del producto, junto con la categoría a la cual pertenece y el precio. 
- El usuario que crea dicho producto, podrá manejar el stock del mismo. 
- El usuario podrá eliminar dicho producto.

&nbsp;
# Casos de Uso
Tenemos que definir en este caso los casos de uso para el diseño de nuestro e-commerce:

| Nro. | Descripción | Sección     |
|:-----:|:-----|--------:|
| 001  | Creación de usuario comprador                  | Usuarios  |
| 002  | Login de usuario comprador                     | Usuarios  |
| 003  | Creación de usuario vendedor                   | Usuarios  |
| 004  | Login de usuario comprador                     | Usuarios  |
| 005  | Administración de usuarios                     | Usuarios  |
| 006  | Ingreso al sitio y visualización de productos  | Productos |
| 007  | Buscar x producto en el buscador               | Productos |
| 008  | Filtrar productos por x categoria              | Productos |
| 009  | Seleccionar producto                           | Productos |
| 010  | Agregar producto al carrito                    | Compra    |
| 011  | Modificar producto del carrito                 | Compra    |
| 012  | Eliminar producto del carrito                  | Compra    |
| 013  | Realizar checkout del carrito                  | Compra    |
| 014  | Publicar producto                              | Venta     |
| 015  | Modificar stock de producto                    | Venta     |
| 016  | Eliminar producto en venta                     | Venta     |


&nbsp;
# Decisiones de diseño
Nosotros en lo que respecta a los requerimientos indicados hemos tomado las siguientes decisiones para un desarrollo mas eficiente, seguro y mantenible:



&nbsp;
# Uso de GitHub
Para nuestro proyecto, hemos decidido adoptar el modelo de flujo de trabajo Gitflow debido a su estructura claramente definida y su capacidad para gestionar eficientemente el desarrollo de software en un entorno colaborativo. Al adoptar Gitflow, podemos organizar nuestro trabajo de manera ordenada, separando las diferentes etapas del ciclo de vida del software en ramas específicas y manteniendo un flujo de trabajo claro y consistente.

Dejamos como adjunto una imagen de como se relacionan las ramas en este modelo:

![alt text](https://miro.medium.com/v2/resize:fit:1400/1*3-0EDzE63S_UZx2KbIz_dg.png)

