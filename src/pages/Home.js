import React from "react";
import NavBar from "../components/NavBar/NavBar";
import s from "../assets/s.png";
import homeWaste from "../assets/homeWaste.png";
import search from '../assets/search.png'
import Product from "../components/product/Product";
import Buyer from "../components/userType/Buyer";
import Seller from "../components/userType/Seller";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />

      {/* ========== welcome ========== */}
      <section className="sell-recycle">
        <div className="selldiv">
          <div className="sell">
            <img src={s} alt="" />
            <h1>ell Your waste</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consectetur tellus a velit lacinia, in tempor lorem faucibus.{" "}
          </p>
          <button>More</button>
        </div>
        <div>
          <img src={homeWaste} alt="" />
        </div>
      </section>

      {/* =============search section============ */}

      <section className="productHome">
        <div className="form">
            <img src={search} alt="" />
           
          <form action="#none" method="get" class="search-form">
            <input
              className="search"
              type="text"
              placeholder="Search ..."
              name="search"
            />
          </form>
        </div>
        <div className="products">
            <Product />

        </div>
        

      </section>
      <section className="started">
          <h3>Get started</h3>
          <div className="user-type">
              <Buyer/>
              <Seller />
          </div>
      </section>

      <section>
          <h3>Why choose us</h3>
          <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
          </div>
      </section>
      <section className="testimony">
         
          <div className="testimony-comp">
          <Testimonials />
          <Contact />

          </div>
       
      </section>
      <Footer />
    </div>
  );
}

export default Home;
