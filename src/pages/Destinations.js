import React from "react"
import "./style.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchAllDestinations } from '../store/destination'
import { DestinationCard } from '../ui/DestinationCard'
import { useDispatch, useSelector } from 'react-redux'

export const Destinations = () => {

  const dispatch = useDispatch()
  const sideEffects = () => {
    dispatch(fetchAllDestinations())
  }
  React.useEffect(sideEffects, [])
  const destinations = useSelector(state => state.destinations ? state.destinations : []);

  return (
    <>
      <section className="destination">
        <Container>
          <Row>
            <Col>
              <h1>Things Not to Miss in Moldova</h1>
              <p>The Republic of Moldova has a rich cultural heritage which may be of great interest to tourists. 140
                cultural
                heritage sites may be included in the tourist circuit. The earliest visible remains of the built
                heritage are
                Geto-Dacian sites and Roman fortifications. The remains of medieval fortresses, archaeological complexes
                such as
                Orheiul Vechi.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="destination" className="destinationCard mx-2">
        <Container fluid>
          <Row lg={3} md={2} className="justify-content-center">
            {destinations.map(destination => <DestinationCard destination={destination}
                                                              key={destination.destinationId}/>)}
          </Row>
        </Container>
      </section>
    </>
  )
}
