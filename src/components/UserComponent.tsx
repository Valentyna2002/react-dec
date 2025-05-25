import {IUser} from "../model/UserModel.ts";
import {FC} from "react";

type UserProps = {
    user:IUser
}
export const UserComponent:FC<UserProps> = ({user}) => {


    return (
        <div>
            <h1>{user.id}- {user.firstName} {user.lastName} {user.maidenName}</h1>
            <p>USERNAME: {user.username} AGE:{user.age} GENDER:{user.gender}</p>

            <hr/>
        </div>
    )
}