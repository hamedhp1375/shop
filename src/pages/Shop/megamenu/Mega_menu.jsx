import React, { Component } from "react";
import { Link } from "react-router-dom";
import Li_custom from "../../../component/Li-custom/Li_custom";

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
        
      <Li_custom addres="#" name={item.name} />
    )
    })

    const man_menu= manproducts.map((item,index)=>{
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
