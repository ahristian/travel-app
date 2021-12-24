import React, { useState } from "react"
import "./style.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import soroca from '../shared/images/soroca.jpg'
import grapes from '../shared/images/grapes.jpg'
import background from '../shared/images/background.jpg'
import tighina from '../shared/images/bender2.jpg'
import orheiVechi from '../shared/images/orheiVechi.png'
import saharna from '../shared/images/saharna4.jpg'
import someWhereMoldova from '../shared/images/somewhereMoldova.jpg'
import Nav from 'react-bootstrap/Nav'
import { fetchAllDestinations } from '../store/destination'
import { useDispatch, useSelector } from 'react-redux'
import { MapFeature } from '../ui/MapFeature'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import chisinau from '../shared/images/chisinau.jpg'
import ReactMapboxGl from 'react-mapbox-gl'

function randomScreen () {
  let images = [soroca, grapes, background, tighina, orheiVechi, saharna, someWhereMoldova];
  setInterval(function () {
    document.getElementsByClassName('bg-img')[0].setAttribute('style', 'background-image: url("' + images[0] + '")');
    images.splice(images.length, 0, images[0]);
    images.splice(0, 1);
  }, 5000)
}

export const Home = () => {

  const dispatch = useDispatch()
  const sideEffects = () => {
    dispatch(fetchAllDestinations())
  }
  React.useEffect(sideEffects, [])
  const destinations = useSelector(state => state.destinations ? state.destinations : []);
  const [points, setPoints] = useState([
    {lng: 28.907089, lat: 47.3}

  ]);


  const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiZ2Vvcmdla2VwaGFydCIsImEiOiJjanQ4cmdmYjkwYnZnNDNwNDF4NXFiMTJmIn0.MwDDiyszR0QFmMYMNvzi1Q"
  });


  return (
    <>
      <header onLoad={randomScreen()}>
        <Container fluid className="bg-img" style={{backgroundImage: "url(" + background + ")"}}>
          <Row className="py-2">
            <Col md={{span: 8, offset: 4}} sm={8}>
              <Nav.Link href="#idMoldova">
                <Button variant="outline-transparent text-cover text-center">Where is Moldova?</Button>
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 8, offset: 3}} sm={8}>
              <Button href="/destinations" variant="outline-transparent text-cover">What can I visit in Moldova?</Button>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 9, offset: 1}} sm={8}>
              <Nav.Link href="/traditions">
                <Button variant="outline-transparent text-cover">What traditions are in Moldova?</Button>
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 8, offset: 4}} sm={8}>
              <Nav.Link href="/foods">
                <Button variant="outline-transparent text-cover">What are some traditional food in
                  Moldova?</Button>
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </header>

      <section id="idMoldova" className="main-map">
        <Container>
          <Row>
            <Col>
              <h2>Moldova is in South East part of Europe</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={6} md={12} className="map">
              <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                  height: "70vh"
                }}
                center={[23.3699, 47.4116]}
                zoom={[4]}
              >
                {points.map(point => (
                  <MapFeature point={point} key={point} />
                ))};
                {/*{murals.map(mural => (
                  <MapFeature key={mural.muralId} mural={mural}/>
                )
              )};*/}
              </Map>
            </Col>
            <Col lg={6} md={12}>
              <p>Moldova, officially the Republic of Moldova is a country in South Eastern Europe, bordered by
                Romania to the west and Ukraine to the north, east, and south. The capital and the main city is
                Chișinău.
              </p>
              <p>The Republic of Moldova has a rich cultural heritage which may be of great interest to tourists. The
                remains of medieval fortresses like Tighina and Soroca, archaeological complexes such as Orheuil Vechi,
                cave monasteries, nobles’ mansions and peasant houses offer a diversity of visitor attractions.
              </p>
              <p>The Moldovan border looks like a grape bunch, and somehow this defines the culture and traditions of
                this nation. The land is one the best in the world for growing grapes and this makes Moldova a very
                special country in terms of wines. The wine has long tradition here there are many underground
                limestone tunnels. The tunnels are lined wall-to-wall with bottles from 60km (37miles) to 120km
                (75miles) long tunnels, dating from the 15th century wine.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-mainPicture">
        <Jumbotron className="imageBackgroundOrhei" fluid>
          <Container>
            <p>
              Moldova has plenty beautiful nature and architecture. The hospitality tradition stays hard in Moldovan`s
              peoples heart and they are happy to assist you during your visit.Travel to any corner of Moldova and you
              will be welcomed by warm and friendly people with food and wine as welcome.
            </p>
          </Container>
        </Jumbotron>
      </section>
      <section className="section-mainWhen">
        <Container id="thingsToKnow">
          <Row>
            <Col lg={7} md={12}>
              <h2>Things to know before visiting Moldova</h2>
              <p>
                As other post-Soviet country it is recommended as tourist to be aware and to avoid them. The
                biggest risk to travelers remains petty theft, such as pick pocketing. This generally occurs in the
                usual high-risk areas like crowded city streets in Chisinau and on buses and trains, especially
                international ones. Travelers should only use official taxis "yellow ones" so you don't get ripped
                off.
                Be on the lookout for overcharging by taxi drivers and restaurant or bar staff. To avoid this issue,
                agree on taxi fare before getting in the car and ask to see menu prices in writing before ordering.

              </p>
            </Col>
            <Col lg={5}>
              <Image className="imageHomeBottom" src={chisinau} rounded/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
