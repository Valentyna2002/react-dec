import {IUsersDummy} from "../../../models/DummyModels/UserModel.ts";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type UserProps={
    user:IUsersDummy
}



export const UserDummy:FC<UserProps> = ({user}) => {
    const navigations = useNavigate()

    const onButtonClick = ()=>{
        navigations('/users/dummyjson/' + user.id + '/carts')
    }

    return (
        <div>
            <h1>{user.id}- {user.firstName} {user.lastName} {user.maidenName}</h1>
            <h2>USERNAME: {user.username} AGE:{user.age} GENDER:{user.gender}</h2>
            <h3>email:{user.email}</h3>
            <p>address:{user.address.country},{user.address.city}, {user.address.postalCode}</p>
            <img src={user.image} alt="img"/>
            <button onClick={onButtonClick}>SHOW PRODUCTS</button>
            <hr/>
        </div>
    )
}