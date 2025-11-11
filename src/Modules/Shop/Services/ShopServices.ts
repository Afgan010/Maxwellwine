import * as Shopprovider from "../Provider/ShopProvider";

export class ShopService {
  static async productList() {
    return await Shopprovider.getAllProducts().then((res) => {
      console.log("Backend cavabı:", res.data);
      return res.data.map((item) => ({
        ...item,
        productImage: import.meta.env.VITE_IMAGE_URL + "/" + item.productImage,
      }));
    });
  }

  static async shopDetails(id: string) {
    return await Shopprovider.getProductDetails(id).then((res) => {
      return {
        ...res.data,
        productImage:
          import.meta.env.VITE_IMAGE_URL + "/" + res.data.productImage,
      };
    });
  }
}
