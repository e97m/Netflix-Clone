import { React, useRef } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

function ModaleMovie(props) {

    const commentRef = useRef();
    function handleCaption(e) {
        e.preventDefault()
        const userCaption = commentRef.current.value;
        const newData = { ...props.movie, userCaption };
        props.updateCaption(newData, props.movie.id);
    }



    return (
        <>
            <Modal show={props.show} onHide={() => { props.handleClose() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width='100%'  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.movie.poster_path}`} alt={props.movie.title} />
                    <p>{props.movie.topText ? props.movie.topText : "No Text Provided"}</p>
                    <p>{props.movie.caption}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder={props.movie.caption ? props.movie.caption : "Add Your Caption Here..."} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}  >
                        Add a Caption
                    </Button>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModaleMovie