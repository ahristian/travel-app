import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'


export const ProfileCard = (props) => {
  const {save} = props

  return (
    <>
      <Nav.Link href={`/destinations/${save?.destinationId}`}>
        <Card className="destinationCardElement mx-2 my-2"  >
          <img src={save.destinationImage}  alt={save.destinationTitle}/>
          <Card.Body>
            <Card.Title className="destination-title">
              {save.destinationTitle}
            </Card.Title>
          </Card.Body>
        </Card>
      </Nav.Link>
    </>
  )
}
