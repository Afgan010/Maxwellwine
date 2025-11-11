import CustomButtons from "../../components/CustomButtons";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <div className="row">
          <div className="content">
            <h2 className="title">PAGE NOT FOUND</h2>
            <CustomButtons path="/" name="Back to Home page" className="btn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
