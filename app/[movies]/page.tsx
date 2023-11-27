
import Image from "next/image"

type Repo = {
    id: number
    title: string
    poster_path: string
    release_date: string
    overview: string
    backdrop_path: string
    runtime: number
    status: string
  }

  export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const repo = await data.json()
    return repo.results.map((movie : Repo) => ({
        movies: movie.id.toString()
    }))
}


  const imagePath :string = "https://image.tmdb.org/t/p/w500"

export default async function  MovieDetails({params : {movies, repo}} : {params : {movies : string,  repo : Repo}}) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movies}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, )
    repo = await res.json()
    return (
        <div>
            <h1 className="text-2xl">{repo.title}</h1>
            <p className="text-lg">{repo.release_date}</p>
            <h2>Runtime: {repo.runtime} mintes</h2>
            <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">
                {repo.status}
                </h2>
            <Image className="my-12 w-full" 
            src={imagePath + repo.backdrop_path} 
            alt={repo.backdrop_path} 
            width={1000} 
            height={1000}
            priority/>
            <p>{repo.overview}</p>
        </div>
    )
}