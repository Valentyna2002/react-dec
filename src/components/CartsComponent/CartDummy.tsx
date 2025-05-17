import {ICartDummy} from "../../models/DummyModels/CartModel.ts";
import {FC} from "react";

type CartProps = {
cart:ICartDummy
}

export const CartDummy:FC<CartProps> = ({cart}) => {

    return (
        <div>
            <h1>{cart.id}, USER ID:{cart.userId}</h1>
            {
                cart.products.map(
                    product => (
                        <p key={product.id}>
                            <h2>{product.title}</h2>
                            <h3>PRICE: {product.price}__DISCOUNT:{product.discountPercentage}</h3>
                            <img src={product.thumbnail} alt={product.title} style={{ width: "80px", height: "80px" }}/>
                        </p>
                    )
                )
            }

        </div>
    )
}