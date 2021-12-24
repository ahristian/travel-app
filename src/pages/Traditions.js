import React from "react"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTraditions } from '../store/tradition'
import { TraditionCard } from '../ui/TraditionCard'

export const Traditions = () => {

    const dispatch = useDispatch()
    const sideEffects = () =>  {
      dispatch(fetchAllTraditions())
    }
    React.useEffect(sideEffects, [])
    const traditions = useSelector(state => state.traditions ? state.traditions : []);

    return (
    <>
      <section className="tradition">
        <Container>
          <Row>
            <Col>
              <h1>The Traditions in Moldova</h1>
              <p>Moldavian holidays and customs are marked by the values inherited from our ancestors, which consolidate
                the Moldavian nation and contribute to its self-identity. They include both social and religious
                orthodox festivals like Easter, Christmas, New Year, Women`s Day and Martisor.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="traditionCard">
        <Container>
          <Row lg={8} className="justify-content-md-center">
            {traditions.map(tradition => <TraditionCard tradition={tradition} key={tradition.traditionId}/>)}
          </Row>
        </Container>
      </section>
    </>
  )
};
