import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface IButton {
  path: string;
  name: string;
  className?: string;
}

const CustomLink = ({ path, name, className }: IButton) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);
  return (
    <Link className={className} to={path} data-aos="fade-up">
      {name}
    </Link>
  );
};

export default CustomLink;
