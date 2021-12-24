import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const FooterElement = () => {
  return (
    <>
      <footer>
        <Container className="footer-fluid" fluid>
          <Container>
            <Row>
                <p className="footer-p1">The website was created by:
                 <a href="https://www.devandrei.com/">Andrei Hristian</a></p>
                  <a href="https://www.linkedin.com/in/andrei-hristian-a673551b3/" target="_blank"
                     rel="noopener noreferrer">
                    <FontAwesomeIcon className="fa-2x" id="faLinkedin" icon={faLinkedin}/>
                  </a>
                  <a href="https://github.com/ahristian?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="fa-2x" id="faGithub" icon={faGithub}/>
                  </a>
            </Row>
          </Container>
        </Container>
      </footer>

    </>
  )
}