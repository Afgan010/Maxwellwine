import { useEffect, useState } from "react";
import type { IProducts } from "../../Models/HomeModels";
import { HomeService } from "../../Services/HomeServices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Products = () => {
  const [wine, setWine] = useState<IProducts[]>([]);

  const getData = async () => {
    try {
      const res = await HomeService.productList();

      setWine(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(wine);

  return (
    <section className="products">
      <div className="container">
        <div className="row">
          <h2 className="title">Estate Favourites</h2>

          <div className="porduct">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={100}
              slidesPerView={4}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="product-swiper"
            >
              {wine.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="product-card ">
                    <img
                      src={item.productImage}
                      alt={item.name}
                      className="productImage"
                    />
                    <h3 className="title">{item.name}</h3>
                    <p className="detail">{item.details}</p>
                    <span className="price">{item.price} $</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
