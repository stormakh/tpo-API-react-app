
Create database tpo;
use tpo;

create table usuarios (
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

create table vendedores (
	id_usuario INT PRIMARY KEY,
	cuit VARCHAR(100),
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

create table producto_vendedor(
	id INT PRIMARY KEY IDENTITY(1,1),
	id_vendedor INT,
	id_producto INT, 
	FOREIGN KEY (id_vendedor) REFERENCES vendedores(id_usuario),
	FOREIGN KEY (id_producto) REFERENCES productos(id)
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
	FOREIGN KEY (id_cliente) REFERENCES usuarios(id),
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

INSERT INTO usuarios (nombre, apellido, direccion, ciudad, codigo_postal, telefono, email)
VALUES 
('Juan', 'Perez', 'Calle 123', 'Ciudad A', '123456', '123456789', 'juan@example.com'),
('Marta', 'Gonzoslez', 'Avenida 456', 'Ciudad B', '789012', '987654321', 'maria@example.com');

INSERT INTO categorias (detalle, id_padre)
VALUES 
('Ropa', NULL),
('Camisetas', 1),
('Pantalones', 1);

INSERT INTO colores (detalle)
VALUES 
('Rojo'),
('Azul'),
('Verde');

INSERT INTO colores (detalle)
VALUES 
('Rojo'),
('Azul'),
('Verde');

INSERT INTO talles (detalle)
VALUES 
('S'),
('M'),
('L');

INSERT INTO materiales (detalle)
VALUES 
('Algodon'),
('Poliester'),
('Lana');

INSERT INTO productos (descripcion, precio, cantidad, color, talle, categoria, material)
VALUES 
('Camiseta Roja', 19.99, 50, 1, 1, 2, 1),
('Pantalon Azul', 29.99, 30, 2, 3, 3, 2);

INSERT INTO vendedores (id_usuario, cuit)
VALUES 
(1, '12345678901'),
(2, '09876543210');

INSERT INTO producto_vendedor (id_vendedor, id_producto)
VALUES 
(1, 1),
(2, 2);

INSERT INTO formas_pago (detalle_tipo, emisor_tarjeta, cuotas, interes)
VALUES 
('Tarjeta de credito', 'Visa', 12, 5),
('Tarjeta de debito', NULL, 1, NULL);

INSERT INTO facturas (id_cliente, fecha, forma_pago)
VALUES 
(1, '2024-03-01', 1),
(2, '2024-03-02', 2);

INSERT INTO item_factura (id_factura, id_producto, cantidad, precio)
VALUES 
(1, 1, 2, 19.99),
(2, 2, 1, 29.99);




