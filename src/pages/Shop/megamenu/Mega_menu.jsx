import React, { Component } from "react";
import { Link } from "react-router-dom";
import Li_custom from "../../../component/Li-custom/Li_custom";
import { Container } from "react-bootstrap";

class Mega_menu extends Component {
  state = {
    mega_menu_is_open: false,
  };

  showmenu = () => {
    this.setState((prevState) => ({
      mega_menu_is_open: !prevState.mega_menu_is_open,
    }));
  };

  render() {
    const {womanproducts}=this.props
    const {manproducts}=this.props
    const woman_menu= womanproducts.map((item,index)=>{
       return(
        
      <Li_custom addres="#" name={item.name} classname="list-group-item text-body" classLink='text-decoration-none text text-dark'/> 
    )
    })

    const man_menu= manproducts.map((item,index)=>{
      return(
        <Li_custom addres="#" name={item.name} 
        classname="list-group-item text-body"
         classLink='text-decoration-none list-style-none text text-dark'/> 
   )
   })

    return (
      <>
     
        <nav>
          <li onClick={this.showmenu}>menu</li>
          {this.state.mega_menu_is_open && (
            <Container>
            <div className="mega-menu row">
              <div className="mega-menu-section col-6">
                <h3>woman</h3>
                <ul class="list-group">
                 {woman_menu}
                  
                </ul>
              </div>
              <div className="mega-menu-section col-6">
                <h3>men</h3>
                <ul className="list-group">
                  {man_menu}
                </ul>
              </div>
            </div>
            </Container>
          )}
        </nav>
      </>
    );
  }
}
export default Mega_menu;
