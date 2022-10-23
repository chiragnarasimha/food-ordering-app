import "./Contact.scss";
import React from "react";
import { RestaurantLogoMini } from "../../assets/icons";

const Contact = (props) => {
  return (
    <footer class="footer" id="contact-us">
      <RestaurantLogoMini className="footer__logo" />

      <div className="footer__right">
        <div className="footer__right__column">
          <h1 className="footer__right__column__h1">Phone Number</h1>
          <p>Mob: 0412 345 678</p>
          <p>tel: (02) 9123-4567</p>
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__right__column">
          <h1 className="footer__right__column__h1">Address</h1>
          <p>Flinders St, Melbourne VIC 3000</p>
        </div>
      </div>

      <div className="footer__right">
        <div className="footer__right__column">
          <h1 className="footer__right__column__h1">Copyrights</h1>
          <p>
            Built by Chirag Narasimha Murthy to practice advanced CSS
            techniques. Copyright &copy;. You are allowed to use this page for
            personal or commercial use, as long as the original author has been
            accredited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
