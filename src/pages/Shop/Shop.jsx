import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Mega_menu from "./megamenu/Mega_menu";
import Cart from "../../component/cart/Cart";
class Shop extends Component {
  state = {
    womanproducts: [
      { id: 1, name: "shirts", price: [100, "$"] },
      { id: 2, name: "shoes", price: [100, "$"] },
      { id: 3, name: "woman bags", price: [100, "$"] },
      { id: 4, name: "woman gift", price: [100, "$"] },
      { id: 5, name: "skirts", price: [100, "$"] },
      { id: 6, name: "tops", price: [100, "$"] },
    ],
    manproducts: [
      { id: 9, name: "man bags", price: [100, "$"] },
      { id: 10, name: "man gift", price: [100, "$"] },
      { id: 11, name: "belts", price: [100, "$"] },
      { id: 12, name: "t-shirts", price: [100, "$"] },
      { id: 13, name: "blouses", price: [100, "$"] },
      { id: 14, name: "jean", price: [100, "$"] },
    ],
  };

  render() {
    const womancategory = this.state.womanproducts.map((item, index) => {
      return (
        <div class="col-4 pb-3">
          <Cart name={item.name} price={item.price} />
        </div>
      );
    });
    const mancategory = this.state.manproducts.map((item, index) => {
      return (
        <div class="col-4 pb-3">
          <Cart name={item.name} price={item.price} />
        </div>
      );
    });
    return (
      <div>
        <header className="">
          <Mega_menu womanproducts={this.state.womanproducts} manproducts={this.state.manproducts} />
        </header>
         <Container>
        <Row >
          <h3>woman products</h3>
          {womancategory}
        </Row>

        <Row>
          <h3>man products</h3>
          {mancategory}
        </Row>
        </Container>
      </div>
    );
  }
}

export default Shop;
