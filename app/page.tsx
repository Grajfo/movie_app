
import Movies from './Movies' 

type Repo = {
  id: number
  title: string
  poster_path: string
  release_date: string
}
 
export default async function Home() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
  const repo = await res.json()
  console.log(repo.results)

  return ( 
  <main>
  <h1>Movies</h1>
    <div className='grid gap-16 grid-cols-fluid'>
    {repo.results.map((movie: Repo) => 
    (
    <Movies
    key={movie.id}
    id={movie.id}
    title={movie.title}
    poster_path={movie.poster_path}
    release_date={movie.release_date}
    />
    ))}
    </div>
    </main>
  )
};

