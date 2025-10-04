import React, { use, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

//Data
import Products from "./../../Porduct.json";
import subBanner from "./../../assets/blog-1.webp";
import subBanner2 from "./../../assets/blog-2.webp";
import serviceImg1 from "./../../assets/package-svgrepo-com.svg";
import serviceImg2 from "./../../assets/return-svgrepo-com.svg";
import serviceImg3 from "./../../assets/chat-dots-svgrepo-com.svg";
import serviceImg4 from "./../../assets/card-2-svgrepo-com.svg";

function Index() {
  const [filterSortOption, setFilterSortOption] = useState("all");

  const navigate = useNavigate();
  const addToWishlist = (product) => {
    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!existing.some((p) => p.id === product.id)) {
      const updated = [...existing, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      window.dispatchEvent(new Event("wishlistUpdated"));
      toast.success(`${product.productName} added to wishlist`);
    } else {
      toast.info(`${product.productName} is already in your wishlist`);
    }
  };
  const addToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = existing.find((p) => p.id === product.id);
    if (!alreadyInCart) {
      const updatedProduct = { ...product, quantity: 1 };
      const updatedCart = [...existing, updatedProduct];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("cartUpdated"));
      toast.success(`${product.productName} added to cart`);
    } else {
      toast.info(`${product.productName} is already in your cart`);
    }
  };
  return (
    <>
      {/* Hero */}
      <div className="hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1">
              <div className="hero-content">
                <h5>- ESSENTIAL ITEMS</h5>
                <h1>
                  Beauty Inspired <br /> by Real Life
                </h1>
                <p className="my-3">Made using clean, non-toxic</p>
                <a href="#" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-wrap hero-wrap2">
              <div className="hero-content">
                <h5>- NEW COLLECTION</h5>
                <h1>
                  Fresh Styles <br /> Every Season
                </h1>
                <p className="my-3">Comfort meets elegance</p>
                <a href="#" className="btn hero-btn mt-3">
                  Discover
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-wrap hero-wrap3">
              <div className="hero-content">
                <h5>- NEW COLLECTION</h5>
                <h1>
                  Fresh Styles <br /> Every Season
                </h1>
                <p className="my-3">Comfort meets elegance</p>
                <a href="#" className="btn hero-btn mt-3">
                  Discover
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Products */}
      <div className="product-container py-5 my-5">
        <div className="container position-relative">
          <div className="row">
            <div className="section-title mb-5 product-title text-center">
              <h2 className="fw-semibold fs-1">Our Featured Product</h2>
              <p className="text-muted">Get the skin you want to feel</p>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: ".product-swiper-next",
              prevEl: ".product-swiper-prev",
            }}
            breakpoints={{
              1399: { slidesPerView: 4 },
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              767: { slidesPerView: 1.5 },
              0: { slidesPerView: 1 },
            }}
            className="mt-4 swiper position-relative"
          >
            {Products.filter(
              (product) => product.id >= 5 && product.id <= 10
            ).map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-item text-center position-relative">
                  <div className="product-image w-100 position-relative overflow-hidden">
                    <img src={product.image} className="img-fluid" alt="" />
                    <img
                      src={product.secondImage}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="product-icons gap-3">
                      <div
                        className="product-icon"
                        title="Add to Wishlist"
                        onClick={() => addToWishlist(product)}
                      >
                        <i className="bi bi-heart fs-5"></i>
                      </div>
                      <div
                        className="product-icon"
                        title="Add to Cart"
                        onClick={() => addToCart(product)}
                      >
                        <i className="bi bi-cart3 fs-5"></i>
                      </div>
                    </div>
                    <span
                      className={`tag badge text-white ${
                        product.tag === "New" ? "bg-danger" : "bg-success"
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none text-black"
                  >
                    <div className="product-content">
                      <span className="price text-decoration-none">
                        {product.price}
                      </span>
                      <h3 className="title pt-1">{product.productName}</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Banner */}
      <div className="banner py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 banner-card overflow-hidden position-relative">
              <img src={subBanner} alt="img-fluid rounded banner-img" />
              <div className="banner-content position-absolute">
                <h3>New Collection</h3>
                <h1>
                  Intensive Glow C+ <br />
                  <br />{" "}
                </h1>
                <button className="btn banner-btn mt-2">Explore more</button>
              </div>
            </div>
            <div className="col-lg-6 banner-card overflow-hidden position-relative banner-mt">
              <img src={subBanner2} alt="img-fluid rounded banner-img" />
              <div className="banner-content banner-content2 position-absolute">
                <h1>25% off everything</h1>
                <p>
                  Makeup with extended range in <br />
                  colors for every human
                </p>
                <button className="btn banner-btn mt-2">Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="container py-5 my-5">
        <div className="row text-center">
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src={serviceImg1} alt="" className="img-fluid w-25" />
            <h4 className="mt-3 mb-1">Free Shipping</h4>
            <p className="text-muted fs-6 fw-semibold">
              Free Shipping for orders over $130
            </p>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src={serviceImg2} alt="" className="img-fluid w-25" />
            <h4 className="mt-3 mb-1">Returns</h4>
            <p className="text-muted fs-6 fw-semibold">
              within 30 days for an exchange.
            </p>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src={serviceImg3} alt="" className="img-fluid w-25" />
            <h4 className="mt-3 mb-1">Online Support</h4>
            <p className="text-muted fs-6 fw-semibold">
              24 hours a day, 7 days a week
            </p>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src={serviceImg4} alt="" className="img-fluid w-25" />
            <h4 className="mt-3 mb-1">Flexible payment</h4>
            <p className="text-muted fs-6 fw-semibold">
              Pay with multiple credit cards
            </p>
          </div>
        </div>
      </div>
      {/* Seen in  */}
      <div className="text-center my-5 seen-in">
        <div className="container">
          <h1 className="mb-5 fw-semibold">As seen in</h1>
          <div className="row pt-3 justify-content-center">
            <div className="col-md-4 seen-card">
              <img src={subBanner2} alt="" className="img-fluid" />
              <p className="text-dark fs-5 mt-2 fw-semibold">
                {" "}
                Also the customer service is phenomenal. I would purchase again
              </p>
            </div>
            <div className="col-md-4 seen-card">
              <img src={subBanner} alt="" className="img-fluid" />
              <p className="text-dark fs-5 mt-2 fw-semibold">
                {" "}
                Also the customer service is phenomenal. I would purchase again
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* favorite beauty */}
        <div className="favorite-beauty py-5 my-5">
          <div className="container">
            <div className="row">
              <div className="section-title mb-5 favorite-beauty-title text-center">
                <h2 className="fw-semibold">Customer favorite beauty</h2>
                <p>made using clean, non-toxic ingredients, our products are designed fro everyone</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="favorite-beauty-banner mb-lg-0 position-relative">
                  <img src={subBanner} alt="" />
                  <div className="favorite-beauty-banner-title">
                    <h3 className="fs-2">Empower yourself</h3>
                    <p className="fs-6">Get the skin you want to feel</p>
                    <button className="btn btn-default">Explore more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discover  */}
        <div className="discover py-5">
            <div className="section-title mb-5 favorite-beauty-title text-center">
                <h2 className="fw-semibold fs-1">More to discover</h2>
                <p className="text-center">
                  Our bundles were designed to conveniently package <br/> your tanning essentials while saving you money
                </p>
            </div>
            <div className="row g-5">
              <div className="col-md-6 discover-card text-center">
                <div className="discover-img section-img rounded">
                <img src={subBanner2} alt="" className="img-fluid rounded"/>
                </div>
                <div className="discover-info mt-3">
                  <div>Summer Collection</div>
                  <button className="btn mt-2">Shop Now <i className="bi bi-arrow-right ms-2"></i></button>
                </div>
              </div>
              <div className="col-md-6 discover-card text-center">
                <div className="discover-img section-img rounded">
                <img src={subBanner} alt="" className="img-fluid rounded"/>
                </div>
                <div className="discover-info mt-3">
                  <div>Summer Collection</div>
                  <button className="btn mt-2">Read More <i className="bi bi-arrow-right ms-2"></i></button>
                </div>
              </div>
            </div>
        </div>

        {/* Social Image  */}
        <div className="social-image-container py-5 px-5 mx-auto">  
          <div className="row g-4">
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">  
                <img src={subBanner} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">  
                <img src={subBanner}alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
             <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">  
                <img src={subBanner} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
             <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">  
                <img src={subBanner} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">  
                <img src={subBanner} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">  
                <img src={subBanner} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
          </div>

        </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Index;
