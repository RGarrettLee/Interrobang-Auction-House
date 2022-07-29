import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SwiperParalax } from '../../elements/'
const ItemDetails = () => {
  return (

    <div>
      <div><SwiperParalax /></div>
      <div className='d-flex flex-row'>
        <div className='p-2'>One</div>
        <div className='p-2'>Two</div>
        <div className='p-2'><Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card></div>
      </div>
    </div>











  )
}

export default ItemDetails