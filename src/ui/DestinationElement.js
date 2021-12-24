import React from 'react'
import Popup from "reactjs-popup"
import { Button } from 'react-bootstrap'

export const DestinationElement = (props) => {
  const {destinationPhoto} = props
  return (
    <>
      <div className="destinationEach mx-1 my-3">
        <Popup
          trigger={
            <Button variant="outline-light">
              <img className="destinationEachImage" src={destinationPhoto.destinationPhotoUrl}
                   alt={destinationPhoto.destinationTitle}/>
            </Button>}
          modal closeOnDocumentClick>
          <img className="image d-block w-100" src={destinationPhoto.destinationPhotoUrl}
               alt={destinationPhoto.destinationTitle}/>
        </Popup>
      </div>
    </>
  )
}
