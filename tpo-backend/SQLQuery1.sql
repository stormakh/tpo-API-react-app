
Create database TP;
use TP;

create table clientes (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    direccion VARCHAR(255),
    ciudad VARCHAR(100),
    codigo_postal VARCHAR(20),
    telefono VARCHAR(20),
    email VARCHAR(100)
);

create table categorias (
	id INT PRIMARY KEY IDENTITY(1,1),
	detalle VARCHAR(50),
	id_padre INT
);

create table colores (
	id INT PRIMARY KEY IDENTITY(1,1),
	detalle VARCHAR(50)
);

create table talles (
	id INT PRIMARY KEY IDENTITY(1,1),
	detalle VARCHAR(20)
);

create table materiales (
	id INT PRIMARY KEY IDENTITY(1,1),
	detalle VARCHAR(20)
);

create table productos (
	id INT PRIMARY KEY IDENTITY(1,1),
	descripcion VARCHAR(100),
	precio NUMERIC(10, 2),
	cantidad INT,
	color INT,
	talle INT,
	categoria INT,
	material INT,
	FOREIGN KEY (color) REFERENCES colores(id),
	FOREIGN KEY (talle) REFERENCES talles(id),
	FOREIGN KEY (categoria) REFERENCES categorias(id),
	FOREIGN KEY (material) REFERENCES materiales(id)
);

/* conviene hacer tablas relacionales para las caracteristicas del producto pq pueden variar */

create table formas_pago (
	id INT PRIMARY KEY IDENTITY(1,1),
	detalle_tipo VARCHAR(50),
	emisor_tarjeta VARCHAR(50),
	cuotas NUMERIC(2, 0),
	interes NUMERIC(2, 0)
);

create table facturas (
	id INT PRIMARY KEY IDENTITY(1,1),
	id_cliente INT,
	fecha DATE,
	forma_pago INT,
	detalle_tipo VARCHAR(50),
	emisor_tarjeta VARCHAR(50),
	cuotas NUMERIC(2,0),
	interes NUMERIC (2,0),
	FOREIGN KEY (id_cliente) REFERENCES clientes(id),
	FOREIGN KEY (forma_pago) REFERENCES formas_pago(id)
);

create table item_factura(
	id INT PRIMARY KEY IDENTITY(1,1),
	id_factura INT,
	id_producto INT,
	cantidad INT,
	precio NUMERIC(10, 2),
	FOREIGN KEY (id_factura) REFERENCES facturas(id),
	FOREIGN KEY (id_producto) REFERENCES productos(id)
);

-- Crear el rol
-- CREATE ROLE api_role;
-- Asignar permisos de ejecución sobre todos los procedimientos almacenados en un esquema específico (por ejemplo, public)
-- GRANT EXECUTE ON SCHEMA::TP TO api_role;
-- Crear un usuario y asignarle el rol
-- USE TP;
-- CREATE USER api_user WITH PASSWORD = 'chirolanopay';
-- GRANT api_role TO api_user;






