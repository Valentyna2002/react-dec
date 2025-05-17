import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICartDummy} from "../../models/DummyModels/CartModel";
import {CartDummy} from "./CartDummy.tsx";
import {loadCartsDummyJson} from "../../servise/api.servise.dummyjson.tsx";

export const CartsDummy = () => {
   const {id}= useParams()

    const [carts, setCarts] = useState<ICartDummy[]>([])
    useEffect(() => {
        if (id) {
            loadCartsDummyJson(id)
                .then(carts => {
                    setCarts(carts);
                });
        }
    }, [id]);
    return (
        <div>
            <h2>Кошики користувача {id}</h2>
            {carts.length === 0 ? (
                <p>Немає кошиків</p>
            ) : (
                carts.map(cart => <CartDummy cart={cart} key={cart.id} />)
            )}

        </div>
    )
}