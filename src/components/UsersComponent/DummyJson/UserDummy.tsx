import {IUsersDummy} from "../../../models/DummyModels/UserModel.ts";
import {FC} from "react";

type UserProps={
    user:IUsersDummy
}



export const UserDummy:FC<UserProps> = ({user}) => {
    return (
        <div>
            <h1>{user.id}- {user.firstName} {user.lastName} {user.maidenName}</h1>
            <h2>USERNAME: {user.username} AGE:{user.age} GENDER:{user.gender}</h2>
            <h3>email:{user.email}</h3>
            <p>address:{user.address.country},{user.address.city}, {user.address.postalCode}</p>
            <img src={user.image} alt="img"/>
            <hr/>
        </div>
    )
}