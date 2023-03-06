import { create } from 'domain';
import {Router} from 'express'
import {deleteProductos, createProductos, getProductos, updateProductos } from '../controllers/productos.controllers.js';

const router = Router()


router.get('/productos', getProductos )


router.post('/productos', createProductos)


router.put('/productos', updateProductos)


router.delete('/productos', deleteProductos)

export default router