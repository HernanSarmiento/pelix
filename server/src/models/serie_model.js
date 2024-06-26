import mongoose from "mongoose";

const serieSchema = new mongoose.Schema({
    title: String,
    description: String,
    director: String,
    actors: [String],
    genres: [String],
    thumblr: String,
    url: String,
});

const Serie = new mongoose.model("serie",serieSchema);

export default Serie;