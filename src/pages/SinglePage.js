import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllDestinations } from '../store/destination'
import { fetchDestinationPhotosByDestinationId } from '../store/destinationPhoto'
import { DestinationElement } from '../ui/DestinationElement'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SinglePage = ({match}) => {
  const dispatch = useDispatch()
  const effects = () => {
    dispatch(fetchDestinationPhotosByDestinationId(match.params.destinationId))
    dispatch(fetchAllDestinations(match.params.destinationId))
  };

  const inputs = [match.params.destinationId];
  useEffect(effects, inputs);
  const destinationPhotos = useSelector(state => {
    return state.destinationPhotos ? state.destinationPhotos : []
  });

  const destination = useSelector(state => {
    return state.destinations
      ? state.destinations.find(destination => destination.destinationId === match.params.destinationId)
      : []
  });
console.log(destinationPhotos)
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center my-5">
            {destination && (<h1>{destination.destinationTitle}</h1>)}
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={6}>
            {destinationPhotos.map(destinationPhoto =><DestinationElement key={destinationPhoto.destinationPhotoId}
                                                                          destinationPhoto={destinationPhoto}/>)}
          </Col>
          <Col xs={8} md={6}>
            {destination && (<p className="singlePageText">{destination.destinationDescription}</p>)}
            {destination && (<p className="singlePageLocation my-3">Location: {destination.destinationLocation}</p>)}
            {destination && (<p className="singlePageLocation mt-2">Contact: {destination.destinationContact}</p>)}
          </Col>
        </Row>
      </Container>
    </>
  )
}

