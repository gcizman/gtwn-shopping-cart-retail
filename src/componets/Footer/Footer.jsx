import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>
      <div className="footer_first">
        <img src="images/memory.png" alt="Memory Game" />
        <div className="footer_btn_title_box">
          <p>
            You can also play the memory card game written with vanilla js from this
            Experience the link.
          </p>
          <a
            target={"_blank"}
            href="./"
            className="btn_link_to_game"
            rel="noreferrer"
          >
            Let's go
          </a>
          <a
            target={"_blank"}
            href="https://github.com/gcizman/gtwn-shopping-cart-retail"
            className="btn_link_to_game"
            rel="noreferrer"
          >
           Source code
          </a>
        </div>
      </div>
      <div className="footer_last">
        <span>quick access</span>
        <div className="footer_link_box">
          <Link to={"/basket"}>Cart</Link>
          <Link to={"/favorite"}>Favourites</Link>
          <a
            target={"_blank"}
            href="https://github.com/gcizman/gtwn-shopping-cart-retail"
            rel="noreferrer"
          >
            View the source code of the project on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
