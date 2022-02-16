import { React, useState } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap';
import ModaleMovie from './ModaleMovie';
import './css/Movie.css'

function Movie({ card ,updateCaption }) {

    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    // console.log(card);

    return (
        <div key={card.id}>
            <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
                {
                    <div key={card.id} className="movieCard">
                        <Card key={card.id} >
                            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${card.poster_path}`}/>
                            <Card.Body className="cardBody">
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.overview }
                                </Card.Text>
                                <Card.Text>
                                    {card.caption ? card.caption : "No Caption Added"}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { setMovie(card); setShowModal(true) }} >Show Movie</Button>
                            </Card.Body>
                        </Card>
                    </div>
                }
            </CardGroup>

            {showModal && <ModaleMovie show={showModal} movie={movie} handleClose={() => { setShowModal(false) }} updateCaption={updateCaption} />}
        </div>
    )
}

export default Movie