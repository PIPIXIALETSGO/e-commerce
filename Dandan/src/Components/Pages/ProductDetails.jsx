import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// data
import products from "./../../Porduct.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);
  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      setImages([product.image, product.secondImage].filter(Boolean));
      setQuantity(1);
    }
  }, [product]);
  const colors = ["#000000", "#783F00", "#9BBEC8"];
  return (
    <>
      <ol className="section-banner py-3 position-relative">
        <li className="position-relative">
          <Link to="/">home</Link>
        </li>
        <li className="position-relative active">
          <a href="#" className="ps-5">
            Beauty & Cosmetics
          </a>
        </li>
        <li className="position-relative active">
          <a href="#" className="ps-5">
            {product.productName}
          </a>
        </li>
      </ol>

      <div className="container py-5">
        <div className="row">
          <div className="col-xl-6">
            <div className="d-flex flex-column-reverse flex-md-row mb-4">
              <div className="d-flex flex-column me-3 thumbnail-images">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    onClick={() => setMainImage(img)}
                    className={`img-thumbnail ${
                      mainImage === img ? "border-dark" : ""
                    } `}
                    style={{
                      width: 60,
                      height: 80,
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
              <img src={mainImage} alt="Main" className="img-fluid" />
            </div>
          </div>

          <div className="col-xl-6">
            <h5 className="fw-bold">{product.price}</h5>
            <h2 className="mb-4 fw-semibold">{product.productName}</h2>
            <p className="mb-1 fw-semibold">Color: Black</p>
            <div className="d-flex gap-2 mb-4">
              {colors.map((color, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: color,
                    width: 25,
                    height: 25,
                    borderRadius: "50%",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                ></div>
              ))}
            </div>
            <p className="fw-semibold mb-1">Quantity</p>
            <div className="d-flex align-items gap-3 quantity">
              <div
                className="d-flex align-items-center Quantity-box"
                style={{ maxWidth: "200px" }}
              >
                <button
                  className="btn-count border-0"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center mx-2"
                  value={quantity}
                  readOnly
                />
                <button
                  className="btn-count border-0"
                  onClick={() => setQuantity((q) => Math.max(1, q + 1))}
                >
                  +
                </button>
              </div>
              <button className="btn-custom w-100">Add to cart</button>
            </div>
            <button className="btn-custom2 w-100 border-0">But it now</button>
            <hr />
            <p>
              <strong>Vendor:</strong>Vendor 4
            </p>
            <p>
              <strong>Collections:</strong>Beauty and Cosmetics, Bestseller
            </p>
            <p>
              <strong>SKU:</strong>501
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
