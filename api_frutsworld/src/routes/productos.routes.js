<<<<<<< Updated upstream
import { create } from 'domain';
import {Router} from 'express'
import {deleteProductos, createProductos, getProductos, updateProductos } from '../controllers/productos.controllers.js';
=======
import {Router} from 'express'
import {deleteProductos, createProductos, getProductos, updateProductos, getProducto } from '../controllers/productos.controllers.js';
>>>>>>> Stashed changes

const router = Router()


router.get('/productos', getProductos )

<<<<<<< Updated upstream
=======
router.get('/productos/:ID_Proucto', getProducto )

>>>>>>> Stashed changes

router.post('/productos', createProductos)


<<<<<<< Updated upstream
router.put('/productos', updateProductos)


router.delete('/productos', deleteProductos)
=======
router.patch('/productos/:ID_Producto', updateProductos)


router.delete('/productos/:ID_Producto', deleteProductos)
>>>>>>> Stashed changes

export default router