import { React } from 'react'
import Movie from './Movie';


function MoviesList({ moviesData, updateCaption }) {

    // console.log(moviesData)

    return (
        <>
            {
                moviesData.map(element => (
                    <div key={element.id}>
                        <Movie card={element} updateCaption={updateCaption} />
                    </div>
                ))
            }
        </>
    )
}

export default MoviesList
