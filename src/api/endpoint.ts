interface IEndpionts {
    get_all_product : string,
    get_single_product : string
}


const endpoints : IEndpionts = {
    get_all_product: "/products",
    get_single_product: "products/id"
};

const $api =(key: keyof IEndpionts) => {
    return endpoints[key]
};

export default $api