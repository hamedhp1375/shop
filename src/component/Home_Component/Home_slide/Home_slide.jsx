import React from 'react'


import "./Home_slide.css"

import { Col, Container, Row } from "react-bootstrap";
function Home_slide() {
  return (
    <Container className="pt-3">
    <Row>
      {["slide_1", "slide_2", "slide_3", "slide_4"].map((item, index) => (
        <Col className={`col-3 ${item}`}>
          <h4 className="text-center">
            {index === 0
              ? "new here? get your ferst time discount"
              : index === 1
              ? "downliad our app for exclusive discounts and the latest drops"
              : index === 2
              ? "get unlimited next day delivery for a whole year with M&H premier for just 9.95$!"
              : "easy and fast returns"}
          </h4>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Home_slide