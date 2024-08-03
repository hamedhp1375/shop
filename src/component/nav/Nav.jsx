import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Shop">shoping</Link>
        </li>
        <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Cart">
                  <FontAwesomeIcon icon={faCartShopping} style={{ color: "#24d8e5" }} />
                </Link>
              </li>
        
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default Nav