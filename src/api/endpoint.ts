interface IEndpionts {
  get_all_products: string;
  get_single_product: string;
}

const endpoints: IEndpionts = {
  get_all_products: "/products",
  get_single_product: "/products",
};

const $api = (key: keyof IEndpionts) => {
  return endpoints[key];
};

export default $api;
