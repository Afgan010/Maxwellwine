import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoWhite from "../assets/images/logo.webp";
import logoBlack from "../assets/images/black_logo.webp";
import { FiSearch } from "react-icons/fi";
import { BsMinecartLoaded } from "react-icons/bs";
import pageList from "../constants/PageList";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="row">
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

          <div className="logo">
            <Link to="/">
              <img src={scrolled ? logoBlack : logoWhite} alt="logo" />
            </Link>
          </div>

          <div className="headerRight">
            <FiSearch className="icon" />
            <BsMinecartLoaded className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
