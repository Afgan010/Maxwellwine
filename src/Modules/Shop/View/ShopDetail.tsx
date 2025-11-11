import { useParams } from "react-router-dom";
import { ShopService } from "../Services/ShopServices";
import { useEffect, useState } from "react";
import type { IProducts } from "../Models/ShopModels";

const ShopDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<IProducts>();
  console.log(id);
  const getDetails = async () => {
    try {
      if (id) {
        const res = await ShopService.shopDetails(id);
        console.log(res);
        setDetails(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  console.log(details);

  return (
    <div className="shopDetail">
      <h2>{details?.name}</h2>
      <img src={details?.productImage} alt={details?.name} />
      <p>{details?.details}</p>
      <span>{details?.price} $</span>
      <p>dhsdhhd</p>
    </div>
  );
};

export default ShopDetail;
