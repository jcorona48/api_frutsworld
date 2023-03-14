insert into T_Producto(ID_Producto, Nombre, Precio_Unitario)

values (101, "Melon", 800),
	   (102, "Fresas", 150),
	   (103, "Manzana", 120),
	   (104, "Limon", 200),
	   (105, 'Manzana Verde', 30.5),
	    (106, 'Uvas Verde', 120)
	    
	    

insert into T_Usuarios values (1,"Joan Corona","jcorona","4886")



insert into T_DestinosExportacion values (101, 'Majaha')

insert into T_Venta values(1, Convert('2023-12-11', datetime) , 101)

insert into T_Venta values(2, Convert('2023-12-11', datetime) , 101)


insert into T_DeclaradoVenta 
values (1, 2, 101, 5),  
		(2, 1, 102, 4)