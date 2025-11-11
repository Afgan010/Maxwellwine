import { useEffect, useState } from "react";
import video from "../../../assets/videos/ShopVideo.mp4";
import type { IProducts } from "../Models/ShopModels";
import { ShopService } from "../Services/ShopServices";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [wine, setWine] = useState<IProducts[]>([]);

  const getData = async () => {
    try {
      const res = await ShopService.productList();
      console.log(res);
      setWine(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(wine);

  const navigate = useNavigate();
  return (
    <section className="shop">
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
          <h2 className="title">A Legacy Of Tenacity</h2>
          <div className="products">
            {wine.map((item) => (
              <div
                className="productCard"
                key={item._id}
                onClick={() => navigate(`/shop-details/${item._id}`)}
              >
                <div className="productImage">
                  <img src={item.productImage} alt={item.name} />
                </div>
                <p className="detail">{item.details}</p>
                <span className="price">{item.price} $</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
