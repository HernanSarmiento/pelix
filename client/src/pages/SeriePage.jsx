import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import CardDetails from '../components/CardDetails';
export default function SeriesPage() {
    const [series, setSeries] = useState([]);
    useEffect(() => {
        fetch('/api/series')
            .then((res) => res.json())
            .then((series) => setSeries(series));
    }, [])
    return (
        <div className="mx-5">
            <h1 className="h1 text-center mb-10">Series</h1>
            <section className="msgrid">
                {series.map((serie) => (
                    <div key={serie._id}>
                        <CardDetails id={serie._id} title={serie.title} thumblr={serie.thumblr} />
                        <Link to={`/serie/${serie._id}`}>
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
