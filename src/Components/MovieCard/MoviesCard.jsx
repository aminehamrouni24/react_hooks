import React from 'react'
import {Card , Button} from "react-bootstrap"
import './MoviesCard.css'

function MoviesCard({ movie }) {
    return (
        
        <div >
        <Card  className="MovCard" style={{ width: '20rem', height :'45rem'  }}>
        <Card.Img variant="top"   src={movie.posterUrl} height = "400" />
        <Card.Body>
        <Card.Title style={{color:"gold"}}>{movie.title}</Card.Title>
        <Card.Text> {movie.description}
        </Card.Text>
        <h2>{"⚝".repeat(movie.rating)}</h2>
        </Card.Body>
        <Card.Footer>        
        <Button variant="warning">download</Button>
        </Card.Footer>
        </Card>
        </div>
        
    )
}

export default MoviesCard
