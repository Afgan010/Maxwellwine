import leftBg from "../../../../assets/images/wine1.webp";
import restaurant from "../../../../assets/images/Restaurant.webp";
import staff from "../../../../assets/images/staff.webp";
import CustomButtons from "../../../../components/CustomButtons";

const Restaurant = () => {
  return (
    <section className="restaurant">
      <div className="container">
        <div className="row">
          <div
            className="leftSide"
            style={{ backgroundImage: `url(${leftBg})` }}
          >
            <div className="info">
              <p className="text">
                Stay updated with events, winery news, <br /> wine releases and
                restaurant happenings at <br /> Maxwell Wines
              </p>
              <CustomButtons
                path="#"
                name="Maxwell Journal"
                className="journalBtn"
              />
            </div>
          </div>
          <div className="rightSide">
            <div className="imgContainer">
              <img src={restaurant} alt="restaurant" />
            </div>
            <h5 className="title">News</h5>
            <p className="desc">Maxwell Restaurant Wins Two Chef Hats</p>
            <div className="imgContainer">
              <img src={staff} alt="staff" />
            </div>
            <h5 className="title">News</h5>
            <p className="desc">Gourmet Traveller Restaurant of the Year, SA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
