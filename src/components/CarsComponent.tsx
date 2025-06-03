import {useEffect, useState} from "react";
import {ICar} from "../models/CarModel.ts";
import {getCars} from "../servise/api.service.tsx";
import {CarComponent} from "./CarComponent.tsx";

export const CarsComponent = () => {

    const [car, setCar] = useState<ICar[]>([])
    useEffect(()=>{
       getCars().then(value => setCar(value))
    },[])
    return (
        <div>
            {
                car.map(car=> <CarComponent car={car} key={car.id}/>)
            }
        </div>
    )
}