import {Products} from "../../../model/ProductModel.ts";
import {FC} from "react";

type ProductProps = {
    product:Products
}

export const ProductComponent:FC<ProductProps> = ({product}) => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl bg-blue-950 text-amber-50'>{product.id}-{product.title}</h1>
            <p className='bg-blue-200'>{product.description}</p>
            <h3 className='bg-blue-200 text-2xl'>Prise{product.price}$---Category{product.category}</h3>
            <div className='flex flex-row justify-center bg-blue-500'>
            {product.images.map((img,index)=>(
            <img key={index} src={img} alt={product.title} className='w-80 h-80'/>))}
            </div>
            <hr/>

        </div>
    )
}