import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{name,id,description,img,price}= service
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Card.Text>
      {price}
    </Card.Text>
    <Link to={`/details/${id}`}>
    <Button className="btn btn-success" variant="primary">Details</Button>
    </Link>
  </Card.Body>
</Card>
    );
};

export default Service;