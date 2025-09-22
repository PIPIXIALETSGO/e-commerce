import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="nav w-100 fixed-top bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg py-3 justify-content-between align-items-center w-100 nav-wrapper">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className="navbar-brand mx-auto order-0 d-lg-none d-flex">
            <h2 className="m-0 fw-bold" style={{ letterSpacing: "2px" }}>
              Dandan
            </h2>
          </Link>
          <ul className="d-lg-none d-flex align-items-center gap-3">
            <li className="nav-item">
              <a href="#">
                <i className="bi bi-search fs-5 text-dark"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="bi bi-person fs-5 text-dark"></i>
              </a>
            </li>
            <li className="nav-item position-relative">
              <a href="#">
                <i className="bi bi-heart fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">
                  0
                </span>
              </a>
            </li>
            <li className="nav-item position-relative">
              <a href="#">
                <i className="bi bi-bag fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">
                  0
                </span>
              </a>
            </li>
          </ul>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-menu align-items-center gap-4">
              <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Store</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Contact</Link>
              </li>
            </ul>
            {/* Center Logo */}
            <Link to='/' className="navbar-brand order-0 d-none d-lg-flex">
              <h2 className="m-0 fw-bold" style={{ letterSpacing: "2px" }}>
                Dandan
              </h2>
            </Link>

            {/* Right Icons */}
            <ul className="navbar-nav d-none d-lg-flex align-items-center gap-4">
              <li className="nav-item">
                <a href="#">
                  <i className="bi bi-search fs-5 text-dark"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                >
                  <i className="bi bi-person fs-5 text-dark"></i>
                </a>
              </li>
              <li className="nav-item position-relative">
                <a href="#">
                  <i className="bi bi-heart fs-5 text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">
                    0
                  </span>
                </a>
              </li>
              <li className="nav-item position-relative">
                <a href="#">
                  <i className="bi bi-bag fs-5 text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Sign-up Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby='signupModalLabel' aria-hidden='true'>
        <div className="modal-dialog" modal-dialog-centered>
            <div className="modal-content p-4">
                <div className="modal-header border-0">
                    <h5 className="modal-title fw-bold" id='signupModalLabel'>Sign up</h5>
                    <button type="button" className="btn-close" data-bs-dismiss='modal' aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Enter Your Name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter Your Email Address" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password" required />
                        </div>
                        <p className="text-muted">
                            By signing up, you agree to our <a href="#" className="text-success text-decoration-none">Term</a>&<a href="#" className="text-success text-decoration-none">Privacy Policy</a>
                        </p>
                        <button type="button" className="btn btn-dark w-100">Sign up</button>
                    </form>
                    <div className="text-center m5-3">
                        <p>Already have an account?<a href="#" className="text-success fw-bold">Sign in</a></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
