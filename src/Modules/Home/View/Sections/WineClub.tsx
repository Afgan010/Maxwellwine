import bgImage from "../../../../assets/images/wineClub.webp";
import CustomButtons from "../../../../components/CustomButtons";

const WineClub = () => {
  return (
    <section className="wineClub">
      <div className="container">
        <div className="row">
          <div
            className="bgImage"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="feedBack">
              <h3 className="title">JOIN THE MAXWELL CLAN WINE CLUB</h3>
              <p className="text">
                I love seeing the team at the annual <br /> dinners in Brisbane,
                always great <br /> food and generous with the wines! <br /> -
                MATTHIAS, MEMBER SINCE 2017
              </p>
            </div>
            <div className="bottom">
              <p className="joinClan">
                Choose your favourite wines or meads to come when <br /> it
                suits you. Be welcomed like a member of our <br />
                extended family with all the benefits that brings. <br />
                Member-only pricing, events and even member <br />
                exclusive wines, plus much more.
              </p>
              <CustomButtons
                path="#"
                name="Join The Clan"
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
