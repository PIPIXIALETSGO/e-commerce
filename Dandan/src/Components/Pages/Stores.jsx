import React from "react";
import store1 from "./../../assets/blog-3.webp";
import store2 from "./../../assets/blog-3.webp";

import { Link } from "react-router-dom";
function Stores() {
  return (
    <>
      <ol className="section-banner py-3 position-relative">
        <li className="position-relative">
          <Link to="/">Home</Link>
        </li>
        <li className="position-relative active">
          <span className="ps-5">Stores</span>
        </li>
      </ol>

      {/* store */}
      <div className="container store-wrap my-5 py-5">
        <div className="row">
          <div className="section-title mb-5 stores-title text-center">
            <h2 className="fw-semibold fs-1">Find s Store</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              necessitatibus totam aperiam inventore assumenda incidunt quod
              pariatur, recusandae perferendis sapiente. Quae eveniet asperiores
              minima tempora iste praesentium laboriosam minus nisi.
            </p>
          </div>
        </div>
        <div className="row align-items-center g-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src="" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">New York Store</h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h5 className="subtitle fw-semibold mb-4">Address</h5>
                <p className="text-muted mb-0">3242 Abbot Kinny BLVD</p>
                <div className="text-muted">PH Venice, CA</div>
                <a href="#" className="underline-link text-black">
                  Get Direction
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <h5 className="subtitle fw-semibold mb-4">Hour of operation</h5>
                <div className="d-flex gap-5 text-muted">
                  <span>Mon - Fri</span>
                  <span>08:30 - 20:00</span>
                </div>
                <div className="d-flex gap-5 text-muted">
                  <span>Sat - Sun</span>
                  <span>09:30 - 21:30</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h5 className="subtitle fw-semibold mb-4">Contact</h5>
                <p className="text-muted mb-0">
                  Mobile: <strong className="text-dark">087 93853 997</strong>
                </p>
                <p className="text-muted mb-0">
                  Mobile: <strong className="text-dark">087 1586554 997</strong>
                </p>
                <p className="text-muted">Email:hello@grace.com</p>
              </div>

              <div className="col-md-6 mb-4">
                <h5 className="fw-semibold">Social media</h5>
                <div className="store-social-icons d-flex gap-3 mt-4">
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter-x"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container store-wrap my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="section-title mb-4"> California Store</h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h5 className="subtitle fw-semibold mb-4">Address</h5>
                <p className="text-muted mb-0">3422 Abbot kinney BLVD</p>
                <p className="text-muted mb-0">PH Venice, CA 124</p>
                <a href="#" className="underline-link text-black">
                  Get Direction
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <h5 className="subtitle fw-semibold mb-4">Hour of operation</h5>
                <div className="d-flex gap-5 text-muted">
                  <span>Mon - Fri</span>
                  <span>08:30 - 20:00</span>
                </div>
                <div className="d-flex gap-5 text-muted">
                  <span>Sat - Sun</span>
                  <span>09:30 - 21:30</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h5 className="subtitle fw-semibold mb-4">Contact</h5>
                <p className="text-muted mb-0">
                  Mobile: <strong className="text-dark">087 93853 997</strong>
                </p>
                <p className="text-muted mb-0">
                  Mobile: <strong className="text-dark">087 1586554 997</strong>
                </p>
                <p className="text-muted">Email:hello@grace.com</p>
              </div>
              <div className="col-md-6 mb-4">
                <h5 className="fw-semibold">Social media</h5>
                <div className="store-social-icons d-flex gap-3 mt-4">
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter-x"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-youtube"></i>
                </div>
              </div>
            </div>
          </div>
            <div className="col-lg-6 mb-lg-0">
                  <img src="" alt="" className="img-fluid" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Stores;
