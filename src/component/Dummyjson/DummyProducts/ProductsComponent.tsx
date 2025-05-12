import {useState,useEffect} from "react";
import {Products} from "../../../model/ProductModel.ts";
import {loadProductEndpoint} from "../../../servise/api.servise.dummyjsom.ts";
import {ProductComponent} from "./ProductComponent.tsx";

export const ProductsComponent = () => {

    const [product, setProduct] = useState<Products[]>([])
    useEffect(() => {
        loadProductEndpoint().then(value => setProduct(value))
    },[])
    return (
        <div>
            {
                product.map(product=><ProductComponent product={product} key={product.id}/>)
            }
        </div>
    )
}