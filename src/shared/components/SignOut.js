import React from 'react'
import {useDispatch} from 'react-redux'
import { httpConfig } from '../../utils/httpConfig'
import { getAuth } from '../../store/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SignOutComponent = () => {
  const dispatch = useDispatch()
  const signOut = () => {
    httpConfig.get('/apis/sign-out/').then(reply => {

      if (reply.status === 200) {
        window.localStorage.removeItem('authorization')
        dispatch(getAuth(null))
        window.location = '/'
      }
    })
  }

  return(
    <>
        <button className="btn btn-dark" onClick={signOut}>
          Log Out&nbsp;&nbsp;<FontAwesomeIcon icon="sign-out-alt" />
        </button>
    </>
  )
}