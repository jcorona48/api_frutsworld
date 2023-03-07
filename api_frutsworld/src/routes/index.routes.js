import { Router } from "express";

import { ping } from '../controllers/index.controllers.js';


const router = Router()

router.get('/ping', ping )

<<<<<<< Updated upstream
export default router
=======

export default router
>>>>>>> Stashed changes
