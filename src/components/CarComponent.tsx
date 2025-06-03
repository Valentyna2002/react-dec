import {ICar} from "../models/CarModel.ts";
import {FC} from "react";
type CarProps={
    car:ICar
}
export const CarComponent:FC<CarProps> = ({car}) => {

    return (
        <div>
            <h1>{car.id}______{ car.brand}</h1>
            <h3>YEAR: {car.year}  <br/>  PRICE:{car.price}$</h3>
        </div>
    )
}