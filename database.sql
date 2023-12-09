
CREATE DATABASE datamigo;

use datamigo;

-- IMPORTANTE
-- CREAR LOS USUARIOS: user_datamigo
-- UNO CON LOCALHOST Y OTRO CON %


-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE,
    foto VARCHAR(255),
    correo VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);

-- Crear la tabla de entrada
CREATE TABLE entrada (
    id INT AUTO_INCREMENT PRIMARY KEY,
    materia_prima VARCHAR(50) NOT NULL,
    cantidad_total DECIMAL(10, 2) NOT NULL,
    costos_totales DECIMAL(10, 2) NOT NULL,
    fecha DATE,
    hora TIME,
    version INT
);

-- Crear la tabla de proceso
CREATE TABLE proceso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tiempo_produccion_unitario INT NOT NULL,
    cantidad_material_unitario DECIMAL(10, 2) NOT NULL,
    empleado VARCHAR(50) NOT NULL,
    fecha DATE,
    hora TIME,
    version INT
);

-- Crear la tabla de salida
CREATE TABLE salida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cantidad_producida DECIMAL(10, 2) NOT NULL,
    costo_por_unidad DECIMAL(10, 2) NOT NULL,
    merma DECIMAL(10, 2),
    valor_venta DECIMAL(10, 2) NOT NULL,
    fecha DATE,
    hora TIME,
    version INT
);

-- Crear la tabla de reportes
CREATE TABLE reportes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    path VARCHAR(255) NOT NULL,
    version INT,
    fecha DATE,
    hora TIME
);

-- Crear la tabla de análisis
CREATE TABLE analisis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_entrada INT,
    id_proceso INT,
    id_salida INT,
    id_reporte INT,
    version INT,
    FOREIGN KEY (id_entrada) REFERENCES entrada(id),
    FOREIGN KEY (id_proceso) REFERENCES proceso(id),
    FOREIGN KEY (id_salida) REFERENCES salida(id),
    FOREIGN KEY (id_reporte) REFERENCES reportes(id)
);


-- Insertar un usuario
INSERT INTO usuarios (nombre, apellidos, fecha_nacimiento, foto, correo, contraseña)
VALUES ('NombreUsuario', 'ApellidosUsuario', '1990-01-01', 'ruta_foto.jpg', 'usuario@example.com', 'contrasena123');

-- Insertar un registro de entrada
INSERT INTO entrada (materia_prima, cantidad_total, costos_totales, fecha, hora, version)
VALUES ('MateriaPrima1', 100.50, 500.00, '2023-01-01', '12:00:00', 1);

-- Insertar un proceso
INSERT INTO proceso (tiempo_produccion_unitario, cantidad_material_unitario, empleado, fecha, hora, version)
VALUES (60, 5.25, 'Empleado1', '2023-01-02', '14:30:00', 1);

-- Insertar una salida
INSERT INTO salida (cantidad_producida, costo_por_unidad, merma, valor_venta, fecha, hora, version)
VALUES (80.75, 8.50, 2.25, 15.00, '2023-01-03', '08:45:00', 1);

-- Insertar un reporte
INSERT INTO reportes (path, version, fecha, hora)
VALUES ('/ruta_del_reporte/report1.pdf', 1, '2023-01-04', '10:00:00');
