import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { getAllDestinations } from '../store/destination'
import {httpConfig} from "../utils/httpConfig"
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

export const DestinationCard = ({destination}) => {
  const dispatch = useDispatch()
  const [colorState, setColorState] = useState('Save');
  const [color, setColor] = useState("primary");


  const clickLike = () => {
    httpConfig.post("/apis/save/", {saveDestinationId: destination.destinationId})
      .then(reply => {
          let {message, type} = reply
          if(reply.status === 200) {
            dispatch(getAllDestinations())
            setColorState('Saved')
            setColor("red")
          }
        let info = reply.message
        if (info === "Please, Sign up or Log In in order to save your destinations.")
        alert(` ${info}`);
          }
      )

  }

  return (
    <>

      <Card className="destinationCardElement mx-3 my-2">
        <Link to={`/destinations/${destination?.destinationId}`}>
          <img src={destination.destinationImage}  alt={destination.destinationTitle}/>
        </Link>
        <Card.Body>
          <Link to={`/destinations/${destination?.destinationId}`}>
        <Card.Title className="destination-title">
            {destination.destinationTitle}
         </Card.Title>
          </Link>
        </Card.Body>
          <Button onClick={clickLike} style={{backgroundColor: color}} >{colorState} </Button>

      </Card>

    </>
  )
}
