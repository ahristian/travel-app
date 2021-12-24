import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileById } from '../store/profile'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import { fetchActivation, getActivation } from '../store/activation'
import { fetchAllFoods } from '../store/food'
import { httpConfig } from '../utils/httpConfig'
import { getAllDestinations } from '../store/destination'
/*
import Button from 'react-bootstrap/Button'
import { SignInForm } from '../shared/components/sign-in/SignInForm'

export const ConfirmEmail = () => {
  const dispatch = useDispatch()
  const sideEffects = () =>  {
    dispatch(fetchActivation())
  }
  React.useEffect(sideEffects, [])
  const profileActivationToken = useSelector(state => state.profileActivationToken ? state.profileActivationToken : []);

  console.log(profileActivationToken)
  /!*const clickActivate = () => {
    httpConfig.get("/apis/sign-up/activation/:activation")
      .then(reply => {
          let {message, type} = reply
          document.getElementById("target").innerHTML +=
            `<h2>Account activation was successful, please Log In</h2>`
        }
      )

  }*!/
  return (
    <>
      <section className="profileDestinationCard mx-2">
        <Container className="my-2">
          <Row md={3} className="justify-content-center py-5">
           {/!* <Button onClick={clickActivate()} varinat="outline-light">
              <div id="target">
              </div>
            </Button>*!/}
          </Row>
          <Row md={3} className="justify-content-center mb-5">
            < SignInForm />

          </Row>
        </Container>
      </section>
    </>
  )
};*/
