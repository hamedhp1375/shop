import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

function Home_hero(props) {
  return (
    
          <Col className={`col-6 ${props.positon}`}>
            <h3 className={`${props.positon_h4} text-white`}>{props.name}</h3>
            <button className={`${props.positon_button} btn btn-secondary btn-lg`}>
             {props.button_name}
            </button>
          </Col>
      
  )
}

export default Home_hero




