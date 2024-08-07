import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Li_custom extends Component {
  render() {
    return (
      <li className={this.props.classname}>
        <Link className={this.props.classLink}  to={this.props.addres}>
        {this.props.name}
        </Link>
      </li>
    )
  }
}
