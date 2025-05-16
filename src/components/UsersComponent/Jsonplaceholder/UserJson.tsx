import {FC} from "react";
import {IUser} from "../../../models/JsonModels/UserModelJ.ts";

type UserProps = {
    user:IUser;
}


export const UserJson:FC<UserProps> = ({user}) => {
    return (
        <div>
           <h1>{user.id} {user.name}</h1>
            <h2>USERNAME: {user.username}</h2>
            <h3>EMAIL: {user.email}</h3>
            <p>address:{user.address.city},{user.address.street}, {user.address.zipcode}</p>
            <p>website: {user.website}</p>

        </div>
    )
}