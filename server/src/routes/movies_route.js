import express from 'express'

import { add_movie,get_movies,update_movie,delete_movie,get_movie } from '../controllers/movie_controller.js';

const router = express.Router();

router.get("/movies",get_movies);
router.get("/get-movie/:id",get_movie)
router.post("/add-movie",add_movie);
router.put("/update-movie/:id",update_movie);
router.delete("/delete-movie/:id",delete_movie);

export default router;
