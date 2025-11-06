import CustomButtons from "../../../../components/CustomButtons";
import image from "../../../../assets/images/products1.webp";
import image2 from "../../../../assets/images/products2.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopNow = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="shopNow">
      <div className="container">
        <div className="row">
          <div
            className="productsContent"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="info" data-aos="fade-up">
              <h3 className="title">Shop Mead</h3>
              <p className="text">
                An accient craft, honed by Maxwell to become <br />
                Australia's favourite honey wine.A mead for all <br /> occasions
              </p>
              <CustomButtons
                path="/shop"
                name="Shop Now"
                className="productBtn"
              />
            </div>
          </div>
          <div
            className="productsContent"
            style={{ backgroundImage: `url(${image2})` }}
          >
            <div className="info" data-aos="fade-up">
              <h3 className="title">Our Story</h3>
              <p className="text">
                With a legacy spanning decades, the Maxwell <br />
                family continues to shape the estate’s story.
              </p>
              <CustomButtons
                path="/about"
                name="About Us"
                className="productBtn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
