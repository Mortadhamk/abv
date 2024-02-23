import React from 'react'
import Card from 'react-bootstrap/Card';

const Player = (props) => {
  console.log("player props: ",props)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.players.image} />
      <Card.Body>
        <Card.Title>{props.players.nom}</Card.Title>
        <Card.Text>
           {props.players.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;
