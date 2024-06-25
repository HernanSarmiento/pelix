import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import CardDetails from '../components/CardDetails';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/api/movies')
            .then((res) => res.json())
            .then((movies) => setMovies(movies));
    }, [])

    return (
        <div>
            <h1 className="h1 text-center mb-10">Movies</h1>
            <section className="msgrid mx-24">
                {movies.map((movie) => (
                    <div key={movie._id}>
                        <CardDetails
                            key={movie._id}
                            title={movie.title}
                            thumblr={movie.thumblr}
                        />
                        <Link to={`/movie/${movie._id}`}>
                            <button
                                className="button"
                            >
                                ver
                            </button>
                        </Link>
                    </div>
                ))}

            </section>

        </div>
    )
}
