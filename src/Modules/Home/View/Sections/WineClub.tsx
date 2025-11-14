import { useEffect } from "react";
import bgImage from "../../../../assets/images/wineClub.webp";
import CustomButtons from "../../../../components/CustomButtons";
import AOS from "aos";
import "aos/dist/aos.css";

const WineClub = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);
  return (
    <section className="wineClub">
      <div className="container">
        <div className="row">
          <div
            className="bgImage"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="feedBack" data-aos="fade-up">
              <h3 className="title">JOIN THE MAXWELL CLAN WINE CLUB</h3>
              <p className="text">
                I love seeing the team at the annual <br /> dinners in Brisbane,
                always great <br /> food and generous with the wines! <br /> -
                MATTHIAS, MEMBER SINCE 2017
              </p>
            </div>
            <div className="bottom" data-aos="fade-up">
              <p className="joinClan">
                Choose your favourite wines or meads to come when <br /> it
                suits you. Be welcomed like a member of our <br />
                extended family with all the benefits that brings. <br />
                Member-only pricing, events and even member <br />
                exclusive wines, plus much more.
              </p>
              <CustomButtons
                path="#"
                name="Join The Club"
                className="joinBtn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineClub;
