import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Mega_menu from "./megamenu/Mega_menu";
import Cart from "../../component/cart/Cart";
import {womanProducts,manProducts} from '../../data/Data'

function Shop() {
  return (
    
   <>
   <Mega_menu/>
   <Container>
    
   <Row>
    <h1 className="text-center">womanproducts</h1>
   {womanProducts.map(item =>{
  return(
    
    <Col className="col-4">
    <div class="card" >
  <img src={item.Img} className="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</Col>
  )
  
  
})}
<h1 className="text-center">manproducts</h1>
{manProducts.map(item =>{
  return(
    
    <Col className="col-4">
    <div class="card" >
  <img src={item.Img} className="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</Col>
  )
  
  
})}


</Row>


</Container>
   
   </>
  )
}

export default Shop
















































// class Shop extends Component {
  

//   render() {
//     const womancategory = this.state.womanproducts.map((item, index) => {
//       return (
//         <div class="col-4 pb-3">
//           <Cart name={item.name} price={item.price} />
//         </div>
//       );
//     });
//     const mancategory = this.state.manproducts.map((item, index) => {
//       return (
//         <div class="col-4 pb-3">
//           <Cart name={item.name} price={item.price} />
//         </div>
//       );
//     });
//     return (
//       
//     );
//   }
// }

// export default Shop;
