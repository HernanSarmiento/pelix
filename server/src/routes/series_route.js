import express from 'express'

import { add_serie,get_allseries,update_serie,delete_serie,get_serie } from '../controllers/serie_controller.js';

const router = express.Router();

router.get("/series",get_allseries);
router.get("/get-serie/:id",get_serie);
router.post("/add-serie",add_serie);
router.put("/update-serie/:id",update_serie);
router.delete("/delete-serie/:id",delete_serie);

export default router;
