import  express  from 'express'
import productosRoutes from './routes/productos.routes.js'
import indexRoutes from './routes/index.routes.js';

const app = express()


app.use(indexRoutes)
app.use(productosRoutes)


app.listen(5000)
console.log("Server runnin on port 3000")
