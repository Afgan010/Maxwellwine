import footerLogo from "../assets/images/footerLogo.webp";
import footerImage from "../assets/images/footerImage.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import pageList from "../constants/PageList";
import CustomButtons from "./CustomButtons";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="top">
            <div className="logo">
              <Link to="/" className="link">
                <img src={footerLogo} alt="Logo" />
              </Link>
            </div>
            <div className="topRight">
              <form className="form">
                <label id="email">Subscribe to our list</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="emailInp"
                  required
                />
                <CustomButtons
                  path="/contact"
                  name="Send"
                  className="footerBtn"
                />
              </form>
              <nav className="navBar">
                <ul className="navList">
                  <li className="navItem">
                    {pageList
                      .filter((item) => item.for_header)
                      .map((item) => (
                        <NavLink key={item.id} to={item.path}>
                          {item.title}
                        </NavLink>
                      ))}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="middle">
            <div className="mLeft">
              <p className="location">
                Olivers Rd McLaren Vale <br /> South Australia 5171
              </p>
              <Link to="tel:+994501234567">+994501234567</Link>
            </div>
            <div className="footerImg">
              <img src={footerImage} alt="Maxwell" />
            </div>
            <div className="icons">
              <Link to="#">
                <FaFacebook className="icon" />
              </Link>
              <Link to="#">
                <FaInstagram className="icon" />
              </Link>
            </div>
          </div>
          <div className="bottom">
            <p className="auth">&copy; Maxwell Wines {year}</p>
            <p className="text">
              SA Liquor Licensing Act 1997, Section 113. Liquor Licence Number:
              57005946 Producer’s Licence 57600699 Liquor Must Not Be Supplied
              To Persons Under 18.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
