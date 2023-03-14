


CREATE TABLE T_DestinosExportacion
(
ID_Destino int PRIMARY KEY auto_increment,
Nombre varchar(100)

)


CREATE TABLE T_Producto
(
ID_Producto int PRIMARY KEY auto_increment,
Nombre varchar(100), 
Precio_Unitario decimal(10,2)
)




CREATE TABLE T_Venta
(
ID_Informe int PRIMARY KEY auto_increment,
Fecha datetime,
ID_Destino int references T_DestinosExportacion(ID_Destino)

)


CREATE TABLE T_DeclaradoVenta
(
ID_Declarado int PRIMARY KEY auto_increment,
ID_Informe int references T_Venta(ID_Informe),
ID_Producto int references T_Producto(ID_Producto),
Cantidad int
)



CREATE TABLE T_Usuarios(

ID_Usuario int primary key auto_increment,
nombre varchar(50),
user varchar(50),
pass varchar(50)
)