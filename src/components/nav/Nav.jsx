import "./Nav.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      //If the user scrolls more than 100px
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar); //adding the transition navbar to the scroll event
    return () => window.removeEventListener("scroll", transitionNavbar); //removing the transitionNavbar from the scroll event
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://th.bing.com/th/id/R.e5692be8ee2f6b85f84cb0a949c88fa4?rik=kSkdbxltqBhAZA&pid=ImgRaw&r=0"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://th.bing.com/th?q=Netflix+Avatar+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
