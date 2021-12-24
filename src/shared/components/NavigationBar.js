import React, { useEffect, useState } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Destinations } from '../../pages/Destinations'


export const NavigationBar = (props) => {
  // isModalOpen prevents the sign in modal being removed from the dom before the
  // sign-in modal is closed by the user
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="/home">MOLDOVA TRAVEL GUIDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end pl-2 mr-5">
          <Nav >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/destinations">Destinations</Nav.Link>
            <Nav.Link href="/foods">Food</Nav.Link>
            <Nav.Link href="/traditions">Traditions</Nav.Link>
            {/* <NavDropdown id="basic-nav-dropdown" title="Sign Up/Log In" className="mr-3" >
              {auth !== null && (
                <>
                  <NavDropdown.Item href={`/profile/${auth?.profileId}`}>
                    <Button className="btn btn-dark">
                      My Profile &nbsp;
                    </Button>
                    <NavDropdown.Divider />
                  </NavDropdown.Item>
                </>
              )}
              {auth === null && (
                <>
              <NavDropdown.Item href="" onClick={handleShow2}>
                <Button className="btn btn-dark" onClick={handleShow}>
                  Sign Up &nbsp;<FontAwesomeIcon icon="user"/>
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item href="" onClick={handleShow}>
                <Button className="btn btn-dark" onClick={handleShow}>
                  Log In &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="sign-in-alt"/>
                </Button>
              </NavDropdown.Item>
                </>
              )}
              {auth !== null && (
                <>
                  <NavDropdown.Item>
                      <SignOutComponent />
                  </NavDropdown.Item>
                </>
              )}
               </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Modal id="signInModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          < SignInForm />
        </Modal.Body>
      </Modal>

      <Modal id="signUpModal" show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm/>
        </Modal.Body>
      </Modal> */}

    </>
  )
}
