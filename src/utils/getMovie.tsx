import { Movie, movies } from "./movies";


export function getMovie(id: string | undefined) {
  return movies.find(movie => movie.id === id);
}

export async function fetchMovie(id: string, setMovie?: (movie: Movie) => void) {
  const movie = await new Promise<Movie | undefined>((resolve, reject) => {
    setTimeout(() => {
      resolve(movies.find(movie => movie.id === id))
    }, 2000);
  })
  if (movie && setMovie) {
    setMovie(movie);
  } else {
    return movie;
  }
}