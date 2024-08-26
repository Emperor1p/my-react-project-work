import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer"
      role="contentinfo"
      style={{
        // backgroundColor: "lightGreen",
        color: "white",
        bottom: 0,
        padding: "5px 0",
        zIndex: "1000",

        textAlign: "center",
        width: "100%",
      }}
    >
      <div className="footer-content row">
        <div className="col col-lg-6">
          <div>
            <h5>&copy; 2024 Emperor eCommerce Store</h5>
            <div className="fotter">
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="social-media col col-lg-6" style={{ fontSize: "30px" }}>
          {" "}
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            title="Facebook"
          >
            <i style={{ textDecoration: "none" }}>
              <FaFacebook className="me-2 " />{" "}
            </i>
          </a>
          <a href="#" aria-label="Twitter" title="Twitter">
            <i>
              <FaTwitter className="me-2" />{" "}
            </i>
          </a>
          <a href="#" aria-label="Instagram" title="Instagram">
            <i>
              <FaInstagram className="me-2" />{" "}
            </i>
          </a>
        </div>
      </div>

      <div>
        <div>
          <form className="newsletter-signup">
            <h3 >Subscribe to Our Newsletter</h3>
            <input type="email" placeholder="Your email address" required style={{height: '43px', width:'290px', marginRight: '10px', borderRadius: '10px', padding: '10px'}}/>
            <button type="submit" className="btn btn-warning"style={{height: '38px', width:'100px', marginRight: '10px', borderRadius: '10px',}}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
