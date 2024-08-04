import React, { Component } from 'react'

class Cart extends Component{



  render(){
    return(
     <>
      <div class="card ">
  
  <div class="card-body">
    <h5 class="card-title">{this.props.name}</h5>
    <p class="card-text">{this.props.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
     </>
    )
  }
}

export default Cart