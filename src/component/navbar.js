import React from "react";
import '../css/homepage.css';
import data from '../constants/constants';
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {data.navbar.heading}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                {data.navbar.menu_items.item1}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                {data.navbar.menu_items.item2}
              </a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
export default Navbar;