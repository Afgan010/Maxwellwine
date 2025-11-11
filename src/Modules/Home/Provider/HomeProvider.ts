import $axios from "../../../api/axiosInterceptor";
import $api from "../../../api/endpoint";
import type { IProducts } from "../Models/HomeModels";

export const getAllProducts = async () => {
  return $axios.get<IProducts[]>($api("get_all_products"));
};
