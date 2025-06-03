import {useForm} from "react-hook-form";
import {ICar} from "../../models/CarModel.ts";
// import {addCar} from "../../servise/api.service.tsx";
import {carValidator} from "../../servise/validator/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";


export const CreateCarComponent = () => {
    const{register,handleSubmit,formState:{errors},reset}=useForm<ICar>({mode:'all',resolver:joiResolver(carValidator)})

    const createHendler=(data:ICar)=>{
        // addCar(data);
        console.log(data)
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(createHendler)}>
                <div>
                    <label>Name:</label>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <label>Year</label>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>SAVE CAR</button>

            </form>
        </div>
    )
}