import React from 'react'
import Popup from "reactjs-popup"
import Card from 'react-bootstrap/Card'


export const TraditionCard = (props) => {
const {tradition} = props

  return (
    <>
      <Card className="traditionCardElement mx-3 my-3" >
        <Popup
          trigger={<input type="image" src={tradition.traditionImageUrl} alt={tradition.traditionTitle}/>}
          modal closeOnDocumentClick>
            <div className="modal-pop">
          <img style={{height: "34vw"}} src={tradition.traditionImageUrl} alt={tradition.traditionTitle}/>
            </div>
        </Popup>
        <Card.Body>
          <Card.Title className="text-center">
            {tradition.traditionTitle}
          </Card.Title>
          <Card.Text>
           {tradition.traditionContent}
          </Card.Text>
        </Card.Body>
      </Card>

    </>
  )
}
