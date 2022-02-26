import './css/FavList.css';
import { Card, CardGroup } from "react-bootstrap";
import { React, useEffect, useState } from 'react'

function FavList() {

  

    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovie`)
            const data = await response.json();
            setMovies(data);
            // console.log(data)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(fetchData)
    // console.log(movies);

    return (
        <div className="favlist">
            <h1>This is my favorite list</h1>
            {/* {console.log(movies)} */}
            <main>
                <CardGroup style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"  }}>
                    {
                        (movies ?? []).map(element => {
                            return (
                               
                                <Card key={element.id}>
                                    <Card.Img variant="top" src={element.poster_path} />
                                    <Card.Body className="favlist">
                                        <Card.Title>{element.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </CardGroup>
            </main>
        </div>
    )

    useEffect()
}

export default FavList;