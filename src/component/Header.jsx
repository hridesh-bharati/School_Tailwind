import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand fw-bolder" href="#">FUTURE SCHOOL</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link" to={"/"} >Home</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={"/about"} >About</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Course
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Python</a></li>
                  <li><a class="dropdown-item" href="#">MS Office</a></li>
                  <li><a class="dropdown-item" href="#">Tally</a></li>
                  <li><a class="dropdown-item" href="#">ReactJS</a></li>
                  <li><a class="dropdown-item" href="#">NodeJS</a></li>
                  <li><a class="dropdown-item" href="#">CCC</a></li>
                  <li><a class="dropdown-item" href="#">O LEVEL</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={"/contact"} >Contact</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i class="bi bi-three-dots-vertical text-white"></i>  </button>
            </form>
          </div>
        </div>
      </nav>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Admin Loging</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Please enter your password" />
            <button className='btn btn-primary'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
