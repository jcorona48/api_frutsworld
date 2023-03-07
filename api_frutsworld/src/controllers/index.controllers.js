import { pool } from '../db.js'

export const ping = async (req, res) => {
<<<<<<< Updated upstream
    const [result] = await pool.query('SELECT "pong" AS result')
=======
    const [result] = await pool.query("SELECT 'pong' AS result")
>>>>>>> Stashed changes
    res.json(result[0])
}