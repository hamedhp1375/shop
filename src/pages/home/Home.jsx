import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../home/Home.css";
import Img1 from "../../Imge/download.png";
import Li_custom from "../../component/Li-custom/Li_custom";
import { manProducts, womanProducts, Array_four } from "../../data/Data";
import Home_slide from "../../component/Home_Component/Home_slide/Home_slide";
import Home_hero from "../../component/Home_Component/Home_hero/Home_hero";
function Home() {
  let woman_category = (
    <Col className="col-3">
      <ul>
        {womanProducts.map((item) => {
          return (
            <Li_custom
              name={item.name}
              classname="list-group-item"
              classLink="text-decoration-none text text-dark"
            />
          );
        })}
      </ul>
    </Col>
  );
  let man_category = (
    <Col className="col-3">
      <ul>
        {manProducts.map((item) => {
          return (
            <Li_custom
              name={item.name}
              classname="list-group-item"
              classLink="text-decoration-none text text-dark"
            />
          );
        })}
      </ul>
    </Col>
  );
  // درمورد این کد لطفا توضیح داده شود
  const woman_category_item = (
    <>
      {Array_four.map((item) => {
        return <>{woman_category}</>;
      })}
    </>
  );
  const man_category_item = (
    <>
      {[...Array(4)].map((item) => {
        return <>{man_category}</>;
      })}
    </>
  );

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center text-center">
          <h1>Welcome to my website</h1>
        </Row>
      </Container>
      <Container>
        <Row>
      {[...Array(2)].map((item,index)=>(
    <Home_hero positon={index===0? "hero_men":
      "hero_women"}
      name={index===0?"this i":
        "s M&H"
      }
      button_name={index===0?"men":
        "woman"
      }
      positon_button={index==0?"position_men":
        "position_women"
      }
      positon_h4={index===0?"mark_left":
        "mark_right"
      }
      />

   ))}
   </Row>
</Container>
          <Home_slide/>
          
      <h3 className="text-center p-3">the biggest lables </h3>
      {/* ye component dorst kon */}
      <Container>
        <Row className="position_mark">
         {["position_1_mark","position_2_mark","position_3_mark","position_4_mark"].map((item,index)=>(
        <Col className={`col-3 d-flex justify-content-center ${item} `}>
          <img src={Img1} alt="" className={index===0?"icon1":
           index===1? "icon2":
           index===2?"icon3":
           "icon4"}
           
           
           />
        </Col>


         ))}
        </Row>
      </Container>
      <div className="mt-5 mb-5 d-flex justify-content-center ">
        <button className="btn-lgbtn btn-outline-dark">
          shop woman brands
        </button>
      </div>
      <Container>
      <Container>
        <Row className="position_mark">
         {["position_5_mark","position_6_mark","position_7_mark","position_8_mark"].map((item,index)=>(
        <Col className={`col-3 d-flex justify-content-center ${item} `}>
          <img src={Img1} alt="" className={index===0?"icon5":
           index===1? "icon6":
           index===2?"icon7":
           "icon8"
            }
            
          
          />
        </Col>


         ))}
        </Row>
      </Container>
      </Container>
      <div className="mt-5 mb-5 d-flex justify-content-center ">
        <button className="btn-lgbtn btn-outline-dark">shop man brands</button>
      </div>
      <h3 className="text-center p-3">woman categori </h3>
      <Container>
        <Row>
          {woman_category_item}
          <h3 className="text-center p-3">man categori </h3>
          {man_category_item}
        </Row>
      </Container>
    </>
  );
}

export default Home;

// <Container className='pt-3'>
// <Row>
//   {['slide_1', 'slide_2', 'slide_3', 'slide_4'].map((slideClass, index) => (
//     <Col key={index} className={`col-3 ${slideClass}`}>
//       <h4 className='text-center'>{index === 0 ? 'new here? get your ferst time discount' :
//         index === 1 ? 'downliad our app for exclusive discounts and the latest drops' :
//         index === 2 ? 'get unlimited next day delivery for a whole year with M&H premier for just 9.95$!' :
//         'easy and fast returns'}
//       </h4>
//     </Col>
//   ))}
// </Row>
// </Container>
//      <Col className='col-3 slide_1'>
//      <h4 className='text-center'>new here? get your ferst time discount</h4>
//      </Col>
//      <Col className='col-3 slide_2'>
//      <h4 className='text-center'>downliad our app for exclusive</h4>
//      <h4 className='text-center'>discounts and the latest drops</h4>
//      </Col>
//      <Col className='col-3 slide_3'>
//      <h4>get unlimited next day delivery for a whole year with M&h preimer for just 9.95$!</h4>
//      </Col>
//      <Col className='col-3 slide_4'>
//      <h4 className='text-center'>easy and fast returns</h4>
//      </Col>

{/* <Col className="col-3 position_1_mark d-flex justify-content-center">
<img src={Img1} alt="" className="icon1" />
</Col>
<Col className="col-3 position_2_mark d-flex justify-content-center">
<img src={Img1} alt="" className="icon2" />
</Col>
<Col className="col-3 position_3_mark d-flex justify-content-center">
<img src={Img1} alt="" className="icon3" />
</Col>
<Col className="col-3 position_4_mark d-flex justify-content-center">
<img src={Img1} alt="" className="icon4" />
</Col> */}
<Container>
        <Row>
          <Col className="col-6 hero_men">
            <h3 className="mark_left text-white">this i</h3>
            <button className="position_men btn btn-secondary btn-lg">
              men
            </button>
          </Col>

          <Col className="col-6 hero_women">
            <h3 className="mark_right text-white">s M&H</h3>
            <button className="position_women btn btn-secondary btn-lg">
              women
            </button>
          </Col>
        </Row>
      </Container>