import mongoose from "mongoose";
const movieSchema = new mongoose.Schema(
    {
        title:String,
        description:String,
        director:String,
        actors:[String],
        genres:[String],
        thumblr:String,
        url:String,
    }
);
const Movie = mongoose.model('Movie',movieSchema);
export default Movie;