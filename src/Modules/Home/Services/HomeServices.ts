import * as Homeprovider from "../Provider/HomeProvider"

export class HomeService {
    static async productList(){
        return await Homeprovider.getAllProducts().then((res)=> {
            console.log("Backend cavabı:", res.data);
         return res.data.map((item)=>({
                ...item,
                productImage: import.meta.env.VITE_IMAGE_URL + "/"+ item.productImage
            }))
            
        })
    }
}

