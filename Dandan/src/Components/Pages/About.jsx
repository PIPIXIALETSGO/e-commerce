import React, { useState } from "react";
import img from "./../../assets/blog-3.webp";
import client1 from "./../../assets/blog-3.webp";
import client2 from "./../../assets/blog-3.webp";
import client3 from "./../../assets/blog-3.webp";
import client4 from "./../../assets/blog-3.webp";
import client5 from "./../../assets/blog-3.webp";
import client6 from "./../../assets/blog-3.webp";

const About = () => {
  const [quote, setQuote] = useState();
  return (
    <>
      <section className="about-glowing-section d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-start text-center">
              <p className="text-uppercase text-muted small mb-2">
                Introducing
              </p>
              <h1 className="fw-bold display-5">About Glowing</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Content  */}

      <section className="py-5">
        <div className="container text-center mb-5">
          <img src="" alt="" />
          <h2 className="fw-bold">
            We strive to live with passion, <br /> kindness and empathy
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            debitis tenetur dolores commodi fuga nam, quia ipsum. Et at id
            maxime blanditiis reprehenderit omnis, iure odit mollitia beatae
            nostrum distinctio!
          </p>
        </div>

        {/* Face Image and Description  */}
        <div className="container mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 about-img1">
              <img src={img} alt="" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">
                Give your skin a healthy glow everyone
              </h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                incidunt et illum laudantium id vel dicta voluptatum rerum dolor
                dolorem magnam in ad accusamus dolore eos, perspiciatis ipsam
                nihil distinctio!
              </p>
            </div>
          </div>
        </div>
        {/* Misson and Prodcut Image  */}
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 mb-4 mb-md-0 about-img1">
              <img src={img} alt="" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">Our Mission</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi voluptates recusandae eius iusto, fugiat nulla maiores
                rerum magni corporis quia quidem voluptatibus neque quos minima
                quibusdam ipsa reprehenderit adipisci omnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Client Logos Section */}
      <section className="container-fluid bg-light">
        <div className="container py-5 text-center">
          <div className="mx-auto" style={{ maxWidth: "800px" }}>
            <p className="fs-4 mb-4 fw-bold">{quote}</p>
          </div>
          <div className="row justify-content-center align-items-center mt-5 gy-4">
            <div
              className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
              onClick={() =>
                setQuote(
                  '"ssdsadasdssssssssssssssssssssssssssssssssssdasddsdsad "'
                )
              }
              style={{ cursor: "pointer" }}
            >
              <img
                src={client1}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>
            <div
              className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
              onClick={() =>
                setQuote(
                  '"lorem dkssi jasdl kapsad kasdl kasjd iasd jkald kjadlk ajd oiasdj as "'
                )
              }
              style={{ cursor: "pointer" }}
            >
              <img
                src={client2}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
        <h2 className="team-title">
          We pride ourselves on having a team of highly skilled
        </h2>

        <div className="team-row">
          <div className="team-member">
            <div className="team-image-wrapper">
              <img src={client1} alt="" className="team-image" />
              <div className="team-social">
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="ri-twitter-line"></i>
                </a>
                <a href="#">
                  <i className="ri-facebook-line"></i>
                </a>
                <a href="#">
                  <i className="ri-youtube-line"></i>
                </a>
              </div>
            </div>
            <h3 className="team-name">Slava Fedutik</h3>
            <p className="team-role">Founder, Chief Creative</p>
          </div>
          <div className="team-member">
            <div className="team-image-wrapper">
              <img src={client2} alt="" className="team-image" />
              <div className="team-social">
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="ri-twitter-line"></i>
                </a>
                <a href="#">
                  <i className="ri-facebook-line"></i>
                </a>
                <a href="#">
                  <i className="ri-youtube-line"></i>
                </a>
              </div>
            </div>
            <h3 className="team-name">sssdsa Fsdfsdf</h3>
            <p className="team-role">sadads, Chief Creative</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
