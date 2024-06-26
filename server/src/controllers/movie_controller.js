import Movie from '../model/movie_model.js';
import { errorHandler } from '../helpers/error.js';


export const add_movie = async (req, res, next) => {
    try {
        const movie = await Movie.create(req.body);
        res.json(movie).status(200);
    } catch (err) {
        next(err);
    }
}

export const get_movies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        if (!movies) return errorHandler(404, "No Movies Yet");
        res.send(movies);
    } catch (err) {
        next(err);
    }
}

export const get_movie = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return errorHandler(404, 'Movie not found');
        res.json(movie).status(200);
    } catch (err) {
        next(err)
    }
}


export const update_movie = async(req,res,next)=>{
    const movie = await Movie.findById(req.params.id);
    if(!movie) return errorHandler(404,'Movie not found');
    try{
        const movie_updated = await Movie.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true})
        res.json(movie_updated).status(200);
    }catch(err){
        next(err)
    }
}

export const delete_movie = async(req,res)=>{
    const movie = await Movie.findById(req.params.id);
    if (!movie) return errorHandler(404,'Movie not found');
    try{
        const movie_deleted = await Movie.findByIdAndDelete(req.params.id);
        res.json("movie deleted succesfully").status(204);
    }catch(err){
        next(err);
    }
}