import { Card, CardGroup } from "react-bootstrap";
import { React, useEffect, useState } from 'react'

function FavList() {

    useEffect(() => {
        fetchData()
    })

    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovie`)
            const data = await response.json();
            setMovies(data);
            console.log(data)
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
            <h1>This is my favorite list</h1>
            {console.log(movies)}
            <main>
                <CardGroup style={{ display: "flex" }}>
                    {
                        (movies ?? []).map(element => {
                            return (
                                <Card key={element.id}>
                                    <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${element.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{element.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </CardGroup>
            </main>
        </>
    )
}

export default FavList;