import $axios from "../../../api/axiosInterceptor";
import $api from "../../../api/endpoint";
import type { IProducts } from "../Models/ShopModels";


export const getAllProducts = async ()=>{
    return $axios.get<IProducts[]>($api("get_all_product"))
}
export const getProductDetails = async (id: string) => {
  return $axios.get<IProducts>($api("get_single_product") + `/${id}`);
};