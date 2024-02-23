import React from 'react'
import Card from 'react-bootstrap/Card';

const player = (props) => {
  console.log("player props: ",props)
  return (
    function BasicExample() {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.players.image} />
            <Card.Body>
              <Card.Title>{props.players.nom}</Card.Title>
              <Card.Text>
        <h4> age: {props.players.age}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      }
  )
}

export default player;
