import { React } from 'react'
import Movie from './Movie';

function MoviesList({ moviesData }) {

    return (
        <>
            {
                moviesData.map(element => (
                    <div key={element.id}>
                        <Movie card={element} />
                    </div>
                ))
            }
        </>
    )
}

export default MoviesList
