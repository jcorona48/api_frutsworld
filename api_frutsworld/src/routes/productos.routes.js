import {Router} from 'express'
import {deleteProductos, createProductos, getProductos, updateProductos, getProducto } from '../controllers/productos.controllers.js';


const router = Router()


router.get('/productos', getProductos )

router.get('/productos/:ID_Proucto', getProducto )



router.post('/productos', createProductos)


router.patch('/productos/:ID_Producto', updateProductos)


router.delete('/productos/:ID_Producto', deleteProductos)


export default router
