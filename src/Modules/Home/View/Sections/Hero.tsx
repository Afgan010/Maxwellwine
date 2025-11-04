import { Link } from "react-router-dom";
import video from "../../../../assets/videos/Hero-video.mp4";

const Hero = () => {
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
          <div className="rightSide">
            <h2 className="title">
              GROUNDED IN <br />
              LIMESTONE & LEGACY
            </h2>
            <p className="text">
              Rooted in the heart of McLaren Vale, Maxwell Wines is a <br />
              family-owned estate where tradition meets innovation.
            </p>
          </div>
          <div className="leftSide">
            <Link to="/about" className="btn aboutBtn">
              About Us
            </Link>
            <Link to="/shop" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
