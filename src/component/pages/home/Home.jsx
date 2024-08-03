import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../home/Home.css"
import Img1 from "../../../Imge/download.png"
function Home() {
  return (
    <>
    <Container>
      <Row className='d-flex justify-content-center text-center'>
      <h1>Welcome to my website</h1>
      </Row>
      
    </Container>
    <Container>
      <Row>
        <Col className='col-6 hero_men'>
        <h3 className='mark_left text-white'>this i</h3>
         <button className='position_men btn btn-secondary btn-lg'>men</button>
        </Col>

        <Col className='col-6 hero_women'>
        <h3 className='mark_right text-white'>s M&H</h3>
        <button className='position_women btn btn-secondary btn-lg'>women</button>
        </Col>
      </Row>
    </Container>
    <Container className='pt-3'>
      <Row>
        <Col className='col-3 slide_1'>
        <h4 className='text-center'>new here? get your ferst time discount</h4>
        </Col>
        <Col className='col-3 slide_2'>
        <h4 className='text-center'>downliad our app for exclusive</h4>
        <h4 className='text-center'>discounts and the latest drops</h4>
        </Col>
        <Col className='col-3 slide_3'>
        <h4>get unlimited next day delivery for a whole year with M&h preimer for just 9.95$!</h4>
        </Col>
        <Col className='col-3 slide_4'>
        <h4 className='text-center'>easy and fast returns</h4>
        </Col>
      </Row>
    </Container>
      <h3 className='text-center p-3'>the biggest lables </h3>

       <Container>
        <Row className='position_mark'>
          <Col className='col-3 position_1_mark d-flex justify-content-center'>
          <img src={Img1} alt="" className='icon1' />
          </Col>
          <Col className='col-3 position_2_mark'>
          <img src={Img1} alt="" className='icon2' />
          </Col>
          <Col className='col-3 position_3_mark'>
          <img src={Img1} alt="" className='icon3' />
          </Col>
          <Col className='col-3 position_4_mark'>
          <img src={Img1} alt="" className='icon4' />
          </Col>
        </Row>
       </Container>
       <div className='mt-5 mb-5 d-flex justify-content-center '><button className='btn-lgbtn btn-outline-dark'>shop woman brands</button></div>
       <Container>
        <Row className='position_mark pb-5'>
          <Col className='col-3 position_5_mark d-flex justify-content-center'>
          <img src={Img1} alt="" className='icon5' />
          </Col>
          <Col className='col-3 position_6_mark'>
          <img src={Img1} alt="" className='icon6' />
          </Col>
          <Col className='col-3 position_7_mark'>
          <img src={Img1} alt="" className='icon7' />
          </Col>
          <Col className='col-3 position_8_mark'>
          <img src={Img1} alt="" className='icon8' />
          </Col>
        </Row>
       </Container>
       <div className='mt-5 mb-5 d-flex justify-content-center '>
        <button className='btn-lgbtn btn-outline-dark'>shop man brands</button>
        </div>
        <h3 className='text-center p-3'>woman categori </h3>
        <Row>
        <Col className='col-3'>
        <ul className='list-group'>
          <li className='list-group-item'>woman bags</li>
          <li className='list-group-item'>woman gift</li>
          <li className='list-group-item'>skirts</li>
          <li className='list-group-item'>tops</li>
        </ul>
        </Col>
        <Col className='col-3'>
        <ul className='list-group'>
          <li className='list-group-item'>blouses</li>
          <li className='list-group-item'>jeans</li>
          <li className='list-group-item'>shirts</li>
          <li className='list-group-item'>shoes</li>
        </ul></Col>
        <Col className='col-3'>
        <ul className='list-group'>
          <li className='list-group-item'>woman bags</li>
          <li className='list-group-item'>woman gift</li>
          <li className='list-group-item'>skirts</li>
          <li className='list-group-item'>tops</li>
        </ul>
        </Col>
        <Col className='col-3'>
        <ul className='list-group'>
          <li className='list-group-item'>blouses</li>
          <li className='list-group-item'>jeans</li>
          <li className='list-group-item'>shirts</li>
          <li className='list-group-item'>shoes</li>
        </ul></Col>

        </Row>

        <h3 className='text-center p-3'>man categori </h3>
        
        <Row>
        <Col className='col-3'>
        <ul className='list-group'>
          <li className='list-group-item'>man bags</li>
          <li className='list-group-item'>man gift</li>
          <li className='list-group-item'>belts</li>
          <li className='list-group-item'>tops</li>
        </ul>
        </Col>
        <Col className='col-3'>
        <ul className='list-group'>
          <li className='list-group-item'>blouses</li>
          <li className='list-group-item'>jeans</li>
          <li className='list-group-item'>shirts</li>
          <li className='list-group-item'>shoes</li>
        </ul></Col>
        <Col className='col-3'>
        <ul className='list-group'>
          <li className='list-group-item'>man bags</li>
          <li className='list-group-item'>man gift</li>
          <li className='list-group-item'>belts</li>
          <li className='list-group-item'>t-shirts</li>
        </ul>
        </Col>
        <Col className='col-3'>
        <ul className='list-group'>
          <li className='list-group-item'>blouses</li>
          <li className='list-group-item'>jeans</li>
          <li className='list-group-item'>shirts</li>
          <li className='list-group-item'>shoes</li>
        </ul></Col>

        </Row>
    
    </>
  )
}

export default Home