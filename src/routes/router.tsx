import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx"
import {CarsComponent} from "../components/CarsComponent.tsx";
import {CreateCarComponent} from "../components/CreateCarComponent/CreateCarComponent.tsx";

export const router = createBrowserRouter([
    {
        path: "/",element:<App/>,children:[
            {path:'cars',element:<CarsComponent/>},
            {path:'create',element:<CreateCarComponent/>}
        ]
    }
])