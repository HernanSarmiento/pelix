import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Serie() {
    const [serie, setSerie] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch("/api/get-serie/" + params.id)
            .then(res => res.json())
            .then(data => setSerie(data));
    }, [])
    return (
        <div className="details" key={serie._id}>
            <section>
                <h1 className="text-3xl py-3">{serie.title}</h1>
                <img src={serie.thumblr} alt={serie.title} className="rounded-sm w-2/6 h-2/6" />
            </section>
            <section className="">
                <h2 className="text-lg">{serie.description}</h2>
                <p className="pt-3 inline-block">{serie.genres}</p>
                <p>creators: {serie.director} </p>
                <p>actors: {serie.actors}</p>
            </section>
        </div>
    )
}
