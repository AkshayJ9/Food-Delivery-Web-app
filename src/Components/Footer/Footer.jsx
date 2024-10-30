import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            ea possimus minima iusto ex obcaecati aspernatur asperiores
            veritatis earum maiores repellendus dolore, iste ipsa, fugiat facere
            ab reprehenderit? Debitis incidunt quae odit sit facilis explicabo.
            Autem, pariatur! Rerum, reiciendis ex.
          </p>
          <div className="footer-social-items">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TUCH</h2>
          <ul>
            <li>+91 457841595</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
