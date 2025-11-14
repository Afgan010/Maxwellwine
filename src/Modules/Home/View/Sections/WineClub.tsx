import { useEffect } from "react";
import bgImage from "../../../../assets/images/wineClub.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomLink from "../../../../components/CustomLink";

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
            <div className="feedBack">
              <h3 className="title" data-aos="fade-up">
                JOIN THE MAXWELL CLAN WINE CLUB
              </h3>
              <p className="text" data-aos="fade-up">
                I love seeing the team at the annual <br /> dinners in Brisbane,
                always great <br /> food and generous with the wines! <br /> -
                MATTHIAS, MEMBER SINCE 2017
              </p>
            </div>
            <div className="bottom">
              <p className="joinClan" data-aos="fade-up">
                Choose your favourite wines or meads to come when <br /> it
                suits you. Be welcomed like a member of our <br />
                extended family with all the benefits that brings. <br />
                Member-only pricing, events and even member <br />
                exclusive wines, plus much more.
              </p>
              <CustomLink path="#" name="Join The Club" className="joinBtn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineClub;
