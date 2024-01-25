

import React from 'react'

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Player({data}) {
   const {name,team}=data
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>name:{name}</Card.Title>
        <Card.Text>
          team:{team} <br/>
          nationality:{data.nationality} <br/>
          age:{data.age} <br/>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}
Player.defaultProps = {
    data:{name:"Test", age:18,team:"tunisia"}
}

export default Player;
