import { useParams } from "react-router-dom";
import { ShopService } from "../Services/ShopServices";
import { useEffect, useState } from "react";
import type { IProducts } from "../Models/ShopModels";

const ShopDetail = () => {
  const { shopId } = useParams();
  const [details, setDetails] = useState<IProducts>({} as IProducts);

  const getDetails = async () => {
    try {
      const res = await ShopService.shopDetails(shopId || "");
      setDetails(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, [shopId]);
  return (
    <div className="shopDetail">
      <h2>{details.name}</h2>
      <img src={details.productImage} alt={details.name} />
      <p>{details.details}</p>
      <span>{details.price} $</span>
    </div>
  );
};

export default ShopDetail;
