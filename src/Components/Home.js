import './css/Home.css';
import { React, useEffect, useState } from 'react'
import MoviesList from './MoviesList'
// import { Row, Container } from "react-bootstrap";

function Home() {

    useEffect(() => {
        fetchData()
    }, [])

    const [movies, setMovies] = useState();

    const fetchData = async () => {
        try {
            // const response = await fetch(`https://movies-emad.herokuapp.com/trending`)
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=abb2fd3d9eb8c561dbf599a20e3ca490`)
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.log("error", error);
        }
    }

    const updateCaption = (data, id) => {
        let updatedMovies = movies.map(element => {
            if (element.id === id) {
                element.caption = data.userCaption;
                return element;
            }
            else return element
        })
        setMovies(updatedMovies);
    }

    return (
        <>
            {/* <MoviesList moviesData={movies} /> */}
            <div className="cards">
                {movies && (   // 'data' -> true , 'data' && (do somthing) -> somthin done ,,, '' -> false , '' && (do somthing) -> nothing done
                    <MoviesList moviesData={movies} updateCaption={updateCaption} />
                )}
            </div>
        </>
    )
}

export default Home


