import Serie from '../model/serie_model.js';
import { errorHandler } from '../helpers/error.js'

export const add_serie = async (req, res, next) => {
    const serie = Serie.create(req.body);
    try {
        const saved = await Serie.save()
        res.json("serie saved").status(200);
    } catch (err) {
        next(err)
    };
};

export const get_serie = async (req, res, next) => {
    try {
        const movie = await Serie.findById(req.params.id);
        if (!movie) return errorHandler(404, 'Movie not found');
        res.json(movie).status(200);
    } catch (err) {
        next(err)
    }
}

export const get_allseries = async (req, res, next) => {
    try {
        const serie = await Serie.find();
        if (!serie) return errorHandler(404, "No series Yet");
        res.send(serie);
    } catch (err) {
        next(err);
    }
}


export const update_serie = async (req, res, next) => {
    const serie = await Serie.findById(req.params.id);
    if (!serie) return errorHandler(404, 'serie not found');
    try {
        const serie_updated = await Serie.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true })
        res.json(serie_updated).status(200);
    } catch (err) {
        next(err)
    }
}

export const delete_serie = async (req, res) => {
    const serie = await Serie.findById(req.params.id);
    if (!serie) return errorHandler(404, 'serie not found');
    try {
        const serie_deleted = await Serie.findByIdAndDelete(req.params.id);
        res.json("serie deleted succesfully").status(204);
    } catch (err) {
        next(err);
    }
}