import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Li_custom extends Component {
  render() {
    return (
      <li className='list-group-item'>
        <Link className='text-decoration-none text-body' to={this.props.addres}>
        {this.props.name}
        </Link>
      </li>
    )
  }
}
