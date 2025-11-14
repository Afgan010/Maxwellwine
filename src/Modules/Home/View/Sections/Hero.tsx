import { Link } from "react-router-dom";
import video from "../../../../assets/videos/Hero-video.mp4";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="hero">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="bgVideo"
      ></video>

      <div className="container">
        <div className="row">
          <div className="leftSide">
            <h2 className="title" data-aos="fade-up">
              GROUNDED IN <br />
              LIMESTONE & LEGACY
            </h2>
            <p className="text" data-aos="fade-up">
              Rooted in the heart of McLaren Vale, Maxwell Wines is a <br />
              family-owned estate where tradition meets innovation.
            </p>
          </div>

          <div className="rightSide">
            <div className="forAos">
              <Link to="/about" className="btn aboutBtn" data-aos="fade-up">
                About Us
              </Link>
              <Link to="/shop" className="btn" data-aos="fade-up">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
