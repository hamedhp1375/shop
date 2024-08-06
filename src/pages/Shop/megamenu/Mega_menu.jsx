import React, { Component } from "react";
import { Link } from "react-router-dom";
import Li_custom from "../../../component/Li-custom/Li_custom";
class Mega_menu extends Component {
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
    mega_menu_is_open: false,
  };
  showmenu = () => {
    this.setState((prevState) => ({
      mega_menu_is_open: !prevState.mega_menu_is_open,
    }));
  };

  render() {
    const woman_menu= this.state.womanproducts.map((item,index)=>{
       return(
      <Li_custom addres="#" name={item.name} />
    )
    })

    const man_menu= this.state.manproducts.map((item,index)=>{
      return(
     <Li_custom addres="#" name={item.name} />
   )
   })

    return (
      <>
        <nav>
          <li onClick={this.showmenu}>menu</li>
          {this.state.mega_menu_is_open && (
            <div className="mega-menu row">
              <div className="mega-menu-section col-6">
                <h3>woman</h3>
                <ul class="list-group">
                 {woman_menu}
                  
                </ul>
              </div>
              <div className="mega-menu-section col-6">
                <h3>men</h3>
                <ul class="list-group">
                  {man_menu}
                </ul>
              </div>
            </div>
          )}
        </nav>
      </>
    );
  }
}
export default Mega_menu;
