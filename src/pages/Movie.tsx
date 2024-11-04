import { useParams } from "react-router-dom";
import { getMovie, fetchMovie } from "../utils/getMovie";
import { useEffect, useState } from "react";
import type { Movie } from "../utils/movies";


function Movie() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const params = useParams();
  const id = params.id!;

  useEffect(() => {
    fetchMovie(id, setMovie);
  }, [id])

  return (
    <>
      {movie ? <p>Je suis la page de {movie?.title}</p> : <p>loading</p>}
    </>
  )
}

export default Movie;