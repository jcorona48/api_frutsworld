import { pool } from '../db.js'

export const getProductos = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM T_Producto')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' })
    }
}

export const getProducto = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM T_Producto WHERE ID_Producto = ?', [req.params.ID_Producto])
        if (rows.length <= 0) return res.status(404).json({ message: 'Producto not found' })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' })
    }
}


export const createProductos = async (req, res) => {

    try {
        const { Nombre, Precio_Unitario } = req.body
        const [rows] = await pool.query('INSERT INTO T_Producto(Nombre, Precio_Unitario) VALUES(?, ?)', [Nombre, Precio_Unitario])
        res.send({
            ID_Producto: rows.insertId,
            Nombre,
            Precio_Unitario,
        })
    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' })
    }

}


export const deleteProductos = async (req, res) => {

    try {
        const [result] = await pool.query('DELETE FROM T_Producto WHERE ID_Producto = ?', [req.params.ID_Producto])
        if (result.affectedRows <= 0) return res.status(404).json({ message: 'Producto not found' })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' })
    }

}

export const updateProductos = async (req, res) => {
    
        const { ID_Producto } = req.params
        const { Nombre, Precio_Unitario } = req.body
    try {   
        const [result] = await pool.query('UPDATE T_Producto SET Nombre = IFNULL(?, Nombre), Precio_Unitario = IFNULL(?, Precio_Unitario) WHERE ID_Producto = ? ', [Nombre, Precio_Unitario, ID_Producto])
        console.log(result)
        if (result.affectedRows == 0) return res.status(404).json({ message: 'Producto not found' })
        const [rows] = await pool.query('SELECT * FROM T_Producto WHERE ID_Producto = ?', [ID_Producto])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' })
    }
}



