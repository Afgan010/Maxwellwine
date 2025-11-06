import bgImage from "../../../../assets/images/family_estate.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CustomButtons from "../../../../components/CustomButtons";

const FamilyEstate = () => {
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
    <section className="familyEstate">
      <div className="container">
        <div className="row">
          <div className="top">
            <div className="forAos" data-aos="fade-up">
              <h2 className="title">
                A Family Estate, <br /> Crafted By Generations.
              </h2>
              <p className="text">
                Maxwell Wines crafts premium wines that celebrate the <br />
                limestone character of the estate. From bold Shiraz to vibrant
                <br />
                whites and the estate’s iconic meads, every bottle reflects a
                <br />
                commitment to sustainability and meticulous winemaking.
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="imgContainer">
              <img src={bgImage} alt="image" />
            </div>
            <div className="contact">
              <div className="forAos" data-aos="fade-up">
                <p className="desc">
                  A hidden gem in McLaren Vale, the Maxwell Restaurant <br />
                  sets the highest standards in regional fine dining. ‘South
                  <br />
                  Australian Restaurant of the Year’ – Gourmet Traveller
                </p>
                <CustomButtons
                  path="/contact"
                  name="Contact Us"
                  className="btn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyEstate;
