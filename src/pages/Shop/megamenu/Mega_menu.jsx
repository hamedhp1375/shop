import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    return (
      <>
        <nav>
          <li onClick={this.showmenu}>menu</li>
          {this.state.mega_menu_is_open && (
            <div className="mega-menu row">
              <div className="mega-menu-section col-6">
                <h3>woman</h3>
                <ul class="list-group">
                 
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">shoes</Link>
                    </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">woman bag</Link>
                    </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">woman gift</Link>
                    </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">tops</Link>
                    </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#"> blouses</Link>
                   </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">jeans</Link>
                    </li>
                </ul>
              </div>
              <div className="mega-menu-section col-6">
                <h3>men</h3>
                <ul class="list-group">
                  <li class="list-group-item">
                    <Link className="text-decoration-none text-body" to="#">man bags</Link>
                  </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">man gift</Link>
                    </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">belts</Link>
                    </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">t-shirts</Link>
                    </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">blouses</Link>
                    </li>
                  <li class="list-group-item">
                  <Link className="text-decoration-none text-body" to="#">jeans</Link>
                    </li>
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
