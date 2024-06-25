import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Movie() {
    const [movie, setMovie] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch("/api/get-movie/" + params.id)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, [])
    return (
        <div className="details" key={movie._id}>
                <img src={movie.thumblr} alt={movie.title} className="w-3/6 h-3/4 rounded-sm shadow-sm shadow-teal-400" />
            <section>
                <h1 className="h1">{movie.title}</h1>
                <h2 className="text-lg">{movie.description}</h2>
                <p className="pt-3 inline-block">{movie.genres}</p>
                <p>creators: {movie.director} </p>
                <p>actors: {movie.actors}</p>
            </section>
            <iframe
                src={movie.url}
                className=" mx-28"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
    )
}
