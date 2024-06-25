export default function CardDetails({ id, title, description, director, actors, genres, thumblr }) {
    return (
      <div className="my-3">
        <h1 className="pb-2">{title}</h1>
        <img src={thumblr} alt={title} className="img rounded-sm" />
        <h2 className="text-xl">{description}</h2>
        <p className="text-lg">{director}</p>
        <p>{actors}</p>
        <p>{genres}</p>
      </div>
    )
  }
  