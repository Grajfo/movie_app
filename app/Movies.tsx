import Link from "next/link"
import Image from "next/image"

export default function Movies({title, id, poster_path, release_date} : {title: string, id: number, poster_path: string, release_date: string}) {
    const imagePath :string = "https://image.tmdb.org/t/p/w500" + poster_path
    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
                <Image src={imagePath} alt="" width={500} height={500}/>
            </Link>
        </div>
    )
}