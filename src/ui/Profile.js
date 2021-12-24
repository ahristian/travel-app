import React, { useEffect } from "react"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchProfileById } from '../store/profile'
import { fetchSaveByProfileId } from '../store/saved'
import { ProfileCard } from './ProfileCard'

export const Profile = ({match}) => {
  const dispatch = useDispatch()
  const sideEffects = () => {
    dispatch(fetchProfileById(match.params.profileId))
    dispatch(fetchSaveByProfileId(match.params.profileId))
  }

  const inputs = [match.params.destinationId];
  useEffect(sideEffects, inputs);

  const profile = useSelector(state => state.profile ? state.profile : []);
  const save = useSelector( state => state.save ? state.save : []);

  return (
    <>
      <section className="profile">
        <Container>
          <Row>
            <Col>
              {profile && (<h1 className="display-4 text-center">Hello, {profile[0]?.profileUserName}</h1>)}
            </Col>
          </Row>
          <Row>
            <Col>
              {profile && (<p><b>Your email:</b> <em>{profile[0]?.profileEmail}</em></p>)}
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="display-5 text-center">Your saved destinations in Moldova are:</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="profileDestinationCard mx-2">
        <Container>
          <Row md={2} className="justify-content-center">
            {save.map(save => <ProfileCard save={save} key={save.saveDestinationId}/>)}
          </Row>
        </Container>
      </section>
    </>
  )
};
